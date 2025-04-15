import React from 'react'
import Homepagewrite from './Homepagewrite'
import photo from '../assets/images/OIP.jpg'
import { TypeAnimation } from 'react-type-animation'
 export const Name_and_Photo = () => {
//   const photoframe= document.getElementsByClassName('.photoframe')
  
//console.log( document.getElementsByClassName('.photoframe')) 
 return (<>
  <div className='z-0 mt-8 md:mt-14 sm:pl-3 pb-24 '>

    <div className="  flex  ml-[3vw] mt-5 sm:justify-start  md:ml-[30px]">
     <h1 className='text-3xl font-bold text-white md:text-4xl selection:text-blue-400'>Hii I'm</h1>
   
    </div>

    <div className="name_image" >
      <div className='flex'>
    <h1 className='Dharname ml-[5vw] font-bold text-[40px] sm:text-[6.5vw] md:ml-[40px] md:text-[46px] '>DHARMENDRA PATEL</h1>
    <span class="flex h-3 w-3 pointer-events-none">
      <span class="animate-ping absolute inline-flex h-4 w-4 rounded-full  opacity-75"></span>
      <span class=" ping relative inline-flex rounded-full h-3 w-3"></span>
      </span>
    </div>
    
    {/* <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "D",
        500, // wait 1s before replacing "Mice" with "Hamsters"
        'DH',
        500,
        'DHA',
        500,
        'DHAR',
        500,
        'DHARM',
        500,
        'DHARME',
        500,
        'DHARMEN',
        500,
       'DHARMEND',
        500,
       'DHARMENDR',
        500,
       'DHARMENDRA',
        500,
        'DHARMENDRA ',
        500,
       'DHARMENDRA P',
       500,
       'DHARMENDRA PA',
        500,
       'DHARMENDRA PAT',
        500,
        'DHARMENDRA PATE',
        500,
       'DHARMENDRA PATEL',
       500,
    
      ]}
      wrapper="span"
      speed={50}
      style={{  display: 'inline-block' }}
      repeat={Infinity}
    /> */}
    {/* </h1> */}
      {/* <div className="name flex flex-col ml-[10vw] sm:block  sm:ml-[5vw] "> */}
     
      {/* <h1 className=' text-red-400  ml-80 font-bold text-[40px] sm:text-[6.5vw] sm:ml-64'> </h1> */}
      {/* </div> */}
      </div>
      <div className="imgcontainer  flex justify-end gap-[4vw] mr-2 ml-2 sm:mr-6 sm:ml-4 sm:justify-between sm:pr-3 md:mt-5">

      <div>
      <h1 className=' webdevname  ml-2 text-[40px] font-bold  sm:text-[45px]   sm:font-extrabold sm:text-white md:text-[45px] md:ml-[40px]'>WEB DEVELOPER</h1>
      <h1 className=' animateskills text-4xl text-white font-bold mb-5 mt-5 md:ml-[40px]'>
      <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'HTML',
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        'CSS',
        1500,
        'TAILWIND',
        1500,
        'JAVASCRIPT',
        1500,
        'REACT',
        1500,
        'NODE JS',
        1500,
        'EXPRESS',
        1500,
        "MONGODB",
        1500

      ]}
      wrapper="span"
      speed={50}
      style={{  display: 'inline-block' }}
      repeat={Infinity}
    />
      </h1>
      <Homepagewrite/>
      </div >
        <div className=" photoframe h-[170px] w-[185px] sm:h-[210px] sm:w-[220px] md:h-[31vw] md:w-[31vw] ">
         
        </div>
      </div>
    
     {/* <div className="position flex justify-center mt-6 font-extrabold text-white text-[6.5vw] sm:hidden">
     <h1 className=''>WEB DEVELOPER</h1>
     </div> */}
    </div>

    
    </>
)
}
