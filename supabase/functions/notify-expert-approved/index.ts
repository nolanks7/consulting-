import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY")!;
const FROM_EMAIL = Deno.env.get("FROM_EMAIL") ?? "no-reply@yourdomain.com";
const APP_NAME = Deno.env.get("APP_NAME") ?? "CreatorExperts";

serve(async (req) => {
  // Supabase database webhooks send a POST with the record payload
  const payload = await req.json();

  // Only act on updates where status changed to 'approved'
  const newRecord = payload.record;
  const oldRecord = payload.old_record;

  if (
    payload.type !== "UPDATE" ||
    newRecord?.status !== "approved" ||
    oldRecord?.status === "approved"
  ) {
    return new Response("ignored", { status: 200 });
  }

  const { full_name, email } = newRecord;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: `${APP_NAME} <${FROM_EMAIL}>`,
      to: [email],
      subject: `You're approved as a ${APP_NAME} Expert! 🎉`,
      html: `
        <div style="font-family:sans-serif;max-width:560px;margin:auto;padding:32px">
          <h1 style="font-size:28px;margin-bottom:8px">Welcome to ${APP_NAME}, ${full_name}! 🌟</h1>
          <p style="font-size:16px;color:#444;line-height:1.6">
            Great news — your application to become an expert has been <strong>approved</strong>.
          </p>
          <p style="font-size:16px;color:#444;line-height:1.6">
            You can now log in to set up your profile, configure your availability, and start accepting bookings.
          </p>
          <a href="https://yourdomain.com" style="display:inline-block;margin-top:24px;padding:14px 28px;background:#6c47ff;color:#fff;border-radius:8px;text-decoration:none;font-weight:600">
            Set Up Your Expert Profile →
          </a>
          <p style="margin-top:32px;font-size:13px;color:#999">
            Questions? Reply to this email and we'll get back to you.
          </p>
        </div>
      `,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error("Resend error:", err);
    return new Response("email failed", { status: 500 });
  }

  return new Response("ok", { status: 200 });
});
