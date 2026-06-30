import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <section
      id="top"
      className="w-11/12 max-w-4xl mx-auto min-h-screen flex flex-col items-center justify-center text-center gap-5 px-4"
    >
      {/* Profile Image */}
      <div className="mt-16 sm:mt-20">
        <Image
          src={assets.profilePic}
          alt="profile"
          className="rounded-full w-28 sm:w-32 lg:w-40 shadow-lg"
          priority
        />
      </div>

      {/* Intro */}
      <h3 className="flex items-center gap-2 text-lg sm:text-xl md:text-2xl font-Ovo">
        Hi! I'm Abdullah Azhar
        <Image
          src={assets.hand_icon}
          alt="hand-icon"
          className="w-5 sm:w-6"
        />
      </h3>

      {/* Main Heading */}
      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-Ovo leading-tight">
        Full Stack Web Developer <br className="hidden sm:block" />
        based in Pakistan.
      </h1>

      {/* Description */}
      <p className="max-w-2xl text-sm sm:text-base text-gray-600 font-Ovo leading-7">
        I am a Full Stack Developer from Lahore, Pakistan with 2 years of
        experience building modern web applications including Netflix Clone,
        Spotify Clone, NASA projects, AI Powered SaaS Applications, MERN Stack
        Blogging Platforms, and many other exciting projects.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        {/* Contact Button */}
        <a
          href="#contact"
          className="flex items-center gap-2 px-8 sm:px-10 py-3 bg-black text-white rounded-full border border-gray-500 hover:bg-gray-800 transition"
        >
          Contact Me
          <Image
            src={assets.right_arrow_white}
            alt="arrow"
            className="w-4"
          />
        </a>

        {/* Resume Button */}
        <a
          href="/AbdullahAzhar-Resume.pdf"
          download
          className="flex items-center gap-2 px-8 sm:px-10 py-3 rounded-full border border-gray-400 hover:bg-gray-100 transition"
        >
          My Resume
          <Image
            src={assets.download_icon}
            alt="download"
            className="w-4"
          />
        </a>
      </div>
    </section>
  );
};

export default Header;