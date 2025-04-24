import React from 'react'
import { FaGithub, FaLinkedin, FaTelegram, FaWhatsapp } from 'react-icons/fa6'
import { MdOutlineMail } from 'react-icons/md'

export const Contact = () => {
  return (
    <div className="flex justify-center">
        <div name="contact" className='mt-1 h-auto w-[377px] pb-10'>
            <h1  className='text-white text-3xl font-bold text-center underline'>Contacts</h1>
            <h1  className='text-white text-10 mt-5 font-bold text-center'>Get in Touch with us.</h1>
        <div  className="infobox ml-5 mt-10">
         {/* <h1 className='text-white text-xl mb-1 font-sans'>Name</h1> */}
         <input placeholder='Name' className='pl-1  h-10 w-72 text-gray-100 rounded outline-none text-24 font-sans font-semibold bg-zinc-800 mb-2' type="text"/>
         {/* <h1 className='text-white text-xl mb-1 mt-1'>Email</h1> */}
         <input placeholder='Email' typeof='email' required className='pl-1 mb-2 block h-10 w-72 text-gray-100 rounded outline-none text-24 font-sans font-semibold bg-zinc-800 ' type="email"/>
         <textarea name=""  id="" className='outline-none h-28 pl-1 bg-zinc-800 text-gray-100 text-40 font-bold  w-72 rounded font-serif block' placeholder='Comment...'></textarea>
        <button type='submit' className=' mt-1 w-72 bg-green-600 rounded text-white pt-2 pb-2 pl-5 pr-5'>Send</button>
        </div>
        
        
        <div className="contactlogoes flex justify-evenly mt-10">
            <a href="https://mail.google.com/mail/mu/mp/152/#tl/Inbox"><div className='text-white text-xl hover:scale-125 hover:cursor-pointer'><MdOutlineMail/></div></a>
            <a href="https://wa.me/qr/VQ746EE656XUG1"><div className='text-white text-xl hover:scale-125 hover:cursor-pointer'><FaWhatsapp/></div></a>
            <a href="https://github.com/Dharmendra4455"><div className='text-white text-xl hover:scale-125 hover:cursor-pointer'><FaGithub/></div></a>
            <a href="https://www.linkedin.com/in/dharmendra-patel8090"><div className='text-white text-xl hover:scale-125 hover:cursor-pointer'><FaLinkedin/></div></a>
            <a href="https://t.me/@DharmendraPatel8090"><div className='text-white text-xl hover:scale-125 hover:cursor-pointer'><FaTelegram/></div></a>
        </div>
               
        </div>
    </div>
  )
}
