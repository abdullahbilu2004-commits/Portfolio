// import { assets } from '@/assets/assets'
// import Image from 'next/image'
// import React from 'react'

// const Footer = () => {
//     return (
//         <div className='mt-20'>
//             <div className='text-center'>
//                 <Image src={assets.OGlogo} alt='' className='w-36 mx-auto mb-2' />
//                 <div  className='flex w-max items-center gap-2 mx-auto'>
//                     <Image src={assets.mail_icon} alt='' className='w-6 mx-auto mb-2' />
//                     abdullahbilu2004@gmail.com

//                 </div>
//             </div>

//             <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%]
//             mt-12 py-6'>
//                 <p>@ 2025 Abdullah Azhar. All rights reserved.</p>
//                 <ul className='flex items-center justify-center mt-4 gap-10 sm:mt-0'>
//                     <li><a target='_blank' href="https://github.com/abdullahbilu2004-commits">GitHub</a></li>
//                     <li><a target='_blank' href="https://www.linkedin.com/in/abdullah-azhar-tech/">LinkedIn</a></li>
//                 </ul>
//             </div>
//         </div>
//     )
// }

// export default Footer

import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-20 px-4 sm:px-[8%]">
      
      {/* Top Section */}
      <div className="text-center">
        <Image
          src={assets.OGlogo}
          alt="logo"
          className="w-32 sm:w-36 mx-auto mb-4"
        />

        <div className="flex items-center justify-center gap-2 text-gray-600 text-sm sm:text-base">
          <Image
            src={assets.mail_icon}
            alt="mail"
            className="w-5 sm:w-6"
          />

          <a href="mailto:abdullahbilu2004@gmail.com">
            abdullahbilu2004@gmail.com
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-300 mt-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
        
        <p className="text-gray-600 text-sm sm:text-base">
          © 2025 Abdullah Azhar. All rights reserved.
        </p>

        <ul className="flex items-center gap-6 sm:gap-10 text-sm sm:text-base">
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/abdullahbilu2004-commits"
              className="hover:text-indigo-600 transition"
            >
              GitHub
            </a>
          </li>

          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/abdullah-azhar-tech/"
              className="hover:text-indigo-600 transition"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
