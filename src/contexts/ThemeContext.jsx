import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark-navy");

  const toggleTheme = (newTheme) => setTheme(newTheme);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      <div data-theme={theme}>{children}</div>
    </ThemeContext.Provider>
  );
};