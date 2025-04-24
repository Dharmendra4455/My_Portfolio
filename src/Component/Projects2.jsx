import React from 'react'
import IC from '../assets/images/gallary.png'
export const Projects2 = (props) => {
  return (
    <>
     <div className="showbeforesm ">
         
         <div className="container-box h-full w-full flex flex-col  items-center gap-2 mb-4">
   
             <div className="cards  bg-zinc-800 hover:bg-neutral-800 hover:scale-105 h-[300px] w-[250px] rounded ">
             <div className=' mt-1 flex justify-center'>
            <img className=' w-[135px]  hover:scale-105 pt-2 ' src={props.logo} alt="" />
            </div>
            <div className='text-zinc-200 text-center h-24 text-xl pt-6 pl-2 font-bold '>{props.name}</div>

            <div className='flex h-auto w-full justify-evenly mt-4'>
         <a target="_blank" href={props.code}> <div className='text-white border-2 border-gray-500  hover:bg-zinc-900 hover:scale-[1.1] hover:cursor-pointer rounded-sm pl-5 pr-5'>Code</div></a>
         <a target="_blank" href={props.view}><div className='text-white border-2 border-gray-500 hover:bg-zinc-900 hover:scale-[1.1] hover:cursor-pointer rounded-sm pl-5 pr-5'>View</div></a>
       </div>
              </div> 

    </div>
  </div>





    {/* <div className='flex justify-center xsm:inline-block'>
   <div className="centering inline  ">
     <div className='Projectcontainer  bg-black border-4 rounded  border-gray-500  w-[90vw] h-[140px] sm:w-[90vw] sm:h-[140px] text-black xsm:w-[45vw] xmd:w-[590px]   mt-3 ml-3 mb-3 mr-3 flex flex-wrap '>
       
        <div className='text-white w-1/2  bg-zinc-800 text-xl pl-2 pt-3 font-bold'>{props.name}
        <div className='flex h-auto w-full justify-evenly mt-7'>
         <a target='blank' href={props.code}> <div className='text-white border-2 border-gray-500  hover:bg-zinc-900 hover:scale-[1.1] hover:cursor-pointer rounded-sm pl-5 pr-5'>Code</div></a>
         <a target='blank' href={props.view}><div className='text-white border-2 border-gray-500 hover:bg-zinc-900 hover:scale-[1.1] hover:cursor-pointer rounded-sm pl-5 pr-5'>View</div></a>
       </div>
         </div>
         <div className='w-1/2 mt-1 xsm:mt-3 pt-[.4vw] sm:pt-0 text-white '>
        <img className='w-[18vw] sm:w-[15vw] ml-[8vw] hover:scale-105 md:w-[140px] md:pt-0 md:pb-2   xsm:w-[120px] xsm:mt-[4px]   xsm:ml-[4vw] xsm:h-28 pt-3 xmd:w-[150px] xmd:ml-[70px]' src={props.logo} alt="" />
        </div>
    </div>
   </div>
   </div> */}
   </>
  )
}