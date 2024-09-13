import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import sid from '/sid.jpg';
import mr from '/mrdot.png';
import { div } from 'framer-motion/m';
import MyProjects from '../components/MyProjects';

const About = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  // Mengatur tinggi dari 0vh hingga 100vh berdasarkan scroll
  const height = useTransform(scrollYProgress, [0, 1], ['0vh', '100vh']);

  // Kontrol visibilitas elemen baru berdasarkan scroll progress
  const opacity = useTransform(scrollYProgress, [0, 1], [2, 0.2]);
  // skills.js (atau .ts jika menggunakan TypeScript)

  const skills = [
    {
      category: 'Programming',
      items: [
        'Python',
        'Java',
        'Javascript',
        'C/C++',
        'PHP',
        'Dart',
        'HTML/CSS',
      ],
    },
    {
      category: 'Software Development',
      items: ['Git', 'MySQL', 'MongoDB'],
    },
    {
      category: 'Security and Penetration Testing',
      items: ['Ethical Hacking', ' Penetration Testing'],
    },
    {
      category: 'DevOps and Cloud',
      items: ['Docker', 'CI/CD Pipelines', 'AWS', 'Google Cloud'],
    },
    {
      category: 'Machine Learning and AI',
      items: ['TensorFlow', 'Keras', 'Pandas', 'NumPy'],
    },
  ];
  return (
    <>
      <div className='relative flex flex-col bg-backgroundSecondary'>
        <div
          ref={container}
          className='relative w-full min-h-screen h-[200vh] overflow-hidden z-20'
        >
          <motion.div
            style={{ height, y: '-50%' }} // Menyelaraskan dengan tengah
            className='fixed top-1/2 left-0 w-full bg-backgroundSecondary flex flex-col items-center justify-center text-white transform -translate-y-1/2 overflow-hidden'
          >
            <motion.div className='text-center' style={{ opacity }}>
              <span className='text-6xl md:text-8xl font-bold'>ABOUT</span>
              <p className='mt-5 text-lg md:text-2xl'>LITTLE STORY FROM ME</p>
            </motion.div>
          </motion.div>
        </div>
        <div className='min-h-screen z-20'>
          <div className='w-full h-screen text-center text-text'>
            <div className='flex justify-center items-center text-text gap-2'>
              <div className='w-[450px]'>
                <img src={sid} alt='' className=' rounded-xl' />
              </div>
              <div className='w-[450px] flex flex-col'>
                <div>
                  <span className='text-2xl'>
                    I am an enthusiastic and dedicated Full-Stack Developer, I
                    have skills and passion in developing software. I have
                    educational background or experience in various programming
                    languages and relevant frameworks, as well as an
                    understanding of programming concepts
                  </span>
                </div>
                <div>
                  <span>-- SOSMED --</span>
                </div>
              </div>
            </div>
          </div>
          {/* SKILL */}
          <div className='w-full flex flex-col text-text py-12 px-6 lg:px-24'>
            <span className='text-6xl font-extrabold text-center mb-12 tracking-wider text-navy'>
              SKILLS
            </span>
            <div className='flex flex-col gap-10'>
              {skills.map((skillCategory, index) => (
                <div key={index} className='flex flex-col'>
                  <span className='text-2xl font-semibold text-pink border-slightlyDarkPink pb-2'>
                    {skillCategory.category}
                  </span>
                  <div className='grid grid-cols-1 lg:grid-cols-6 gap-y-6 gap-x-10 ml-6 border-b-2 border-l-2 border-white border-opacity-25 p-5'>
                    {skillCategory.items.map((item, i) => (
                      <div
                        key={i}
                        className='flex items-center gap-4 hover:scale-105'
                      >
                        {/* <div className='w-3 h-3 bg-navy rounded-full'></div>{' '} */}
                        {/* Bullet Point */}
                        <span className='text-xl text-text font-medium'>
                          {item}
                        </span>
                        {/* {skillCategory.items.length - 1 !== i && (
                          <div className='bg-gray-400 h-[1px] flex-grow'></div>
                        )} */}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Projects */}
          <MyProjects />
          <div className='w-full flex flex-col justify-between bg-background'>
            <div className='w-full grid grid-cols-2'>
              <div className='p-5 flex justify-center items-center'>
                <img src={mr} alt='' className='w-[50%]' />
              </div>
              <div className='w-full flex flex-col gap-5 p-10'>
                <div className='w-full rounded-xl'>
                  <input
                    className='w-full rounded-md p-2 bg-background focus:bg-backgroundSecondary border-2 border-backgroundSecondary shadow-xl'
                    name='text'
                    type='text'
                    placeholder='unknown@gmail.com'
                  />
                </div>
                <textarea
                  name=''
                  id=''
                  className='h-[200px] rounded-md p-2 bg-background focus:bg-backgroundSecondary border-2 border-backgroundSecondary shadow-xl'
                  placeholder='Message Here.....'
                ></textarea>
                <button className='bg-backgroundSecondary text-text'>
                  Submit
                </button>
              </div>
            </div>
            <div className='flex justify-between p-2 border-2 border-backgroundSecondary text-text'>
              <div>
                <span>@Copyright RIVANSKA</span>
              </div>
              <div>
                <span>just for fun</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
