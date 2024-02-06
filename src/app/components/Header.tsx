"use client";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-scroll";

interface INav {
  title: string;
}

const Header: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const navData: INav[] = [
    { title: "Home" },
    { title: "About" },
    { title: "Skills" },
    { title: "Projects" },
    { title: "Contacts" },
  ];

  if (isMobile) {
    return null;
  }

  return (
    <div
      className="flex items-center justify-between bg-transparent md:px-16 md:py-8 bg-gray-100" >
      <p className="text-2xl cursor-pointer font-medium">Everton</p>
      <div className="flex gap-8 text-2xl cursor-pointer font-medium">
        {navData.map((item) => (
          <Link smooth={true} delay={100} duration={1000} key={item.title} to={item.title}>
            <p>{item.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
