import React from "react";
import { HiOutlineMoon } from "react-icons/hi";
import { HiMoon } from "react-icons/hi";
import { DARK } from "../pages/_app";
function ThemeButton({ onThemeChange, theme }) {
  return (
    <button onClick={onThemeChange} className="theme_btn">
      {theme === DARK ? (
        <HiMoon className="btn_icon" />
      ) : (
        <HiOutlineMoon className="btn_icon" />
      )}
      {theme} Mode
    </button>
  );
}

export default ThemeButton;
