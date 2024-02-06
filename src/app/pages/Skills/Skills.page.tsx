"use client";
import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiExpo,
  SiStyledcomponents,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiDjango,
  SiDocker,
  SiGit,
  SiGithub,
  SiVercel,
} from "react-icons/si";
import { Fade } from "react-awesome-reveal";
import { Container } from "../../components/Container";

interface ISkills {
  name: string;
  icon: React.ComponentType<any>;
  color: string;
}

const Skills: React.FC = () => {
  const dataSkills: ISkills[] = [
    { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS3", icon: SiCss3, color: "#1572B6" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiVercel, color: "#000000" },
    { name: "Expo", icon: SiExpo, color: "#d1d2d3" },
    { name: "styled-components", icon: SiStyledcomponents, color: "#DB7093" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
    { name: "Node.js", icon: SiNodedotjs, color: "#68A063" },
    { name: "Express", icon: SiExpress, color: "#404040" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
    { name: "Django", icon: SiDjango, color: "#092E20" },
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "GitHub", icon: SiGithub, color: "#181717" },
  ];

  return (
    <Container>
      <div
        id="Skills"
        className="flex flex-row items-center justify-start h-auto overflow-x-scroll overflow-y-hidden md:overflow-hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-8 w-full md:min-h-screen"
      >
        {dataSkills.map((item) => (
          <Fade key={item.name} direction="up" delay={500}>
            <div
              className={`flex flex-col items-center justify-center p-32 md:p-8 h-96 m-5 rounded-lg overflow-hidden`}
              style={{ backgroundColor: item.color }}
            >
              <item.icon size={48} className="text-white mb-4" />
              <p className="text-white text-2xl font-semibold">{item.name}</p>
            </div>
          </Fade>
        ))}
      </div>
    </Container>
  );
};

export default Skills;
