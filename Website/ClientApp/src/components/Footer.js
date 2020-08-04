import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

export const Footer = () => {
  const [region, setRegion] = useState("United States");
  const [subscribedSuccess, setSubscribedSuccess] = useState(false);
  const [subscribedFail, setSubscribedFail] = useState(false);

  const { register, handleSubmit, errors } = useForm();
  const subscribe = async (data) => {
    //TODO: debug this because sometimes it  hangs and the  fetch does go through
    const response = await fetch(`forms/subscribe`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();

    result.subscribed ? setSubscribedSuccess(true) : setSubscribedFail(true);
  };

  const links = [
    { to: "/", text: "About CORAbot" },
    { to: "/", text: "Hack For COVID-19" },
    { to: "/", text: "Hack For Good" },
    { to: "/", text: "Contact Us" },
  ];

  return (
    <footer className={styles.footer}>
      <Container className='text-light p-3'>
        <Row>
          <Col as={Container} xs={6} lg={3}>
            <ul>
              {links.map((link, index) => (
                <li key={index}>
                  <Link to={link.to}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </Col>
          <Col as={Container} xs={6} lg={3} className={styles.footerFormCol}>
            <Form>
              <Form.Group controlId='' className={styles.footerFormGroup}>
                <Form.Label>Choose Region:</Form.Label>
                <Dropdown>
                  <Dropdown.Toggle id='dropdown-basic'>
                    {region}
                  </Dropdown.Toggle>
                  <Dropdown.Menu className={styles.footerFormDropdown}>
                    <Dropdown.Item onClick={() => setRegion("United States")}>
                      United States
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => setRegion("Italy")}>
                      Italy
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => setRegion("Spain")}>
                      Spain
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Form.Group>
            </Form>
          </Col>
          <Col xs={12} lg={6} className={styles.footerFormCol}>
            <Form onSubmit={handleSubmit(subscribe)}>
              <Form.Group controlId="EmailSignup" className={styles.footerFormGroup}>
                <Form.Label htmlFor="EmailSignup">Sign up for CORAbot Emails</Form.Label>
                <InputGroup className="mr-sm-2">
                  <Form.Control
                    ref={register({ required: true, minLength: 1 })}
                    name="EmailSignup"
                    type="email"
                    placeholder="Email"
                  />
                  <InputGroup.Append>
                    <Button type="submit" aria-label="Submit Email Sign up">{">"}</Button>
                  </InputGroup.Append>
                </InputGroup>
                {errors.email && <span>This field is required</span>}
                {subscribedSuccess && (
                  <span>You have been added to our mailing list</span>
                )}
                {subscribedFail && (
                  <span>
                    Sorry something went wrong we were unable to add you to our
                    mailing list
                  </span>
                )}
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row className='px-5 justify-content-center'>
          Copyright © 2020 CORAbot USA, All rights reserved.{" "}
          <Link to='/privacy'>Terms of Use | Privacy Policy</Link>
        </Row>
      </Container>
    </footer>
  );
};
