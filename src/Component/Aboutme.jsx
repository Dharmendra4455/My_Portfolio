import React from 'react'

const Aboutme = () => {
  return (
    <>
    <div className="showbeforesm sm:hidden ">
         <h2 className='underline text-white font-serif font-bold text-center text-[25px]'>About Me</h2>
         <div className='text-zinc-400 mb-2 font-serif text-xl text-center border-2  rounded ml-4 mr-4 border-zinc-600'>Current persuing Btech CS from Kashi Institute Of Technology Varanasi.
            I always keen to learn about new Technology and their functionality.
            Apart from Programming skills I also know about electronics Hardware.
           </div>
         <div className="container-box h-full w-full flex flex-col items-center gap-2 mb-4">
         <div className=' pt-1.5 pb-1.5 pl-5 pr-5 font-bold text-[25px] text-zinc-200'>Education</div>    
             <div className="cards  bg-zinc-800 hover:scale-105  h-96 w-72 rounded ">
             <ul className='text-zinc-100'>
                <li className=' text-xl  sm:block font-bold text-center underline mt-3 text-white'> HighSchool</li>
               
                    <li className='ml-4 text-zinc-200 '> MVM Public School</li>
                    <li className='ml-4 text-zinc-200 '> 2018-19</li>
                    <li className='ml-4 text-zinc-200 '> Percentage: 82.4%</li>
                  
                    </ul>
                    <ul  className='text-zinc-100'>
                    <li className=' text-xl text-center font-bold mt-3 underline text-white'> Intermediate</li>
                   
                    <li className='ml-4 text-zinc-200'> MVM Public School</li>
                    <li className='ml-4 text-zinc-200'> 2021-22</li>
                    <li className='ml-4 text-zinc-200'> Percentage: 82.4%</li>
                  
                    </ul>
                    <ul  className='text-zinc-100'>
                    <li className=' text-xl font-bold text-center underline mt-3 text-white'> Graduation</li>
                    <li className='ml-4  text-zinc-200'> Btech CSE</li>
                    <li className='ml-4  text-zinc-200'> Kashi Institute of Technology</li>
                    <li className='ml-4  text-zinc-200'> 2022-26</li>
                    <li className='ml-4  text-zinc-200'> Result: 8.09 CGPA</li>
                  
                    </ul>
                </div> 
                <div className=' pt-1.5 pb-1.5 pl-5 pr-5 font-bold text-[25px] text-zinc-200'>Certificates</div>
             <div className="cards bg-zinc-800 hover:scale-105  h-96 w-72 rounded ">
             <ul className='text-zinc-200 mt-1 '>
                    <li className=' text-xl  sm:block font-bold text-center underline mt-3 text-white'> BHARAT INTERN</li>
                    <li className='ml-4 text-zinc-200 mt-1'> Virtual Internship in Web Dev</li>
                    <li className='ml-4 text-zinc-200'> 01/2024-02/2024</li>
                   
           </ul>
                <ul className='text-zinc-100 mt-1'>
                    <li className='text-xl  sm:block font-bold text-center underline mt-3 text-white'> IBM</li>
                    <li className='ml-4 text-zinc-200 mt-1'> Data Science Program</li>
                    <li className='ml-4 text-zinc-200'> 06/2023-06/2023</li>
                   
                </ul>
                </div>  
                <div className=' pt-1.5 pb-1.5 pl-5 pr-5 font-bold text-[25px] text-zinc-200'>Achievement</div>
             <div className="cards  bg-zinc-800 hover:scale-105 h-96 w-72 rounded ">
             <ul className='text-white '>
                    <li className=' text-xl  sm:block font-bold text-center underline mt-3 text-white'> ABHYUDAY-23</li>
                    <li className='ml-4 mt-1 text-zinc-200 '> At Ashoka Institute of Technology</li>
                    <li className='ml-4 mt-1 text-zinc-200 '> The State Level Fest</li>
                    <li className='ml-4 mt-1 text-zinc-200 '> Participated in Code Master</li>
                    <li className='ml-4 mt-1 text-zinc-200 '> Secured 2nd Rank</li>
                    </ul>
                </div>  
             

            </div>
    </div>















    <div className="showaftersm hidden sm:block">
     <h1 name="Aboutme" className='  ml-5 text-white text-[4vw] sm:text-[3.4vw]  font-bold pt-2 md:text-[2.4vw] text-center underline font-sans'>About me</h1>
    
     <div className="forcenter flex justify-center  mb-2">
        
        <div className="about h-fit w-fit sm:h-fit sm:w-[95vw]  md:w-[97vw] border-2 mt-2 ml-1 ">
          
           <div className="insideabout pl-5">
          
           <div className='text-white mb-2 font-serif text-xl'>Current persuing Btech CS from Kashi Institute Of Technology Varanasi.
            I always keen to learn about new Technology and their functionality.
            Apart from Programming skills I also know about electronics Hardware.
           </div>
           </div>
           < hr />
           <div className="education_certificates mt-2  bg-slate-800 text-white flex justify-evenly">
            <div className=' pt-1.5 pb-1.5 pl-5 pr-5 font-bold text-[20px]'>Education</div>
            <div className=' pt-1.5 pb-1.5 pl-5 pr-5 font-bold text-[20px]'>Certificates</div>
            <div className=' pt-1.5 pb-1.5 pl-5 pr-5 font-bold text-[20px]'>Achievement</div>
           </div>
           <div className='text-white  flex justify-between'>
                <div className='w-1/3   border-r ml-1 '>
                <ul className='text-white '>
                <li className=' text-xl hidden sm:block font-bold'>⚪ HighSchool</li>
                <li className=' text-xl sm:hidden font-bold'>⚪ 10th</li>
                    <li className='ml-4 hidden sm:block'> ⭐MVM Public School</li>
                    <li className='ml-4 sm:hidden '> ⭐MVMPS </li> 
                    <li className='ml-4'> ⭐2018-19</li>
                    <li className='ml-4 hidden sm:block'> ⭐Percentage: 82.4%</li>
                    <li className='ml-4 sm:hidden'> ⭐88.4%</li>
                    </ul>
                    <ul className='text-white '>
                    <li className=' text-xl hidden sm:block font-bold'>⚪ Intermediate</li>
                    <li className=' text-xl sm:hidden font-bold'>⚪ 12th</li>
                    <li className='ml-4 hidden sm:block'> ⭐MVM Public School</li>
                    <li className='ml-4 sm:hidden '> ⭐MVMPS </li> 
                    <li className='ml-4'> ⭐2021-22</li>
                    <li className='ml-4 hidden sm:block'> ⭐Percentage: 82.4%</li>
                    <li className='ml-4 sm:hidden'> ⭐82.4%</li>
                    </ul>
                    <ul className='text-white '>
                    <li className=' text-xl font-bold'>⚪ Graduation</li>
                    <li className='ml-4'> ⭐Btech CSE</li>
                    <li className='ml-4 hidden sm:block'> ⭐Kashi Institute of Technology</li>
                    <li className='ml-4 sm:hidden '> ⭐KIT Varanasi</li> 
                    <li className='ml-4'> ⭐2022-26</li>
                    <li className='ml-4 hidden sm:block'> ⭐Result: 8.09 CGPA</li>
                    <li className='ml-4 sm:hidden'> ⭐8.09 CGPA</li>
                    </ul>
                </div>

                <div className='w-1/3  border-l '>
                <ul className='text-white mt-1 '>
                    <li className=' text-xl font-bold'>⚪ BHARAT INTERN</li>
                    <li className='ml-4'> ⭐Virtual Internship in Web Dev</li>
                    <li className='ml-4'> ⭐01/2024-02/2024</li>
                   
                </ul>
                <ul className='text-white mt-1'>
                    <li className=' text-xl font-bold'>⚪ IBM</li>
                    <li className='ml-4'> ⭐Data Science Program</li>
                    <li className='ml-4'> ⭐06/2023-06/2023</li>
                   
                </ul>
                </div>
                <div className='w-1/3 border-l   ml-1 '>
                <ul className='text-white '>
                    <li className=' text-xl font-bold'>⚪ ABHYUDAY-23</li>
                    <li className='ml-4'> ⭐At Ashoka Institute of Technology</li>
                    <li className='ml-4'> ⭐The State Level Fest</li>
                    <li className='ml-4'> ⭐Participated in Code Master</li>
                    <li className='ml-4'> ⭐Secured 2nd Rank</li>
                    </ul>
                
                </div>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Aboutme