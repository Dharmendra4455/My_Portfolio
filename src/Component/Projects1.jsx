import React from 'react'
import EMS from '../assets/images/team.png'
import Netflix from '../assets/images/netflix_732228.png'
export const Projects1 = (props) => {
  return (
    <>
    <div className='flex justify-center xsm:inline-block'>
   <div className="centering inline ">
     <div className='Projectcontainer  bg-black  w-[90vw] h-[140px] sm:w-[90vw] sm:h-[140px] text-black xsm:w-[45vw] xmd:w-[590px] border-4 rounded  border-gray-500 mt-3 ml-3 mb-3 mr-3 flex flex-wrap '>
        <div className='w-1/2 mt-1 xsm:mt-3 pt-[.4vw] sm:pt-0 text-white '>
        <img className=' w-[18vw] sm:w-[15vw] ml-[8vw] hover:scale-105 md:w-[140px] md:pt-0 md:pb-2   xsm:w-[120px] xsm:mt-[3px]   xsm:ml-[4vw] xsm:h-28 pt-2 xmd:w-[150px] xmd:ml-[70px]' src={props.logo} alt="" />
        </div>
        <div className='text-white w-1/2  bg-zinc-800 text-xl pt-3 pl-2 font-bold overflow-hidden'>{props.name}
        <div className='flex h-auto w-full justify-evenly mt-7'>
         <a target="_blank" href={props.code}> <div className='text-white border-2 border-gray-500  hover:bg-zinc-900 hover:scale-[1.1] hover:cursor-pointer rounded-sm pl-5 pr-5'>Code</div></a>
         <a target="_blank" href={props.view}><div className='text-white border-2 border-gray-500 hover:bg-zinc-900 hover:scale-[1.1] hover:cursor-pointer rounded-sm pl-5 pr-5'>View</div></a>
       </div>
         </div>
    </div>
   </div>
   </div>
   </>
  )
}
