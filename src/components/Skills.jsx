import React from "react";
import html from "../components/image/html.png";
import ssc1 from "../components/image/ssc1.png";
import sj1 from "../components/image/sj1.png";
import areact1 from "../components/image/areact1.png";
import github from "../components/image/github.png";
import tailwind from "../components/image/tailwind.png";

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: ssc1,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: sj1,
      title: "Javascript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: areact1,
      title: "React",
      style: "shadow-sky-300",
    },
    {
      id: 6,
      src: github,
      title: "Github",
      style: "shadow-rose-400",
    },
    {
      id: 7,
      src: tailwind,
      title: "Bootstrap",
      style: "shadow-slate-400",
    },
  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-black to-gray-800 w-full h-full py-20"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        {/* Heading */}
        <div className="mb-8">
          <p className="text-4xl font-bold border-b-4 border-gray-500 inline-block expr">
            Skills
          </p>
          <p className="mt-4 text-lg">These are the technologies I've worked with:</p>
        </div>

        {/* Skills Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-8 text-center py-8 px-8 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-4 rounded-lg ${style}`}
            >
              <img src={src} alt={title} className="w-20 mx-auto" />
              <p className="mt-4 text-lg font-medium">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
