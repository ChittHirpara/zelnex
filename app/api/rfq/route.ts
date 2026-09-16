import { NextResponse } from "next/server";
import { RfqRequestSchema } from "@/lib/validations/contact";
import { checkRateLimit, getClientIp } from "@/lib/rateLimiter";
import { dispatchNotification } from "@/lib/dispatch";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const clientIp = getClientIp(req);
    const rateCheck = checkRateLimit(clientIp, 5, 10 * 60 * 1000);

    const headers = {
      "X-RateLimit-Limit": rateCheck.limit.toString(),
      "X-RateLimit-Remaining": rateCheck.remaining.toString(),
    };

    if (!rateCheck.allowed) {
      return NextResponse.json(
        {
          success: false,
          error: "Rate limit exceeded. Please wait a few minutes before submitting another RFQ.",
          retryAfter: rateCheck.resetSeconds,
        },
        {
          status: 429,
          headers: {
            ...headers,
            "Retry-After": rateCheck.resetSeconds.toString(),
          },
        }
      );
    }

    const body = await req.json();

    // Silent Honeypot Check
    if (body.website_hp && body.website_hp.trim().length > 0) {
      return NextResponse.json(
        {
          success: true,
          ticketId: `ZNX-RFQ-${Math.floor(100000 + Math.random() * 900000)}`,
          message: "RFQ received.",
        },
        { status: 200, headers }
      );
    }

    // Zod Validation
    const validationResult = RfqRequestSchema.safeParse(body);
    if (!validationResult.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of validationResult.error.issues) {
        const path = issue.path.join(".");
        if (!fieldErrors[path]) {
          fieldErrors[path] = issue.message;
        }
      }

      return NextResponse.json(
        {
          success: false,
          error: "Validation failed. Please verify your company and formulation selections.",
          fieldErrors,
        },
        { status: 400, headers }
      );
    }

    const data = validationResult.data;
    const ticketId = `ZNX-RFQ-${Date.now().toString().slice(-6)}-${Math.floor(
      1000 + Math.random() * 9000
    )}`;
    const timestamp = new Date().toISOString();

    // Dispatch RFQ notification
    await dispatchNotification({
      type: "tender_rfq",
      ticketId,
      timestamp,
      sender: {
        name: data.name,
        email: data.email,
        phone: data.phone || undefined,
        company: data.company,
        country: data.country,
      },
      details: {
        deliveryTerm: data.deliveryTerm,
        dossierRequired: data.dossierRequired,
        targetMarket: data.targetMarket,
        additionalNotes: data.additionalNotes,
        itemCount: data.items.length,
        items: data.items,
        clientIp,
      },
    });

    return NextResponse.json(
      {
        success: true,
        ticketId,
        itemCount: data.items.length,
        message: `Tender RFQ for ${data.items.length} formulation(s) successfully registered with our Commercial Export Desk.`,
        slaHours: 4,
      },
      { status: 200, headers }
    );
  } catch (error: unknown) {
    console.error("[API /api/rfq Error]:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Internal server error while processing RFQ. Please contact info@zelnexpharmaceuticals.com.",
      },
      { status: 500 }
    );
  }
}
