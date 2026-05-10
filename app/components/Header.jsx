import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center  mx-auto flex flex-col h-screen items-center justify-center gap-4'>
        <div className='mt-[100px]'>
      <Image src={assets.user_image} alt='profile_img' 
      className='rounded-full w-32' />
      </div>
         <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'> 
        Hi! I'm Abdullah Azhar <Image src={assets.hand_icon} className='w-6' alt='' />
        </h3>
        <h1 className='text-3xl fotn-Ovo sm:text-6xl lg:text-[66px]'>
            Full Stack Web Developer based in Pakistan.
            </h1>

            <p className='max-w-2xl mx-auto font-Ovo'>
                I am Full Stack Developer from Lahore, Pakistan with 2 years experience in multiple
                projects like Netflix clone, Spotify Clone, NASA , MERN stack  like AI Powered SAAS application, AI powered Blogging App   project and many other exciting projects 
            </p>

            <div className='flex flex-col sm:flex-row items-center mt-4 gap-4'>
                <a href="#contact" className=' flex gap-2 items-center px-10 py-3 text-white border-white bg-black rounded-full border border-gary-500'>
                    Conatct Me <Image src={assets.right_arrow_white} alt='' className='w-4' /></a>
                
                
            </div>
    </div>
  )
}

export default Header
