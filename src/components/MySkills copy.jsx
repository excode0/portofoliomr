import React from "react";
import { motion, useTransform } from "framer-motion";
import sc1 from "/sc1.png";

const MySkills = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

  return (
    <motion.div style={{ scale, rotate }}>
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

export default MySkills;
