import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import { AppBar } from "../components/AppBar";
import { Footer } from "../components/Footer";
import styles from "./FaqPage.module.css";

export const FaqPage = () => {
    return (
        <>
            <AppBar></AppBar>
            <Container fluid as="main">
                <Row as="section" className=" text-light backgroundPrimary">
                    <Container className="p-5 text-left">
                        <h2>Frequently Asked Questions</h2>
                        <p>
                            Since the launch of Project CORA and the creation of CORAbot, we
                            have presented their work at various During these presentations,
                            we have received reoccurring questions about the framework
                            supporting CORA and the project’s longevity. More information can
                            be found below.
            </p>
                    </Container>
                </Row>
                <Row as="section">
                    <Container className="p-5 text-left">
                        <h3>
                            Is CORAbot only for COVID or can I use it for other supplies?
            </h3>
                        <p>
                            CORAbot can be used for any community purpose. Whether it is
                            finding employment resources to mental health services, CORAbot is
                            here to help. The technology used to create CORAbot is open
                            sourced so any NGO or advocate specific to a cause, can create a
                            resource that will help them in their work
            </p>
                    </Container>
                </Row>
                <Row as="section">
                    <Container className="p-5 text-left">
                        <h3>What kind of languages do you support?</h3>
                        <p>
                            CORAbot, with its natural language SMS text bot, is fluent in more
                            than 60 languages. It interacts with vetted organizations to track
                            and match supplies they have available to help those in need,
                            orchestrating fulfillment in a manner that preserves the privacy
                            of everyone involved.
            </p>
                    </Container>
                </Row>
                <Row as="section">
                    <Container className="p-5 text-left">
                        <h3>What organizations have already deployed the solution?</h3>
                        <p>
                            Our partner, Team Rubicon, has deployed “Agent Remi” to help
                            assist with their direct volunteer effort. Based on CORAbot’s
                            structure, “Agent Remi” is the first of many examples in how
                            CORAbot can be adapted for an organization’s specific cause. The
                            Project CORA accelerator is on Github with shareable code and we
                            will work with several NGOs (starting with Team Rubicon) and use
                            it to help their constituents.
            </p>
                    </Container>
                </Row>
                <Row as="section">
                    <Container className="p-5 text-left">
                        <h3>Who is the next partner/client following Team Rubicon?</h3>
                        <p>
                            There are others helping in the pandemic who can also use help.
                            We’ve been talking with GetUsPPE.org as well as a team working
                            with hospitals in the UK. We are also continuing to work with Real
                            Escape from Sex Trade (REST) and will leverage some of our
                            improvements back into their model, as they are facing some
                            extreme and resource shortages, and their bot (TIRA) helps
                            understand available needs and resources.
            </p>
                    </Container>
                </Row>
                <Row as="section">
                    <Container className="p-5 text-left">
                        <h3> How will you keep the users’ data private? </h3>
                        <p>
                            Privacy is one of our key design principles and we wired it into
                            the technology wherever possible as well as in the deployment
                            approach. We share as little information as is necessary and only
                            with permission from the people who own it, putting them in
                            control of their own data. For example, a background checked TR
                            volunteer can receive an address to drop groceries at, but they
                            get no additional information about the recipient and their needs.
                            Our bot is the intermediary that protects users’ privacy.
            </p>
                    </Container>
                </Row>
                <Row as="section">
                    <Container className="p-5 text-left">
                        <h3>What about accessibility?</h3>
                        <p>
                            We want CORAbot to help as many people as possible.This is why we
                            are looking at speech to text capabilities, and text to speech so
                            that our bot can communicate with anyone. We are also looking at
                            IVR phone systems for those who dial in from a landline or a
                            payphone.
            </p>
                    </Container>
                </Row>
                <Row as="section">
                    <Container className="p-5 text-left">
                        <h3>Is it okay if I take the solution and sell it?</h3>
                        <p>
                            No. The Project CORA team created CORAbot to assist with NGO
                            efforts in mind. The goal is to create an open sourced community
                            of technology where NGOs and other advocates can use the
                            genericized information and adapt it to their cause. We want
                            CORAbot to be a free and accessible resource to everyone.
            </p>
                    </Container>
                </Row>
                <Row as="section">
                    <Container className={`p-5`}>
                        <h2 className={`${styles.textColorPrimary} `}>
                            Your Question Not Answered?
            </h2>
                        <p className={`${styles.textColorPrimary} `}>
                            Reach out to us by filling out the contact form, and we will be
                            back in touch as soon as we can!
            </p>
                        <Button as={Link} to="/contact">
                            Contact Us
            </Button>
                    </Container>
                </Row>
            </Container>
            <Footer></Footer>
        </>
    );
};