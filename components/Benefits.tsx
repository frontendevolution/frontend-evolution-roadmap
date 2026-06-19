"use client";

import { motion } from "framer-motion";

type Benefit = {
  emoji: string;
  text: string;
};

const benefits: Benefit[] = [
  { emoji: "🚀", text: "Stay ahead of AI changes" },
  { emoji: "⚡", text: "Learn production-ready frontend skills" },
  { emoji: "📩", text: "One practical email every week. No spam." },
];

export function Benefits() {
  return (
    <ul className="mx-auto mt-10 grid w-full max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
      {benefits.map((benefit, index) => (
        <motion.li
          key={benefit.text}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.15 + index * 0.08,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="flex flex-col items-center gap-2 rounded-2xl border border-zinc-200/80 bg-white/60 px-5 py-5 text-center shadow-sm backdrop-blur-sm transition-colors dark:border-zinc-800 dark:bg-zinc-900/40"
        >
          <span className="text-2xl" aria-hidden="true">
            {benefit.emoji}
          </span>
          <span className="text-sm font-medium leading-snug text-zinc-700 dark:text-zinc-300">
            {benefit.text}
          </span>
        </motion.li>
      ))}
    </ul>
  );
}
