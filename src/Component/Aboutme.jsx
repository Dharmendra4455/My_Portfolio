import React from 'react'

const Aboutme = () => {
  return (
    <>
     <h1 name="Aboutme" className=' ml-5 text-white text-[4vw] sm:text-[3.4vw]  font-bold pt-2 md:text-[2.4vw] text-center underline font-sans'>About me</h1>
    
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
    </>
  )
}

export default Aboutme