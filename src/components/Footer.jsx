import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='Footer'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between item-start'>
      <div className='w-full md:w-1/2 mb-8 md:mb-0 '>
        <img className='h-24 w-28 '  src={assets.logo} alt="" />  
        <p className='text-gray-400 mt-1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text </p>
      </div>
      {/* <div></div> */}
      <div>
      <h3 className='text-white text-lg font-bold mb-4'>Subscribe to your Newsletter</h3>
        <p className='text-gray-400 mb-4 max-w-80'>The latest news, articles and resources sent to you inbox</p>
        <div  className='flex gap-2'>
        <input type="email" placeholder='Enter your email' className='p-2 rounded bg-gray-800 text-gray-400 broder border-gray-700 focus:outline-none w-full md:w-auto'/>
        <button className='px-4 py-2 rounded bg-blue-500 text-white'>Subscribe</button>
        </div>
      </div>
      
      </div>
      <div className='border-t border-gray-700 py-4 mt-10 text-center text-gray-500'>CopyRight 2024 C Company name  All Right Reserved </div>
    </div>
  )
}

export default Footer
