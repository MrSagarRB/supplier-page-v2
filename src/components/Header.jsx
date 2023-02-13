import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import MiLogoWhite from "../assets/mi_logo_white.png";
import MiLogoBlack from "../assets/mi_black_logo.png";
import { motion } from "framer-motion";
import { ContextProvider } from "../Context";
import Hamburger from "hamburger-react";

let navData = [
  {
    title: "Overview",
    linkUrl: "#sec-2",
  },
  {
    title: "Guide To Portal",
    linkUrl: "#sec-3",
  },
  {
    title: "Features",
    linkUrl: "#sec-4",
  },
  {
    title: "Prerequisites ",
    linkUrl: "#sec-5",
  },
  {
    title: "Explore Product",
    linkUrl: "#sec-6",
  },
];

const Header = () => {
  let { scrollPosition } = useContext(ContextProvider);
  let { isOpen, setOpen } = useContext(ContextProvider);

  return (
    <header
      className={` ${
        scrollPosition > 200 && "px-[20px]"
      } py-[28px] fixed top-0 z-10 duration-300 lg:w-full `}
    >
      <div
        className={`${
          scrollPosition > 200 ? "text-[rgb(0,0,0)]" : "text-[#fff]"
        } lg:hidden flex `}
      >
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      <div
        className={` ${
          scrollPosition > 200 && "linear-gradient-5  shadow-md"
        }    lg:flex justify-between  sm:px-[100px] px-[20px] py-[10px] duration-200 ${
          isOpen ? " flex" : "hidden"
        }    `}
      >
        <div className="hidden lg:flex items-center">
          <a href="#">
            <img
              src={scrollPosition > 600 ? MiLogoBlack : MiLogoWhite}
              alt="logo"
            />
          </a>
        </div>
        <nav className="flex  flex-col lg:flex-row sm:gap-[40px] gap-[20px] ">
          <ul className="flex flex-col lg:flex-row items-center  sm:gap-[40px] gap-[20px]  text-[15px] font-[500]">
            {navData?.map((item, ind) => {
              return (
                <li key={ind}>
                  <a
                    href={item.linkUrl}
                    className="cursor-pointer text-[#fff] font-[600] text-shadow"
                  >
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
          <button
            className={`bg-[#FFFFFF]
             px-[16px] py-[8px] hover:bg-[#000]  hover:text-[#fff] duration-500  text-[16px] font-[600] `}
          >
            Sign in
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
