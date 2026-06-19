import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { isValidEmail } from "@/lib/newsletter";

/**
 * POST /api/subscribe
 *
 * Receives an email, validates it server-side, and adds it to your
 * Resend audience. This is the ONE place that holds the provider API
 * key — it lives in an environment variable, never in client code.
 *
 * REQUIRED SETUP:
 * 1. Create a free account at https://resend.com
 * 2. Create an API key at https://resend.com/api-keys
 * 3. Create an Audience at https://resend.com/audiences (this is your
 *    subscriber list — Resend calls it an "audience")
 * 4. Add both values to .env.local:
 *      RESEND_API_KEY=re_xxxxxxxxxxxx
 *      RESEND_AUDIENCE_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
 *
 * Want a different provider instead? See the "ALTERNATIVE PROVIDERS"
 * block at the bottom of this file — swap the body of the try block
 * with the one for ConvertKit, Beehiiv, Mailchimp, or Supabase.
 */

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  let email: string | undefined;

  try {
    const body = await request.json();
    email = body?.email;
  } catch {
    return NextResponse.json(
      { error: "Invalid request format." },
      { status: 400 }
    );
  }

  if (!email || !isValidEmail(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  if (!process.env.RESEND_API_KEY || !process.env.RESEND_AUDIENCE_ID) {
    console.error(
      "[newsletter] Missing RESEND_API_KEY or RESEND_AUDIENCE_ID in .env.local"
    );
    return NextResponse.json(
      { error: "Newsletter signup isn't configured yet. Please try again later." },
      { status: 500 }
    );
  }

  try {
    const { error } = await resend.contacts.create({
      email,
      audienceId: process.env.RESEND_AUDIENCE_ID,
      unsubscribed: false,
    });

    if (error) {
      // Resend returns a 409-style error if the contact already exists.
      // Treat that as a success — they're already on the list.
      const alreadyExists =
        error.message?.toLowerCase().includes("already exists") ?? false;

      if (!alreadyExists) {
        console.error("[newsletter] Resend error:", error);
        return NextResponse.json(
          { error: "We couldn't subscribe you right now. Please try again." },
          { status: 502 }
        );
      }
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[newsletter] subscribe failed:", err);
    return NextResponse.json(
      { error: "We couldn't subscribe you right now. Please try again." },
      { status: 502 }
    );
  }
}

// ───────────────────────────────────────────────────────────────────
// ALTERNATIVE PROVIDERS
// Replace the contents of the try block above with one of these, and
// remove the `import { Resend }` line and `const resend = ...` line
// at the top if you're not using Resend.
// ───────────────────────────────────────────────────────────────────

// ConvertKit ──────────────────────────────────────────────────────
// const res = await fetch(
//   `https://api.convertkit.com/v3/forms/${process.env.CONVERTKIT_FORM_ID}/subscribe`,
//   {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       api_key: process.env.CONVERTKIT_API_KEY,
//       email,
//     }),
//   }
// );
// if (!res.ok) throw new Error("ConvertKit request failed");

// Beehiiv ─────────────────────────────────────────────────────────
// const res = await fetch(
//   `https://api.beehiiv.com/v2/publications/${process.env.BEEHIIV_PUBLICATION_ID}/subscriptions`,
//   {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${process.env.BEEHIIV_API_KEY}`,
//     },
//     body: JSON.stringify({ email }),
//   }
// );
// if (!res.ok) throw new Error("Beehiiv request failed");

// Mailchimp ───────────────────────────────────────────────────────
// const res = await fetch(
//   `https://${process.env.MAILCHIMP_DC}.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_LIST_ID}/members`,
//   {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${process.env.MAILCHIMP_API_KEY}`,
//     },
//     body: JSON.stringify({ email_address: email, status: "subscribed" }),
//   }
// );
// // Mailchimp returns 400 if the email is already a list member — treat as success.
// if (!res.ok && res.status !== 400) throw new Error("Mailchimp request failed");

// Supabase ────────────────────────────────────────────────────────
// const { createClient } = await import("@supabase/supabase-js");
// const supabase = createClient(
//   process.env.SUPABASE_URL!,
//   process.env.SUPABASE_SERVICE_ROLE_KEY!
// );
// const { error } = await supabase
//   .from("newsletter_subscribers")
//   .insert({ email });
// if (error) throw error;
