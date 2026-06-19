/**
 * Newsletter subscription service — CLIENT SIDE.
 *
 * This is the only function any component calls. It always POSTs to
 * your own /api/subscribe route, which holds the actual provider logic
 * and API keys server-side (see app/api/subscribe/route.ts). The UI
 * never knows or cares which provider is behind that route, so you can
 * swap providers without touching any component.
 */

export type SubscribeResult =
  | { success: true }
  | { success: false; error: string };

export async function subscribeToNewsletter(
  email: string
): Promise<SubscribeResult> {
  try {
    const response = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      const data = await response.json().catch(() => null);
      return {
        success: false,
        error: data?.error ?? "Something went wrong. Please try again.",
      };
    }

    return { success: true };
  } catch {
    return {
      success: false,
      error: "Network error. Check your connection and try again.",
    };
  }
}

/**
 * Validates an email address format.
 * Kept here (not in the UI) so validation rules stay consistent
 * wherever this function is called from.
 */
export function isValidEmail(email: string): boolean {
  const trimmed = email.trim();
  if (trimmed.length === 0) return false;
  // Standard, pragmatic email regex — not RFC 5322 exhaustive,
  // but matches what every real-world signup form actually needs.
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(trimmed);
}
