import React from "react";
import "./Home.css";

const About = () => {
  return (
    <div
      name="about"
      className=" w-full h-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      {/* <div className="max-w-screen-lg p-6 mx-auto flex flex-col justify-center w-full h-full"> */}
      <div className="max-w-screen-lg p-6 mx-auto flex flex-col justify-center w-full  text-white">
        {/* Heading Section */}
        <div className="pb-8 text-center md:text-left">
          {/* <p className=" text-4xl font-bold inline border-b-4 border-gray-500"> */}
          <p className=" text-4xl font-bold inline border-b-4 border-gray-500 expr">
            About
          </p>
        </div>

        {/* Content Section */}
        <div className="space-y-6 text-lg leading-relaxed sm:text-xl sm:leading-8">
          <p>
            I'm a front-end (User interfaces) developer, and I'm looking for new
            career opportunities. My skillset includes proficiency in HTML, CSS,
            Bootstrap, JavaScript, and frameworks such as React JS.
          </p>
          <p>
            I'm passionate about building user-friendly interfaces and creating
            seamless user experiences. I love working on projects that challenge
            me and allow me to continue learning and growing as a developer.
          </p>
          <p>
            If you or someone you know is looking for a front-end developer to
            join your team, please don't hesitate to reach out to me. I'm open
            to both full-time and contract positions, and I'm excited to explore
            new opportunities in the industry.
          </p>
          <p>
            "Results-driven web developer with a strong background in front-end
            (UI) development and experience working with a variety of
            programming languages and frameworks. Skilled in HTML, CSS,
            JavaScript, Bootstrap, and React and responsive design. Dedicated to
            delivering innovative and effective solutions."
          </p>
          <p>
            Thank you for taking the time to read this post, and I look forward
            to hearing from you soon!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
