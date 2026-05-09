


import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Services = () => {
    return (
        <div id='services' className='flex items-center flex-col scroll-mt-20 px-[12%] py-10'>
            
            <h4 className='text-lg text-center mb-2'>What I offer</h4>
            <h2 className='text-center text-5xl'>My Services</h2>
            
            <p className="text-center max-w-2xl mx-auto mt-12 mb-12">
                I offer tailored web solutions including responsive design, clean UI,
                and full-stack integration to bring your ideas to life.
            </p>

            {/* Centered Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 my-10 place-items-center'>

                {serviceData.map(({ icon, title, description, link }, index) => (
                    <div 
                        key={index} 
                        className='w-[300px] border border-gray-400 px-8 py-12 rounded-3xl cursor-pointer hover:bg-indigo-50 hover:shadow-xl transition-all duration-500'
                    >
                        <Image src={icon} className='w-10' alt='' />
                        
                        <h3 className='text-lg my-4 text-gray-700'>
                            {title}
                        </h3>

                        <p className='text-sm text-gray-600'>
                            {description}
                        </p>

                        <a href={link} className='flex items-center gap-2 text-sm mt-5'>
                            Read More 
                            <Image src={assets.right_arrow} alt='' className='w-4' />
                        </a>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Services
