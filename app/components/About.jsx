import React from 'react'
import Image from 'next/image'
import { assets, infoList, toolsData } from '@/assets/assets'

const About = () => {
    return (
        <div id='about' className='flex items-center flex-col scroll-mt-20 px-[12%] py-10'>
            <h4 className='text-lg text-center mb-2'>Introduction</h4>
            <h2 className='text-center text-5xl'>About Me</h2>

            <div className='flex w-full flex-row lg:flex-row gap-20 my-20 items-center'>
                <div className='w-64 sm:w-80 max-w-none'>
                    <Image src={assets.profilePic} alt='user' className='w-fill rounded-3xl' />
                </div>

                <div className='flex-1'>
                    <p className="max-w-2xl mb-20">
                        A Full Stack web developer is a creative engineer who transforms UI designs into responsive, interactive web experiences. They specialize in HTML, CSS, JavaScript, and frameworks like React or Next.js to build seamless interfaces. With a sharp eye for detail and a passion for user experience, they ensure every layout, animation, and component feels intuitive, fast, and polished across all devices.
                    </p>
                    <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                        {infoList.map(({ icon, iconDark, title, description }, index) => (
                              <li key={index}
                              className='border border-gray-400 p-6 rounded-lg cursor-pointer hover:bg-indigo-50 hover:shadow-xl transition-all duration-500'>

                                <Image className='mt-3 w-7' src={icon} alt={title} />
                                <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                                <p className='text-gray-600 text-sm'>{description}</p>
                            </li>
                        ))}
                    </ul>

                    <h4 className='my-6 text-gray-700'>Tools I use</h4>
                    <ul className='flex items-center gap-3 md:gap-5'>
                        {toolsData.map((tool,index)=>(
                          <li key={index} 
                          className='flex justify-center items-center w-12 sm:w-14 hover:bg-indigo-50 hover:shadow-xl transition-all duration-500
                           aspect-square border border-gray-400 rounded-lg cursor-pointer'>
                            <Image src={tool} alt='tool' className='w-5 sm:w-7' />

                          </li>
                        ))}
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default About
