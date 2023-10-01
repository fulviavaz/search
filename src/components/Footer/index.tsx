import React from "react";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <p>© Google 2023</p>
        <p>version: 0.1.0</p>
      </div>
    </footer>
  );
}
