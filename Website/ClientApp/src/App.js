import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { ErrorPage } from "./pages/ErrorPage";
import { FaqPage } from "./pages/FaqPage";
import { HomePage } from "./pages/HomePage";
//import { LandingPage } from "./pages/LandingPage"; // will use after css animation is built
import { TechnologyPage } from "./pages/TechnologyPage";
import { MapPage } from "./pages/MapPage";
import { NeedsPage } from "./pages/NeedsPage";
import { PartnersPage } from "./pages/PartnersPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { CaseStudiesPage } from "./pages/CaseStudiesPage";

/*
.########..########...#######........##.########..######..########....########..#######..########...#######...######.
.##.....##.##.....##.##.....##.......##.##.......##....##....##..........##....##.....##.##.....##.##.....##.##....##
.##.....##.##.....##.##.....##.......##.##.......##..........##..........##....##.....##.##.....##.##.....##.##......
.########..########..##.....##.......##.######...##..........##..........##....##.....##.##.....##.##.....##..######.
.##........##...##...##.....##.##....##.##.......##..........##..........##....##.....##.##.....##.##.....##.......##
.##........##....##..##.....##.##....##.##.......##....##....##..........##....##.....##.##.....##.##.....##.##....##
.##........##.....##..#######...######..########..######.....##..........##.....#######..########...#######...######.
*/

//TODO: fix map grid
//TODO: add tests
//TODO: use semantic html and address accessability
//TODO: build mobile view of pages
//TODO: Decide on icons
//TODO: Fill out About page with images and bios

export const App = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <HomePage />
      </Route>
      <Route exact path='/home'>
        <HomePage />
      </Route>
      <Route exact path='/about'>
        <AboutPage />
      </Route>
      <Route exact path='/partners'>
        <PartnersPage />
      </Route>
      <Route exact path='/needs'>
        <NeedsPage />
      </Route>
      <Route exact path='/studies'>
        <CaseStudiesPage />
      </Route>
      <Route exact path='/technology'>
        <TechnologyPage />
      </Route>
      <Route exact path='/privacy'>
        <PrivacyPage />
      </Route>
      <Route exact path='/faq'>
        <FaqPage />
      </Route>
      <Route exact path='/contact'>
        <ContactPage />
      </Route>
      <Route path='/map'>
        <MapPage />
      </Route>
      <Route path='*'>
        <ErrorPage />
      </Route>
    </Switch>
  );
};
