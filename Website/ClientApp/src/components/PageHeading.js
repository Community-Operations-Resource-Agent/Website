import React from "react";
import styles from "./PageHeading.module.css";

export const PageHeading = ({ title, subtitle, invert = false }) => {
  return(
    <header className={`${styles.section} ${invert ? styles.invert : styles.normal}`}>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </header>
  );
};
