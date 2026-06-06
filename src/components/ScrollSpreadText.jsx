import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function joinClasses(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Bracket({ className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 27 78"
      className={className}
    >
      <path
        fill="currentColor"
        d="M26.52 77.21h-5.75c-6.83 0-12.38-5.56-12.38-12.38V48.38C8.39 43.76 4.63 40 .01 40v-4c4.62 0 8.38-3.76 8.38-8.38V12.4C8.38 5.56 13.94 0 20.77 0h5.75v4h-5.75c-4.62 0-8.38 3.76-8.38 8.38V27.6c0 4.34-2.25 8.17-5.64 10.38 3.39 2.21 5.64 6.04 5.64 10.38v16.45c0 4.62 3.76 8.38 8.38 8.38h5.75v4.02Z"
      />
    </svg>
  );
}

function CharacterText({ char, index, centerIndex, scrollYProgress, charClassName = "" }) {
  const isSpace = char === " ";
  const distanceFromCenter = index - centerIndex;

  const x = useTransform(scrollYProgress, [0, 0.7], [distanceFromCenter * 28, 0]);
  const rotateX = useTransform(scrollYProgress, [0, 0.7], [distanceFromCenter * 18, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.7], [0.55, 0.85, 1]);

  return (
    <motion.span
      className={joinClasses("inline-block leading-none", isSpace ? "w-3 md:w-4" : "", charClassName)}
      style={{ x, rotateX, opacity }}
    >
      {char}
    </motion.span>
  );
}

function CharacterImage({
  src,
  index,
  centerIndex,
  scrollYProgress,
  mode = "soft",
  imageClassName = "",
}) {
  const distanceFromCenter = index - centerIndex;
  const x = useTransform(
    scrollYProgress,
    [0, 0.7],
    [distanceFromCenter * (mode === "rotate" ? 48 : 30), 0]
  );
  const scale = useTransform(scrollYProgress, [0, 0.7], [0.88, 1]);
  const y = useTransform(
    scrollYProgress,
    [0, 0.7],
    [mode === "rotate" ? -Math.abs(distanceFromCenter) * 10 : Math.abs(distanceFromCenter) * 18, 0]
  );
  const rotate = useTransform(scrollYProgress, [0, 0.7], [distanceFromCenter * 14, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.7], [0.5, 0.82, 1]);

  return (
    <motion.img
      src={src}
      alt=""
      className={joinClasses("inline-block rounded-[1.5rem] object-cover", imageClassName)}
      style={{
        x,
        scale,
        y,
        opacity,
        rotate: mode === "rotate" ? rotate : 0,
        transformOrigin: "center",
      }}
    />
  );
}

export function ScrollSpreadText({
  text,
  className = "",
  charClassName = "text-[#d91f26]",
  containerClassName = "",
  heightClassName = "min-h-[340px] py-16 md:min-h-[420px] md:py-20",
  backgroundImage,
  backgroundAlt = "",
  overlayClassName = "bg-white/55",
  backgroundBlurClassName = "blur-[2px]",
}) {
  const targetRef = useRef(null);
  const characters = text.split("");
  const centerIndex = Math.floor(characters.length / 2);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 0.92", "end 0.4"],
  });
  const backgroundScale = useTransform(scrollYProgress, [0, 0.7], [1.08, 1.02]);
  const backgroundY = useTransform(scrollYProgress, [0, 0.7], [18, 0]);
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.25, 0.7], [0.72, 0.88, 1]);

  return (
    <div
      ref={targetRef}
      className={joinClasses(
        "relative flex items-center justify-center overflow-hidden bg-white px-4",
        heightClassName,
        containerClassName
      )}
    >
      {backgroundImage ? (
        <>
          <motion.img
            src={backgroundImage}
            alt={backgroundAlt}
            className={joinClasses(
              "absolute inset-0 h-full w-full object-cover",
              backgroundBlurClassName
            )}
            style={{
              scale: backgroundScale,
              y: backgroundY,
              opacity: backgroundOpacity,
            }}
          />
          <div className={joinClasses("absolute inset-0", overlayClassName)} />
        </>
      ) : null}

      <div
        className={joinClasses("relative z-10 w-full max-w-6xl text-center leading-none", className)}
        style={{ perspective: "500px" }}
      >
        {characters.map((char, index) => (
          <CharacterText
            key={`${char}-${index}`}
            char={char}
            index={index}
            centerIndex={centerIndex}
            scrollYProgress={scrollYProgress}
            charClassName={charClassName}
          />
        ))}
      </div>
    </div>
  );
}

export function ScrollSpreadIcons({
  title,
  icons,
  mode = "soft",
  className = "",
  heightClassName = "min-h-[420px] py-14 md:min-h-[560px] md:py-20",
}) {
  const targetRef = useRef(null);
  const centerIndex = Math.floor(icons.length / 2);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 0.92", "end 0.38"],
  });

  return (
    <div
      ref={targetRef}
      className={joinClasses(
        "relative flex items-center justify-center overflow-hidden bg-white px-4",
        heightClassName,
        className
      )}
    >
      <div className="flex w-full max-w-7xl flex-col items-center justify-center gap-8 text-center">
        {title ? (
          <p className="flex items-center justify-center gap-3 text-lg font-semibold tracking-tight text-black md:text-2xl">
            <Bracket className="hidden h-10 text-black md:block" />
            <span className="font-display text-2xl font-semibold md:text-4xl">{title}</span>
            <Bracket className="hidden h-10 scale-x-[-1] text-black md:block" />
          </p>
        ) : null}

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6" style={{ perspective: "500px" }}>
          {icons.map((src, index) => (
            <CharacterImage
              key={`${src}-${index}`}
              src={src}
              index={index}
              centerIndex={centerIndex}
              scrollYProgress={scrollYProgress}
              mode={mode}
              imageClassName="h-32 w-24 border border-black/8 bg-white p-2 shadow-[0_10px_30px_rgba(0,0,0,0.08)] sm:h-40 sm:w-30 md:h-52 md:w-40"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ScrollSpreadText;
