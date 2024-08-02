import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { aboutMe, gridItems } from "@/data";
import { StickyScroll } from "./ui/StickyScroll";
import { div } from "three/examples/jsm/nodes/Nodes.js";

const About = () => {
  return (
    <section id="about" className="h-full w-screen dark:bg-black bg-white bg-grid-small-white/[0.15] relative flex flex-col items-center justify-center py-10 px-10 xl:px-20">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(circle,transparent_0%,transparent_0%,transparent_0%,transparent_0%,black_60%)] lg:[mask-image:radial-gradient(circle,transparent_0%,transparent_0%,transparent_0%,transparent_0%,black_40%)]"></div>
      <div className="relative pb-10">
        <h1 className=" text-4xl font-extralight text-center">
          A Little {" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-neutral-200 via-stone-400 to-stone-50 font-bold">
            About Me
          </span>
        </h1>
      </div>
      <div className="relative pb-10 font-thin text-center text-xl md:text-2xl lg:text-3xl font-sans w-full lg:px-40">
        {aboutMe.map((text) => (
          <div key={text}>
          <h1>{text}</h1>
          </div>

        ))}
        </div>

      <BentoGrid className="gap-10">
        {gridItems.map(
          ({
            id,
            title,
            subtitle,
            subheading,
            description,
            className,
            img,
            imgClassName,
            titleClassName,
            spareImg,
          }) => (
            <BentoGridItem
              id={id}
              key={id}
              title={title}
              subtitle={subtitle}
              subheading={subheading}
              description={description}
              className={className}
              imgClassName={imgClassName}
              titleClassName={titleClassName}
              img={img}
              spareImg={spareImg}
            />
          )
        )}
      </BentoGrid>
    </section>
  );
};

export default About;
