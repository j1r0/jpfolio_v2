"use client"
import { AuroraBackground } from "./ui/Aurora";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { TypeAnimation } from "react-type-animation";
import MagicButton from "./MagicButton";
import {  FaLocationArrow } from "react-icons/fa";
import { HeroHighlight, Highlight } from "./ui/HeroHighlight";
import { PiCaretDoubleDown, PiCaretDoubleDownThin, PiDownloadSimple, PiDownloadSimpleBold, PiDownloadSimpleThin } from "react-icons/pi";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 0.00) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div >
      <div className="h-dvh w-screen bg-black  flex items-center justify-center absolute top-0 left-0">
        <div>
          <AuroraBackground>
            <motion.div
              initial={{ opacity: 0.0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="relative flex flex-col gap-4 items-center justify-center"
            ></motion.div>
          </AuroraBackground>
        </div>
      </div>
      <div>
        <HeroHighlight>
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center h-dvh ">
            <span className="uppercase tracking-widest md:text-sm lg:text-base text-xs text-center text-white-200">
              <TypeAnimation
                sequence={[
                  2000,
                  "Problem Solver",
                  2000,
                  "Full-Stack Developer",
                  2000,
                  "Software Engineer",
                  2000,
                ]}
                wrapper="span"
                speed={40}
                repeat={Infinity}
              />
            </span>
            <TextGenerateEffect
              className="text-center text-[1.7rem] md:text-[2.5rem] lg:text-5xl xl:text-6xl 2xl:text-7xl text-white-100 font-extralight"
              words={"Hello, I'm Jim Pamplona"}
            />
            <TextGenerateEffect className="text-center text-sm font-extralight md:tracking-widest mb-4 md:text-lg lg:text-2xl text-white-200 pb-11" words="
              I&apos;m a first-generation student from Guam who has faced the unknown and is resiliently turning dreams to reality.">
            </TextGenerateEffect>

            <a href="./Resume - 20240719.pdf" download="Resume - 20240719">
              <MagicButton
                title="Download Resume"
                icon={<PiDownloadSimpleBold className="scale-[130%]" />}
                position="right"
                className="h-12 rounded-lg p-[1px] md:w-60 hover:-translate-y-1 transition duration-200"
                otherClasses="rounded-lg"
              />
            </a>
          </div>
          <a href="#about" className={` m-auto items-center absolute w-fit bottom-0 left-0 right-0 flex justify-center pb-10 hover:translate-y-1 transition duration-200 ${isScrolled ? "opacity-0 pointer-events-none" : ""}`} >
            <PiCaretDoubleDown className=" text-white-100 text-3xl scale-x-[200%] animate-pulse hover:animate-none" />
          </a>

        </HeroHighlight>
      </div>
    </div>
  );
};

export default Hero;
