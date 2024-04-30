'use client';

import { Footer, Navbar } from "../../components";
import ContactForm from "./contact-form";
import Hero from "./hero";
import Projects from "./projects";
import Resume from "./resume";
import Skills from "./skills";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Resume />
      <Footer />
    </>
  );
}
