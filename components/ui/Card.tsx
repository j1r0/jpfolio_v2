import React from "react";
import { HiOutlineExternalLink } from "react-icons/hi";
import { SiFigma, SiGithub } from "react-icons/si";
import { Tooltip } from "@nextui-org/react";


export const Card = ({
  id,
  title,
  des,
  img,
  link,
  linktype,
  iconLists,
  figma,
}: {
  id: number;
  title: string;
  des: string;
  img: string;
  link: string;
  linktype: string;
  iconLists: { link: string; icon: React.ReactNode; iconName: string }[];
  figma: string;
}) => {
  const isEven = id % 2 === 0;


  

  return (
    <div className={`group flex gap-4 desktop:gap-8 justify-evenly items-center flex-col ${isEven ? "desktop:flex-row desktop:text-right" : "desktop:flex-row-reverse"}`}>
      <div className={`-z-[1] relative min-w-full desktop:min-w-[40rem] duration-300 opacity-20 desktop:opacity-100 ${isEven ? "desktop:group-hover:translate-x-24":"desktop:group-hover:-translate-x-24"} border rounded-md border-transparent overflow-clip`} >
        <img
          className="h-96 object-cover object-center rounded-md min-w-full grayscale desktop:group-hover:grayscale-0 duration-300"
          src={img}
          alt={title}
          loading="lazy"
        />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-white dark:bg-black-100 bg-fixed opacity-30 group-hover:opacity-0 duration-300"></div>
      </div>

      <div className={`absolute desktop:relative flex flex-col gap-3 tablet-lg:gap-6 min-w-60 max-w-72 tablet:max-w-[36rem] desktop:max-w-[30rem] group-hover:scale-105 ${isEven ? "desktop:group-hover:-translate-x-24 desktop:text-right":"desktop:group-hover:translate-x-24 text-left desktop:text-left"} ease-in-out duration-300 text-center`}>
        <div>
          <p className="font-thin tracking-[0.2em] leading-6 text-xs tablet:text-sm">featured project.</p>
          <h3 className="font-bold tracking-wide text-2xl tablet:text-4xl leading-7 uppercase">{title}</h3>
        </div>
        <div className="tracking-wider desktop:bg-white-100/[0.7] capitalize desktop:dark:bg-black-100/[0.8] text-black-100 dark:text-white font-thin items-center desktop:backdrop-blur-sm text-sm tablet:text-lg desktop:text-md desktop:shadow-lg leading-5 flex desktop:px-2 py-4 rounded-[0.2rem] desktop:group-hover:shadow-xl duration-200">
          {des}
        </div>
        <div className={`flex justify-between flex-col gap-2 tablet:gap-0 ${isEven ? "tablet:flex-row" : "desktop:flex-row-reverse tablet:flex-row"}`}>
          <div className="grid grid-flow-col justify-center gap-1">
            {iconLists.map((icon, index) => (
              <Tooltip key={index} content={icon.iconName} placement="bottom" showArrow={true} closeDelay={0}>
                <a
                  href={icon.link}
                  target="_blank"
                  key={index}
                  className="text-sm tablet:text-md border dark:bg-black/[0.3] bg-white/[0.3] dark:border-white/[.2] border-black/[.2] rounded-full backdrop-blur-md p-3 flex justify-center items-center duration-300 hover:scale-110"
                >
                  {icon.icon}
                </a>
              </Tooltip>
            ))}
          </div>
          <div className="flex flex-row items-center justify-center gap-2">
            {figma && (
              <Tooltip content="Figma" placement="bottom" showArrow={true} closeDelay={0}>
              <a
                href={figma}
                target="_blank"
                className="border dark:border-white/[.2] border-black/[.2] rounded-full backdrop-blur-md p-2 text-md tablet:text-lg font-bold hover:scale-110 duration-300"
              >
                <button className="flex items-center">
                  <SiFigma />
                  
                </button>
              </a>
              </Tooltip>
            )}
            <Tooltip content={linktype} placement="bottom" showArrow={true} closeDelay={0}>
            <a
              href={link} 
              target="_blank"
              className="border dark:border-white/[.2] border-black/[.2] rounded-full backdrop-blur-md p-2 text-md tablet:text-lg font-bold hover:scale-110 duration-300"
            >
              <button className="bg-transparent flex items-center">
                {linktype === "Github" ? <SiGithub /> : <HiOutlineExternalLink />}
              </button>
            </a>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
};