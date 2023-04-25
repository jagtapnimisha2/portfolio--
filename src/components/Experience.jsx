import React from 'react'
import i1 from '../components/image/i1.png'




const Experience = () => {
    const techs = [
        
        {
            id:1,
            src:i1,
            title:"Project",
            style:"shadow-white",
            githublink:"https://github.com/jagtapnimisha2/InterProject",
            link:"https://jagtapnimisha2.github.io/InterProject/"
        }
    ]
  return (
    <div 
    name='experience'
    className="bg-gradient-to-b from-gray-800 to-black w-full h-screen">
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                <p className='mt-8'>I have completed 3 month internship at Avllo pvt ltd. I have worked with</p>
            </div>
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 ">
            {
                techs.map(({id,src,title,style,githublink,link})=>(
                    <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>

                    <a href={link} className=" duration-200 hover:scale-105">
                    <img src={src} alt='' className="rounded-md duration-200 hover:scale-105" />
                    </a>
                    <div className="flex items-center justify-center">
                    <a href={githublink} className="w-1/3 py-3 text-center m-2 duration-200 hover:scale-105">{title}</a>
                </div>
                </div>
                ))
            }
            </div>
        </div>
    </div>
  )
}

export default Experience;