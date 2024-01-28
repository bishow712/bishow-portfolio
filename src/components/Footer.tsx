import React from 'react'
import linkedin from '../images/Linkedin.png'
import gmail from '../images/Gmail.jpg'
import github from '../images/GitHub.png'

const Footer = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="relative z-[1] flex flex-col">
        <div className="flex flex-col items-center justify-around mt-8 mb-10 md:flex-row">
          {/* <div className='space-x-6'>
            <a className="cursor-pointer text-gray-300 hover:text-sky-400 uppercase" style={{ transition: "color 0.3s" }}>Home</a>
            <a className="cursor-pointer text-gray-300 hover:text-sky-400 uppercase"style={{ transition: "color 0.3s" }}>Skills</a>
            <a className="cursor-pointer text-gray-300 hover:text-sky-400 uppercase"style={{ transition: "color 0.3s" }}>Projects</a>
            <a className="cursor-pointer text-gray-300 hover:text-sky-400 uppercase"style={{ transition: "color 0.3s" }}>Experience</a>
          </div>       */}

          <div className="pt-4 md:pt-0 flex flex-row space-x-8 items-center md:justify-evenly">
            <a className="p-1 bg-gray-300 bg-opacity-10 rounded hover:bg-gray-400" href="https://www.linkedin.com/in/bishow712/" target='_blank'><img src={`${linkedin}`} className="w-6 h-6" alt="Linkedin" /></a>
            <a className="p-1 bg-gray-300 bg-opacity-10 rounded hover:bg-gray-400" href="https://github.com/bishow712" target='_blank'><img src={`${github}`} className="w-6 h-6" alt="Github" /></a>
            <a className="p-1 bg-gray-300 bg-opacity-10 rounded hover:bg-gray-400" href="https://mail.google.com/mail/?view=cm&fs=1&to=bishow712@gmail.com" target='_blank'><img src={`${gmail}`} className="w-6 h-6" alt="Github" /></a>
          </div>
        </div>

        {/* <div className='text-center text-gray-500 pb-4'>
          <p>This is a fully responsive website made using TypeScript, React, Tailwind.</p>
        </div> */}
      </div>

      <div aria-hidden="true" className="absolute h-full inset-0 flex items-center">
        <div aria-hidden="true" className="bg-layers bg-scale w-56 h-56 m-auto blur-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full md:w-[30rem] md:h-[30rem] md:blur-3xl"></div>
      </div>
      <div aria-hidden="true" className="absolute inset-0 w-full h-full bg-gray-900 opacity-80"></div>
    </div>
  )
};

export default Footer
