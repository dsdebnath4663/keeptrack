import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Button = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      style={{
        background: theme === "light" ? "#f0f0f0" : "#333",
        color: theme === "light" ? "#333" : "#f0f0f0",
      }}
      onClick={toggleTheme}
    >
      Toggle Theme
    </button>
  );
};

export default Button;
