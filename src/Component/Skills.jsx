import React from 'react'
import { FaGitAlt,FaHtml5 ,FaJs,FaNodeJs,FaPython  } from 'react-icons/fa6'
import { IoLogoCss3,IoLogoJavascript } from 'react-icons/io5'
import { RiTailwindCssFill } from 'react-icons/ri'
import { FaReact } from 'react-icons/fa'
import {SiCompilerexplorer, SiExpress } from 'react-icons/si'
import { DiMongodb } from 'react-icons/di'
export const Skills = (props) => {
  return (
    <>
    
    <div  className='flex'>
    <div className="ml-5 mt-10">
    <div className='skillcard  h-36 w-32'>
    <div className="logo h-full w-full  pt-5 pl-3 text-center">{props.logo}</div>
    <div className="name flex justify-center text-xl mt-2 ">
    <div className="name text-white font-bold">{props.name}</div>
    </div>
   </div>
   </div>
   </div>
   </>
  )
}
