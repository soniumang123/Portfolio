import React from "react";
import Wanderlust from "../assets/Wanderlust.jpeg";
import MeetSync from '../assets/MeetSync.png'
import DevEvent from '../assets/DevEvent.png'
import OneCart from '../assets/OneCart.png'

import { FaGithub, FaPlay, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <div id="project" className="mb-10 ">
      <div className="flex justify-center items-center">
        <p className="text-3xl  font-bold bg-linear-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
          Featured Projects
        </p>
      </div>
      <div className="flex items-center justify-center mt-3">
        <div className="flex items-center justify-center w-25 h-1.5 bg-cyan-400 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center mt-10">
        <div className="flex flex-col w-full max-w-md min-w-0 bg-[#111827] rounded-xl border border-gray-800 pb-4 overflow-hidden">
          <div className="w-full ">
            <img
              src={Wanderlust}
              alt=""
              className="h-full w-full object-contain rounded-t-2xl"
            />
          </div>
          <div className="w-full min-w-0 px-5  ">
            <span className="bg-[#12394B] text-[#00CFFF] px-3 py-1 rounded-full text-sm mt-5 inline-flex justify-start items-start">
              Full Stack
            </span>
            <h2 className="mt-3 font-bold text-white text-xl md:text-2xl">Wanderlust - Travel Listing </h2>

            <p className="text-gray-500 mt-2">Travel Listing application with REST APIs,session based authentication,role-based access control and optimized MongoDb queries.</p> 

            <div className="flex flex-wrap items-center text-white gap-2 mt-2">
              <div className="bg-[#192333] text-[#CBD5E1] px-2 py-1 rounded-full text-sm">Node.js</div>
              <div className="bg-[#192333] text-[#CBD5E1] px-2 py-1 rounded-full text-sm" >Express.js</div>
              <div className="bg-[#192333] text-[#CBD5E1] px-2 py-1 rounded-full text-sm">MongoDb</div>
              <div className="bg-[#192333] text-[#CBD5E1] px-2 py-1 rounded-full text-sm">EJS</div>
            </div>
            <div className="flex w-full min-w-0 gap-2 mt-5">
              <a href="https://github.com/soniumang123/Wanderlust-Project" className="flex-1 min-w-0 inline-flex items-center justify-center gap-2 px-2 sm:px-3 py-3 border border-gray-500 rounded-xl text-sm sm:text-base text-white font-semibold hover:bg-gray-800 transition-colors" ><FaGithub className="h-5 w-5"/> Github <FaExternalLinkAlt  className="h-4 w-4 "/> </a>
              <a href="https://wanderlust-project-r8po.onrender.com" className="flex-1 min-w-0 inline-flex items-center justify-center gap-2 px-2 sm:px-3 py-3 rounded-xl text-sm sm:text-base text-white font-semibold bg-linear-to-r from-[#287CF5] to-[#6025F5] hover:brightness-110 transition-all"> <FaPlay  className="h-4 w-4 "/> Live Demo <FaExternalLinkAlt  className="h-4 w-4 "/></a>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full max-w-md min-w-0 bg-[#111827] rounded-xl border border-gray-800 pb-4 overflow-hidden">
          <div className="w-full ">
            <img
              src={MeetSync}
              alt="Video Conferrencing "
              className="h-full w-full object-contain rounded-t-2xl"
            />
          </div>
          <div className="w-full min-w-0 px-5  ">
            <span className="bg-[#12394B] text-[#00CFFF] px-3 py-1 rounded-full text-sm mt-5 inline-flex justify-start items-start">
              Real Time Video App
            </span>
            <h2 className="mt-3 font-bold text-white text-xl md:text-2xl">Meet Sync - Video Conferencing </h2>

            <p className="text-gray-500 mt-2">A real-time video conferencing platform with multi-room support using WebRTC and Socket.io. includes room creation,join,chat and reconnection handling.</p> 

            <div className="flex flex-wrap items-center text-white gap-1 mt-2">
              <div className="bg-[#192333] text-[#CBD5E1] px-2 py-1 rounded-full text-sm">Node.js</div>
              <div className="bg-[#192333] text-[#CBD5E1] px-2 py-1 rounded-full text-sm" >Express.js</div>
              <div className="bg-[#192333] text-[#CBD5E1] px-2 py-1 rounded-full text-sm">WebRTC</div>
              <div className="bg-[#192333] text-[#CBD5E1] px-2 py-1 rounded-full text-sm">Socket.io</div>
              <div className="bg-[#192333] text-[#CBD5E1] px-2 py-1 rounded-full text-sm">Tailwind CSS</div>
            </div>
            <div className="flex w-full min-w-0 gap-2 mt-5">
              <a href="https://github.com/soniumang123/Meet-sync" download="Umang_Resume.pdf" className="flex-1 min-w-0 inline-flex items-center justify-center gap-2 px-2 sm:px-3 py-3 border border-gray-500 rounded-xl text-sm sm:text-base text-white font-semibold hover:bg-gray-800 transition-colors" ><FaGithub className="h-5 w-5"/> Github <FaExternalLinkAlt  className="h-4 w-4 "/> </a>
              <a href="https://apna-video-call-frontend-elty.onrender.com" download="Umang_Resume.pdf" className="flex-1 min-w-0 inline-flex items-center justify-center gap-2 px-2 sm:px-3 py-3 rounded-xl text-sm sm:text-base text-white font-semibold bg-linear-to-r from-[#287CF5] to-[#6025F5] hover:brightness-110 transition-all"> <FaPlay className="h-4 w-4 "/> Live Demo <FaExternalLinkAlt  className="h-4 w-4 "/></a>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full max-w-md min-w-0 bg-[#111827] rounded-xl border border-gray-800 pb-4 overflow-hidden">
          <div className="w-full ">
            <img
              src={DevEvent}
              alt=""
              className="h-full w-full object-contain rounded-t-2xl"
            />
          </div>
          <div className="w-full min-w-0 px-5  ">
            <span className="bg-[#12394B] text-[#00CFFF] px-3 py-1 rounded-full text-sm mt-5 inline-flex justify-start items-start">
              Full Stack
            </span>
            <h2 className="mt-3 font-bold text-white text-xl md:text-2xl">Dev Event Platform </h2>

            <p className="text-gray-500 mt-2">A full-stack event platform built with Next.js and TypeScript, featuring dynamic routing, SSR, attendee registration, and similar-event recommendations.</p> 

            <div className="flex flex-wrap items-center text-white gap-2 mt-2">
              <div className="bg-[#192333] text-[#CBD5E1] px-2 py-1 rounded-full text-sm">Next.js</div>
              <div className="bg-[#192333] text-[#CBD5E1] px-2 py-1 rounded-full text-sm" >TypeScript</div>
              <div className="bg-[#192333] text-[#CBD5E1] px-2 py-1 rounded-full text-sm">MongoDb</div>
              <div className="bg-[#192333] text-[#CBD5E1] px-2 py-1 rounded-full text-sm">Tailwind CSS</div>
            </div>
            <div className="flex w-full min-w-0 gap-2 mt-5">
              <a href="https://github.com/soniumang123/dev-event-nextjs" className="flex-1 min-w-0 inline-flex items-center justify-center gap-2 px-2 sm:px-3 py-3 border border-gray-500 rounded-xl text-sm sm:text-base text-white font-semibold hover:bg-gray-800 transition-colors" ><FaGithub className="h-5 w-5"/> Github <FaExternalLinkAlt  className="h-4 w-4 "/> </a>
              <a href="/Umang_Resume.pdf" download="Umang_Resume.pdf" className="flex-1 min-w-0 inline-flex items-center justify-center gap-2 px-2 sm:px-3 py-3 rounded-xl text-sm sm:text-base text-white font-semibold bg-linear-to-r from-[#287CF5] to-[#6025F5] hover:brightness-110 transition-all"> <FaPlay  className="h-4 w-4 "/> Live Demo <FaExternalLinkAlt  className="h-4 w-4 "/></a>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full max-w-md min-w-0 bg-[#111827] rounded-xl border border-gray-800 pb-4 overflow-hidden">
          <div className="w-full ">
            <img
              src={OneCart}
              alt=""
              className="h-full w-full object-contain rounded-t-2xl"
            />
          </div>
          <div className="w-full min-w-0 px-5  ">
            <span className="bg-[#12394B] text-[#00CFFF] px-3 py-1 rounded-full text-sm mt-5 inline-flex justify-start items-start">
              Full Stack
            </span>
            <h2 className="mt-3 font-bold text-white text-xl md:text-2xl">OneCart – E-Commerce Platform</h2>

            <p className="text-gray-500 mt-2">A full-stack e-commerce platform featuring product browsing, user authentication, shopping cart management, and admin controls for managing products and orders.</p> 

            <div className="flex flex-wrap items-center text-white gap-1 mt-2">
              <div className="bg-[#192333] text-[#CBD5E1] px-2 py-1 rounded-full text-sm">Node.js</div>
              <div className="bg-[#192333] text-[#CBD5E1] px-2 py-1 rounded-full text-sm" >Express.js</div>
              <div className="bg-[#192333] text-[#CBD5E1] px-2 py-1 rounded-full text-sm">MongoDb</div>
              <div className="bg-[#192333] text-[#CBD5E1] px-2 py-1 rounded-full text-sm">React.js</div>
              <div className="bg-[#192333] text-[#CBD5E1] px-2 py-1 rounded-full text-sm">REST APIs</div>
            </div>
            <div className="flex w-full min-w-0 gap-2 mt-5">
              <a href="https://github.com/soniumang123/OneCart" download="Umang_Resume.pdf" className="flex-1 min-w-0 inline-flex items-center justify-center gap-2 px-2 sm:px-3 py-3 border border-gray-500 rounded-xl text-sm sm:text-base text-white font-semibold hover:bg-gray-800 transition-colors" ><FaGithub className="h-5 w-5"/> Github <FaExternalLinkAlt  className="h-4 w-4 "/> </a>
              <a href="https://onecart-frontend-efwz.onrender.com" download="Umang_Resume.pdf" className="flex-1 min-w-0 inline-flex items-center justify-center gap-2 px-2 sm:px-3 py-3 rounded-xl text-sm sm:text-base text-white font-semibold bg-linear-to-r from-[#287CF5] to-[#6025F5] hover:brightness-110 transition-all"> <FaPlay  className="h-4 w-4 "/> Live Demo <FaExternalLinkAlt  className="h-4 w-4 "/></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
