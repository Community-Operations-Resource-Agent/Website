import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { AppBar } from "../components/AppBar";

export const ErrorPage = () => {
  return (
    <>
      <AppBar></AppBar>
      <Container fluid as='main' id='main'>
        <Row as='section'>
          <h1>Error 404: Page Not Found!</h1>
        </Row>
      </Container>
    </>
  );
};
