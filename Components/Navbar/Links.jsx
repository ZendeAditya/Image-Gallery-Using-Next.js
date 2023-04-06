"use client";
import React, { useState } from "react";
import Logo from "./Logo";
import Link from "next/link";
import Image from "next/image";
import { TbPhotoSearch } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

const Links = () => {
  const [open, setOpen] = useState(false);
  const Links = [
    { name: "Home", route: "/" },
    { name: "About", route: "/about" },
    { name: "Contact", route: "/contact" },
  ];
  const handleMenu = () => {
    setOpen(!open);
  };
  return (
    <div>
      <nav className="backdrop-blur-lg bg-gradient-to-b from-white/60 to-white/30 border-[1px] border-solid border-white border-opacity-30 flex items-center justify-around ">
        <div>
          <Logo />
        </div>
        <ul
          className={` gap-x-5 justify-between items-center text-xl 
        ${
          !open ? "top-0 " : "top-[-160%]"
        }  rounded-lg text-black flex align-middle gap-x-6 flex-col sm:absolute w-fit bg-white h-full top-0 lg:flex-row  z-20 lg:static fixed px-3 justify-around ease-linear lg:bg-transparent lg:text-white `}
        >
          {Links.map((link, index) => (
            <li key={index} className="hover:bg-blue-300 px-4 py-2 rounded-lg duration-300">
              <Link
                href={link.route}
                
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        {/* <div className="px-3 flex items-center justify-between gap-x-4">
          <input
            type="text"
            name="search"
            placeholder="search image here..."
            class="peer h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400"
          />
          <button className="text-blue-800">
            <TbPhotoSearch size={20} />
          </button>
        </div> */}
        {!open ? (
          <GiHamburgerMenu
            onClick={handleMenu}
            size={24}
            className="lg:hidden cursor-pointer z-20 "
          />
        ) : (
          <RxCross1
            onClick={handleMenu}
            size={24}
            className="lg:hidden cursor-pointer z-20"
          />
        )}
      </nav> 
      


    </div>
  );
};

export default Links;
