/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { Container } from "../../components/Container";

const About: React.FC = () => {
  return (
    <Container bgColor={true}>
      <div
        id="About"
        className="flex flex-col w-full min-h-screen gap-12 justify-center"
        style={{ backgroundColor: "#fafafa" }}
      >
        <div className="flex flex-col md:flex-row gap-8 w-full items-center justify-center">
          <div className="flex flex-col gap-8">
            <Fade direction="up" delay={400}>
              <h2 className="text-4xl font-medium text-center sm:text-start">
                Greetings!
              </h2>
              <div className="flex flex-col gap-4">
                <Image
                  src="/perfil.jpg"
                  alt="Foto de Perfil Everton Vieira"
                  width={0}
                  height={400}
                  quality={100}
                  sizes="100vw"
                  className="rounded-lg h-[540px] object-cover md:object-none w-full"
                />
                <h1 className="text-2xl">~That's me</h1>
              </div>
            </Fade>
            <div className="flex flex-row gap-8 items-center w-full">
              <Fade direction="up" delay={500}>
                <div className="flex flex-col">
                  <p className="text-2xl text-justify gap-4">
                    I'm a 24-year-old Full Stack Developer with expertise in
                    Front End and Back End development, trained at Kenzie
                    Academy. Proficient in agile methodologies like SCRUM, I've
                    successfully delivered numerous group and individual
                    projects. My skills encompass HTML5, CSS3, JavaScript
                    (ES6+), TypeScript, React, Node.js, Python (Django), and
                    databases. Currently pursuing System Analysis at Federal
                    University of Paraná.
                  </p>
                </div>
              </Fade>
            </div>
            <div className="flex flex-row gap-8 items-center">
              <Fade direction="up" delay={500}>
                <div className="flex flex-col gap-4">
                  <p className="text-2xl text-justify">
                    My aspirations include completing college, specializing
                    further, and fostering my personal and professional growth.
                    I am a passionate learner, thriving on new challenges.
                    Embracing challenges is not just overcoming obstacles; it's
                    discovering hidden potentials. Expect from me an
                    enthusiastic, curious problem-solver committed to continuous
                    improvement, unafraid to step beyond comfort zones for
                    lifelong learning. What could I learn from you?
                  </p>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
