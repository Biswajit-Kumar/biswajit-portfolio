"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ProfilePhoto() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.03, y: -4 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="group relative shrink-0 cursor-default"
    >
      <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-accent/40 via-accent-2/25 to-transparent blur-2xl transition-opacity duration-300 group-hover:opacity-100 opacity-70" />

      <div className="relative aspect-[3/4] w-56 overflow-hidden rounded-[2rem] border border-border bg-surface-2 transition-colors duration-300 group-hover:border-accent/30 sm:w-72">
        <Image
          src="/profile.jpg"
          alt="Biswajit Dash"
          fill
          sizes="(min-width: 640px) 288px, 224px"
          className="object-contain"
          priority
        />

        <svg className="pointer-events-none absolute inset-0 h-full w-full" fill="none">
          <motion.rect
            x="1"
            y="1"
            width="calc(100% - 2px)"
            height="calc(100% - 2px)"
            rx="30"
            stroke="var(--accent)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 0 }}
            whileHover={{ pathLength: 1 }}
            transition={{ duration: 1.1, ease: "easeInOut" }}
          />
        </svg>
      </div>
    </motion.div>
  );
}
