"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa";
import { ThemeSwitcher } from "./ThemeSwitcher";

export const Navbar = ({
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
  const [scrolled, setScrolled] = useState(false);


  let direction = 0;

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      current < 0 && (current = 0);
      const prev = (scrollYProgress.getPrevious()! < 0 ? 0 : scrollYProgress.getPrevious())!;
       direction = current! - prev!;

        if (direction <= 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
      setScrolled(scrollYProgress.get() > 0);
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
          top: scrolled ? 0 : 10,
          

        }}
        transition={{
          duration: 0.4, ease: "easeInOut", 
        }}
        className=
          {`tablet:flex fixed inset-x-0 max-w-[22rem] mx-auto tablet:mt-0 tablet:max-w-none tablet:w-full z-[5000] items-center justify-center tablet:border-none tablet:rounded-none tablet:p-0 rounded-full
            
            ${scrolled && "backdrop-blur-md tablet:dark:border-white-100/[0.3] tablet:border-black/[0.3] drop-shadow-lg border-black-100/[0.5] dark:border-white-100/[0.5] border-[.5px] mt-4 "}`}
    >
    <motion.nav
      className={`flex flex-row gap-1 tablet:gap-10 items-center justify-around tablet:justify-end tablet:right-0 relative tablet:mx-9 mx-4 lowercase tablet:w-screen py-4`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 1 }}
    >
      <AnimatePresence>
        {scrolled && (
          <motion.div
            className={`hidden tablet:flex absolute left-0 text-center text-xl tablet_lg:text-left tablet:text-2xl desktop:text-4xl uppercase font-light tracking-wider cursor-pointer`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, delay: scrolled ? 0.2 : 0.1}}
          >
            <Link href="/" className="flex flex-row items-center w-10">
              <img src="jp_logo.svg" alt="JP"/>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className="flex flex-row gap-2 tablet:gap-10 items-center tablet:justify-between">
      <ThemeSwitcher />
      {navItems.map((item) => (
        <motion.div
        key={item.name}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.2, delay: 0.1 }}
        >
        <Link
          className="hover:opacity-70 transition duration-200 text-sm tablet:text-lg"
          href={item.link}
        >
          {item.name}
        </Link>
        </motion.div>
      ))}
      <motion.a
        href="/JP_Resume.pdf"
        download="/JP_Resume.pdf"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        <button className="dark:bg-white bg-black-100 dark:text-black-100 text-white tablet:rounded-[.2rem] rounded-full px-2 py-1 tablet:px-4 tablet:py-2 font-bold lowercase hover:opacity-80 transition duration-200 tracking-wider">
        Resume
        </button>
      </motion.a>
      </div>
    </motion.nav>
    </motion.div>
    </AnimatePresence>
  )
}

export default Navbar;
