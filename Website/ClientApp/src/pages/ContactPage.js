import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import { useForm } from "react-hook-form";
import crowdImage from "../assets/crowd.png";
import { AppBar } from "../components/AppBar";
import { Footer } from "../components/Footer";
import styles from "./ContactPage.module.css";

export const ContactPage = () => {
  const [contactSuccess, setContactSuccess] = useState(false);
  const [contactFail, setContactFail] = useState(false);
  const { register, handleSubmit } = useForm();
  const contact = async (data) => {
    //TODO: debug this because sometimes it  hangs and the  fetch does go through
    const response = await fetch(`forms/contact`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    result.contacted ? setContactSuccess(true) : setContactFail(true);
  };

  return (
    <>
      <AppBar></AppBar>
      <Container fluid as='main'>
        <Row as='section' className={`${styles.form} backgroundSecondary`}>
          {/*
           * Sets the div bg and adds blue color filter
           * Inner image sets height
           * Actual filter color TBD
           */}
          <Col
            sm={12}
            xl={6}
            className={styles.colImageWrapper}
            style={{
              backgroundImage: `url(${crowdImage})`,
            }}>
            <Image className={styles.colImage} src={crowdImage} />
          </Col>
          <Col sm={12} xl={6} className={` p-5`}>
            <h2 className={styles.colFormHeader}>Contact Us</h2>
            <Form onSubmit={handleSubmit(contact)}>
              <Form.Group controlId='firstName'>
                <Form.Control
                  name='FirstName'
                  ref={register({ required: true, minLength: 1 })}
                  type='text'
                  placeholder='First Name'
                />
              </Form.Group>
              <Form.Group controlId='lastName'>
                <Form.Control
                  name='LastName'
                  ref={register({ required: true, minLength: 1 })}
                  type='text'
                  placeholder='Last Name'
                />
              </Form.Group>
              <Form.Group controlId='email'>
                <Form.Control
                  name='Email'
                  ref={register({ required: true, minLength: 1 })}
                  type='email'
                  placeholder='Email'
                />
              </Form.Group>
              <Form.Group controlId='formBasicEmail'>
                <Form.Control
                  name='Details'
                  ref={register({ required: true, minLength: 1 })}
                  as='textarea'
                  rows='6'
                  placeholder='Message'
                />
              </Form.Group>
              <Button variant='primary' block type='submit'>
                Send Message
              </Button>
              {contactSuccess && (
                <span>You have been added to our mailing list</span>
              )}
              {contactFail && (
                <span>
                  Sorry something went wrong we were unable to add you to our
                  mailing list
                </span>
              )}
            </Form>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </>
  );
};
