import React from "react";
import About from "./pages/About/About.page";
import HomePage from "./pages/Home/Home.page";
import Phrase from "./pages/Phrase/Phrase.page";
import Skills from "./pages/Skills/Skills.page";
import Contact from "./pages/Contact/Contact.page";

export default function Home() {
  return (
    <React.Fragment>
      <HomePage />
      <Phrase />
      <About />
      <Skills />
      <Contact />
    </React.Fragment>
  );
}