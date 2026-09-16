export interface DispatchPayload {
  type: "contact_inquiry" | "tender_rfq";
  ticketId: string;
  timestamp: string;
  sender: {
    name: string;
    email: string;
    phone?: string;
    company?: string;
    country?: string;
  };
  details: Record<string, unknown>;
}

/**
 * Dispatches an enterprise lead/RFQ to internal notification channels.
 * Supports webhooks (Slack/Teams/CRM), external email services, or structured audit logging.
 */
export async function dispatchNotification(payload: DispatchPayload): Promise<{
  success: boolean;
  channel: string;
  error?: string;
}> {
  const webhookUrl = process.env.DISPATCH_WEBHOOK_URL;
  const resendApiKey = process.env.RESEND_API_KEY;
  const exportDeskEmail = process.env.NOTIFICATION_EMAIL || "info@zelnexpharmaceuticals.com";

  // 1. Webhook dispatch if configured
  if (webhookUrl) {
    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: `[ZELNEX ${payload.type.toUpperCase()}] Ref: ${payload.ticketId} from ${payload.sender.name} (${payload.sender.email})`,
          ...payload,
        }),
      });
      if (res.ok) {
        return { success: true, channel: "webhook" };
      }
    } catch (err: unknown) {
      console.error("[Dispatch] Webhook notification failed:", err);
    }
  }

  // 2. Resend email dispatch if configured
  if (resendApiKey) {
    try {
      const emailSubject = `[${payload.ticketId}] New ${
        payload.type === "tender_rfq" ? "Tender RFQ" : "Export Inquiry"
      } from ${payload.sender.name}`;

      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Zelnex Export Portal <no-reply@zelnexpharma.com>",
          to: [exportDeskEmail],
          reply_to: payload.sender.email,
          subject: emailSubject,
          text: JSON.stringify(payload, null, 2),
        }),
      });

      if (res.ok) {
        return { success: true, channel: "email_resend" };
      }
    } catch (err: unknown) {
      console.error("[Dispatch] Resend notification failed:", err);
    }
  }

  // 3. Fallback: Structured corporate audit log in server logs
  console.info(
    `[ZELNEX AUDIT LOG] Ticket: ${payload.ticketId} | Type: ${payload.type} | Sender: ${payload.sender.email} | Target: ${exportDeskEmail}`
  );

  return { success: true, channel: "server_audit_log" };
}
