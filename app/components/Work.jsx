
import React from 'react';
import { workData } from '@/assets/assets';

const Work = () => {
  return (
    <section id='work' className='scroll-mt-20 px-4 sm:px-6 lg:px-[12%] py-20'>
      <div className='max-w-7xl mx-auto'>

        {/* Section Header */}
        <div className='text-center mb-20'>

          <h4 className='text-lg font-medium text-gray-500 mb-3'>
            My Portfolio
          </h4>

          <h2 className='text-4xl sm:text-5xl font-bold text-gray-900 mb-6'>
            Featured Projects
          </h2>

          <p className='max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed'>
            A collection of modern full-stack applications, AI tools, and
            responsive web solutions built using MERN Stack, Next.js,
            Tailwind CSS, and AI integrations.
          </p>

        </div>

        {/* Projects */}
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>

          {workData.map((project, index) => (
            <div
              key={index}
              className='bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between'
            >

              {/* Number */}
              <div className='w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center text-xl font-bold mb-6'>
                0{index + 1}
              </div>

              {/* Title */}
              <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                {project.title}
              </h3>

              {/* Description */}
              <p className='text-gray-600 leading-relaxed mb-6'>
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className='flex flex-wrap gap-2 mb-6'>
                {project.tech.map((item, i) => (
                  <span
                    key={i}
                    className='px-4 py-2 rounded-full bg-gray-100 text-sm text-gray-700'
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Links (SAFE RENDERING) */}
              {(project.links?.vercel || project.links?.linkedIn) && (
                <div className='flex gap-4 mt-auto'>

                  {project.links?.vercel && (
                    <a
                      href={project.links.vercel}
                      target='_blank'
                      rel='noreferrer'
                      className='px-4 py-2 rounded-xl bg-black text-white text-sm hover:bg-gray-800 transition'
                    >
                      Live Demo
                    </a>
                  )}

                  {project.links?.linkedIn && (
                    <a
                      href={project.links.linkedIn}
                      target='_blank'
                      rel='noreferrer'
                      className='px-4 py-2 rounded-xl border border-gray-300 text-sm hover:bg-gray-100 transition'
                    >
                      LinkedIn
                    </a>
                  )}

                </div>
              )}

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Work;