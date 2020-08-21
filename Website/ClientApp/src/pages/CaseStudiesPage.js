import React, { useState, useEffect, useContext } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Accordion from "react-bootstrap/Accordion";
import AccordionContext from 'react-bootstrap/AccordionContext';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import Symbol from "../assets/Symbol.svg";
import { AppBar } from "../components/AppBar";
import { Footer } from "../components/Footer";
import { PageHeading } from "../components/PageHeading";
import styles from "./CaseStudiesPage.module.css";

export const CaseStudiesPage = () => {
  const sections = [
    {
      heading: "COVID-19 Relief Efforts",
      content: () => (
        <React.Fragment>
          <p>
            CORAbot is partnered with an international nonprofit organization
            who helps provide humanitarian assistance and relief during times of
            crises. By using CORAbot’s design, we created a bot specific to
            their cause and helped assist their direct volunteer efforts during
            the COVID-19 pandemic.
          </p>
          <p>This organization identified the following problems:</p>
          <ol>
            <li>
              Vulnerable individuals requiring critical resources, do not know
              how and where to get help
            </li>
            <li>
              Traditional supply chain methods to connect individuals (and orgs)
              with critical resources have failed to perform with necessary
              speed
            </li>
            <li>
              Medical and assisted living facilities are running out of critical
              supplies, without ability to restock
            </li>
            <li>
              Individuals and organizations with critical supplies are unsure
              about how best to share them
            </li>
          </ol>
          <p>
            While internet-connected communities are able to offer help many of
            those in need, underserved populations without internet access or
            social media continue to struggle for items like food, prescription
            medications, and PPE. This results in dire situations for those most
            vulnerable in our communities.
          </p>
          <h3>How does CORAbot help?</h3>
          <p>
            CORAbot connects volunteers already serving this international
            organization to those in need by scaling the organization’s
            Emergency Food Assistance Program. This bot understands 60
            languages, communicates via SMS, and has a persona to engage clients
            in need, as well as a persona to engage and activate volunteers
            nearby, based on those needs.
          </p>
        </React.Fragment>
      ),
    },
    {
      heading: "Human Trafficking",
      content: () => (
        <React.Fragment>
          <p>
            CORAbot works with a national nonprofit that combats the rise of sex
            trafficking and offers aid survivors. When a victim of exploitation
            has been identified, or when social services organizations are
            reaching out to potential victims, it is difficult to know exactly
            what resources are going to be available to help these individuals
            escape their circumstances.
          </p>
          <h3>How does CORAbot help?</h3>
          <p>
            CORAbot connects survivors with resources in their lcoal area. This
            virtual agent gathers accurate, real-time availability of human
            trafficking survivor services in a manner that is highly sensitive
            to the needs of the humans who provide those critical services. The
            resulting visibility will be rendered to advocates in ways that are
            highly accessible and intuitive.
          </p>
        </React.Fragment>
      ),
    },
  ];

  const renderMobile = () => {
    
    // Wrap Accordion.Toggle and Accordion.Collapse add aria-attributes
    const Toggle = ({ children, eventKey, callback }) => {
      const currentEventKey = useContext(AccordionContext);

      const toggle = useAccordionToggle(
        eventKey,
        callback,
        () => callback(eventKey)
      );

      const isCurrentEventKey = currentEventKey === eventKey;

      return (
        <h2 
          onClick={toggle} 
          onKeyDown={(e) => {
            if (e.keyCode === 13 || e.keyCode === 32) { // enter or space key
              toggle();
            }
          }}
          tabindex="0"
          aria-expanded={isCurrentEventKey}
        >
          {children}
        </h2>
      );
    };

    const Collapse = ({ children, eventKey }) => {
      const currentEventKey = useContext(AccordionContext);
      const isCurrentEventKey = currentEventKey === eventKey;
      
      return (
        <Accordion.Collapse 
          eventKey={eventKey}
          aria-hidden={!isCurrentEventKey}
        >
          {children}
        </Accordion.Collapse>
      );
    };

    return (
      <Accordion defaultActiveKey="0">
        {sections.map((section, index) => (
          <Row className={styles.sectionMobile} key={index}>
            <Toggle eventKey={`${index}`}>
              {section.heading}
            </Toggle>
            <Collapse eventKey={`${index}`}>
              {section.content()}
            </Collapse>
          </Row>
        ))}
      </Accordion>
    );
  };

  const renderDesktop = () => (
    <React.Fragment>
      {sections.map((section, index) => (
        <Row className={styles.section} key={index}>
          <h2>{section.heading}</h2>
          {section.content()}
        </Row>
      ))}
    </React.Fragment>
  );

  const [isDesktop, setIsDesktop] = useState(
    window.matchMedia("(min-width:1025px)").matches
  );

  useEffect(() => {
    const isDesktopHandler = (e) => setIsDesktop(e.matches);
    window.matchMedia("(min-width:1025px)").addListener(isDesktopHandler);

    return () => {
      window.matchMedia("(min-width:1025px)").removeListener(isDesktopHandler);
    };
  });

  return (
    <>
      <AppBar></AppBar>
      <Container fluid as="main" id="main">
        <PageHeading
          title={"How has CORAbot helped the community?"}
          subtitle={
            "CORAbot can be repurposed to fit with any organization’s specific requirements."
          }
        />
        <div
          className={styles.main}
          style={
            isDesktop
              ? {
                  backgroundImage: `url(${Symbol})`,
                }
              : {}
          }
        >
          {(isDesktop) ? renderDesktop() : renderMobile()}
        
          <div className={styles.blurb}>
            The widespread scalability of CORAbot will be housed in a Resource Connector for Non-Profits where 
            technology created will be generalized and open sourced, ensuring easy access to all.
          </div>
        </div>
      </Container>
      <Footer></Footer>
    </>
  );
};
