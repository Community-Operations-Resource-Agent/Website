import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Collapse from "react-bootstrap/Collapse";
import Figure from "react-bootstrap/Figure";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import { AppBar } from "../components/AppBar";
import { Footer } from "../components/Footer";
import { Profile } from "../components/Profile";
import { PageHeading } from "../components/PageHeading";
import styles from "./AboutPage.module.css";
import{leaders,members,advisors} from "../components/data"



export const AboutPage = () => {

  const ProfileRow = ({ profiles }) => {
    const [member, setMember] = useState({});
    const [open, setOpen] = useState(false);

    return (
      <div>
        <Row className={styles.profileRow}>
          {profiles.map((profile, index) => (
            <Col
              key={index}
              className={member.id === index ? styles.activeProfile : ''}
            >
              <Profile
                name={profile.name}
                image={profile.image}
                profile={profile.profile}
              />
              <Button
                onClick={() => {
                  if (member.id === index) { // close when currently open if member clicked again
                    setOpen(false);
                  } else if (typeof member.id === 'undefined') { // open when currently closed if member clicked
                    setMember({ id: index, ...profile });
                    setOpen(true);
                  } else { // toggle when currently open if another member is clicked
                    setOpen(false);
                    // 600 ms delay to allow smooth close, possibly needs better implementation?
                    new Promise(resolve => setTimeout(resolve, 600)).then(() => {
                      setMember({ id: index, ...profile });
                      setOpen(true);
                    });
                  }
                }}
              >
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
          className={styles.collapsible}
        >
          <div> {/* need an unpadded div to have smooth transition */}
            <div className={styles.collapsibleWrapper}>
              <Figure className={styles.collapsibleFigure}>
                <Figure.Image roundedCircle src={member.image} />
                <Figure.Caption>{member.name}</Figure.Caption>
              </Figure>
              <p>{member.description}</p>
              <Button as={Link} to={member.profile}></Button>
            </div>
          </div>
        </Collapse>
      </div>
    )
  };

  const ProfileSection = ({ title, profiles, bar }) => {

    const [isTablet, setIsTablet] = useState(window.matchMedia("(min-width:961px)").matches);
    const [isDesktop, setIsDesktop] = useState(window.matchMedia("(min-width:1025px)").matches);

    useEffect(() => {
      
      const isTabletHandler = (e) => setIsTablet(e.matches);
      const isDesktopHandler = (e) => setIsDesktop(e.matches);

      window.matchMedia("(min-width:961px)").addListener(isTabletHandler);
      window.matchMedia("(min-width:1025px)").addListener(isDesktopHandler);

      return () => {
        window.matchMedia("(min-width:961px)").removeListener(isTabletHandler);
        window.matchMedia("(min-width:1025px)").removeListener(isDesktopHandler);
      }
    });

    const groupSize = (isDesktop)
      ? 5 
      : (isTablet)
        ? 3 
        : 2;

    return (
      <div>
        <Row className={`${(bar === 'left') ? styles.titleBarLeft : styles.titleBarRight} h2`}>
          <span className={styles.title}>{title}</span>
        </Row>
        {profiles
          .reduce((r, member, index) => {
            // create element groups with size of groupSize, result looks like:
            // [[elem1, elem2, elem3], [elem4, elem5, elem6], ...]
            if (index % groupSize === 0) {
              r.push([]);
            }
            r[r.length - 1].push(member);
    
            return r;
          }, [])
          .map((row, index) => {
            return <ProfileRow profiles={row} key={index} />;
          })}
      </div>
    );
  };

  return (
    <>
      <AppBar></AppBar>
      <PageHeading
        title={'Meet The People Behind CORAbot'}
        subtitle={'Project CORA’s team consists of volunteers from Microsoft as well as industry professionals '
          + 'and students from Boston University, Iowa State University, and Texas A&M. During the Microsoft '
          + 'Hackathon for COVID-19, the team originally created Project CORA to provide relief efforts. '
          + 'However, it was quickly realized the solution could be repurposed for any NGO or community cause '
          + 'that supports underrepresented communities. In preparation for the upcoming Microsoft Hack for '
          + 'Good, our team hopes to partner with nonprofit organizations directly and extend CORAbot to their '
          + 'specific cause.'}
      />
      <Container fluid as="main">
        <ProfileSection title={'Leadership'} profiles={leaders} />
        <ProfileSection title={'Core Team'} profiles={members} bar={'left'} />
        <ProfileSection title={'Advisors'} profiles={advisors} />
      </Container>
      <Footer></Footer>
    </>
  );
};
