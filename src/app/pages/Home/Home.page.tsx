"use client";
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Fade } from "react-awesome-reveal";
import Header from "@/app/components/Header";

const HomePage: React.FC = () => {
  return (
    <div className="bg-gray-100">
      <Fade direction="down" delay={900}>
        <Header />
      </Fade>
      <div className="flex flex-col min-h-screen items-center justify-center">
        <div className="p-8 space-y-8 text-center">
          <Fade direction="up" delay={500}>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-black">
              Everton Vieira
            </h1>
          </Fade>
          <Fade direction="up" delay={700}>
            <TypeAnimation
              sequence={[
                "A Front End Developer",
                3000,
                "A Back End Developer",
                3000,
                "A Full Stack Developer",
                3000,
                "A Mobile Developer",
                3000,
              ]}
              wrapper="span"
              speed={50}
              className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-black"
              repeat={Infinity}
            />
          </Fade>
          <Fade direction="up" delay={1100}>
            <p className="flex flex-row gap-2 text-1xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
              I{" "}
              <Fade direction="up" delay={1800}>
                <span className="text-red-500">love</span>
              </Fade>{" "}
              creating and{" "}
              <Fade direction="up" delay={2500}>
                <span className="text-red-500">developing</span>
              </Fade>{" "}
              projects
            </p>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
