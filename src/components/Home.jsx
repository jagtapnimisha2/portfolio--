// rafce
import React from 'react';
import heroImage from '../assets/heroImage.png';
import { RiArrowRightSFill } from "react-icons/ri";
import { Link } from 'react-scroll';
import './Home.css'

const Home = () => {
  return (
    <div
      name="home"
      className="h-full w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      {/* <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center  h-full  px-4 md:flex-row"> */}
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-auto min-h-screen px-4 md:flex-row md:h-auto lg:h-full ">
        {/* Text Section */}
        <div className="flex flex-col justify-center h-full text-center md:text-left mt-20">
          <h2 className="text-3xl sm:text-5xl font-bold text-white mt-10  md:mt-20 expr ">
            I'm a Front End Developer
          </h2>
          <p className="text-gray-500 py-6 max-w-md mx-auto md:mx-0">
            Frontend (UI) Developer with 1+ year of experience across multiple
            companies. Skilled in developing responsive websites and dynamic web
            applications. Proficient in graphic design and creating user
            interfaces.
          </p>
          <div className="flex justify-center md:justify-start">
            <Link
              to="Project"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-red-500 to-red-300 cursor-pointer"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <RiArrowRightSFill size={28} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className=" home-img flex justify-center mt-10 md:mt-0 hero-img">
          <img
            src={heroImage}
            alt="My Profile"
            className="rounded-2xl w-3/4 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
