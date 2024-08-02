"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import MagicButton from "../MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { HoverBorderGradient } from "./HoverBorderGradient";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  );

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit overflow-clip fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full bg-transparent  shadow-md shadow-black-100 z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4 backdrop-blur-md",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
            )}
          >
            <span className="block sm:hidden">{navItem.name}</span>
            <span className="hidden sm:block text-sm">{navItem.name}</span>
          </Link>
        ))}
        <a href="./Resume - 20240719.pdf" download="Resume - 20240719">
      <HoverBorderGradient
        as="button"
        className="bg-transparent text-black dark:text-white flex items-center space-x-2"
      >
        <span>Resume</span>
      </HoverBorderGradient>
      </a>
      </motion.div>
    </AnimatePresence>
  );
};
