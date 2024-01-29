import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ChatApp from '../images/Message.png'
import PMA from '../images/ProjectManagement.jpg'
import VideoCall from '../images/VideoCall.jpg'
import Github from '../images/GitHub.png'
import Weather from '../images/Weather.jpg'
import Puddle from '../images/puddle.jpg'



const Projects = () => {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      paritialVisibilityGutter: 60
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2,
      paritialVisibilityGutter: 50
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
      paritialVisibilityGutter: 30,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (
    <div>
      <h1 className='text-3xl text-gray-400 text-center p-4 px-14'>Web Projects</h1>

      <div className='flex flex-wrap justify-center p-4'>
        <Carousel
          className=''
          partialVisbile
          swipeable={true}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          keyBoardControl={true}
          transitionDuration={500}
          containerClass="carousel-container"
          itemClass="carousel-items">

          <a href='https://bishow712.github.io/github-info-generator/' target='_blank' rel="noreferrer"
            className="relative isolate h-96 flex flex-col justify-end overflow-hidden rounded-2xl px-4 pb-4 pt-40 m-4 hover:scale-110 transition-transform duration-200 ease-in-out">
            <img src={`${Github}`} alt="" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/90"></div>
            <h3 className="z-10 mt-3 text-3xl font-bold text-[#4FC1E9]">GitHub Info Generator</h3>
            <div className="z-10 overflow-hidden pt-2 text-sm font-bold text-gray-500">React Redux, Bootstrap</div>
          </a>

          <a href='https://github.com/bishow712/real-time-chat-app-dotnet-redux' target='_blank' rel="noreferrer"
            className="relative isolate h-96 flex flex-col justify-end overflow-hidden rounded-2xl px-4 pb-4 pt-40 m-4 hover:scale-110 transition-transform duration-200 ease-in-out">
            <img src={`${ChatApp}`} alt="" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/90"></div>
            <h3 className="z-10 mt-3 text-3xl font-bold text-[#4FC1E9]">Real Time Chat App (SignalR)</h3>
            <div className="z-10 overflow-hidden pt-2 text-sm font-bold text-gray-500">ASP.NET Core WebAPI, React Redux, Bootstrap</div>
          </a>

          <a href='https://github.com/bishow712/video-chat-webrtc-ts' target='_blank' rel="noreferrer"
            className="relative isolate h-96 flex flex-col justify-end overflow-hidden rounded-2xl px-4 pb-4 pt-40 m-4 hover:scale-110 transition-transform duration-200 ease-in-out">
            <img src={`${VideoCall}`} alt="" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/90"></div>
            <h3 className="z-10 mt-3 text-3xl font-bold text-[#4FC1E9]">Video Calling Application (WebRTC)</h3>
            <div className="z-10 overflow-hidden pt-2 text-sm font-bold text-gray-500">TypeScript, Node, React, Tailwind</div>
          </a>

          <a href='https://github.com/bishow712/video-chat-webrtc-ts' target='_blank' rel="noreferrer"
            className="relative isolate h-96 flex flex-col justify-end overflow-hidden rounded-2xl px-4 pb-4 pt-40 m-4 hover:scale-110 transition-transform duration-200 ease-in-out">
            <img src={`${Puddle}`} alt="" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/90"></div>
            <h3 className="z-10 mt-3 text-3xl font-bold text-[#4FC1E9]">Django Puddle (E-Commerce)</h3>
            <div className="z-10 overflow-hidden pt-2 text-sm font-bold text-gray-500">Python, Django</div>
          </a>

          <a href='https://github.com/bishow712/project-management-application-MERN' target='_blank' rel="noreferrer"
            className="relative isolate h-96 flex flex-col justify-end overflow-hidden rounded-2xl px-4 pb-4 pt-40 m-4 hover:scale-110 transition-transform duration-200 ease-in-out">
            <img src={`${PMA}`} alt="" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/90"></div>
            <h3 className="z-10 mt-3 text-3xl font-bold text-[#4FC1E9]">Project Management Application</h3>
            <p className="z-10 overflow-hidden pt-2 text-sm font-bold text-gray-500">MERN, Bootstrap</p>
          </a>

          <a href='https://weather-app-steel-zeta.vercel.app/' target='_blank' rel="noreferrer"
            className="relative isolate h-96 flex flex-col justify-end overflow-hidden rounded-2xl px-4 pb-4 pt-40 m-4 hover:scale-110 transition-transform duration-200 ease-in-out">
            <img src={`${Weather}`} alt="" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/90"></div>
            <h3 className="z-10 mt-3 text-3xl font-bold text-[#4FC1E9]">Weather Application</h3>
            <div className="z-10 overflow-hidden pt-2 text-sm font-bold text-gray-500">React Redux, Bootstrap, Tailwind</div>
          </a>

        </Carousel>
      </div>
    </div>
  )
}

export default Projects
