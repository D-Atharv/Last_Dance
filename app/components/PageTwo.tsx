"use client";

import React, { useContext } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import styles from "../landing/styles/Landing.module.css";
import { LandingContext } from "../context/Context";
import { animateFlipSequence } from "../../utils/AnimateFlipSequence";
import FlowerGarden from "@/public/landing/FlowerGarden.png";

export function PageTwo() {
  const { page2Open, setPage2Open, zIndexPriority, setZIndexPriority } =
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
        className={`${styles.page} ${page2Open ? styles.flipped : ""} ${
          styles.flexContainer
        }`}
        onClick={() => handleFlipPage(setPage2Open, "page2")}
        style={{
          zIndex: zIndexPriority === "page2" ? 14 : page2Open ? 11 : 2,
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
          {/* Title */}
          <motion.h2
            className="text-xl xl:text-3xl font-bold text-[#4a3c2f] font-serif xl:mt-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            The Things I Love About You
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
                "The way your laugh starts off small but ends up filling the entire room.",
                "How you pause mid-sentence when you're thinking hard, like the world stops for you to figure it out.",
                "The way your hands move when you talk, like every word needs its own little dance.",
                "Your smile—sometimes mischievous, sometimes shy, but always warm.",
                "How you tell stories with so much passion that I forget where we even started.",
                "How even when you're annoyed, you still look ridiculously cute.",
                "The way you overthink things, and somehow, I love that too.",
                "How you set goals for yourself, big and small, and chase them without hesitation.",
                "How you light up when you talk about the things you love, even if it’s something as small as your favorite food.",
                "The way you challenge me, push me, and somehow manage to annoy me in the best way possible.",
                "The fact that no matter how much time passes, I always want to hear what’s on your mind.",
                "And most of all… I love that you are you.",
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

          {/* Next Step Button */}
          <motion.button
            className="mt-6 px-8 py-3 bg-[#8B5E3C] text-white rounded-full shadow-lg hover:bg-[#6B4F35] transition-all duration-300 text-lg tracking-wide hover:cursor-pointer"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            One More Page →
          </motion.button>

          {/* Final Page Teaser */}
          <motion.div
            className="text-md xl:text-lg text-[#4a3c2f] font-serif italic mt-3 opacity-80"
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Next page, we reach the final step...
          </motion.div>

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
              className="rounded-b-lg"
            />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
