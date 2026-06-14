import React from "react";
import "./App.css";
// import Prac from "./Prac";

import Nav from "./PersonalPortfolio/Nav";
import Hero from "./PersonalPortfolio/Hero";
import About from "./PersonalPortfolio/About";
import Project from "./PersonalPortfolio/Project";
import Services from "./PersonalPortfolio/Services";
import Footer from "./PersonalPortfolio/Footer";
import Contact from "./PersonalPortfolio/Contact";

function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Project />
      <Services />
      <Contact />
      <Footer />

      {/* <Prac /> */}
    </div>
  );
}
export default App;
