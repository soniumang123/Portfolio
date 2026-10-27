import React from 'react'
import { IoMdDownload } from "react-icons/io";
import image from "../assets/profilepic2.jpeg";
import { FaGraduationCap } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";

const About = () => {
  return (
    <div id='about' className='w-full h-full  bg-[#121212] text-white gap-5 mb-10'>
        
            <div className='w-full flex flex-col md:flex-row items-center justify-between gap-10 max-w-6xl mx-auto px-6 py-10 '>
          
                <div className='flex flex-col w-full gap-4 items-start px-2 md:w-1/2'>
                <p className='text-sm uppercase tracking-[3px] text-blue-500'>About Me</p>
                <p className='text-3xl md:text-4xl font-bold '>Get to know me</p>
                <p className='max-w-xl text-left text-gray-500 leading-7 mt-3'>I'am Umang Soni,a B.Tech Graduate in Electronics and Communication Engineering with a strong interest in full stack web developement.
                    I enjoy building real-world projects,solving problems and learning new Technologies. I'm currently looking for full time opportunities as a MERN Stack Developer
                </p>
                <a href="/Umang_MernStack.pdf" download="Umang_MernStack.pdf" className="inline-flex px-3 py-4 border border-gray-500 rounded-xl  gap-2.5  text-sm font-semibold cursor-pointer hover:bg-linear-to-r hover:from-[#2196F3] hover:to-[#06B6D4] hover:border-transparent hover:text-white transition-all duration-300" >Download Resume <IoMdDownload className="h-5 w-5 " /></a>

                
                
            </div>
            <div className=' hidden md:block w-full md:w-1/2'>
                <div className='w-70 h-70 flex rounded-xl bg-blue-500/20 mx-auto overflow-hidden ml-50  '>
                    <img src={image} alt="" className='h-full w-full'/>
                </div>
          
       
            </div>
            
        </div>

      
            <div className='w-full flex flex-col md:flex-row justify-center items-center gap-20 mt-10'>
            <div className='flex w-[90%] min-h-32 md:min-h-36 md:w-[40%] items-start gap-4 rounded-xl bg-[#121C2B] p-4'>
                <div className='px-4 py-3 bg-[#192B49] rounded-xl m-5'>
                    <FaGraduationCap className='text-3xl text-blue-400  '/>
                    </div>
                    <div className='p-4 '>
                        <p className='text-blue-600 text-lg'>Education</p>
                    <p> B.Tech (ECE)</p>
                    <p className='text-gray-400 text-sm text-semibold mb-2'>Arya College of Engineering & I.T</p>
                    <p className='text-gray-400 '>2022 - 2026 </p>
                    </div>

            </div>
            <div className='flex w-[90%] min-h-32 md:min-h-36 md:w-[40%] items-start gap-4 rounded-xl bg-[#121C2B] p-4'>
                <div className='px-4 py-3 bg-[#192B49] rounded-xl m-5'>
                    <FaBriefcase className='text-3xl text-blue-400  '/>
                    </div>
                    <div className='p-4 '>
                        <p className='text-blue-600 text-lg'>Internship</p>
                    <p> Web Development Intern</p>
                    <p className='text-gray-400 text-sm text-semibold mb-2'>Kvon Tech Consultancy Service Pvt. Ltd.</p>
                    <p className='text-gray-400 '>June 2025 - July 2025 </p>
                    </div>

            </div>
        </div>

        <div className='w-full flex flex-col md:flex-row justify-center items-center gap-20 mt-10'>
            <div className='flex w-[90%] min-h-36 md:min-h-40 md:w-[40%] items-start gap-4 rounded-xl bg-[#121C2B] p-4 '>
                <div className='px-4 py-3 bg-[#192B49] rounded-xl m-5'>
                    <FaMapMarkerAlt className='text-3xl text-blue-400  '/>
                    </div>
                    <div className='p-4 '>
                        <p className='text-blue-600 text-lg '>Location</p>
                    <p className='text-gray-400 text-sm text-semibold mb-2'> Jaipur,Rajasthan</p>
                    
                    <p className='text-gray-400 '>Open To Relocate </p>
                    </div>

            </div>
            <div className='flex w-[90%] min-h-32 md:min-h-36 md:w-[40%] items-start gap-4 rounded-xl bg-[#121C2B] p-4  '>
                
                <div className='px-4 py-3 bg-[#192B49] rounded-xl m-5'>
                    <FaRocket className='text-3xl text-blue-400 '/>
                    </div>
                    <div className='p-4 '>
                        <p className='text-blue-600 text-lg'>Interests</p>
                    <p> Web Development </p>
                    <p className='text-gray-400 text-sm text-semibold mb-2'>Building Projects</p>
                    <p className='text-gray-400 '>Learning New Technologies</p>
                    </div>

            </div>
        </div>
       
        

        
        

    </div>
    
  )
}

export default About
