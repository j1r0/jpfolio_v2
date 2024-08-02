import { aboutMe, quote } from "@/data";
import React, { useState } from "react";

const about = () => {
  return (
    <section className="relative flex flex-col gap-10 py-10" id="about">
      <div className="flex desktop:flex-row flex-col desktop:gap-x-20 gap-y-3 desktop:gap-y-0 items-center justify-center desktop:justify-start tablet_lg:mx-28">
        <h2 className="text-4xl font-bold tracking-widest ">about me.</h2>
        <div className="w-80 tablet:w-96 border-[0.5px] dark:border-[#f2eeea]/50 border-[#5a5a5a]/50"></div>
      </div>

      <div className="flex flex-col desktop:flex-row mx-10 tablet:mx-20 tablet_lg:mx-40 gap-20 desktop:gap-40 items-center justify-center desktop:justify-between">
        <div className="flex flex-col gap-3 ">
          {aboutMe.map((item) => (
            <p
              key={item.id}
              className="text-lg tablet:text-xl lowercase leading-6 tracking-wide tablet_lg:text-left font-light text-left"
            >
              {item.content}
            </p>
          ))}
        </div>

        <div className="grid relative group">
          <div className="translate-x-2 translate-y-2 rounded-md w-72 h-72 tablet:w-96 tablet:h-96 border-black-100 dark:border-white border-3 group-hover:bg-black-100 group-hover:dark:bg-white row-[1] col-[1] transition-all duration-200  group-hover:translate-x-3 group-hover:translate-y-3 bg-transparent"></div>
          <img
            className="-translate-x-2 -translate-y-2 z-50 rounded-md overflow-hidden w-72 h-72 tablet:w-96 tablet:h-96 row-[1] col-[1] transition-all duration-200 group-hover:-translate-x-3 group-hover:-translate-y-3 grayscale-[100%] group-hover:grayscale-0"
            src="/personal.jpg"
            alt=""
          />
        </div>
      </div>
      <div>
        <p className="pt-2 font-serif text-xl tablet:text-2xl desktop:text-3xl text-center mx-20 desktop:mx-40 lowercase">
          "{quote}"
        </p>
      </div>
    </section>
  );
};

export default about;
