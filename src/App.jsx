import { useState } from 'react';
import mrLogo from '/mrdot.png';
import './App.css';
import { motion, useTransform } from 'framer-motion';
import { ThemeProvider } from './contexts/ThemeContext';
import ThemedButton from './components/ThemedButton';
import ParallaxEffect from './components/ParallaxEffect';
import MySkills from './components/MySkills';
import Myhome from './components/Myhome';
import Home from './layout/home';
import About from './layout/About';

function App() {
  return (
    <>
      <ThemeProvider>
        {/* <Myhome /> */}
        <Home />
        <About />
        {/* <motion.div
      className="box"
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 180, 180, 0],
        borderRadius: ["0%", "0%", "50%", "50%", "0%"]
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 1
      }}
    ><div>OKE</div></motion.div> */}
        {/* Konten Sticky
        
         */}
        {/* <ParallaxEffect/> */}
        {/* <MySkills/> */}
      </ThemeProvider>
    </>
  );
}

export default App;
