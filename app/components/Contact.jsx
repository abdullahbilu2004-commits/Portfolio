import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Contact = () => {
    return (
        
        <div id='contact' className='flex items-center flex-col scroll-mt-20 
        px-[12%] py-10 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-gray-50'>

            <h4 className='text-lg text-center mb-2'>Connect With Me</h4>
            <h2 className='text-center text-5xl'>Get In Touch</h2>

            <p className="text-center max-w-2xl mx-auto mt-12 mb-12">
                Let's connect and bring your ideas to life. Whether it's a project, collaboration, or just a hello — I'm always open.
            </p>

            <form className='max-w-2xl mx-auto'>
                <div className='grid grid-cols-2 gap-6 mt-10 mb-8'>
                    <input className='flex-1 rounded-md p-3 border-[0.5px] bg-white border-gray-400 outline-none ' type="text" placeholder='Enter your Name ' required />
                    <input className='flex-1 rounded-md p-3 border-[0.5px] bg-white border-gray-400 outline-none ' type="email" placeholder='Enter your Email ' required />
                </div>
                <textarea rows={6} placeholder='Enter your message' required 
                className='flex-1 p-4 border-[0.5px] bg-white border-gray-400 outline-none mb-6 w-full '></textarea>
                <button type='Submit' className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black cursor-pointer
                text-white rounded-full mx-auto hover:bg-black duration-500'>Submit Now <Image src={assets.right_arrow_white} alt='' className='w-4' /> </button>
               
            </form>

        </div>
    )
}

export default Contact
