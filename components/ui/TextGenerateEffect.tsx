"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.length < 5 ? wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className={`${idx == 2 ? 'text-transparent bg-clip-text bg-gradient-to-br from-stone-500 via-stone-300 to-neutral-200 font-bold' : idx == 3 ? 'text-transparent bg-clip-text bg-gradient-to-br from-neutral-200 via-stone-300 to-stone-500 font-bold': 'dark:text-white text:black'} opacity-0` }
            >
              {word}{" "}
            </motion.span>
          );
        }): wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className={` opacity-0` }
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4">
        <div className=" dark:text-white text-black leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
