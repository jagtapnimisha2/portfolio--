import React from "react";
// import i1 from "../components/image/i1.png"

import imgport from "../components/image/imgport.png"
import imag1 from "../components/image/imag1.png"
import imag2 from "../components/image/imag2.png"
import imag3 from "../components/image/imag3.png"
import imag4 from "../components/image/imag4.png"
import imag5 from "../components/image/imag5.png"
import imag6 from "../components/image/imag6.png"
import imag7 from "../components/image/imag7.png"
import imag8 from "../components/image/imag8.png"
import imag9 from "../components/image/imag9.png"
import imag10 from "../components/image/imag10.png"
import imag11 from "../components/image/imag11.png"
import imag12 from "../components/image/imag12.png"
import imag13 from "../components/image/imag13.png"
import imag14 from "../components/image/imag14.png"
import imag15 from "../components/image/imag15.png"
import imag16 from "../components/image/imag16.png"
import imag17 from "../components/image/imag17.png"
import imag18 from "../components/image/imag18.jpeg"
import imag19 from "../components/image/imag19.jpeg"
const Project=()=>{
    const Projects=[
        {
            id:0,
            src:imgport,
            githublink:"https://github.com/jagtapnimisha2/portfolio--",
            link:"https://main--harmonious-stroopwafel-b4b833.netlify.app/" 
        },
        {
            id:1,
            src:imag1,
            githublink:"https://github.com/jagtapnimisha2/Ineuron_assignment-01",
            link:"https://jagtapnimisha2.github.io/Ineuron_assignment-01/"
        },
        {
            id:2,
            src:imag2,
            githublink:"https://github.com/jagtapnimisha2/ineuron-assignment-02",
            link:"https://jagtapnimisha2.github.io/ineuron-assignment-02/"
        },
        {
            id:3,
            src:imag3,  
            githublink:"https://github.com/jagtapnimisha2/ineuron-assignment-03",
            link:"https://jagtapnimisha2.github.io/ineuron-assignment-03/"
        },
        {
            id:4,
            src:imag4,
            githublink:"https://github.com/jagtapnimisha2/ineuron-assignment-04",
            link:"https://jagtapnimisha2.github.io/ineuron-assignment-04/"
        },
        {
            id:5,
            src:imag5,
            githublink:"https://github.com/jagtapnimisha2/ineuron-assignment-05",
            link:"https://jagtapnimisha2.github.io/ineuron-assignment-05/"
        },
        {
            id:6,
            src:imag6,
            githublink:"https://github.com/jagtapnimisha2/ineuron-assignment-06",
            link:"https://jagtapnimisha2.github.io/ineuron-assignment-06/"
        },
        {
            id:7,
            src:imag7,
            githublink:"https://github.com/jagtapnimisha2/ineuron-assignment-07",
            link:"https://jagtapnimisha2.github.io/ineuron-assignment-07/"
        },
        {
            id:8,
            src:imag8,
            githublink:"https://github.com/jagtapnimisha2/ineuron-assignment-08",
            link:"https://jagtapnimisha2.github.io/ineuron-assignment-08/"
        },
        {
            id:9,
            src:imag9,
            githublink:"https://github.com/jagtapnimisha2/ineuron-assignment-09",
            link:"https://jagtapnimisha2.github.io/ineuron-assignment-09/"
        },
        {
            id:10,
            src:imag10,
            githublink:"https://github.com/jagtapnimisha2/ineuron-assignment--10",
            link:"https://jagtapnimisha2.github.io/ineuron-assignment--10/"
        },
        {
            id:11,
            src:imag11,
            githublink:"https://github.com/jagtapnimisha2/ineuron-assignment--11",
            link:"https://jagtapnimisha2.github.io/ineuron-assignment--11/"
        },
        {
            id:12,
            src:imag12,
            githublink:"https://github.com/jagtapnimisha2/ineuron-assignment--12",
            link:"https://jagtapnimisha2.github.io/ineuron-assignment--12/"
        },
        {
            id:13,
            src:imag13,
            githublink:"https://github.com/jagtapnimisha2/ineuron-assignment--13",
            link:"https://jagtapnimisha2.github.io/ineuron-assignment--13/"
        },
        {
            id:14,
            src:imag14,
            githublink:"https://github.com/jagtapnimisha2/ineuron-assignment--14",
            link:"https://jagtapnimisha2.github.io/ineuron-assignment--14/"
        },
        {
            id:15,
            src:imag15,
            githublink:"https://github.com/jagtapnimisha2/ineuron-assignment--15",
            link:"https://jagtapnimisha2.github.io/ineuron-assignment--15/"
        },
        {
            id:16,
            src:imag16,
            githublink:"https://github.com/jagtapnimisha2/LinkedIn-Clone---React-Project---kyiq4msruph7",
            link:"https://glowing-tapioca-25d26b.netlify.app/"
        },
        {
            id:17,
            src:imag17,
            githublink:"https://github.com/jagtapnimisha2/Garbage_Bin__Major_Project",
            link:"https://smartgarbage-f4f3b.web.app"
        },
        {
            id:18,
            src:imag18,
            githublink:"https://github.com/jagtapnimisha2/Searching-cookies-recipe-list?tab=readme-ov-a",
            link:"https://searching-cookies-recipe.netlify.app/"
        },
        {
            id:19,
            src:imag19,
            githublink:"https://github.com/jagtapnimisha2/imdb-main1",
            link:"https://clone-moviess.netlify.app/"
        }
    ]
    return(
 <div
    name="Project"
    className="bg-gradient-to-b from-black to-gray-800 w-full h-full
    text-white md:h-screen lg:h-full
    ">
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full
     
    ">
        <div className="pb-8">
            <p className="text-4xl font-bold inline  border-b-4 border-gray-500">Projects</p>
            <p className="py-6">Check out some of my work right here</p>
        </div>
           
       

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {
                Projects.map(({id,src,githublink,link})=>(
                
                <div key={id} className="shadow-md shadow-gray-600 rounded-lg ">
              
                 <a  href={link} className=" duration-200 hover:scale-105">
                    <img src={src} alt="this is a image"
                    className="rounded-md duration-200 hover:scale-105"
                    />
                </a>
                <div className="flex items-center justify-center">
                    <a href={githublink} className="w-1/3 py-3 text-center m-2 duration-200 hover:scale-105">Code</a>
                </div>
            </div>
        
            
            ))
        }
        </div>
    </div>
 </div>
    );
};
export default Project;