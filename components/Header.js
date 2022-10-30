import styles from "../styles/Header.module.css";

import React from "react";
import ThemeButton from "./ThemeButton";

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Where in the world?</h1>
      <ThemeButton />
    </header>
  );
}

export default Header;
