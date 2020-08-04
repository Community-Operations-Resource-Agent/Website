import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import mapImage from "../assets/map-screenshot.png";
import jorge from "../assets/old-man-portrait 2.png";
import symbol from "../assets/Symbol.svg";
import { AppBar } from "../components/AppBar";
import { Footer } from "../components/Footer";
import styles from "./HomePage.module.css";

export const HomePage = () => {

  const [isDesktop, setIsDesktop] = useState(window.matchMedia("(min-width:961px)").matches);

  useEffect(() => {
    const isDesktopHandler = (e) => setIsDesktop(e.matches);

    window.matchMedia("(min-width:961px)").addListener(isDesktopHandler);

    return () => {
      window.matchMedia("(min-width:961px)").removeListener(isDesktopHandler);
    }
  });

  return (
    <>
      <AppBar></AppBar>
      <Container fluid as='main'>
        <Row
          className={`${styles.hero} ${styles.banner}`}
          style={{
            backgroundImage: `url(${symbol})`,
          }}>
          <h1>What is CORAbot?</h1>
          <p>
            CORAbot, a Community Operations Resource Agent (CORA), is an SMS-bot
            designed to address one of the biggest challenges communities face -
            how to connect those with needs to available resources. With a
            customizable modular framework, CORAbot can accelerate any nonprofit
            or community organization’s long or short-term goals.
          </p>
        </Row>
        <Row className={styles.hero}>
          <Col
            className={`${(isDesktop) ? styles.meetCora : styles.colImageWrapper} ${styles.colText} p-0 d-flex flex-column justify-content-center`}
            style={(isDesktop) ? {} : {'backgroundImage': `url('${jorge}')`}}
            xs={12}
            lg={6}
          >
            <Container>
              <h2>Learn how CORAbot can be customized for any cause.</h2>
              <p>
                <Button as={Link} to="/studies" variant="primary" aria-label="Learn about case studies">
                  Learn More
                </Button>
              </p>
            </Container>
          </Col>
          <Col
            className={`${styles.colImageWrapper} d-none d-lg-block p-0 h-100 w-100`}
            style={{'backgroundImage': `url('${jorge}')`}}
            lg={6}
          >
            <Image className={styles.colImage} src={jorge} alt={""} />
          </Col>
        </Row>
        <Row className={styles.hero}>
          <Col 
            className="p-0 h-100"
            xs={{ span: 12, order: "last" }}
            lg={{ span: 6, order: "first" }}
          >
            <Image className={styles.colImage} src={mapImage} alt={""} />
          </Col>
          <Col
            className={`${styles.map} ${styles.colText} p-0 d-flex flex-column justify-content-center align-text`}
            style={{
              backgroundImage: `url(${symbol})`,
            }}
            xs={12}
            lg={6}>
            <Container>
              <h2>
                CORAbot’s map integration depicts currents needs and available
                resources.
              </h2>
              <p>
                <Button as={Link} to="/map" variant="primary" aria-label="View the map tool">
                  Learn More
                </Button>
              </p>
            </Container>
          </Col>
        </Row>
      </Container>
      <Footer id="t"></Footer>
    </>
  );
};
