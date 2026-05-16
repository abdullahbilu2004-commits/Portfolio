"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const NavBar = () => {
  const [isScroll, setIsScroll] = useState(false);

  const sideMenuRef = useRef();

  // Open Menu
  const openMenu = () => {
    sideMenuRef.current.style.right = "0";
  };

  // Close Menu
  const closeMenu = () => {
    sideMenuRef.current.style.right = "-16rem";
  };

  // Navbar Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", link: "#top" },
    { name: "About", link: "#about" },
    { name: "Services", link: "#services" },
    { name: "Work", link: "#work" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <>
      {/* Background Blur */}
      <div className="w-11/12 fixed right-0 top-0 -z-10 opacity-50">
        <Image
          src={assets.header_bg_color}
          alt="bg"
          className="w-full"
        />
      </div>

      {/* Navbar */}
      <nav
        className={`fixed top-[-30px] left-0 w-full flex items-center justify-between px-5 sm:px-8 lg:px-[8%] py-4 z-50 transition-all duration-500 ${
          isScroll
            ? "bg-white/80 backdrop-blur-lg shadow-sm"
            : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <a href="#top">
          <Image
            src={assets.OGlogo}
            alt="logo"
            className="w-24 sm:w-28 cursor-pointer"
          />
        </a>

        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-10 px-8 lg:px-12 py-3 rounded-full transition-all duration-500 ${
            isScroll
              ? "bg-white shadow-sm"
              : "bg-white/90 shadow-md"
          }`}
        >
          {navLinks.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                className="font-Ovo text-gray-700 hover:text-pink-500 transition"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          
          {/* Dark Mode Button Commented */}
          {/*
          <button>
            <Image
              src={assets.moon_icon}
              alt="theme"
              className="w-6 cursor-pointer"
            />
          </button>
          */}

          {/* Contact Button */}
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-2 px-6 xl:px-10 py-2.5 border border-gray-400 rounded-full font-Ovo hover:bg-gray-100 transition"
          >
            Contact
            <Image
              src={assets.arrow_icon}
              alt="arrow"
              className="w-3"
            />
          </a>

          {/* Mobile Menu Icon */}
          <button
            className="md:hidden"
            onClick={openMenu}
          >
            <Image
              src={assets.menu_black}
              alt="menu"
              className="w-6 cursor-pointer"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          ref={sideMenuRef}
          className="md:hidden fixed top-0 -right-64 w-64 h-screen bg-white flex flex-col gap-6 px-10 py-20 z-50 transition-all duration-500 shadow-2xl"
        >
          {/* Close Button */}
          <div
            className="absolute top-6 right-6"
            onClick={closeMenu}
          >
            <Image
              src={assets.close_black}
              alt="close"
              className="w-5 cursor-pointer"
            />
          </div>

          {navLinks.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                onClick={closeMenu}
                className="font-Ovo text-gray-700"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default NavBar;