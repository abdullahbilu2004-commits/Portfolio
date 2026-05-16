// import { assets } from '@/assets/assets'
// import Image from 'next/image'
// import React from 'react'

// const Contact = () => {
//     return (
        
//         <div id='contact' className='flex items-center flex-col scroll-mt-20 
//         px-[12%] py-10 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-gray-50'>

//             <h4 className='text-lg text-center mb-2'>Connect With Me</h4>
//             <h2 className='text-center text-5xl'>Get In Touch</h2>

//             <p className="text-center max-w-2xl mx-auto mt-12 mb-12">
//                 Let's connect and bring your ideas to life. Whether it's a project, collaboration, or just a hello — I'm always open.
//             </p>

//             <form className='max-w-2xl mx-auto'>
//                 <div className='grid grid-cols-2 gap-6 mt-10 mb-8'>
//                     <input className='flex-1 rounded-md p-3 border-[0.5px] bg-white border-gray-400 outline-none ' type="text" placeholder='Enter your Name ' required />
//                     <input className='flex-1 rounded-md p-3 border-[0.5px] bg-white border-gray-400 outline-none ' type="email" placeholder='Enter your Email ' required />
//                 </div>
//                 <textarea rows={6} placeholder='Enter your message' required 
//                 className='flex-1 p-4 border-[0.5px] bg-white border-gray-400 outline-none mb-6 w-full '></textarea>
//                 <button type='Submit' className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black cursor-pointer
//                 text-white rounded-full mx-auto hover:bg-black duration-500'>Submit Now <Image src={assets.right_arrow_white} alt='' className='w-4' /> </button>
               
//             </form>

//         </div>
//     )
// }

// export default Contact

import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className='w-full scroll-mt-20 px-4 sm:px-6 lg:px-[12%] py-16 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-gray-50'
    >
      {/* Heading */}
      <div className="text-center">
        <h4 className="text-lg font-Ovo text-gray-600">
          Connect With Me
        </h4>

        <h2 className="text-3xl sm:text-5xl font-Ovo mt-2">
          Get In Touch
        </h2>

        <p className="max-w-2xl mx-auto mt-6 text-gray-600 leading-7 text-sm sm:text-base">
          Let’s connect and bring your ideas to life. Whether it’s a
          project, collaboration, or just a hello — I’m always open.
        </p>
      </div>

      {/* Form */}
      <form className="max-w-2xl mx-auto mt-12">
        
        {/* Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
          <input
            type="text"
            placeholder="Enter your name"
            required
            className="w-full p-3 rounded-lg border border-gray-300 bg-white outline-none focus:border-black transition"
          />

          <input
            type="email"
            placeholder="Enter your email"
            required
            className="w-full p-3 rounded-lg border border-gray-300 bg-white outline-none focus:border-black transition"
          />
        </div>

        {/* Message */}
        <textarea
          rows={6}
          placeholder="Enter your message"
          required
          className="w-full p-4 rounded-lg border border-gray-300 bg-white outline-none resize-none mb-6 focus:border-black transition"
        ></textarea>

        {/* Button */}
        <button
          type="submit"
          className="mx-auto flex items-center gap-2 bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition duration-500"
        >
          Submit Now

          <Image
            src={assets.right_arrow_white}
            alt="arrow"
            className="w-4"
          />
        </button>
      </form>
    </section>
  );
};

export default Contact;
