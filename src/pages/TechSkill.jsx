import React from 'react'
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa6";
import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { FaServer } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaCubes } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

const TechSkill = () => {
    const skills = [
        {name: 'React.js',icon:< FaReact />},
        {name: 'Express.js',icon:< SiExpress />},
        {name: 'MongoDb',icon:< SiMongodb />},
        {name: 'HTML',icon:< FaHtml5 />},
        {name: 'Tailwind CSS',icon:< RiTailwindCssFill />},
        {name: 'Git/Github',icon:< FaGithub />},
        {name: 'Java',icon:< FaJava />},
        {name: 'JavaScript',icon:<IoLogoJavascript/>},
        {name: 'TypeScript',icon:<SiTypescript/>},
        {name: 'Node.js',icon:< FaNodeJs />},
        {name: 'Next.js',icon:< SiNextdotjs />},
        {name: 'RestAPIs',icon:< FaServer />},
        {name: 'MySQL',icon:< SiMysql />},
        {name: 'OOPs',icon:<FaCubes/>},
        {name: 'Responsive Design',icon: <FaMobileAlt/>}
        

    ]
  return (
    <div id='skills' className='mb-10'>
    <div className='flex justify-center items-center'>
        <p className='text-2xl bg-linear-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent font-bold'>Skills</p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-3xl gap-4 mt-10 mx-auto hover:cursor-pointer'>
           {
            skills.map((skill)=>{
               return  (
               <div key={skill.name} className='flex min-w-0 justify-center items-center gap-3 rounded-md bg-[#192B49] px-3 py-4 text-white transition hover:bg-blue-900'>
                    <span className='shrink-0 text-2xl text-blue-400'> {skill.icon}</span>
                    <span className='min-w-0 wrap-break-word text-base sm:text-lg font-semibold'>{skill.name}</span>

                </div>
                )
            })
           }
        </div>
        </div>
    
  )
}

export default TechSkill