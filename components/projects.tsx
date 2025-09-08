"use client";
import React, { useState } from "react";
import { Card } from "./ui/Card";
import { projectList, technologies } from "../data/index";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";

const projects = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const previewItems = 4; // Show first 4 projects initially

  return (
    <section className=" flex flex-col gap-10 py-10 " id="projects">
      <div className="flex desktop:flex-row-reverse flex-col desktop:gap-x-20 gap-y-3 desktop:gap-y-0 items-center justify-center desktop:justify-start tablet_lg:mx-28">
        <h2 className="text-4xl font-bold tracking-widest ">my projects.</h2>
        <div className="w-80 tablet:w-96 border-[0.5px] dark:border-[#f2eeea]/50 border-[#5a5a5a]/50"></div>
      </div>
      <div className="relative flex flex-col mx-10 tablet:mx-20 tablet_lg:mx-40 gap-10 desktop:gap-14 items-center justify-center desktop:justify-between ">
        {/* Always show preview items */}
        {projectList.slice(0, previewItems).map((project, id) => (
          <div className={`w-full `} key={id}>
            <Card
              id={id}
              key={project.id}
              title={project.title}
              des={project.des}
              img={project.img}
              link={project.link}
              linktype={project.linktype}
              iconLists={project.iconLists}
              figma={project.figma}
            ></Card>
          </div>
        ))}

        {/* Animated additional content */}
        <div
          className={`w-full overflow-hidden transition-all duration-500 ease-in-out ${
            isExpanded ? "max-h-[4000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-10 desktop:gap-14">
            {projectList.slice(previewItems).map((project, index) => (
              <div
                className={`w-full transform transition-all duration-300 ease-out ${
                  isExpanded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
                key={project.id}
                style={{
                  transitionDelay: isExpanded ? `${index * 150}ms` : "0ms",
                }}
              >
                <Card
                  id={previewItems + index}
                  title={project.title}
                  des={project.des}
                  img={project.img}
                  link={project.link}
                  linktype={project.linktype}
                  iconLists={project.iconLists}
                  figma={project.figma}
                />
              </div>
            ))}
          </div>
        </div>

        {projectList.length > previewItems && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`mt-4 self-center ${
              isExpanded
                ? " dark:text-black-100 text-white dark:bg-white bg-black-100"
                : "dark:border-white border-black-100 dark:text-white text-black-100"
            } text-sm mobile:text-base tablet:text-xl lowercase font-bold py-2 px-4 rounded-lg border-2 hover:opacity-80 hover:scale-105 duration-200`}
          >
            <span className="inline-flex items-center gap-1">
              {isExpanded ? "Show less projects " : "Show more projects "}
              <span
                className={`transform transition-transform duration-300 ${
                  isExpanded ? "rotate-180" : "rotate-0"
                }`}
              >
                ↓
              </span>
            </span>
          </button>
        )}
      </div>

      <div>
        <div className="text-2xl pt-10 tablet:text-3xl text-center flex flex-col items-center justify-center">
          <h2 className=" font-thin tracking-wide ">
            interested in seeing more?
          </h2>
          <a href="https://github.com/j1r0" target="_blank">
            <h2 className=" font-bold tracking-wide underline underline-offset-8 ">
              check out my github page!
            </h2>
          </a>
        </div>
        <InfiniteMovingCards
          items={technologies}
          speed="slow"
          pauseOnHover={false}
          className="w-screen pt-10"
        />
      </div>
    </section>
  );
};

export default projects;
