
import image from "../assets/profilepic2.jpeg";
import { FaArrowRight } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import TypingText from "./TypingText.jsx";


const Home = () => {

 
  return (
    <div
      id="home"
      className="w-full h-full bg-[#121212] text-white flex flex-col md:flex-row items-center overflow-x-clip gap-5 md:mt-30 mt-10 "
    >
      <div className="flex w-full md:w-1/2 justify-center items-center px-5 md:px-8 md:ml-0">
        <div className="flex flex-col gap-4 w-full max-w-lg justify-center">
          <div className="h-8 w-55 rounded-2xl bg-gray-800 text-green-400 border-green-400 flex justify-end items-center px-3 gap-2.5 mt-20 md:mt-0">
            <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></div>
            <p>Available for opportunity</p>
          </div>
          <div className=" flex flex-col">
            <p className="text-xl sm:text-xl lg:text-2xl text-gray-500 font-bold">Hi,I'am</p>
            <p className="text-3xl sm:text-5xl lg:text-6xl font-bold">Umang <span className="text-blue-600">Soni</span></p>
          </div>
          <div className="text-xl sm:text-2xl lg:text-3xl font-semibold ">
            <span className="text-cyan-400"><TypingText/></span>
          </div>
          <div className="h-auto w-full max-w-xl justify-center">
            <p className="text-gray-400 text-sm sm:text-base font-semibold">
              I build responsive and user-friendly web applications using
              <span className="text-yellow-200"> React.js</span>, <span className="text-green-400">Express.js</span>, <span className="text-blue-500">Node.js</span>, <span className="text-purple-600">MongoDB</span>.
            </p>
            <p className="text-gray-400 text-sm sm:text-base font-semibold">
              I enjoy turning ideas into practical web solutions.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:flex-row sm:gap-4 mt-5">
            
              <a href="#project" className="flex w-full sm:w-auto items-center justify-center gap-2.5 bg-blue-500 px-3 py-3 md:px-4 md:py-3 rounded-2xl text-[15px] font-semibold cursor-pointer hover:bg-blue-800">View Projects <FaArrowRight /></a>
           
            <a href="/Umang_MernStack.pdf" download="Umang_MernStack.pdf" className=" w-full sm:w-auto py-3 px-4 border border-gray-500 rounded-2xl flex gap-2.5 items-center justify-center text-[15px] font-semibold cursor-pointer hover:bg-linear-to-r hover:from-[#2196F3] hover:to-[#06B6D4] hover:border-transparent hover:text-white transition-all duration-300" >Download Resume <IoMdDownload className="h-5 w-5 " /></a>
          </div>
          <div className="flex  gap-3 md:gap-7.5 justify-start mt-10">
           <a href="https://github.com/soniumang123" className="flex items-center gap-2.5  text-sm sm:text-base hover:text-blue-600"><FaGithub className="h-7 w-7" /> Github</a>
            <a href="https://www.linkedin.com/in/umang-soni123/" className="flex items-center gap-2.5  text-sm sm:text-base hover:text-blue-600"><FaLinkedin className="h-7 w-7" /> Linkedin</a>
            <a href="mailto:soni.umang921@gmail.com" className="flex items-center gap-2.5  text-sm sm:text-base hover:text-blue-600"><MdEmail className="h-7 w-7" /> Email</a>
          </div>
        </div>
      </div>
      <div className="h-full md:w-1/2 flex justify-center items-center px-5 overflow-hidden">
        <div className=" relative isolate w-full max-w-125 flex items-center justify-center ">
          
          
          
          <img src={image} alt="" className="h-60 sm:h-72 md:h-125 w-full object-contain rounded-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Home;
