"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../landing/styles/Landing.module.css";
import HoldingHands from "@/public/landing/HoldingHands.png";

interface BackCoverProps {
  page3Open: boolean;
}
export function BackCover({ page3Open }: BackCoverProps) {
  return (
    <>
      <div className={`${styles.backCover} z-0`}>
        <motion.div
          initial="hidden"
          animate={page3Open ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.9 } },
          }}
          className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b px-4 py-6 nest-hub:py-2"
          style={{
            backfaceVisibility: "hidden",
          }}
        >
          {/* Resized image */}
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <Image
              src={HoldingHands}
              alt="Holding Hands"
              layout="fill"
              objectFit="contain"
            />
          </div>

          {/* Bye Bye Message with Elegant Fade & Lift Animation */}
          <motion.p
            className="mt-6 text-2xl sm:text-3xl font-extrabold text-gray-900 text-center tracking-wide"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Bye Bye{" "}
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: 2, duration: 0.6 }}
            >
              👋
            </motion.span>
          </motion.p>

          {/* P.S. Message with Subtle Hover Animation */}
          <motion.p
            className="mt-2 text-sm sm:text-lg text-gray-600 italic relative cursor-pointer transition-all duration-300"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.05, color: "#4A3C2F" }}
          >
            P.S.{" "}
            <span className="underline">
              My music taste is better 
            </span>
          </motion.p>
        </motion.div>
      </div>
    </>
  );
}
