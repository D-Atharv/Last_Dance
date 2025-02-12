import { AnimationControls } from "framer-motion";

export const animateFlipSequence = async (
  bookmarkControls: AnimationControls,
  flipHandler: () => void
) => {
  const pageFlipDuration = 0.6;

  await bookmarkControls.start({
    x: 160,
    zIndex: 20,
    transition: { duration: 0.35 },
  });

  flipHandler();

  await new Promise(resolve => setTimeout(resolve, pageFlipDuration * 1800));

  await bookmarkControls.start({
    x: 0,
    zIndex: 20,
    transition: { duration: 0.35 },
  });
};