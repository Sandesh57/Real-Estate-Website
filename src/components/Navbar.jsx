import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  const [showMobileMenu,setshowMobileMenu]=useState(false)

  useEffect(()=>{
    if(showMobileMenu)
      document.body.style.overflow='hidden' //prevent webpage from scrolling
    else
      document.body.style.overflow='auto'
      return()=>{
        document.body.style.overflow='auto'
       };
  },[showMobileMenu])

  return (
    <div className='absolute top-0 left-0 w-full z-10'>
     <div className=' container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
        <img src={assets.logo} className='object-cover h-18 w-32 ' alt="" />

        <ul className='hidden md:flex gap-7  '>
            <a href="#header"className='cursor-pointer hover:text-gray-400 text-white text-2xl'>Home</a>
            <a href="#header"className='cursor-pointer hover:text-gray-400 text-white text-2xl'>About</a>
            <a href="#header"className='cursor-pointer hover:text-gray-400 text-white text-2xl'>Projects</a>
            <a href="#header"className='cursor-pointer hover:text-gray-400 text-white  text-2xl'>Testimonials</a>

        </ul>
        <img src={assets.menu_icon} className='md:hidden w-7 cursor-pointer' onClick={()=> setshowMobileMenu(true)}alt="" />
        </div>
        
        {/* Mobile Screen */}
        <div className={`md:hidden ${showMobileMenu ? 'fixed w-full': 'h-0 w-0'} right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
          <div className='flex justify-end p-6 cursor-pointer'> <
            img src={assets.close_icon} className='w-6' onClick={()=> setshowMobileMenu(false)} alt="" />
            </div>
          <ul className='flex flex-col items-center gap-2 mt-5  px-5  text-lg font-medium'>
            <a onClick={()=> setshowMobileMenu(false)} href="#header" className='px-4 py-2 rounded-full inline-block'> Home</a>
            <a onClick={()=> setshowMobileMenu(false)} href="#header" className='px-4 py-2 rounded-full inline-block'> About</a>
            <a onClick={()=> setshowMobileMenu(false)} href="#header" className='px-4 py-2 rounded-full inline-block'> Project</a>
            <a onClick={()=> setshowMobileMenu(false)} href="#header" className='px-4 py-2 rounded-full inline-block'> Testimonials</a>

          </ul>
       
     </div> 
    </div>
  )
}

export default Navbar

