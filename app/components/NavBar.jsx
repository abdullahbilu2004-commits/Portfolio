"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const NavBar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Background banner blur */}
      <div className="w-11/12 fixed right-0 top-0 -z-10 translate-y-[80%]">
        <Image src={assets.header_bg_color} alt="banner-color" className="w-full" />
      </div>

      {/* Main Nav */}
      <nav
        className={`w-full  px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-500 ${isScroll ? "bg-white bg-opacity-80 backdrop-blur-md shadow-md" : ""
          }`}
      >
        {/* Logo */}
        <a href="#top">
          <Image src={assets.OGlogo} alt="Logo" className="w-28 cursor-pointer mr-14" />
        </a>

        {/* Nav Links */}
       <ul
  className={`hidden md:flex items-center gap-6 lg:gap-8 px-12 py-3 transition-all duration-500 ${
    isScroll ? "bg-white " : "bg-white shadow-md rounded-full"
  }`}
>

          <li><a href="#top" className="font-Ovo">Home</a></li>
          <li><a href="#about" className="font-Ovo">About Me</a></li>
          <li><a href="#services" className="font-Ovo">Services</a></li>
          <li><a href="#work" className="font-Ovo">My Work</a></li>
          <li><a href="#contact" className="font-Ovo">Contact Me</a></li>
        </ul>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button className="cursor-pointer">
            <Image src={assets.moon_icon} alt="toggle-icon" className="w-6" />
          </button>

          {/* Contact Button */}
          <a
            className="hidden lg:flex gap-3 px-10 py-2.5 border font-Ovo border-gray-500 items-center rounded-full ml-4"
            href="#contact"
          >
            Contact <Image src={assets.arrow_icon} alt="Arrow" className="w-3" />
          </a>

          {/* Mobile Menu Button */}
          <button className="block md:hidden cursor-pointer" onClick={openMenu}>
            <Image src={assets.menu_black} alt="menu-black" className="w-6" />
          </button>
        </div>

        {/* ------------------- Mobile Menu ------------------- */}
        <ul
          ref={sideMenuRef}
          onClick={closeMenu}
          className="flex md:hidden flex-col py-20 px-10 fixed top-0 bottom-0 -right-64 gap-4 w-64 h-screen bg-rose-50 transition duration-500"
        >
          <div className="absolute top-6 right-6">
            <Image src={assets.close_black} alt="close" className="w-5 cursor-pointer" />
          </div>
          <li><a href="#top" onClick={closeMenu} className="font-Ovo">Home</a></li>
          <li><a href="#about" onClick={closeMenu} className="font-Ovo">About Me</a></li>
          <li><a href="#services" onClick={closeMenu} className="font-Ovo">Services</a></li>
          <li><a href="#work" onClick={closeMenu} className="font-Ovo">My Work</a></li>
          <li><a href="#contact" onClick={closeMenu} className="font-Ovo">Contact Me</a></li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
