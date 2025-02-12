"use client";

import React, { useContext } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import styles from "../landing/styles/Landing.module.css";
import FlowerGarden from "@/public/landing/FlowerGarden.png";
import { LandingContext } from "../context/Context";
import { animateFlipSequence } from "../../utils/AnimateFlipSequence";

export function PageOne() {
  const { page1Open, setPage1Open, zIndexPriority, setZIndexPriority } =
    useContext(LandingContext)!;

  const bookmarkControls = useAnimation();

  const handleFlipPage = (
    pageSetter: React.Dispatch<React.SetStateAction<boolean>>,
    pageId: string
  ) => {
    animateFlipSequence(bookmarkControls, () => {
      pageSetter((prev) => !prev);
      setZIndexPriority(pageId);
    });
  };

  return (
    <>
      <div
        className={`${styles.page} ${page1Open ? styles.flipped : ""} ${
          styles.flexContainer
        } `}
        onClick={() => handleFlipPage(setPage1Open, "page1")}
        style={{
          zIndex: zIndexPriority === "page1" ? 15 : page1Open ? 11 : 3,
          border: "2px solid #8B5E3C",
          borderRadius: "10px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full h-full flex flex-col items-center justify-start"
          style={{
            backfaceVisibility: "hidden",
            backgroundSize: "cover",
            backgroundClip: "border-box",
            backgroundRepeat: "no-repeat",
          }}
        >
          <motion.h2
            className="text-xl xl:text-3xl font-bold text-[#4a3c2f] font-serif xl:mt-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            I See You. I Understand You.
          </motion.h2>

          {/* Content Section */}
          <motion.div
            className="w-4/5 bg-white border-2 border-[#8B5E3C] rounded-lg shadow-md p-4 mt-4"
            style={{
              maxHeight: "50%",
              overflowY: "auto",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <ul className="list-none text-[#4a3c2f] text-md xl:text-lg font-serif space-y-4">
              {[
                "I know what it feels like to be unsure.",
                "To want something but to second-guess it at the same time.",
                "To have moments where your heart says 'go' but your mind says 'wait.'",
                "I’ve been there too.",
                "But maybe, just maybe, not everything has to be figured out before you take a step.",
                "Not every decision has to be mapped out before it begins.",
                "Maybe some things are worth figuring out along the way.",
                "I'm not here to promise perfection, but I can promise presence.",
                "Through the good, the messy, the confusing—this can be different.",
                "No expectations, no rush. Just a chance to see where this could go.",
              ].map((text, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.2 }}
                  className={`${
                    index % 3 === 0
                      ? "italic font-light"
                      : "font-medium tracking-wide"
                  }`}
                >
                  {text}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Button to Next Page */}
          <motion.button
            className="mt-6 px-8 py-3 bg-[#8B5E3C] text-white rounded-full shadow-lg hover:bg-[#6B4F35] transition-all duration-300 text-lg tracking-wide hover:cursor-pointer"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            Take One Step →
          </motion.button>

          {/* ✅ Fixed Flower Garden Image Positioning */}
          <motion.div
            className="absolute bottom-0 left-9 transform -translate-x-1/2 w-[90%] flex justify-center"
            animate={{
              opacity: [0.8, 1, 0.8],
              y: [0, -3, 0],
              scale: [1, 1.02, 1], // Slight breathing effect
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src={FlowerGarden}
              alt="flowergarden"
              width={500}
              height={200} // Adjust height to fit within the page
              className=" rounded-b-lg ]" // Adds a softer transition to background
            />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
