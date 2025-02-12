"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100  p-6 relative">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-24 text-6xl"
      >
        💔
      </motion.div>

      <motion.h2
        className="text-5xl sm:text-6xl font-extrabold text-gray-900 text-center italic"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        Lost, but not forgotten.
      </motion.h2>

      <motion.p
        className="mt-5 text-xl sm:text-2xl text-gray-700 text-center max-w-3xl italic"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
      >
        Some pages were never meant to be found, just like some moments were
        never meant to last. But even the lost deserve to be remembered.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
      >
        <Link href="/">
          <motion.button
            className="mt-8 px-8 py-4 text-lg sm:text-2xl font-semibold text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            animate={{ opacity: [0.8, 1, 0.8], scale: [1, 1.05, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            Return Home
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}
