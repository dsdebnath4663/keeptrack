import React, { createContext, useState } from "react";
import "./themeStyle.css";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const themeContextValue = {
    theme,
    toggleTheme,
  };

  return (
    <div className="postion">
      <ThemeContext.Provider value={themeContextValue}>
        {children}
      </ThemeContext.Provider>
    </div>
  );
};

export { ThemeContext, ThemeProvider };
