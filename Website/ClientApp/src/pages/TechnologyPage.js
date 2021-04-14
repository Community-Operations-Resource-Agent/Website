import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { AppBar } from "../components/AppBar";
import { Footer } from "../components/Footer";
import { PageHeading } from "../components/PageHeading";
import styles from "./TechnologyPage.module.css";
import HalfLogo from "../assets/HalfLogo.svg";
import Architecture from "../assets/technology/CORA_Architecture.jpg";
import Icon_SMS from "../assets/technology/icon_SMS.svg";
import Icon_Cog from "../assets/technology/icon_cognitiveServices.svg";
import Icon_Website from "../assets/technology/icon_website.svg";
import Icon_Map from "../assets/technology/icon_map.svg";
import Tech_Phone from "../assets/technology/tech_phone.svg";

export const TechnologyPage = () => {

  const [isTabletPortrait, setIsTabletPortrait] = useState(window.matchMedia("(min-width:641px)").matches);
  const [isTabletLandscape, setIsTabletLandscape] = useState(window.matchMedia("(min-width:961px)").matches);
  const [isDesktop, setIsDesktop] = useState(window.matchMedia("(min-width:1025px)").matches);

  useEffect(() => {
    const isTabletPortraitHandler = (e) => setIsTabletPortrait(e.matches);
    const isTabletLandscapeHandler = (e) => setIsTabletLandscape(e.matches);
    const isDesktopHandler = (e) => setIsDesktop(e.matches);

    window.matchMedia("(min-width:641px").addListener(isTabletPortraitHandler);
    window.matchMedia("(min-width:961px)").addListener(isTabletLandscapeHandler);
    window.matchMedia("(min-width:1025px)").addListener(isDesktopHandler);

    return () => {
      window.matchMedia("(min-width:641px").removeListener(isTabletPortraitHandler);
      window.matchMedia("(min-width:961px)").removeListener(isTabletLandscapeHandler);
      window.matchMedia("(min-width:1025px)").removeListener(isDesktopHandler);
    }
  });

  const stack = [
    {
      icon: <img src={Icon_SMS} />,
      name: 'SMS bot Capabilities',
      description: 'We have a freely available implementation of a SMS bot using Microsoft’s Bot Framework and '
        + 'cognitive services. There are many benefits to having a SMS bot in this space, including enabling '
        + 'anyone with access to SMS to get help, being able to ask a ‘computer’ for help (for those who are '
        + 'reluctant, they’re sometimes more willing to put in an automated request), automatic translation '
        + '(‘sending’ and ‘receiving’ can be done in different languages!) and the ability to automatically '
        + 'scale-up as the need grows.'
    },
    {
      icon: <img src={Icon_Cog} />,
      name: 'Cognitive Services',
      description: 'The bot can send and receive messages in 60+ languages with automatic translation happening '
        + 'via Microsoft’s Cognitive Services. The bot already has built-in dialog flows to connect with users, '
        + 'request resources and connect those resources with people and organizations who need them.'
    },
    {
      icon: <img src={Icon_Website} />,
      name: 'Website',
      description: 'We already have an implementation of a website – this is provided as an example to see how '
        + 'the scenario can work together end to end.  We are using a combination of React, ASP.Net Core and Bing '
        + 'Map APIs together to create a functional and easy to adapt solution for the Cora reference implementation.' 
    },
    {
      icon: <img src={Icon_Map} />,
      name: 'Map',
      description: 'It also includes map integration to visualize (in a privacy-preserving way) the supply & demand '
        + 'for connecting resources for Covid19. Map integration capability has privacy preserving features to fit '
        + 'both pubic view and an organization’s specific operational pictures. Locations have been anonymized and are '
        + 'approximate.'
    }
  ]

  const heading = {
    title: 'Technology',
    subtitle: 'CORAbot can be repurposed to fit with any organization’s specific requirements.',
    paragraphs: [
      'CORAbot is built on a modular approach to allow individual capabilities to be deployed as needed. '
        + 'The solution is comprised of MS Bot Framework with Twilio integration supported by Language '
        + 'Translation with Microsoft Cognitive services and Cosmos DB backend services.',
      'The solution can also instantly match resource providers with the nearest person in need. '
        + 'CORAbot can also be plugged into pre-existing web-based applications such as Microsoft Teams or '
        + 'Dynamics via connectors built by the Project CORA team.',
      'Our team is currently working on automating deployment, associated documentation of the solution, '
        + 'web crawling capabilities, advanced conversation flows, and identity integration.'
    ]
  }

  return (
    <>
      <AppBar></AppBar>
      <Container fluid as="main" id='main'>
        <Row className={styles.heading}>
          <Col className='p-5'>
            <h1>
              {heading.title}
            </h1>
            <h2 className='mt-5 mb-5'>
              {heading.subtitle}
            </h2>
            {heading.paragraphs.map((paragraph) => (
              <p className='my-5'>
                {paragraph}
              </p>
            ))}
          </Col>
          <Col md={5} className='p-5'>
            <img src={HalfLogo} alt={'CORA Logo'} />
          </Col>
        </Row>
        <Row className={styles.techImage}> {/* the tech image here */}
          <div className={styles.techImageWrapper}>
            <img src={Architecture} width="60%" alt={'Architecture Diagram'} />
          </div>
          <div className={styles.techImageBoxes} style={{'top': '300px','left': '-187px'}} />
          <div className={styles.techImageBoxes} style={{'top': '50px', 'left': '922px'}} />
        </Row>
        <Row className='p-5'>
          {stack.map((item) => (
            <Row className={`my-4 ${styles.stackRow}`}>
              <Col xs={2} className={styles.stackIcon}>
                {item.icon}
              </Col>
              <Col className={`px-5 py-4 ${styles.stackContent}`}>
                <div className={styles.stackName}>
                  {item.name}
                </div>
                <div className={styles.stackDescription}>
                  {item.description}
                </div>
              </Col>
            </Row>
          ))}
        </Row>
        <Row className={`p-5 ${styles['section-moving-forward']}`}>
          <h3 className='my-5'>
            Moving Forward
          </h3>
          <p className='my-5'>
            As resources come available, our team plans to integrate additional technologies like Power 
            Virtual Agents or Bot Composer. These technologies will enable non-profits to modify the bot’s 
            behavior in a low-code manner. This is especially useful for non-profits who may not have a 
            software engineering team but still want to leverage the reference implementation for their 
            scenario. Although today all the conversation flows are built in C# (code-based) using Bot 
            Framework, with minimal changes, we can pivot the code to handle other humanitarian-based scenarios.
          </p>
          <p className='my-5'>
            Our team is currently partnering with a disaster response NGO to automate identifying community 
            resources by using web-crawling capabilities. We are open to partnering with any NGO with 
            specific needs.
          </p>
        </Row>
        <Row className={`p-5 ${styles['section-scenarios']}`}>
          <Col style={{'background': `url(${Tech_Phone})`, 'border-radius': '5px'}}>
          </Col>
          <Col className={styles['scenarios-content']}>
            <p className='my-5'>
              Check out scenarios here.
            </p>
            <Button style={{'border': '2px solid #52C6D9', 'background': 'none', 'color': 'black'}}>
              Learn More
            </Button>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </>
  );
};
