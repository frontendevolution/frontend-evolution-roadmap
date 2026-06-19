"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "fe_roadmap_subscribed";

/**
 * Tracks whether this browser has already subscribed, using localStorage.
 * Returns `null` while the check is in flight (so the UI can avoid a
 * flash of the form before redirecting), then `true` or `false`.
 */
export function useSubscriptionStatus() {
  const [isSubscribed, setIsSubscribed] = useState<boolean | null>(null);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      setIsSubscribed(stored === "true");
    } catch {
      // localStorage unavailable (e.g. privacy mode) — treat as not subscribed
      setIsSubscribed(false);
    }
  }, []);

  const markSubscribed = () => {
    try {
      window.localStorage.setItem(STORAGE_KEY, "true");
    } catch {
      // ignore — non-critical if this fails
    }
    setIsSubscribed(true);
  };

  return { isSubscribed, markSubscribed };
}
