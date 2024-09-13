import { motion } from "framer-motion";
import React from "react";

const Myhome = () => {
  return (
    <>
      <div className="relative">
        <div className="absolute top-0 h-screen flex flex-col md:justify-between bg-background w-full ">
          <div className="p-5 flex flex-col mt-10 md:mt-20">
            <div className="flex justify-center">
              <span className="font-serif md:text-8xl text-xl text-text font-bold">
                MUHAMMAD RIVAN
              </span>
            </div>
            <div className="flex justify-center items-center  gap-2 md:gap-5 mt-2 md:mt-5">
              <span className="w-11 md:w-52 h-1 md:h-2 bg-text" />
              <span className="font-sans text-text md:text-4xl">
                StackOverflow
              </span>
              <span className="w-11 md:w-52 h-1 md:h-2 bg-text" />
              <span className="font-sans text-text md:text-4xl">UI/UX</span>
              <span className="w-11 md:w-52 h-1 md:h-2 bg-text" />
            </div>
          </div>
          <div className="w-full flex justify-between p-5">
            <div className="md:w-[300px] h-full flex flex-col justify-end text-text">
              <span>
                I am an enthusiastic and dedicated Full-Stack Developer, I have
                skills and passion in developing software. I have educational
                background or experience in various programming languages and
                relevant frameworks, as well as an understanding of programming
                concepts
              </span>
            </div>
          </div>
        </div>
        <div className="h-screen">
          <span> Preview Some Project</span>
        </div>
      </div>
    </>
  );
};

export default Myhome;
