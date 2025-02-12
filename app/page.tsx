"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Landing from "@/app/landing/Landing";

export default function Home() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current
          .play()
          .catch((err) => console.log("Autoplay prevented:", err));
      }
    };

    playAudio();
    document.addEventListener("click", playAudio);
    document.addEventListener("keydown", playAudio);

    return () => {
      document.removeEventListener("click", playAudio);
      document.removeEventListener("keydown", playAudio);
    };
  }, []);

  if (isSmallScreen) {
    return (
      <motion.div
        className="h-screen w-full flex flex-col items-center justify-center text-center bg-pink-100 p-6"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.h1
          className="text-2xl md:text-3xl font-bold text-[#5D4037]"
          animate={{ scale: [1, 1.05, 1], opacity: [1, 0.9, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          📜 This experience is best viewed on a larger screen!
        </motion.h1>
        <motion.p
          className="text-lg text-[#6D4C41] mt-4"
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          Please switch to a desktop or a tablet for the best experience.
        </motion.p>
      </motion.div>
    );
  }

  return (
    <div>
      <audio ref={audioRef} src="/audio/Music.mp3" preload="auto" loop />
      <Landing />
    </div>
  );
}
