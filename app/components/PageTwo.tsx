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
            What I felt and desired
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
                "After hearing your story and understanding your hesitation, I finally saw things from your perspective. And about that message I sent—I am sorry for that.",

                "But the truth is, I could not let you go. And honestly? I did not want to. (Funny writing this now, lol.) That's why I had to come back to you.",

                "The way you say 'theek hai na'—I don't know why, but it stuck with me. The way you looked at people, at the world—it was different. You saw things with good eyes.",

                "Even when you had your own shit going on, you still tried to hear me, to understand me. And that meant something.",

                "But you see, I never came to you just to 'be a couple.' That was never what I was looking for.",

                "I'm not someone who 'puts in effort' just to establish a connection. I do things because they feel right, because they make me happy.",

                "So when I called you, texted you, or showed up as fast as I could—it wasn't about following some relationship rulebook. It wasn't about trying to 'win you over' or doing what couples are supposed to do. I just wanted to be there. And I wanted to be there **more.**(Too soon to be saying this lol)",

                "I wanted you to share your desires, your ambitions, your dreams, your deep secrets, your vulnerabilities. I wanted you to **annoy me to death** with your never-ending talks, your endless book recommendations, late-night anime discussions, and all the places we could have explored. (Funny how none of that's happening now, hehe.) But I wanted it because I genuinely wanted to listen. To hear you. To understand you. And yeah, I secretly hoped you'd slowly start asking me about my life too.",

                "I knew I was getting your dry texts. I knew you weren't ready for anything. But deep down, I felt like you were holding yourself back—and I wanted to change that. I wanted you to feel free, to step outside your comfort zone. (Maybe I watch too much cinema, lol.)",

                "Maybe I was looking for too much depth. Maybe my thinking is unrealistic.",

                "But it really stings knowing that you're just **10 minutes away from me**, yet I wasn't able to see or hear you. Now it's been over **72 hours now**, and only *'theek hai na'* keeps echoing in my head.",

                "So this is my way of saying things. Maybe I failed at expressing myself before, or maybe my words never really reached you. So yeah… this is my last way of reaching out. My last way of saying what I needed to say.",
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
