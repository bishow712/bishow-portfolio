import React from 'react'
import ChatApp from '../images/Message.png'
import PMA from '../images/ProjectManagement.jpg'
import VideoCall from '../images/VideoCall.jpg'
import Github from '../images/GitHub.png'
import Weather from '../images/Weather.jpg'

const Projects = () => {
  return (
    <div>
      <h1 className='text-3xl text-gray-400 text-center p-4 px-14' style={{ paddingTop: "1rem" }}>Web Projects</h1>
      <div className='flex flex-wrap justify-evenly p-4'>
        <a href='https://github.com/bishow712/project-management-application-MERN' target='_blank' className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-4 pb-4 pt-40 m-4 hover:scale-110 transition-transform duration-200 ease-in-out" style={{ width: "230px" }}>
          <img src={`${PMA}`} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80"></div>
          <h3 className="z-10 mt-3 text-3xl font-bold text-gray-300">Project Management Application</h3>
          <p className="z-10 overflow-hidden pt-2 text-sm font-bold text-gray-500">MERN, Bootstrap</p>
        </a>
        <a href='https://github.com/bishow712/real-time-chat-app-dotnet-redux' target='_blank' className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-4 pb-4 pt-40 m-4 hover:scale-110 transition-transform duration-200 ease-in-out" style={{ width: "230px" }}>
          <img src={`${ChatApp}`} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80"></div>
          <h3 className="z-10 mt-3 text-3xl font-bold text-gray-300">Real Time Chat App</h3>
          <div className="z-10 overflow-hidden pt-2 text-sm font-bold text-gray-500">ASP.NET Core WebAPI, React Redux, Bootstrap</div>
        </a>
        <a href='https://github.com/bishow712/video-chat-webrtc-ts' target='_blank' className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-4 pb-4 pt-40 m-4 hover:scale-110 transition-transform duration-200 ease-in-out" style={{ width: "230px" }}>
          <img src={`${VideoCall}`} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80"></div>
          <h3 className="z-10 mt-3 text-3xl font-bold text-gray-300">Video Calling Application (WebRTC)</h3>
          <div className="z-10 overflow-hidden pt-2 text-sm font-bold text-gray-500">TypeScript, Node, React, Tailwind</div>
        </a>
        <a href='https://bishow712.github.io/github-info-generator/' target='_blank' className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-4 pb-4 pt-40 m-4 hover:scale-110 transition-transform duration-200 ease-in-out" style={{ width: "230px" }}>
          <img src={`${Github}`} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80"></div>
          <h3 className="z-10 mt-3 text-3xl font-bold text-gray-300">GitHub Info Generator</h3>
          <div className="z-10 overflow-hidden pt-2 text-sm font-bold text-gray-500">React Redux, Bootstrap</div>
        </a>
        <a href='https://weather-app-steel-zeta.vercel.app/' target='_blank' className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-4 pb-4 pt-40 m-4 hover:scale-110 transition-transform duration-200 ease-in-out" style={{ width: "230px" }}>
          <img src={`${Weather}`} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80"></div>
          <h3 className="z-10 mt-3 text-3xl font-bold text-gray-300">Weather Application</h3>
          <div className="z-10 overflow-hidden pt-2 text-sm font-bold text-gray-500">React Redux, Bootstrap, Tailwind</div>
        </a>
      </div>
    </div>
  )
}

export default Projects
