import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Collapse from "react-bootstrap/Collapse";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { AppBar } from "../components/AppBar";
import { Footer } from "../components/Footer";
import { PageHeading } from "../components/PageHeading";
import styles from "./TechnologyPage.module.css";

export const TechnologyPage = () => {
    const StackRow = ({ stack }) => {
        const [activeIndex, setIndex] = useState(-1);
        const [open, setOpen] = useState(false);

        const toggleCollapse = (index) => {
            if (activeIndex === index) {
                setOpen(false);
            } else if (activeIndex === -1) {
                setIndex(index);
                setOpen(true);
            } else {
                setOpen(false);
                new Promise(resolve => setTimeout(resolve, 600)).then(() => {
                    setIndex(index);
                    setOpen(true);
                });
            }
        }

        return (
            <>
                <Row className={styles.stackRow}>
                    {stack.map((element, index) => (
                        <Col 
                            key={index} 
                            onClick={() => {
                                toggleCollapse(index);
                            }}
                            onKeyDown={(e) => {
                                if (e.keyCode === 13 || e.keyCode === 32) { // enter or space key
                                toggleCollapse(index);
                                }
                            }}
                            tabIndex={0}
                            role={"button"}
                            aria-expanded={index === activeIndex}
                        >
                            <span className={styles.stackIcon} style={{'background': element.color}}>
                                {element.icon}
                            </span>
                            <div className={styles.stackName}>
                                {element.name}
                            </div>
                        </Col>
                    ))}
                </Row>
                <Collapse 
                    in={open}
                    onExited={() => setIndex(-1)}
                    aria-hidden={!open}
                >
                    <div>
                        <div className={styles.collapsibleWrapper}>
                            <span className={styles.stackIcon} style={{'background': stack[Math.max(activeIndex, 0)].color}}>
                                {stack[Math.max(activeIndex, 0)].icon}
                            </span>
                            <div className={styles.stackName}>
                                {stack[Math.max(activeIndex, 0)].name}
                            </div>
                            <div>
                                {stack[Math.max(activeIndex, 0)].description}
                            </div>
                        </div>
                    </div>
                </Collapse>  
            </>  
        );
    };
    // icons from icons8, not final
    const stack = [
        {
            name: 'MS Bot Framework',
            color: 'blue',
            icon: // Material Sharp →Profile → Generic Users→ User
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" fill="white">
                    <path d="M 12 3 A 4 4 0 0 0 8 7 A 4 4 0 0 0 12 11 A 4 4 0 0 0 16 7 A 4 4 0 0 0 12 3 z M 12 14 C 8.996 14 3 15.508 3 18.5 L 3 21 L 21 21 L 21 18.5 C 21 15.508 15.004 14 12 14 z"></path>
                </svg>,
            description: 'This framework provides CORAbot with a straightforward interactive experience when using the bot. '
                + 'By leveraging its built-in conversational AI experience, CORAbot will soon have features that will allow '
                + 'the bot to speak with users, creating an accessible experience for all.'
        }, {
            name: 'Twilio',
            color: 'LightSkyBlue',
            icon: // Windows 10 →Mobile → Messages→ SMS
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="50" fill="white">
                    <path d="M 4 4 L 4 20 L 8 20 L 8 24 L 17.648438 24 L 24 29.080078 L 24 24 L 28 24 L 28 8 L 24 8 L 24 4 L 4 4 z M 6 6 L 22 6 L 22 8 L 8 8 L 8 9 L 8 18 L 6 18 L 6 6 z M 10 10 L 26 10 L 26 22 L 22 22 L 22 24.917969 L 18.351562 22 L 10 22 L 10 10 z M 15 13 A 1 1 0 0 0 15 15 A 1 1 0 0 0 15 13 z M 21 13 A 1 1 0 0 0 21 15 A 1 1 0 0 0 21 13 z M 15.607422 17.205078 L 14.392578 18.794922 C 14.392578 18.794922 15.914756 20 18 20 C 20.085244 20 21.607422 18.794922 21.607422 18.794922 L 20.392578 17.205078 C 20.392578 17.205078 19.296756 18 18 18 C 16.703244 18 15.607422 17.205078 15.607422 17.205078 z"></path>
                </svg>,
            description: 'This capability allows CORAbot to have a global reach through SMS messaging, email, and voice '
                + 'integration, where millions can be contacted using the Twilio managed framework.'
        }, {
            name: 'Cosmos DB',
            color: 'MediumAquaMarine',
            icon: // iOS Filled →Data → Database Operations→ Database
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50" fill="white">
                    <path d="M 25.001953 0 C 12.439953 -1.1842379e-15 4 4.6530469 4 8.9980469 C 4 13.345047 12.439953 18 25.001953 18 C 37.562953 18 46 13.345047 46 8.9980469 C 46 4.6530469 37.562953 0 25.001953 0 z M 4 13.609375 L 4 19.150391 C 4 23.424391 12.439953 28 25.001953 28 C 37.562953 28 46 23.424391 46 19.150391 L 46 13.609375 C 42.328 17.363375 34.412953 20 25.001953 20 C 15.588953 20 7.673 17.362375 4 13.609375 z M 4 23.910156 L 4 29.195312 C 4 33.468312 12.439953 38 25.001953 38 C 37.562953 38 46 33.467313 46 29.195312 L 46 23.910156 C 42.328 27.662156 34.412953 30 25.001953 30 C 15.588953 30 7.673 27.662156 4 23.910156 z M 4 33.955078 L 4 39.150391 C 4 43.423391 12.439953 48 25.001953 48 C 37.562953 48 46 43.423391 46 39.150391 L 46 33.955078 C 42.328 37.708078 34.412953 40 25.001953 40 C 15.588953 40 7.673 37.708078 4 33.955078 z"></path>
                </svg>,
            description: 'This NoSQL database allows CORAbot to be deployed with the same level of speed at any scale, '
                + 'while ensuring information integrity and security.'
        }, {
            name: 'Dynamics',
            color: 'MediumSeaGreen',
            icon: // Windows 10 →Popular → Common Actions→ Refresh
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="50" fill="white">
                    <path d="M 16 4 C 10.886719 4 6.617188 7.160156 4.875 11.625 L 6.71875 12.375 C 8.175781 8.640625 11.710938 6 16 6 C 19.242188 6 22.132813 7.589844 23.9375 10 L 20 10 L 20 12 L 27 12 L 27 5 L 25 5 L 25 8.09375 C 22.808594 5.582031 19.570313 4 16 4 Z M 25.28125 19.625 C 23.824219 23.359375 20.289063 26 16 26 C 12.722656 26 9.84375 24.386719 8.03125 22 L 12 22 L 12 20 L 5 20 L 5 27 L 7 27 L 7 23.90625 C 9.1875 26.386719 12.394531 28 16 28 C 21.113281 28 25.382813 24.839844 27.125 20.375 Z"></path>
                </svg>,
            description: 'This framework allows for CORAbot components to be seamlessly integrated and smoothly '
                + 'orchestrated, providing an overall application that is unified and cohesive.'
        }, {
            name: 'Cognitive Services',
            color: 'LightSteelBlue',
            icon: // iOS Filled →Ecommerce → Product Type→ Intelligence
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50" fill="white">
                    <path d="M 23 0 C 7.515625 0 2 10.847656 2 21 C 2 25.265625 3.28125 29.378906 5.6875 32.875 C 7.863281 36.039063 9 39.589844 9 43.1875 L 9 50 L 33 50 L 33 44.78125 L 35 44.90625 C 39.878906 45.355469 44 41.449219 44 36.59375 L 44 31.8125 L 47.5 30.0625 C 48.171875 29.691406 48.640625 29.101563 48.84375 28.375 C 49.042969 27.652344 48.941406 26.871094 48.5625 26.1875 L 43.96875 18.28125 C 42.480469 6.324219 35.234375 0 23 0 Z M 20.5 7 L 23.5 7 L 24.09375 10.5 C 24.992188 10.699219 25.800781 11.101563 26.5 11.5 L 29.40625 9.40625 L 31.5 11.5 L 29.40625 14.5 C 29.90625 15.300781 30.207031 16.105469 30.40625 16.90625 L 34 17.5 L 34 20.5 L 30.40625 21 C 30.207031 21.898438 29.804688 22.707031 29.40625 23.40625 L 31.5 26.3125 L 29.40625 28.40625 L 26.40625 26.3125 C 25.605469 26.710938 24.800781 27.113281 24 27.3125 L 23.40625 30.90625 L 20.40625 30.90625 L 19.8125 27.40625 C 18.914063 27.207031 18.105469 26.804688 17.40625 26.40625 L 14.5 28.5 L 12.40625 26.40625 L 14.5 23.5 C 14.101563 22.800781 13.699219 21.992188 13.5 21.09375 L 10 20.5 L 10 17.5 L 13.59375 16.8125 C 13.792969 15.914063 14.195313 15.105469 14.59375 14.40625 L 12.5 11.5 L 14.59375 9.40625 L 17.5 11.5 C 18.199219 11 19.007813 10.699219 19.90625 10.5 Z M 22 15 C 19.800781 15 18 16.800781 18 19 C 18 21.199219 19.800781 23 22 23 C 24.199219 23 26 21.199219 26 19 C 26 16.800781 24.199219 15 22 15 Z"></path>
                </svg>,
            description: 'These services allow CORAbot to have straightforward and simple configuration management based on '
                + 'built-in AI capabilities.'
        }, {
            name: 'Bing Language Translation',
            color: 'DodgerBlue',
            icon: // Windows Metro →Editing → Text Editing→ Translation
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" width="50" fill="white">
                    <path d="M 2 0 C 1.476563 0 0.941406 0.183594 0.5625 0.5625 C 0.183594 0.941406 0 1.476563 0 2 L 0 16 C 0 16.523438 0.183594 17.058594 0.5625 17.4375 C 0.941406 17.816406 1.476563 18 2 18 L 8 18 L 8 24 C 8 25.101563 8.898438 26 10 26 L 24 26 C 25.101563 26 26 25.101563 26 24 L 26 10 C 26 8.898438 25.101563 8 24 8 L 18 8 L 18 2 C 18 1.476563 17.816406 0.941406 17.4375 0.5625 C 17.058594 0.183594 16.523438 0 16 0 Z M 24 0 L 21 3 L 24 6 Z M 2 2 L 16 2 L 16 9 L 9 16 L 2 16 Z M 8 4 L 8 5 L 4 5 L 4 7 L 10.71875 7 C 10.242188 8.082031 9.425781 9.007813 8.5625 9.78125 C 8.511719 9.746094 8.457031 9.722656 8.40625 9.6875 C 7.515625 9.074219 7 8.351563 7 8 L 5 8 C 5 9.371094 5.925781 10.328125 6.90625 11.0625 C 5.714844 11.847656 4.71875 12.28125 4.71875 12.28125 L 5.46875 14.125 C 5.46875 14.125 7.09375 13.53125 8.84375 12.25 C 9.398438 12.519531 9.90625 12.71875 10.28125 12.84375 L 10.90625 10.9375 C 10.824219 10.910156 10.648438 10.828125 10.53125 10.78125 C 11.507813 9.773438 12.382813 8.511719 12.84375 7 L 14 7 L 14 5 L 10 5 L 10 4 Z M 16.3125 12.59375 L 18.6875 12.59375 L 22 22 L 19.8125 22 L 19.09375 19.8125 L 15.6875 19.8125 L 15.09375 22 L 13 22 Z M 17.5 14.09375 C 17.398438 14.59375 17.011719 15.988281 16.3125 18.1875 L 18.6875 18.1875 C 18.085938 16.1875 17.695313 15.011719 17.59375 14.8125 C 17.492188 14.414063 17.5 14.195313 17.5 14.09375 Z M 2 20 L 2 26 L 5 23 Z"></path>
                </svg>,
            description: 'This framework allows for CORAbot to be as widespread and effective as possible in raising '
                + 'awareness about the services it can provide. With the ability to communicate in over 60 different '
                + 'languages, CORAbot is ready to help anywhere and everywhere it can.'
        }
    ];

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

    const groupSize = (isDesktop)
        ? 6
        : (isTabletLandscape)
            ? 3
            : (isTabletPortrait)
                ? 2
                : 1;

    return (
        <>
            <AppBar></AppBar>
            <Container fluid as="main" id='main'>    
                <PageHeading
                    title={'The Technology Behind CORAbot'}
                    subtitle={
                        'CORAbot was built using MS Bot Framework, with Twilio integration, supported by ' +
                        'Cosmos DB and Dynamics backend services. With triggers, the solution can instantly ' +
                        'match resource providers with the nearest person in need. CORAbot can also be plugged ' +
                        'into pre-existing web-based applications such as Microsoft Teams or Dynamics via ' +
                        'connectors built by the Project CORA team.'
                    }
                    invert
                />
                {stack
                    .reduce((r, item, index) => {
                        // create element groups with size of groupSize, result looks like:
                        // [[elem1, elem2, elem3], [elem4, elem5, elem6], ...]
                        if (index % groupSize === 0) {
                            r.push([]);
                        }
                        r[r.length - 1].push(item);

                        return r;
                    }, [])
                    .map((row, index) => {
                        return <StackRow stack={row} key={index} />;
                    })}
            </Container>
            <Footer></Footer>
        </>
    );
};
