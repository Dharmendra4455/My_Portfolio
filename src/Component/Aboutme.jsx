import React from 'react'

const Aboutme = () => {
    return (
    <>
            <div className="showbeforesm  ">
                <h2 className='underline text-white font-serif font-bold text-center text-[25px]'>About Me</h2>
                <div className='text-zinc-400 mb-2 font-serif text-xl text-center border-2  rounded ml-4 mr-4 border-zinc-600'>Current persuing Btech CS from Kashi Institute Of Technology Varanasi.
                    I always keen to learn about new Technology and their functionality.
                    Apart from Programming skills I also know about electronics Hardware.
                </div>
                <div className="container-box h-full w-full flex flex-wrap justify-evenly gap-2 mb-4">
                    <div className="educationsection text-md">
                        <div className=' pt-1.5 pb-1.5 pl-5 pr-5 font-bold text-[25px] text-zinc-200'>Education</div>
                        <div className="cards  bg-zinc-800 hover:scale-105   h-[450px] w-[320px] rounded p-1 ">
                            <ul className='text-zinc-100'>
                                <li className=' text-xl  sm:block font-bold text-center underline mt-1 text-white pt-2'> HighSchool</li>
                                <li className='ml-4 text-zinc-200 '> MVM Public School</li>
                                <li className='ml-4 text-zinc-200 '> 2018-19</li>
                                <li className='ml-4 text-zinc-200 '> Percentage: 82.4%</li>

                            </ul>
                            <ul className='text-zinc-100'>
                                <li className=' text-xl text-center font-bold mt-3 underline text-white'> Intermediate</li>

                                <li className='ml-4 text-zinc-200'> MVM Public School</li>
                                <li className='ml-4 text-zinc-200'> 2021-22</li>
                                <li className='ml-4 text-zinc-200'> Percentage: 82.4%</li>

                            </ul>
                            <ul className='text-zinc-100'>
                                <li className=' text-xl font-bold text-center underline mt-3 text-white'> Graduation</li>
                                <li className='ml-4  text-zinc-200'> Btech CSE</li>
                                <li className='ml-4  text-zinc-200'> Kashi Institute of Technology</li>
                                <li className='ml-4  text-zinc-200'> 2022-26</li>
                                <li className='ml-4  text-zinc-200'> Result: 8.1 CGPA</li>

                            </ul>
                        </div>
                        </div>
                        <div className="certificatesection">
                        <div className=' pt-1.5 pb-1.5 pl-5 pr-5 font-bold text-[25px] text-zinc-200'>Certificates</div>
                        <div className="cards bg-zinc-800 hover:scale-105  h-[450px] w-[320px] rounded p-1">
                            <ul className='text-zinc-200 mt-1 pr-1'>
                                <li className=' text-xl  sm:block font-bold text-center underline mt-1 text-white'> Software Engineer INTERN</li>
                                <li className='ml-4 text-zinc-200 mt-1'>Worked on e-commerce projects focusing on features design,bug fixing,and RESTful API handling
                                    while collaborating with development team.
                                </li>
                                <li className='ml-4 text-white font-semibold'>Mixins Technology Pune Maharashtra </li>
                                <li className='ml-4 text-white font-semibold'> 08/2025-Presnt</li>

                            </ul>
                            <ul className='text-zinc-200 mt-1 '>
                                <li className=' text-xl  sm:block font-bold text-center underline mt-3 text-white'> BHARAT INTERN</li>
                                <li className='ml-4 text-zinc-200 mt-1'> Virtual Internship where collaborat on UI part of projects and handling RESTful api.</li>
                                <li className='ml-4 text-white font-semibold'> 01/2024-02/2024</li>

                            </ul>
                            <ul className='text-zinc-100 mt-1'>
                                <li className='text-xl  sm:block font-bold text-center underline mt-3 text-white'> IBM</li>
                                <li className='ml-4 text-zinc-200 mt-1'> Data Science Program held in collage campus. </li>
                                <li className='ml-4 text-white font-semibold'> 06/2023-06/2023</li>
 
                            </ul>
                        </div>
                        </div>
                        <div className="achievementsection">

                        <div className=' pt-1.5 pb-1.5 pl-5 pr-5 font-bold text-[25px] text-zinc-200'>Achievement</div>
                        <div className="cards  bg-zinc-800 hover:scale-105  h-[450px] w-[320px] rounded p-1 ">
                            <ul className='text-white '>
                                <li className=' text-xl  sm:block font-bold text-center underline mt-1 text-white '> ABHYUDAY-23</li>
                                <li className='ml-4 mt-1 text-zinc-200 '> At Ashoka Institute of Technology</li>
                                <li className='ml-4 mt-1 text-zinc-200 '> The State Level Fest</li>
                                <li className='ml-4 mt-1 text-zinc-200 '> Participated in <span className='text-white font-semibold'> Code Master</span></li>
                                <li className='ml-4 mt-1 text-white font-semibold '> Secured 2nd Rank(Silver Medalist)</li>
                            </ul>
                        </div>

                        </div>   
                    </div>
                </div>
            </>
            )
}

            export default Aboutme