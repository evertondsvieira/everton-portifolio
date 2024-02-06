/* eslint-disable react/no-unescaped-entities */
"use client";
import { Fade } from "react-awesome-reveal";

const Phrase: React.FC = () => {
  const phraseData = [
    { text: "If opportunity", color: "text-red-600", delay: 200 },
    { text: `doesn't knock,`, color: "text-gray-400", delay: 400 },
    { text: "build a door", color: "text-blue-500", delay: 600 },
  ];

  return (
    <div className="flex flex-col items-center justify-center font-extrabold min-h-screen gap-8 text-white">
      {phraseData.map((item) => (
        <Fade key={item.text} direction="up" delay={item.delay} className="w-full">
          <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl ${item.color} tracking-widest uppercase text-center`}>
            { item.text }
          </h1>
        </Fade>
      ))}
    </div>
  );
};

export default Phrase;
