import React from "react";
import styles from "./PageHeading.module.css";

export const PageHeading = ({ title, subtitle, invert = false }) => {
  return (
    <section
      className={`${styles.section} ${invert ? styles.invert : styles.normal}`}>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </section>
  );
};
