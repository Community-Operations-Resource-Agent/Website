import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Collapse from "react-bootstrap/Collapse";
import Figure from "react-bootstrap/Figure";
import Row from "react-bootstrap/Row";
import { Profile } from "./Profile";
import styles from "./ProfileSection.module.css";

export const ProfileSection = ({ title, profiles, bar }) => {
  const [member, setMember] = useState({});
  const [open, setOpen] = useState(false);

  /*
   * Probably needs the same logic as the original ProfileRow, which splits the members into
   * multiple rows, each having their own expanding area below the row, instead at the end of the
   * section (in this implementation). If so, the ids may have to be modified to include which row
   * as well as the index. Apart from that, this implementation is similar to the design and style
   * in the Figma.
   * May need an indicator (replace the current blue background) to show which profile is currently
   * open. Also will need aria controls?
   */

  return (
    <div>
      <Row
        className={`${
          bar === "left" ? styles.titleBarLeft : styles.titleBarRight
        } h2`}>
        <span className={styles.title}>{title}</span>
      </Row>
      <Row xs={1} sm={3} md={5} lg={8} xl={16}>
        {profiles.map((profile, index) => (
          <Col
            key={index}
            className={member.id === index ? styles.activeProfile : ""}>
            <Profile
              name={profile.name}
              image={profile.image}
              profile={profile.profile}
            />
            <Button
              onClick={() => {
                if (member.id === index) {
                  // close when currently open if member clicked again
                  setOpen(false);
                } else if (typeof member.id === "undefined") {
                  // open when currently closed if member clicked
                  setMember({ id: index, ...profile });
                  setOpen(true);
                } else {
                  // toggle when currently open if another member is clicked
                  setOpen(false);
                  // 600 ms delay to allow smooth close, possibly needs better implementation?
                  new Promise((resolve) => setTimeout(resolve, 600)).then(
                    () => {
                      setMember({ id: index, ...profile });
                      setOpen(true);
                    }
                  );
                }
              }}>
              Profile
            </Button>
          </Col>
        ))}
      </Row>
      <Collapse
        in={open}
        onExited={() => {
          setMember({});
        }}
        className={styles.collapsible}>
        <div>
          <div className={styles.collapsibleWrapper}>
            <Figure className={styles.collapsibleFigure}>
              <Figure.Image roundedCircle src={member.image} />
              <Figure.Caption>{member.name}</Figure.Caption>
            </Figure>
            <p>{member.description}</p>
          </div>
        </div>
      </Collapse>
    </div>
  );
};
