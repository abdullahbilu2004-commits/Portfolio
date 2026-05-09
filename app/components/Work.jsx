import React from 'react';
import Image from 'next/image';
import { assets, workData } from '@/assets/assets';

const Work = () => {
  return (
    <section
      id='work'
      className='scroll-mt-20 px-4 sm:px-6 lg:px-[12%] py-16 '
    >
      <div className='max-w-7xl mx-auto'>
        {/* Section Header */}
        <div className='text-center mb-16'>
            <h4 className='text-3xl'>My Portfolio </h4>
          
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>
            My Latest Work
          </h2>
          <p className='max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed'>
            Explore a collection of my recent projects, each crafted with
            precision, creativity, and real-world impact.
          </p>
        </div>

        {/* Project Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {workData.map((project, index) => (
            <div
              key={index}
              className='group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2'
            >
              {/* Project Image (Height Increased) */}
              <div className='relative h-80 sm:h-96 overflow-hidden'>
                <Image
                  src={project.bgImage}
                  alt={project.title}
                  fill
                  className='object-cover group-hover:scale-110 transition-transform duration-500'
                />

                {/* Overlay Gradient */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
              </div>

              {/* Content Card */}
              <div className='absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-0 group-hover:translate-y-0 transition-transform duration-300'>
                <div className='bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20'>
                  <h3 className='text-xl font-bold mb-2 line-clamp-1'>
                    {project.title}
                  </h3>
                  <p className='text-gray-200 text-sm leading-relaxed mb-4 line-clamp-2'>
                    {project.description}
                  </p>

                  {/* Action Button */}
                  <button className='inline-flex items-center gap-2 bg-white text-gray-900 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors duration-200'>
                    View Project
                    <Image
                      src={assets.send_icon}
                      alt='View project'
                      width={16}
                      height={16}
                      className='transition-transform group-hover:translate-x-1 duration-200'
                    />
                  </button>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className='absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-400/30 transition-all duration-500' />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className='text-center mt-16'>
          <button className='inline-flex cursor-pointer border border-black items-center gap-2 text-black px-8 py-3 rounded-xl font-semibold hover:bg-black hover:border hover:border-white hover:text-white transition-all duration-200 hover:shadow-lg hover:gap-3'>
            Show More
            <svg
              className='w-5 h-5'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M14 5l7 7m0 0l-7 7m7-7H3'
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Work;
