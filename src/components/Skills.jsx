import React from 'react'
import html from '../components/image/html.png'
import ssc1 from '../components/image/ssc1.png'
import sj1 from '../components/image/sj1.png'
import areact1 from '../components/image/areact1.png'
import github from '../components/image/github.png'
import tailwind from '../components/image/tailwind.png'
const Skills = () => {
    const techs = [
        {
            id:1,
            src:html,
            title:"HTML",
            style:"shadow-orange-500"
        },
        {
            id:2,
            src:ssc1,
            title:"CSS",
            style:"shadow-blue-500"
        },
        {
            id:3,
            src:sj1,
            title:"Javascript",
            style:"shadow-yellow-500"
        },
        {
            id:4,
            src:areact1,
            title:"React",
            style:"shadow-sky-300"
        },
        {
            id:6,
            src:github,
            title:"Github",
            style:"shadow-rose-400"
        },
        {
            id:7,
            src:tailwind,
            title:"taiwind",
            style:"shadow-slate-400"
        }

    ]
  return (
    <div 
    name='skills'
    className="bg-gradient-to-b from-black to-gray-800 w-full h-screen">
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Skills</p>
                <p className='mt-8'>These are the technology I've worked with</p>
            </div>
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 ">
            {
                techs.map(({id,src,title,style})=>(
                    <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                    <img src={src} alt='' className="w-20 mx-auto" />
                    <p className='mt-4'>{title}</p>
                </div>
                ))
            }
            </div>
        </div>
    </div>
  )
}

export default Skills;