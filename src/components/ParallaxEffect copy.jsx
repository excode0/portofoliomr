import { useScroll, motion, useTransform } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import sc1 from "/sc1.png";
import MyArchive from "./MyArchive";
import slebew from "/slebew.png";
import { div } from "framer-motion/client";

const ParallaxEffect = () => {
  const container = useRef();

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start start", "end end"],
  });

  return (
    <div ref={container} className="relative top-0 h-[300vh] w-full">
      <div className="absolute top-0 h-screen flex flex-col justify-between bg-background w-full ">
        <div className="p-5 flex flex-col mt-20">
          <div className="flex justify-center">
            <span className="font-serif text-8xl text-text font-bold">
              MUHAMMAD RIVAN
            </span>
          </div>
          <div className="flex justify-center items-center gap-5 mt-5">
            <span className="w-52 h-2 bg-text" />
            <span className="font-sans text-text text-4xl">StackOverflow</span>
            <span className="w-52 h-2 bg-text" />
            <span className="font-sans text-text text-4xl">UI/UX</span>
            <span className="w-52 h-2 bg-text" />
          </div>
        </div>
        <div className="w-full flex justify-between p-5">
          <div className="w-[300px] h-full flex flex-col justify-end text-text">
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              eligendi sint quaerat qui vel doloremque natus dolor odio
              repellendus delectus at iure nostrum sed voluptas, quo deleniti
              magni possimus quia?
            </span>
          </div>
          <img src={slebew} alt="Logo" className="w-[250px]" />
        </div>
      </div>
      <div className="sticky flex items-start justify-end h-screen z-20">
        <ParallaxeSlideEffect />
      </div>
      {/* <div className="sticky top-0 inset-0 flex justify-center items-center z-10 h-screen">
        <ContainerParallax scrollYProgress={scrollYProgress} />
        <ParallaxeSlideEffect />
      </div> */}
      
    </div>
  );
};

const ParallaxeSlideEffect = ({}) => {
  return (
    <motion.div
      animate={{
        width: ["100%"],
        height: ["0%","100vh"],
        rotate: [0],
        borderRadius: ["0%"],
      }}
      transition={{
        duration: 1,
        ease: "easeInOut",
        times: [0],
        repeat: Infinity,
        repeatDelay: 1,
      }}
      className="bg-background rounded-full w-[100px] h-[100px]"
    />
  );
};
const ContainerParallax = ({ scrollYProgress }) => {
  // Mengatur scale dari kecil (0.5) hingga besar (1) seiring scroll
  const height = useTransform(scrollYProgress, [0, 1], ["0vh", "100vh"]);
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.0, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [-5, 1]);

  return (
    <motion.div style={{ height }} className="w-full bg-red-500 h-screen">
      <div className="w-full h-screen bg-[#C72626] text-[3.5vw] flex flex-col items-center justify-center text-white pb-[10vh]">
        <p>Scroll Perspective</p>

        <div className="flex gap-4">
          <p>Section</p>

          <div className="relative w-[12.5vw]">
            <img src={sc1} alt="img" placeholder="blur" fill />
          </div>

          <p>Transition</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ParallaxEffect;
