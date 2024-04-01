import React from "react";
import { ThemeProvider } from "./ThemeContext";
import Button from "./Button";

const Theme = () => {
  return (
    <ThemeProvider>
      <div>
        <h1>Theme Context Example</h1>
        <Button />
      </div>
    </ThemeProvider>
  );
};

export default Theme;
