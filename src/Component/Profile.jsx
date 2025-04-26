import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { CgProfile } from 'react-icons/cg';
import profile from '../assets/images/OIP.jpg'
import { Link } from 'react-scroll';
export const Profile = () => {
  const clickhandler=()=>{
    console.log("Clicked")
    document.querySelector('.profilecontainer').style.visibility='hidden'
  }
  return (
    <>
    <div onClick={clickhandler}  className="  profile absolute z-10 inline-block ml-2 ">
    <div className=' profilecontainer h-auto w-56 opacity-95'>
     <div className="profileimagecontainer flex justify-center">
       <div className="menuprofilephoto mt-3 h-24 w-24 border text-white text-8xl rounded-full">
        <img className='rounded-full' src={profile} alt="profile" />
       </div>
      </div>
      <div className="profilename  ml-5 mt-3 font-bold text-[20px]">Dharmendra Patel</div>
      <div className="profileposition ml-2 font-bold text-[16px]">Full Stack Web Developer</div>
     <div className="menu mt-5">
   <Link to="Aboutme" smooth duration={700}><div onClick={clickhandler} className='hover:bg-zinc-800 hover:text-zinc-200 hover:cursor-pointer text-white pl-4 pr-4 pt-1 pb-1 rounded-full mb-2 border-2 text-center font-bold text-8 border-zinc-400'>About</div></Link>
   <Link to="skills" smooth duration={700}> <div onClick={clickhandler} className='hover:bg-zinc-800 hover:text-zinc-200 hover:cursor-pointer text-white pl-4 pr-4 pt-1 pb-1 rounded-full mb-2 border-2 text-center font-bold text-8 border-zinc-400'>Skills</div></Link>
   <Link to="project" smooth duration={700}><div onClick={clickhandler} className='hover:bg-zinc-800 hover:text-zinc-200 hover:cursor-pointer text-white pl-4 pr-4 pt-1 pb-1 rounded-full mb-2 border-2 text-center font-bold text-8 border-zinc-400'>Projects</div></Link>
   <Link to="contact" smooth duration={700}><div onClick={clickhandler} className='hover:bg-zinc-800 hover:text-zinc-200 hover:cursor-pointer text-white pl-4 pr-4 pt-1 pb-1 rounded-full mb-2 border-2 text-center font-bold text-8 border-zinc-400'>Contact</div></Link>
     </div>
    
    <div className="socialmedia text-white flex justify-around mt-5">
      <a target='blank' href="https://www.linkedin.com/in/dharmendra-patel8090" className='text-xl hover:scale-[120%]'><FaLinkedin /></a>
      <a target='blank' href="https://github.com/Dharmendra4455" className='text-2xl hover:scale-[120%]'><FaGithub /></a>
      <a target='blank' href="https://t.me/@DharmendraPatel8090" className='text-2xl hover:scale-[120%]'><FaTelegram /></a>
    </div>
    </div>
    </div>
    </>
  )
}
