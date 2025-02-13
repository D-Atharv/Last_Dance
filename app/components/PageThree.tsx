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
                Going Forward In Life
              </motion.h2>

              {/* Content Section */}
              <motion.div
                className="w-full bg-white border-2 border-[#8B5E3C] rounded-lg shadow-md p-4 "
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
                    "So waiting till Thursday and after not getting either no or yes answer from you, I am taking this as a No from you and I am dropping this tale here.",

                    " I do not hold it against you. And I will not lie, it stings a little. Not because I expected a yes, but because I cared enough to ask.",

                    " But I am not someone who holds onto something that is not meant to be. So, I am letting this rope go which I was holding. Not with anger, not with regret—just with the quiet understanding that it is time.",

                    " I hope life treats you well. I really do. And if our paths ever cross again, I hope it is in a way that makes sense for both of us.",
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
                  A small beautiful chapter. Now, it is time to end. Click once
                  more to end this.
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
