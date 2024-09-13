import { useScroll, motion, useTransform } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import sc1 from "/sc1.png";
import Myhome from "./Myhome";
import slebew from "/slebew.png";
import MySkills from "./MySkills";
import ParallaxeSlideEffect from "./ParallaxeSlideEffect";

const ParallaxEffect = () => {
  const container = useRef();

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start start", "end end"],
  });
  // State untuk melacak komponen yang aktif (default "home")
  const [activeSection, setActiveSection] = useState("skills");
  const [showTransition, setShowTransition] = useState(false);

  // Fungsi untuk menangani tombol yang diklik
  const handleButtonClick = (section) => {
    if (section !== activeSection) {
      setShowTransition(true); // Tampilkan animasi transisi
      setTimeout(() => {
        setActiveSection(section); // Ganti ke komponen baru setelah animasi
        setShowTransition(false); // Sembunyikan transisi setelah selesai
      }, 1000); // Durasi transisi (sesuaikan dengan durasi animasi)
    }
  };
  return (
    <div
      ref={container}
      className="relative top-0 h-screen w-full overflow-hidden"
    >
      {activeSection === "home" && <Myhome />}
      {activeSection === "skills" && <MySkills />}
      <div className="absolute w-full h-screen flex flex-col justify-end items-end z-50">
        <div className="relative w-[100px] h-[100px] md:w-[150px] md:h-[150px] bg-green-400 rounded-full flex justify-center items-center">
          {/* Konten di dalam lingkaran */}
          <div className="absolute">
            {/* <span>Logo</span> */}
            <img src={slebew} alt="Logo" className="w-[150px]" />
          </div>

          {/* Tombol melingkar */}
          <button
            onClick={() => handleButtonClick("home")}
            className="absolute -left-11 md:-left-11 transform -translate-x-1/2 -translate-y-full w-[60px] h-[60px] rounded-full bg-blue-500 text-white"
          >
            <i className="fa-solid fa-house"></i>
          </button>
          <button
            onClick={() => handleButtonClick("skills")}
            className="absolute left-0 -top-8 md:-top-8  md:left-1 transform -translate-x-1/2 -translate-y-full w-[60px] h-[60px] rounded-full bg-blue-500 text-white"
          >
            <i className="fa-solid fa-address-card"></i>
          </button>
          <button className="absolute -right-6 -top-10  md:-top-11 md:-right-0 transform -translate-x-1/2 -translate-y-full w-[60px] h-[60px] rounded-full bg-blue-500 text-white">
            <i className="fa-solid fa-file"></i>
          </button>
        </div>
      </div>
      
      {showTransition && (
        <div className="sticky flex items-start justify-end h-screen z-20">
          <ParallaxeSlideEffect onComplete={() => {}} />
        </div>
      )}
    </div>
  );
};

export default ParallaxEffect;
