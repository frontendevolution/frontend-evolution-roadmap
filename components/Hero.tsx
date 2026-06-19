"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <div className="relative">
      {/* Ambient gradient blur — sits behind everything, drifts slowly */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[480px] w-[680px] -translate-x-1/2"
      >
        <motion.div
          className="h-full w-full rounded-full bg-gradient-to-br from-blue-400/30 via-indigo-300/20 to-purple-300/20 blur-3xl dark:from-blue-500/20 dark:via-indigo-500/10 dark:to-purple-500/10"
          animate={{
            scale: [1, 1.08, 1],
            x: [0, 24, 0],
            y: [0, -16, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto max-w-2xl text-center"
      >
        <h1 className="text-balance text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
          Master Frontend Development in the AI Era
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-balance text-base leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-lg">
          Join thousands of developers receiving one practical frontend tip
          every week — covering React, Next.js, AI-assisted development,
          performance, architecture, and career growth.
        </p>
      </motion.div>
    </div>
  );
}
