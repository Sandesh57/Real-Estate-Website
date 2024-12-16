import React from 'react'
import Navbar from './Navbar'
import { motion } from "motion/react"

const Header = () => {
  return (
    <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden' style={{backgroundImage: "url('/header-image.jpg')"}}>
    <Navbar/>
    <motion.div initial={{opacity:0, y:100}}
    transition={{duration:2}}
    whileInView={{opacity:1, y:0}}
    viewport={{once:true}}
    className='container text-center mx-auto py-4 px-6 md:px-20 lg:md-32 text-white'>
        <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl  font-semibold pt-24'>Explore your Dream Home!!</h2>
       
        <div className='space-x-6 mt-16'>
          {/* <a href="#Projects" className='border border-white px-8 py-3 rounded'>Projects</a>
          <a href="#Contact Us" className='bg-blue-400 px-8 py-3 rounded'>Contact Us</a> */}

          <a href="#Projects" className='bg-blue-400 px-8 py-3 rounded'>Projects</a>
          <a href="#Contact Us" className='border border-white px-8 py-3 rounded'>Contact Us</a>
          </div>
        </motion.div>
    </div>
  )
}

export default Header