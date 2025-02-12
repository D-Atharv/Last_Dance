"use client";

import React, { useContext, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import styles from "../landing/styles/Landing.module.css";
import { LandingContext } from "../context/Context";
import { animateFlipSequence } from "../../utils/AnimateFlipSequence";
import { typewriterVariants } from "../../utils/TypeWriterVariants";
import Image from "next/image";
import FlowerGarden from "@/public/landing/FlowerGarden.png";

export function PageThree() {
  const {
    page1Open,
    page3Open,
    setPage3Open,
    zIndexPriority,
    setZIndexPriority,
  } = useContext(LandingContext)!;

  const bookmarkControls = useAnimation();
  const [finalMessageVisible, setFinalMessageVisible] = useState(false);

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
        className={`${styles.page} ${page3Open ? styles.flipped : ""} ${
          styles.flexContainer
        } `}
        onClick={() => {
          if (!finalMessageVisible) {
            setFinalMessageVisible(true);
          } else {
            handleFlipPage(setPage3Open, "page3");
          }
        }}
        style={{
          zIndex: zIndexPriority === "page3" ? 13 : page3Open ? 11 : 1,
          border: "2px solid #8B5E3C",
          borderRadius: "10px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
          cursor: "pointer", // Makes it feel interactive
        }}
      >
        {/* Front Side of the Page */}
        <div
          className="w-full h-full flex flex-col justify-start items-center"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="h-full w-full px-4 sm:px-6 md:px-8 py-6 md:py-10 overflow-auto">
            <motion.div
              initial="hidden"
              animate={page1Open ? "visible" : "hidden"}
              variants={typewriterVariants}
              className="text-[#4a3c2f] text-sm sm:text-base md:text-lg font-serif rounded-lg text-start h-full w-full flex flex-col items-start"
            >
              <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center font-serif w-full"
                variants={typewriterVariants}
                custom={0}
              >
                I Get It Now
              </motion.h2>

              <div className="space-y-8">
                <motion.div
                  variants={typewriterVariants}
                  custom={1}
                  className="text-base sm:text-lg md:text-xl text-gray-700"
                >
                  <p>
                    I waited because I thought some things were worth waiting
                    for. Because I believed, maybe, you just needed time to find
                    the right words. But I understand now—sometimes, silence
                    says everything.
                  </p>
                  <p className="mt-4">
                    I don’t hold it against you. And I won’t lie, it stings a
                    little. Not because I expected a yes, but because I cared
                    enough to ask.
                  </p>
                  <p className="mt-4">
                    But I don’t want to be someone who holds onto something that
                    isn’t meant to be held. So, I’m letting this go. Not in
                    frustration, not in sadness—just because it’s time.
                  </p>
                  <p className="mt-4">
                    I hope life treats you well. I really do. And if our paths
                    ever cross again, I hope it’s in a way that makes sense for
                    both of us.
                  </p>
                </motion.div>
              </div>

              {/* ✅ Click-to-Reveal Prompt */}
              {!finalMessageVisible && (
                <motion.p
                  className="mt-8 text-center text-gray-500 text-sm sm:text-base italic animate-pulse"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Tap one last time...
                </motion.p>
              )}

              {/* ✅ Hidden Final Message */}
              {finalMessageVisible && (
                <motion.div
                  className="mt-8 text-center text-gray-800 text-lg sm:text-xl font-semibold"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  You were a beautiful chapter in my story. Now, its time to
                  turn the page.
                </motion.div>
              )}

              {/* ✅ Subtle Flower Garden Image Animation */}
              <motion.div
                className="absolute bottom-0 left-9 transform -translate-x-1/2 w-[90%] flex justify-center"
                animate={{
                  opacity: [0.8, 1, 0.8],
                  y: [0, -3, 0],
                  scale: [1, 1.02, 1],
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
                  height={200}
                  className="rounded-b-lg"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Back Side of the Page */}
        <div className={`${styles.backPage}`}></div>
      </div>
    </>
  );
}
