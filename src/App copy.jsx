import { useState } from "react";
import mrLogo from "/mrdot.png";
import slebew from "/slebew.png";
import "./App.css";

import { ThemeProvider } from "./contexts/ThemeContext";
import ThemedButton from "./components/ThemedButton";
import ParallaxEffect from "./components/ParallaxEffect";

function App() {
  const [count, setCount] = useState(0);
  const skill_overview = ["UI/UX Design",
  "Strategy",
  "Product Management",
  "User Research",
  "Agile Methodologies",
  "Collaboration",
  "Design Sprints",
  "Design Systems",
  "HTML and CSS",
  "CMS Design & Architecture",
  "Webflow Development",
  "Framer Development",
  "Photography",
  "Graphic Design"];
  return (
    <>
      <ThemeProvider>
        <div className="absolute w-full flex justify-between items-center bg-background text-text p-5">
          <div>
            <img src={mrLogo} alt="" className="w-[50px]" />
          </div>
          <div>THEME IS HERE</div>
        </div>
        <div className="h-screen bg-background flex flex-col justify-between">
          <div className="p-5 flex flex-col mt-20">
            <div className="flex justify-center">
              <span className="font-serif text-8xl text-text font-bold">
                MUHAMMAD RIVAN
              </span>
            </div>
            <div className="flex justify-center items-center gap-5">
              {/* This Div For DOT */}
              {/* <div className="w-[25px] h-[25px] rounded-full bg-text"></div> */}
              <span className="w-52 h-2 bg-text" />
              <span className="font-sans text-text text-4xl">
                StackOverflow
              </span>
              <span className="w-52 h-2 bg-text" />
              <span className="font-sans text-text text-4xl">UI/UX</span>
              <span className="w-52 h-2 bg-text" />
            </div>
          </div>
          <div className="w-full flex justify-between">
            <div className="w-[300px] h-full flex flex-col justify-end p-5 text-text">
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                eligendi sint quaerat qui vel doloremque natus dolor odio
                repellendus delectus at iure nostrum sed voluptas, quo deleniti
                magni possimus quia?
              </span>
            </div>
            <img src={slebew} alt="" className="w-[250px]" />
          </div>
        </div>
        <div className="absolute top-0">
          
        <ParallaxEffect/>
        </div>
        {/* Skills and Experience */}
        <div className=" text-text h-screen bg-background flex flex-col justify-around items-center p-5 relative">
          {/* Container untuk SKILLS */}
          <div className="relative mb-2 w-full flex">
            <div className="w-full flex flex-col gap-5 z-10 p-4">
              <div>
                <span className="text-5xl">SKILLS</span>
              </div>
              <div className="w-full flex justify-center">
                <div className="flex flex-wrap justify-start items-start gap-4 text-xl w-[50%]">
                  {skill_overview.map((skill, index) => (
                    <div>
                      <span>{skill}</span>
                    </div>
                  ))}
                  {/* <span>Software</span>
                  <span>Mobile & Desktop</span>
                  <span>UI/UX</span>
                  <span>Web Design</span> */}
                </div>
              </div>
            </div>
            <svg
              className="absolute top-14 left-0 w-[30%] h-[150px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 500 500"
              preserveAspectRatio="none"
            >
              <g id="Layer_1-2" data-name="Layer 1">
              {/* <circle cx="100" cy="50" r="4" fill="#00FF00" /> */}
                <path
                  class="cls-1"
                  d="m1.88,36.58c35.23-5.28,70.48-10.45,105.76-15.42,25.5-3.59,51.02-7.08,76.57-10.3,16.93-2.13,33.87-4.17,50.86-5.82,9.56-.93,19.16-1.85,28.77-2.01,2.39-.04,4.79-.02,7.17.22.58.06-.23-.05.21.03.19.03.38.06.56.1.29.06.56.14.85.21.11.03.22.08.33.12-.71-.26-.13-.1-.04,0,.18.2-.11-.13-.16-.22-.1-.18,0-.44.03-.83-.02.25.2-.09-.19.22-.09.08-.43.34-.03.04-.13.1-.27.2-.42.29-1.84,1.11-3.4,1.69-5.35,2.42-6.92,2.6-14.02,4.73-21.04,7.03-19.07,6.24-38.45,12.87-55.8,23.11-7.59,4.48-15.05,9.81-20.47,16.86-5.97,7.76-7.94,16.95-4.92,26.44,3.32,10.43,10.74,20.59,19.86,26.74,11.28,7.61,25.62,10.07,38.65,12.96,14.81,3.28,29.74,4.94,44.83,6.33,17.16,1.58,34.34,2.63,51.58,2.84,7.87.1,15.74.04,23.61-.15,1.93-.05,1.93-3.05,0-3-17.55.44-35.13.17-52.66-.9-15.7-.96-31.49-2.23-47.07-4.41-7.35-1.03-14.6-2.51-21.85-4.12s-14.78-3.29-21.94-5.69c-5.47-1.83-10.8-4.21-15.42-7.71-3.74-2.83-6.9-6.38-9.62-10.18-6.58-9.18-11.41-21.03-6.09-31.88,3.63-7.39,10.18-13.03,16.85-17.61,16.6-11.39,36.13-18.33,55.08-24.69,7.76-2.6,15.58-5.01,23.32-7.67,2.58-.89,5.15-1.8,7.64-2.92,1.36-.61,3.12-1.34,3.94-2.67,2.55-4.09-5.63-4.24-7.54-4.3-8.03-.22-16.12.53-24.12,1.21-15.16,1.3-30.28,3.05-45.39,4.87-23.4,2.83-46.76,5.95-70.11,9.17-32.8,4.52-65.56,9.27-98.31,14.11-9.58,1.42-19.16,2.84-28.73,4.28-1.9.28-1.09,3.18.8,2.89h0Z"
                  className="stroke-text"
                  // stroke="black" // Warna garis
                  strokeWidth="3" // Ketebalan garis, menggunakan camelCase di JSX
                  fill="none" // Tidak mengisi warna dalam path
                />
              </g>
            </svg>
          </div>

          {/* Container untuk Experience */}
          {/* <div className="relative w-full flex justify-center">
            <div className="relative z-10 p-4">
              <div>
                <span className="text-3xl">Experience</span>
              </div>
              <div className="mt-4 ml-8">
                <span>Nothing.exe</span>
              </div>
            </div>
            <svg
              className="absolute top-0 left-0 w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 800 200"
              preserveAspectRatio="none"
            >
              <path
                fill="none"
                // stroke="#00FF00"
                className="stroke-text"
                strokeWidth="2"
                d="
          M100,50 
          L300,50 
          Q320,50 320,70 
          L320,100 
          Q320,120 340,120 
          L500,120 
          Q520,120 520,140 
          L520,180 
          Q520,200 540,200 
          L700,200 
        "
              />
              <circle cx="100" cy="50" r="4" className="fill-text" />
              <circle cx="300" cy="50" r="4" className="fill-text" />
              <circle cx="320" cy="100" r="4" className="fill-text" />
              <circle cx="500" cy="120" r="4" className="fill-text" />
              <circle cx="520" cy="180" r="4" className="fill-text" />
              <circle cx="700" cy="200" r="4" className="fill-text" />
            </svg>
          </div> */}
        </div>

        {/* Projects */}
        {/* <div className="h-screen bg-background">
          <span>project</span>
        </div> */}
        {/* <ThemedButton /> */}
      </ThemeProvider>
    </>
  );
}

export default App;
