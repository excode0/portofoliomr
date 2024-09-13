import React, { useRef } from 'react';
import sid from '/sid.jpg';
import { useScroll, useTransform, motion } from 'framer-motion';

const MyProjects = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });

  const sm = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const md = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const lg = useTransform(scrollYProgress, [0, 1], [0, -90]);

  const images = Array(6)
    .fill({ src: sid, y: 0 })
    .map((item, index) => ({
      ...item,
      y: [sm, md, lg][index % 3], // Cycle through the transforms
    }));

  return (
    <div ref={container} className='min-h-screen bg-backgroundSecondary py-16'>
      <div className='flex justify-center mb-12'>
        <motion.h1 style={{ y: sm }} className='text-5xl font-bold text-text'>
          My Projects
        </motion.h1>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 px-10 max-w-[1100px] mx-auto'>
        {images.map(({ src, y }, i) => (
          <motion.div
            style={{ y }}
            key={i}
            className='rounded-lg shadow-lg p-6 transition-transform duration-300'
          >
            <img
              src={src}
              alt={`Project ${i + 1}`}
              className='w-full h-[450px] object-cover rounded-md'
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MyProjects;
