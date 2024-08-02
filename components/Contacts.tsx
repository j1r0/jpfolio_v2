import React from 'react'
import { BackgroundBeams } from './ui/Beams'
import { socialMedia } from '@/data'
import { FaLocationArrow } from 'react-icons/fa6';
import MagicButton from './MagicButton';

const Contacts = () => {
    return (
        <footer id="contact" className="h-full w-screen dark:bg-black bg-white bg-grid-small-white/[0.15] relative flex flex-col items-center justify-center py-10 px-20">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute bottom-0 pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(circle_at_bottom,transparent_0%,transparent_0%,transparent_0%,transparent_0%,black_50%)] lg:[mask-image:radial-gradient(circle_at_bottom,transparent_0%,transparent_0%,transparent_0%,transparent_0%,black_40%)]"></div>


          <div className="mx-10 flex mt-16 flex-col justify-between items-center">
    
            <div className="flex items-center md:gap-3 gap-6">
              {socialMedia.map((info) => (
                <a href={info.link} key={info.id}>
                <button
                  className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                >
                    {info.icon}
                </button>
                </a>
              ))}
            </div>
            <p className="text-white-200 relative sm:pt-4 md:text-base text-sm md:font-normal font-extralight tracking-wider">
              Copyright 2024 © Jim Pamplona
            </p>
          </div>
        </footer>
      );
}

export default Contacts