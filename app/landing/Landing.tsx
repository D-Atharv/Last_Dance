"use client";

import React, { FC, useContext } from "react";
import styles from "../landing/styles/Landing.module.css";
import { FrontCover } from "../components/FrontCover";
import { PageOne } from "../components/PageOne";
import { PageTwo } from "../components/PageTwo";
import { PageThree } from "../components/PageThree";
import { BackCover } from "../components/BackCover";
import { LandingContext } from "../context/Context";

const Landing: FC = () => {
  const { coverOpen, page3Open, playPageTurnSound } =
    useContext(LandingContext)!;

  return (
    <>
      <audio ref={playPageTurnSound} src="/audio/pageTurn.mp3" preload="auto" />

      <div className={`${styles.container}`}>
        <div
          className={`${styles.book} 
                        ${coverOpen ? styles.openCover : ""} 
                        ${coverOpen ? styles.slideRight : ""} 
                        h-[70%] md:w-[70%] md:h-[80%] lg:h-[85%] lg:w-[52%] xl:h-[85%] w-[85%] xl:w-[40%] `}
        >
          <FrontCover />
          <PageOne />
          <PageTwo />
          <PageThree />
          <BackCover page3Open={page3Open} />
        </div>
      </div>
    </>
  );
};

export default Landing;
