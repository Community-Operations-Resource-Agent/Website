import React from "react";
import Figure from "react-bootstrap/Figure";
import styles from "./Profile.module.css";
export const Profile = ({ image, name }) => {
  return (
    <div className="text-center m-auto">
      <Figure>
        <Figure.Image className={styles.profile} roundedCircle src={image} />
        <Figure.Caption>{name}</Figure.Caption>
      </Figure>
    </div>
  );
};
