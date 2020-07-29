import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import mapImage from "../assets/map-screenshot.png";
import jorge from "../assets/old-man-portrait 2.png";
import { AppBar } from "../components/AppBar";
import { Footer } from "../components/Footer";
import styles from "./HomePage.module.css";

import symbol from "../assets/Symbol.svg"; 

export const HomePage = () => {
  return (
    <>
      <AppBar></AppBar>
      <Container fluid as="main">
        <Row className={`${styles.hero} ${styles.banner}`}
          style={{
            'backgroundImage': `url(${symbol})`
          }}
        >
          <h1>What is CORAbot?</h1>
          <p>
            CORAbot, a Community Operations Resource Agent (CORA), is an SMS-bot designed to address one of the biggest
            challenges communities face - how to connect those with needs to available resources. With a customizable
            modular framework, CORAbot can accelerate any nonprofit or community organization’s long or short-term goals.
          </p>
        </Row>
        <Row className={styles.hero}>
          <Col
            className={`${styles.meetCora} ${styles.colText} d-none d-lg-flex p-0 flex-column justify-content-center`}
            lg={6}
          >
            <Container>
              <h2>
                Learn how CORAbot can be customized for any cause.
              </h2>
              <p>
                <Button as={Link} to="/studies" variant="primary">
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
            <Image className={styles.colImage} src={jorge} />
          </Col>
          <Col
            className={`${styles.colText} ${styles.colImageWrapper} p-0 d-flex d-lg-none flex-column justify-content-center`}
            style={{'backgroundImage': `url('${jorge}')`}}
            xs={12}
          >
            <Container>
                <h2>
                  Learn how CORAbot can be customized for any cause.
                </h2>
                <p>
                  <Button as={Link} to="/studies" variant="primary">
                    Learn More
                  </Button>
                </p>
              </Container>
          </Col>
        </Row>
        <Row className={styles.hero}>
          <Col 
            className="p-0 h-100"
            xs={{ span: 12, order: "last" }}
            lg={6}
          >
            <Image className={styles.colImage} src={mapImage} />
          </Col>
          <Col
            className={`${styles.map} ${styles.colText} p-0 d-flex flex-column justify-content-center align-text`}
            style={{
              'backgroundImage': `url(${symbol})`
            }}
            xs={12}
            lg={6}
          >
            <Container>
              <h2>
                CORAbot’s map integration depicts currents needs and available resources.
              </h2>
              <p>
                <Button as={Link} to="/map" variant="primary">
                  Learn More
                </Button>
              </p>
            </Container>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </>
  );
};
