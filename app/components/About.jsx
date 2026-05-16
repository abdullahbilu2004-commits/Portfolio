import React from "react";
import Image from "next/image";
import { assets, infoList, toolsData } from "@/assets/assets";

const About = () => {
  return (
    <section
      id="about"
      className="w-11/12 max-w-6xl mx-auto scroll-mt-20 py-16 px-4 sm:px-6 lg:px-8"
    >
      {/* Heading */}
      <div className="text-center">
        <h4 className="text-lg font-Ovo text-gray-600">
          Introduction
        </h4>

        <h2 className="text-3xl sm:text-5xl font-Ovo mt-2">
          About Me
        </h2>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20 mt-16">
        
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <Image
            src={assets.profilePic}
            alt="profile"
            className="w-64 sm:w-80 rounded-3xl shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div className="flex-1">
          
          {/* Description */}
          <p className="text-gray-600 leading-7 max-w-2xl mb-10 text-sm sm:text-base">
            A Full Stack Web Developer is a creative engineer who transforms
            UI designs into responsive and interactive web experiences. Skilled
            in HTML, CSS, JavaScript, React, and Next.js, they build fast,
            scalable, and user-friendly applications with clean design and
            seamless performance across all devices.
          </p>

          {/* Info Cards */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-3xl">
            {infoList.map(
              ({ icon, title, description }, index) => (
                <li
                  key={index}
                  className="border border-gray-300 rounded-xl p-6 hover:-translate-y-1 hover:shadow-xl hover:bg-indigo-50 transition-all duration-500 cursor-pointer"
                >
                  <Image
                    src={icon}
                    alt={title}
                    className="w-7"
                  />

                  <h3 className="my-4 font-semibold text-gray-700">
                    {title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-6">
                    {description}
                  </p>
                </li>
              )
            )}
          </ul>

          {/* Tools Section */}
          <div className="mt-10">
            <h4 className="text-gray-700 font-medium mb-5">
              Tools I Use
            </h4>

            <ul className="flex flex-wrap items-center gap-4">
              {toolsData.map((tool, index) => (
                <li
                  key={index}
                  className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-300 rounded-xl hover:-translate-y-1 hover:bg-indigo-50 hover:shadow-lg transition-all duration-500 cursor-pointer"
                >
                  <Image
                    src={tool}
                    alt="tool"
                    className="w-5 sm:w-7"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;