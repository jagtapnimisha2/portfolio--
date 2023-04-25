// rafce
import React from 'react'
import heroImage from '../assets/heroImage.png';
import { RiArrowRightSFill } from "react-icons/ri";
import { Link } from 'react-scroll';
const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        {/* <img src={heroImage} alt='' /> */}
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-2xl sm:text-5xl font-bold text-white pt-28 max-h-px max-w-md '>I'm a Front End Developer</h2>
                <p className='text-gray-500 pt-28 max-w-md'> 
                    I have 3 month of experience building and desgining 
                    software.
                    Currently, I love to work on web application using
                    technologies like
                    Html,Css,React Js,and Tailwind.
                </p>
                <div>
            <Link to='Project' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-red-500 to-red-300 cursor-pointer'>
            Project
                <span className='group-hover:rotate-90 duration-300'>
                    <RiArrowRightSFill size={28} className="ml-1"/> 
                </span>
            </Link>
        </div>
    </div>
    <div>
        <img src={heroImage} alt='my profile' className='rounded-2xl max-h-64 max-w-screen-md mx-6 sm:ml-6 sm:max-h-80'/>
        {/* mx-auto w-2/3 md:w-full */}
    </div>
   </div>
   </div>
    
  )
}

export default Home;