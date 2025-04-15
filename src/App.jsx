import { motion } from 'motion/react'
import { useState } from 'react'
import Nav from './Component/Nav'
import { Name_and_Photo } from './Component/Name_and_Photo'
import Aboutme from './Component/Aboutme'
import { Skills } from './Component/Skills'
import { FaGitAlt, FaHtml5, FaJs, FaNodeJs, FaPython } from 'react-icons/fa6'
import { IoLogoCss3, IoLogoJavascript } from 'react-icons/io'
import { RiTailwindCssFill } from 'react-icons/ri'
import { FaReact } from 'react-icons/fa'
import { SiCompilerexplorer, SiExpress } from 'react-icons/si'
import { DiMongodb } from 'react-icons/di'
import { Projects1 } from './Component/Projects1'
import { Projects2 } from './Component/Projects2'
import EMS from '../src/assets/images/team.png'
import IC from '../src/assets/images/gallary.png'
import Netflix from '../src/assets/images/netflix_732228.png'
import Weather from '../src/assets/images/weather.png'
import tictactoe from '../src/assets/images/tictactoe.jpg'
import rockpaper from '../src/assets/images/rockpaper.jpg'
import calculator from '../src/assets/images/calculator.png'
import todo from '../src/assets/images/to-do-list-icon-buy-this-icon-for--0-48-1.png'
import quiz from '../src/assets/images/Quizapp.png'
import { Contact } from './Component/Contact'

function App() {
  return (
    <>
      <Nav/>

      <Name_and_Photo/>
      <hr />
      <Aboutme/>
      <hr />

      <h1  name="skills" className=' ml-5 text-white text-[4vw] sm:text-[3.4vw]  font-bold pt-2 md:text-[2.4vw] text-center underline font-sans'>Technical Skills</h1>
      <div className='text-white font-bold text-2xl ml-[2vw] mt-5'>FRONTEND</div>
      <div className="fromtend flex  flex-wrap justify-center">
      
      <Skills name={"HTML"} logo={< FaHtml5/>}/>
      <Skills name={"CSS"} logo={<IoLogoCss3/>}/>
      <Skills name={"Tailwindcss"} logo={<RiTailwindCssFill/>}/>
      <Skills name={"JavaScript"} logo={<FaJs/>}/>
      <Skills name={"React"} logo={<FaReact/>}/>
      </div>
      <div className='text-white font-bold text-2xl ml-[2vw] mt-8'>BACKEND</div>
      <div className="fromtend flex  flex-wrap justify-center">
      
      <Skills name={"JavaScript"} logo={<IoLogoJavascript/>}/>
      <Skills name={"NodeJS"} logo={<FaNodeJs/>}/>
      <Skills name={"Express"} logo={<SiExpress/>}/>
      <Skills name={"MongoDB"} logo={<DiMongodb/>}/>
      </div>

      <div className='text-white font-bold text-2xl ml-[2vw] mt-8'>OTHER</div>
      <div className="fromtend flex  flex-wrap justify-center mb-12">
      
      <Skills name={"GIT"} logo={<FaGitAlt/>}/>
      <Skills name={"C"} logo={<SiCompilerexplorer/>}/>
      <Skills name={"Python"} logo={<FaPython/>}/>
      </div>
      <hr />
      <h1  name="project" className=' ml-5 text-white text-[4vw] sm:text-[3.4vw]  font-bold pt-2 md:text-[2.4vw] text-center underline font-sans mb-10'>Projects</h1>
      <Projects1 name={"Employee Management System"} logo={EMS} code={"https://github.com/Dharmendra4455/Employee_Management_System"} view={"https://dharmendra4455.github.io/Employee_Management_System/"}/>
      <Projects2 name={"Image Collection"} logo={IC} code={"https://github.com/Dharmendra4455/Web-Development-Project-Image-Collections-"} view={"https://dharmendra4455.github.io/Web-Development-Project-Image-Collections-/"}/>
      <Projects1 name={"Netflix Home Page Clone"} logo={Netflix} code={"https://github.com/Dharmendra4455/Netflix_Clone-Project"} view={"https://dharmendra4455.github.io/Netflix_Clone-Project/"}/>
      <Projects2 name={"Weather Reports"} logo={Weather} code={"https://github.com/Dharmendra4455/Weather_details"} view={"https://dharmendra4455.github.io/Weather_details/"}/> 
      <div className='text-white font-bold text-2xl ml-[2vw] mt-8 mb-5 underline'>Games</div>
      <Projects1 name={"Tic Tac Toe"} logo={tictactoe} code={"https://github.com/Dharmendra4455/Tic_Tac_Too"} view={"https://dharmendra4455.github.io/Tic_Tac_Too/"}/>
      <Projects2 name={"Rock Paper Scissor"} logo={rockpaper} code={"https://github.com/Dharmendra4455/Rock_paper_scissor"} view={"https://dharmendra4455.github.io/Rock_paper_scissor/"}/>
      <div className='text-white font-bold text-2xl ml-[2vw] mt-8 mb-5 underline'>Minor Projects</div>
      <Projects1 name={"Digital Calculator"} logo={calculator}/>
      <Projects2 name={"Quiz App"} logo={quiz} code={"https://github.com/Dharmendra4455/Quiz_App"} view={"https://dharmendra4455.github.io/Quiz_App/"}/>
      <Projects1 name={"TO Do List App"} logo={todo}/>
    <hr />
    <Contact/>
    
    </>
  )
}

export default App
