import React from 'react';
import i1 from '../components/image/i1.png';
import i2 from '../components/image/funded.png';
import i3 from '../components/image/7eyes.png';
import i4 from '../components/image/digiflex.png';
import i5 from '../components/image/petspra.png';
import i6 from '../components/image/ivory.png';
import i7 from '../components/image/kashishjoshi.png';
import i8 from '../components/image/radito.png';
import './Home.css'

const Experience = () => {
    const techs = [
        {
            id: 1,
            src: i1,
            title: 'Dashboard',
            style: 'shadow-white',
            githublink: 'https://github.com/jagtapnimisha2/InterProject',
            link: 'https://jagtapnimisha2.github.io/InterProject/',
        },
        {
            id: 2,
            src: i2,
            title: 'Fundedx',
            style: 'shadow-white',
            githublink: 'https://github.com/jagtapnimisha2/fundedx-main?tab=readme-ov-file',
            link: 'https://fundedx.netlify.app/',
        },
        {
            id: 3,
            src: i3,
            title: '7Eyes',
            style: 'shadow-white',
            githublink: 'https://7eyes.co.uk/',
            link: 'https://7eyes.co.uk/',
        },
        {
            id: 4,
            src: i4,
            title: 'Digiflex',
            style: 'shadow-white',
            githublink: 'https://digiflex.ai/',
            link: 'https://digiflex.ai/',
        },
        {
            id: 5,
            src: i5,
            title: 'Petspablr',
            style: 'shadow-white',
            githublink: 'https://petspablr.in/',
            link: 'https://petspablr.in/',
        },
        {
            id: 6,
            src: i6,
            title: 'Ivorysquid',
            style: 'shadow-white',
            githublink: 'https://ivorysquid.com/',
            link: 'https://ivorysquid.com/',
        },
        ,
        {
            id: 7,
            src: i7,
            title: 'Kashish Joshi',
            style: 'shadow-white',
            githublink: 'https://kashishjoshiresearch.com/',
            link: 'https://kashishjoshiresearch.com/',
        },
        {
            id: 8,
            src: i8,
            title: 'reddito capital',
            style: 'shadow-white',
            githublink: 'https://redditocapital.netlify.app/',
            link: 'https://redditocapital.netlify.app/',
        },
    ];

    return (
        <div
            name="experience"
            className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen text-white">
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div>
                    {/* <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
                        Experience
                    </p> */}
                    <p class="text-4xl font-bold inline border-b-4 border-gray-500 mt-20 expr">Experience</p>
                    <p className="mt-6 text-lg">
                        I have 1.6 years of experience building and designing software.
                        Currently, I love to work on web applications using technologies like
                        HTML, CSS, JavaScript, Bootstrap, and React.js.
                        <br />
                        I have worked at Meta World Technologies Pvt. Ltd. and Niyoin Coders Pvt. Ltd.
                        I have completed a 3-month internship at Avllo Pvt. Ltd. and another
                        3-month internship at Vatsal Pvt. Ltd. as a graphic designer.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center py-8 px-4 sm:px-0">
                    {techs.map(({ id, src, title, style, githublink, link }) => (
                        <div
                            key={id}
                            className={`shadow-md hover:scale-105 transition-transform duration-500 py-4 rounded-lg ${style}`}>
                            <a href={link} target="_blank" rel="noopener noreferrer">
                                <img
                                    src={src}
                                    alt={title}
                                    className="rounded-md w-full h-40 object-cover"
                                />
                            </a>
                            <div className="mt-4">
                                <a
                                    href={githublink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-lg font-medium text-blue-400 hover:underline">
                                    {title}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;
