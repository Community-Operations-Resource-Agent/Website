import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import jorge from "../assets/old-man-portrait 2.png";
import { AppBar } from "../components/AppBar";
import { Footer } from "../components/Footer";
import styles from "./NeedsPage.module.css";

export const NeedsPage = () => {
    return (
        <>
            <AppBar></AppBar>
            <Container fluid as="main">
                <Row as="section" className={styles.hero}>
                    <Col
                        className={`${styles.meetCora} p-0 d-flex flex-column justify-content-center align-text`}
                    >
                        <Container className=" text-left text-light p-5">
                            <h1>Have a need, Meet a need</h1>
                            <p>
                                Meet Jorge. <br /> Jorge currently does not have access to food
                or prescription medicine. Due to the COVID-19 pandemic, he
                cannot leave the house because he is immunocompromised.
              </p>
                            <p>
                                More importantly, he is not the only one going through this
                situation…​{" "}
                            </p>
                            <p>
                                Jorge is just one of the millions of men, women and children who
                                are struggling to get food, medicine, and basic services.
              </p>
                        </Container>
                    </Col>

                    <Col className="p-0 h-100 w-100">
                        <Image className={styles.colImage} src={jorge} />
                    </Col>
                </Row>
                <Container className="p-5">
                    <h2>COVID Needs</h2>
                    <Row as="section" className="justify-content-center">
                        <Container className="p-5">
                            <h3 className="text-primary">Medical Supplies</h3>
                            <p>
                                Medical Supplies Common needed medical supplies are N-95 masks
                                and face shields, eye protection, gloves, cotton swabs, hand
                                sanitizer, respiration tubes, ventilators, wipes/soaps, and
                                more.
              </p>
                            <p>
                                The specific medical supplies needed change depending on the
                                area and levels of accessibility. For instance, rural areas and
                                makeshift hospitals have shown a strong need for disinfectant
                                supplies, differing from urban areas.
              </p>
                        </Container>
                    </Row>

                    <Row as="section" className="justify-content-center">
                        <Container className="p-5">
                            <h3 className="text-primary">Medical Supplies</h3>
                            <p>
                                Medical Supplies Common needed medical supplies are N-95 masks
                                and face shields, eye protection, gloves, cotton swabs, hand
                                sanitizer, respiration tubes, ventilators, wipes/soaps, and
                                more.
              </p>
                            <p>
                                The specific medical supplies needed change depending on the
                                area and levels of accessibility. For instance, rural areas and
                                makeshift hospitals have shown a strong need for disinfectant
                                supplies, differing from urban areas.
              </p>
                        </Container>
                    </Row>
                    <Row as="section" className="justify-content-center">
                        <Container className="p-5">
                            <h3 className="text-primary">Medical Supplies</h3>
                            <p>
                                Medical Supplies Common needed medical supplies are N-95 masks
                                and face shields, eye protection, gloves, cotton swabs, hand
                                sanitizer, respiration tubes, ventilators, wipes/soaps, and
                                more.
              </p>
                            <p>
                                The specific medical supplies needed change depending on the
                                area and levels of accessibility. For instance, rural areas and
                                makeshift hospitals have shown a strong need for disinfectant
                                supplies, differing from urban areas.
              </p>
                        </Container>
                    </Row>
                    <Row as="section" className="justify-content-center">
                        <Container className="p-5">
                            <h3 className="text-primary">Medical Supplies</h3>
                            <p>
                                Medical Supplies Common needed medical supplies are N-95 masks
                                and face shields, eye protection, gloves, cotton swabs, hand
                                sanitizer, respiration tubes, ventilators, wipes/soaps, and
                                more.
              </p>
                            <p>
                                The specific medical supplies needed change depending on the
                                area and levels of accessibility. For instance, rural areas and
                                makeshift hospitals have shown a strong need for disinfectant
                                supplies, differing from urban areas.
              </p>
                        </Container>
                    </Row>
                </Container>
            </Container>
            <Footer></Footer>
        </>
    );
};