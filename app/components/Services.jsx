import { serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Services = () => {
    return (
        <div id='services' className='flex flex-col items-center scroll-mt-20 px-6 sm:px-[8%] md:px-[10%] lg:px-[12%] py-10'>

            <h4 className='text-base sm:text-lg text-center mb-2'>What I offer</h4>
            <h2 className='text-center text-3xl sm:text-4xl md:text-5xl font-semibold'>
                My Services
            </h2>

            <p className="text-center max-w-xl sm:max-w-2xl mx-auto mt-8 sm:mt-10 mb-10 text-sm sm:text-base text-gray-600">
                I offer tailored web solutions including responsive design, clean UI,
                and full-stack integration to bring your ideas to life.
            </p>

            {/* Responsive Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8 w-full place-items-center'>

                {serviceData.map(({ icon, title, description }, index) => (
                    <div
                        key={index}
                        className='w-full max-w-[320px] border border-gray-300 px-6 sm:px-8 py-8 sm:py-10 rounded-3xl cursor-pointer 
                        hover:bg-indigo-50 hover:shadow-xl transition-all duration-300'
                    >
                        <Image src={icon} className='w-10 h-10' alt={title} />

                        <h3 className='text-base sm:text-lg my-4 text-gray-700 font-medium'>
                            {title}
                        </h3>

                        <p className='text-xs sm:text-sm text-gray-600 leading-relaxed'>
                            {description}
                        </p>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Services