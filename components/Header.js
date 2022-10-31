import React, { useContext } from "react";
import { ThemeColorContext } from "../contexts/ThemeColorContext";
import ThemeButton from "./ThemeButton";
function Header({}) {
  const { theme, toggleTheme } = useContext(ThemeColorContext);
  console.log(theme);
  return (
    <header className="header">
      <h1 className="title">Where in the world?</h1>
      <ThemeButton onThemeChange={toggleTheme} theme={theme} />
    </header>
  );
}

export default Header;
