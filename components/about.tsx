'use client'
import { aboutMe, quote } from "@/data";
import React, { useState, useEffect } from "react";

const about = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [previewItems, setPreviewItems] = useState(4);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const updatePreviewItems = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 800) {
        setPreviewItems(2);
        setIsTablet(false);
      } else {
        setPreviewItems(4);
        setIsTablet(true);
      }
    };

    // Set initial value
    updatePreviewItems();

    // Add event listener for window resize
    window.addEventListener('resize', updatePreviewItems);

    // Cleanup event listener
    return () => window.removeEventListener('resize', updatePreviewItems);
  }, []);

  const truncateText = (text: string, wordLimit: number) => {
    const words = text.split(' ');
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(' ') + '...';
  };

  const getDisplayText = (item: any, index: number) => {
    // If it's the third paragraph (index 2), on tablet, and NOT expanded, truncate after 4th word
    if (index === 2 && !isTablet && !isExpanded) {
      return truncateText(item.content, 8);
    }
    return item.content;
  };

  return (
    <section className=" flex flex-col gap-10 py-10" id="about">
      <div className="relative flex desktop:flex-row flex-col desktop:gap-x-20 gap-y-3 desktop:gap-y-0 items-center justify-center desktop:justify-start tablet_lg:mx-28">
        <h2 className="text-4xl font-bold tracking-widest ">about me.</h2>
        <div className="w-80 tablet:w-96 border-[0.5px] dark:border-[#f2eeea]/50 border-[#5a5a5a]/50"></div>
      </div>

      <div className="relative flex flex-col desktop:flex-row mx-10 tablet:mx-20 tablet_lg:mx-40 gap-20 desktop:gap-40 items-center justify-center desktop:justify-between">
        <div className="flex flex-col gap-3 ">
          {aboutMe.slice(0, previewItems).map((item, index) => (
            <p
              key={item.id}
              className="text-lg tablet:text-xl normal-case leading-6 tracking-wide tablet_lg:text-left font-light text-left transition-opacity duration-300 ease-in-out"
            >
              {getDisplayText(item, index)}
            </p>
          ))}
          
          <div 
            className={`overflow-hidden transition-all duration-700 ease-in-out ${
              isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="flex flex-col gap-3">
              {aboutMe.slice(previewItems).map((item, index) => (
                <p
                  key={item.id}
                  className={`text-lg tablet:text-xl normal-case leading-6 tracking-wide tablet_lg:text-left font-light text-left transform transition-all duration-400 ease-in-out ${
                    isExpanded 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-4 opacity-0'
                  }`}
                  style={{
                    transitionDelay: isExpanded 
                      ? `${index * 100}ms` 
                      : `${(aboutMe.slice(previewItems).length - index - 1) * 80}ms`
                  }}
                >
                  {item.content}
                </p>
              ))}
            </div>
          </div>
          
          {aboutMe.length > previewItems && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className={`mt-4 self-start ${isExpanded ? ' dark:text-black-100 text-white dark:bg-white bg-black-100' : 'dark:border-white border-black-100 dark:text-white text-black-100'} self-center text-sm mobile:text-base tablet:text-xl lowercase font-bold py-2 px-4 rounded-lg border-2 hover:opacity-80 hover:scale-105 duration-200`}
            >
              <span className="inline-flex items-center gap-1">
                {isExpanded ? "Read less  " : "Read more  "}
                <span className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : 'rotate-0'}`}>
                  ↓
                </span>
              </span>
            </button>
          )}
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
        <p className="relative pt-2 font-serif text-xl tablet:text-2xl desktop:text-3xl text-center mx-20 desktop:mx-40 lowercase">
          "{quote}"
        </p>
      </div>
    </section>
  );
};

export default about;
