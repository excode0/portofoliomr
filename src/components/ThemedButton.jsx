// src/components/ThemedButton.jsx
import React from "react";
import { useTheme } from "../contexts/ThemeContext";

const ThemedButton = () => {
  const { setTheme } = useTheme();

  return (
    <div className="min-h-screen p-5 flex flex-col gap-4 items-center justify-center bg-background">
      {/* <button
        className="px-4 py-2 rounded bg-primary text-secondary shadow-lg"
        onClick={() => setTheme("dark-navy")}
      >
        Dark Navy Theme
      </button>
      <button
        className="px-4 py-2 rounded bg-primary text-secondary shadow-lg"
        onClick={() => setTheme("royal-gold")}
      >
        Royal Gold Theme
      </button>
      <button
        className="px-4 py-2 rounded bg-primary text-secondary shadow-lg"
        onClick={() => setTheme("emerald-green")}
      >
        Emerald Green Theme
      </button>
      <button
        className="px-4 py-2 rounded bg-primary text-secondary shadow-lg"
        onClick={() => setTheme("modern-slate")}
      >
        Modern Slate Theme
      </button> */}
    </div>
  );
};

export default ThemedButton;
