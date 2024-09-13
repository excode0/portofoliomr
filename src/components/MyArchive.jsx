import React from "react";
import { motion, useTransform } from "framer-motion";
import sc2 from "/sc2.png";
const MyArchive = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

  return (
    <motion.div style={{ scale, rotate }}>
      <div className="relative h-screen w-full">
        <img src={sc2} alt="img" placeholder="blur" className="object-cover w-full h-full" />
      </div>
    </motion.div>
  );
};

export default MyArchive;
