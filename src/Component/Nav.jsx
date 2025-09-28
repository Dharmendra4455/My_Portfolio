import React, { useEffect, useState } from 'react'
import { Profile } from './Profile'
import { IoMenu } from "react-icons/io5";
import { Link } from 'react-scroll';
const Nav = () => {

  const [profile, showprofile] = useState(0)
  const profileclickhandler = () => {

    if (profile) {
      showprofile(0);
    }
    else {
      showprofile(1);
    }
  };


  useEffect(() => {

    function handleresize() {
      showprofile(0);


    };
    window.addEventListener('resize', handleresize)

    if (screen.width > 643) {
      return () => {
        window.removeEventListener('resize', handleresize)
      }
    }
  }
    , [window])
  return (
    <>
      <div className="bg-#0a0a0a">
        {/* <div className=' flex justify-between  h-14 w-640 font-bold text-xl text-white'> */}
          {/* <div className='pl-4 hover:cursor-pointer  pr-4 pt-5 pb-5 hover:scale-150' onClick={profileclickhandler}><IoMenu /></div> */}
          {/* <div onClick={menulisthandler} className='pl-4  pr-4 pt-3 pb-3 hover:bg-black '>=</div> */}
        {/* </div> */}
        <div className=' h-16 flex items-center justify-end w-full   font-bold text-md   bg-#0a0a0a text-white'>
          {/* <div className='topleftname'>
            <span className='Dhar pl-4  pt-3 pb-3 w-40'>Dharmendra</span>
            <span className=' patel pr-4 pt-3 pb-3 w-40'> Patel</span>
          </div> */}
        
          <Link to="Aboutme" smooth duration={700}><div className='topmenu hover:bg-black  hover:cursor-pointer   pl-4 pr-4 pt-3 pb-3'>About</div></Link>
          <Link to="skills" smooth duration={700}><div className='topmenu hover:bg-black  hover:cursor-pointer    pl-4 pr-4 pt-3 pb-3'>Skills</div></Link>
          <Link to="project" smooth duration={700}><div className='topmenu hover:bg-black  hover:cursor-pointer   pl-4 pr-4 pt-3 pb-3'>Projects</div></Link>
          <Link to="contact" smooth duration={700}><div className='topmenu hover:bg-black  hover:cursor-pointer   pl-4 pr-4 pt-3 pb-3'>Contact</div></Link>
        
        </div> 
      </div>
     
      {/* {profile ? <Profile /> :""} */}


    </>
  )
}

export default Nav