import React from "react";

const footer = () => {
  return (
    <footer className=" flex flex-col gap-10 py-10" id="contact">
      <div className="relative flex flex-col desktop:gap-x-20 gap-y-10 items-center justify-center tablet_lg:mx-28">
        <div className="w-80 tablet:w-96 border-[0.5px] dark:border-[#f2eeea]/50 border-[#5a5a5a]/50"></div>
        <h2 className="text-4xl font-bold tracking-widest text-center">
          connect with me
        </h2>
        <div className="relative flex flex-col gap-10 items-center justify-center">
          <p className="relative text-xl tablet:text-2xl font-thin tracking-wide text-center min-w-[20rem] max-w-[50rem] mx-20 normal-case">
            Want to collaborate or discuss a project? I&apos;d love to hear from
            you!
          </p>
          <a className="relative" href="mailto:pamplonajimp@gmail.com">
            <button className="dark:border-white border-black-100 dark:text-white text-black-100 text-sm mobile:text-base tablet:text-xl lowercase font-bold tracking-wider py-2 px-4 rounded-lg border-2 hover:opacity-80 hover:scale-105 duration-200">
              say hello
            </button>
          </a>
        </div>
      </div>
      <div className="text-sm font-thin tracking-widest tablet:text-md flex justify-center items-center opacity-50 ">
        <p>
          <a
            className="underline"
            href="https://www.figma.com/design/jhZyqz0g8MuCu4Aoj7Et41/jirofolio?node-id=0-1&t=B4WbrGZKltqdBkxm-1"
            target="_blank"
          >
            designed on figma
          </a>{" "}
          &{" "}
          <a
            className="underline"
            target="_blank"
            href="https://github.com/j1r0/jpfolio_v2"
          >
            developed by jim pamplona
          </a>
        </p>
      </div>
    </footer>
  );
};

export default footer;
