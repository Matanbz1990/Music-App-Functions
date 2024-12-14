import React from "react";

import styles from "./Footer.module.css"; // Assuming you have styles
export default function Footer() {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <footer className={styles.footer}>
      @Matan Ben Zahav {currentYear} built using React | NodeJs | MongoDB |
      Firebase | ChatGPT
    </footer>
  );
}
