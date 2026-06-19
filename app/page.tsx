"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { NewsletterForm } from "@/components/NewsletterForm";
import { TrustLine } from "@/components/TrustLine";
import { Footer } from "@/components/Footer";
import { useSubscriptionStatus } from "@/hooks/useSubscriptionStatus";

export default function HomePage() {
  const router = useRouter();
  const { isSubscribed } = useSubscriptionStatus();

  // Returning, already-subscribed visitors skip straight to the roadmap.
  // `isSubscribed` is `null` during the initial check, so this only
  // fires once we actually know the answer.
  useEffect(() => {
    if (isSubscribed === true) {
      router.replace("/roadmap");
    }
  }, [isSubscribed, router]);

  // Avoid flashing the signup form for a frame before the redirect kicks in.
  if (isSubscribed === null || isSubscribed === true) {
    return null;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 py-20">
      <div className="w-full">
        <Hero />
        <Benefits />
        <NewsletterForm />
        <TrustLine />
      </div>
      <Footer />
    </main>
  );
}
