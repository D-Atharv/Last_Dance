"use client";

import React, { useContext, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import styles from "../landing/styles/Landing.module.css";
import Rose from "@/public/landing/_Rose.png";
import { LandingContext } from "../context/Context";
import { animateFlipSequence } from "../../utils/AnimateFlipSequence";

export function FrontCover() {
  const {
    page1Open,
    page2Open,
    page3Open,
    setZIndexPriority,
    coverOpen,
    setCoverOpen,
  } = useContext(LandingContext)!;

  const bookmarkControls = useAnimation();
  const controls = useAnimation();
  const landingImageControls = useAnimation();
  const triangleControls = useAnimation();
  const titleControl = useAnimation();
  const typewriterControls = useAnimation();

  useEffect(() => {
    if (coverOpen) {
      typewriterControls.start("visible");
    }
    if (page1Open) {
      typewriterControls.start("visible");
    }
    if (page2Open) {
      typewriterControls.start("visible");
    }
  }, [coverOpen, typewriterControls, page1Open, page2Open]);

  useEffect(() => {
    const timer = setTimeout(() => {
      controls.start("visible");
      landingImageControls.start({
        opacity: 1,
        transition: { delay: 0, duration: 1.5 },
      });
      triangleControls.start({
        opacity: 1,
        transition: { delay: 0, duration: 1.5 },
      });
      titleControl.start({
        opacity: 1,
        transition: { delay: 0, duration: 1.5 },
      });
    }, 1);

    return () => clearTimeout(timer);
  }, [controls, landingImageControls, triangleControls, titleControl]);

  const handleCoverClick = () => {
    if (coverOpen && (page1Open || page2Open || page3Open)) {
      return;
    }
    if (!coverOpen) {
      landingImageControls.start({
        opacity: 0,
        transition: { delay: 0.2, duration: 1 },
      });
      triangleControls.start({
        opacity: 0,
        transition: { delay: 0.2, duration: 1 },
      });
      titleControl.start({
        opacity: 0,
        transition: { delay: 0.2, duration: 1 },
      });
    } else {
      landingImageControls.start({
        opacity: 1,
        transition: { delay: 0.9, duration: 1 },
      });
      triangleControls.start({
        opacity: 1,
        transition: { delay: 0.9, duration: 1 },
      });
      titleControl.start({
        opacity: 1,
        transition: { delay: 0.9, duration: 1 },
      });
    }

    animateFlipSequence(bookmarkControls, () => {
      setCoverOpen(!coverOpen);
      setZIndexPriority("0");
    });
  };

  return (
    <>
      <div
        className={`absolute inset-0 
                                ${styles.cover}
                                ${coverOpen ? styles.flipped : ""} 
                                ${coverOpen ? styles.slideLeft : ""}
                                flex flex-col h-full w-full rounded-r-2xl transition-transform duration-1000 z-10 cursor-pointer shadow-lg shadow-white`}
        onClick={handleCoverClick}
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          zIndex: 10,
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={titleControl} // Controls fade-in appearance
          whileHover={{
            scale: 1.05, // Slight zoom effect on hover
            filter: "brightness(1.2)", // Petals shimmer effect
          }}
          className="absolute top-12 left-0 z-20 pointer-events-none"
        >
          <motion.div
            animate={{
              rotate: [-2, 2, -2], // Swaying effect
              y: [0, -2, 0], // Gentle up-and-down floating effect
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src={Rose}
              alt="Rose"
              className="w-auto h-auto drop-shadow-lg transition-all duration-700 ease-in-out"
              style={{
                filter: "drop-shadow(0px 0px 10px rgba(255, 0, 0, 0.3))",
              }}
              priority
            />
          </motion.div>
        </motion.div>

        {/* TODO : fix the font */}
        <motion.div
          className="h-3/4 md:text-2xl xl:text-2xl text-md font-bold text-[#8B5E3C] tracking-wide overflow-hidden whitespace-nowrap font-allura"
          initial={{ opacity: 0 }}
          animate={titleControl}
        >
          <motion.span
            className="writing-effect"
            initial={{ clipPath: "inset(0% 100% 0% 0%)", opacity: 0 }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
            transition={{ duration: 4, ease: "easeInOut" }}
          >
            If this is just a passing moment, let it rest gently between us
          </motion.span>
          <motion.div
            className="absolute top-[-7px] xl:top-[-7px] right-8 xl:right-16 z-20 transform"
            animate={bookmarkControls}
            initial={{ rotateX: 0 }}
          >
            <svg
              width="50"
              height="80"
              viewBox="0 0 50 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 0H45C47.5 0 50 2.5 50 5V75C50 78.5 46 80 44 77L25 60L6 77C4 80 0 78.5 0 75V5C0 2.5 2.5 0 5 0Z"
                fill="#8B0000"
                stroke="#5D0E0E"
                strokeWidth="1.5"
              />

              <filter id="noise">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.6"
                  numOctaves="3"
                  stitchTiles="stitch"
                />
                <feColorMatrix type="saturate" values="0" />
                <feComponentTransfer>
                  <feFuncA type="linear" slope="0.2" />
                </feComponentTransfer>
              </filter>
              <rect
                width="50"
                height="80"
                fill="transparent"
                filter="url(#noise)"
              />

              <path
                d="M25 50C23 48 15 42 15 35C15 30 18 27 22 27C24 27 26 28 27 30C28 28 30 27 32 27C36 27 39 30 39 35C39 42 31 48 29 50C27 52 25 50 25 50Z"
                fill="white"
              />

              <text
                x="54.5%"
                y="44"
                fontSize="14"
                fontFamily="serif"
                fontWeight="bold"
                fill="#5D0E0E"
                textAnchor="middle"
              >
                V
              </text>
            </svg>
          </motion.div>
        </motion.div>

        {!coverOpen && (
          <motion.div
            className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-2xl font-serif text-[#6B4F35] opacity-80"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
          >
            Click to open the book 📖
          </motion.div>
        )}
      </div>
    </>
  );
}
