import React from "react";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import landingGIF from "../assets/CORA-Entr.gif";
import styles from "./LandingPage.module.css";

export const LandingPage = () => {
  return (
    <>
      <Image className={styles.fullImage} src={landingGIF} />
      <Link to='/home' className={styles.homeLink}></Link>
    </>
  );
};
