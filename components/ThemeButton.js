import styles from "../styles/ThemeButton.module.css";

import React from "react";
import { HiOutlineMoon } from "react-icons/hi";
function ThemeButton() {
  return (
    <button className={styles.theme_btn}>
      <HiOutlineMoon className={styles.btn_icon} />
      Dark Mode
    </button>
  );
}

export default ThemeButton;
