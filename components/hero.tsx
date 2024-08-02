"use client"

import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { TextGenerateEffect } from '@/components/ui/TextGenerate'

const hero = () => {
  return (
    <section className = "relative w-screen h-screen flex" id="home">
          <div className="w-screen px-8 desktop:px-28 desktop:pb-28 desktop_lg:px-40 flex flex-col desktop:items-start desktop:justify-end items-center justify-center h-screen desktop:gap-3 gap-5">

{/* Typer */}
  <span className="uppercase tracking-widest text-md tablet:text-lg tablet_lg:text-3xl text-base text-center font-display text-transparent text-stroke-thin dark:text-stroke-white text-stroke-black">
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

  {/* Heading */}
  <h1
    className="relative text-center text-4xl tablet_lg:text-left tablet:text-7xl desktop:text-8xl uppercase font-light tracking-wider"
  >Jim {" "}
  <span className='font-bold'>
  Pamplona
  </span></h1>
  {/* Subheading */}
  <div className="w-[80%] desktop:w-[50%]">
  <h3 className="relative desktop:text-left text-center text-base mobile:text-lg font-normal tablet:text-xl tablet_lg:text-2xl lowercase pb-2" >
  hello, i&apos;m a first-gen student from Guam who has faced the unknown and is turning dreams to reality. I love developing software that enriches lives and impacts communities.
  </h3>
  </div>
  <a href="#about"><button className="dark:border-white border-black-100 dark:text-white text-black-100 text-sm mobile:text-base tablet:text-xl uppercase font-bold py-2 px-4 rounded-lg border-2 hover:opacity-80 hover:scale-105 duration-200">Check out my story</button></a>


        </div>
    </section>
  )
}

export default hero