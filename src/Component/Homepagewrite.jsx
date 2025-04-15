import React from 'react'
import { FaChevronCircleRight } from 'react-icons/fa'
import { FaChevronRight } from 'react-icons/fa6'

const Homepagewrite = () => {
  return (
    <>
    <div className=' fronttext text-white  ml-[12px] w-[50vw] md:w-[42vw] md:ml-[40px]'>An Enthusiasm Full Stack Web Developer
         with a strong set of technical as well
          as non-technical skills and a dedication
           towards creating useful and interactive
            web application.
    </div>
    <div className='flex justify-start mt-4 gap-2'>
   <div className='  text-4xl mt-1.5 text-white hover:text-green-800 ml-[12px] md:ml-[40px] bg-zinc-800 rounded-full'><FaChevronRight/></div>
   <div className='resume'>
   <a className='font-bold text-[27px]  md:ml-[10px] underline' href="#">Resume</a>
   </div>
    
    </div>
    </>
  )
}

export default Homepagewrite