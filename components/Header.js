import styles from "../styles/Header.module.css";

import React from "react";

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Where in the world?</h1>
      <button>Dark Mode</button>
    </header>
  );
}

export default Header;
