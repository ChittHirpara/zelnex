import { NextResponse } from "next/server";
import { ContactFormSchema } from "@/lib/validations/contact";
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
          error: "Rate limit exceeded. Please wait a few minutes before submitting another inquiry.",
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

    // Silent Honeypot Check: If website_hp is filled, bot detected
    if (body.website_hp && body.website_hp.trim().length > 0) {
      // Return synthetic success to confuse spam bot
      return NextResponse.json(
        {
          success: true,
          ticketId: `ZNX-${Math.floor(100000 + Math.random() * 900000)}`,
          message: "Inquiry received.",
        },
        { status: 200, headers }
      );
    }

    // Zod Validation
    const validationResult = ContactFormSchema.safeParse(body);
    if (!validationResult.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of validationResult.error.issues) {
        const path = issue.path[0];
        if (typeof path === "string" && !fieldErrors[path]) {
          fieldErrors[path] = issue.message;
        }
      }

      return NextResponse.json(
        {
          success: false,
          error: "Validation failed. Please verify the highlighted fields.",
          fieldErrors,
        },
        { status: 400, headers }
      );
    }

    const data = validationResult.data;
    const ticketId = `ZNX-INQ-${Date.now().toString().slice(-6)}-${Math.floor(
      1000 + Math.random() * 9000
    )}`;
    const timestamp = new Date().toISOString();

    // Dispatch to export desk
    await dispatchNotification({
      type: "contact_inquiry",
      ticketId,
      timestamp,
      sender: {
        name: data.name,
        email: data.email,
        phone: data.phoneNumber || undefined,
      },
      details: {
        subject: data.subject,
        message: data.message,
        clientIp,
      },
    });

    return NextResponse.json(
      {
        success: true,
        ticketId,
        message: "Your inquiry has been successfully transmitted to the Zelnex Export Desk.",
        slaHours: 4,
      },
      { status: 200, headers }
    );
  } catch (error: unknown) {
    console.error("[API /api/contact Error]:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Internal server error occurred while processing your request. Please email info@zelnexpharmaceuticals.com directly.",
      },
      { status: 500 }
    );
  }
}
