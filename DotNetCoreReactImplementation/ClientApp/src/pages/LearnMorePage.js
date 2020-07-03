import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import { AppBar } from "../components/AppBar";

export const LearnMorePage = () => {
  return (
    <>
      <AppBar></AppBar>
      <Container fluid as="main">
        <Row as="section">
          <h1>LearnMorePage should go here</h1>
          <h1>
            Visit the map visualization <Link to="/map">here</Link>
          </h1>
        </Row>
      </Container>
    </>
  );
};
