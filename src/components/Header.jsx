import React from "react";
import { Link } from "react-router-dom";
import MiLogoWhite from "../assets/mi_logo_white.png";
import { motion } from "framer-motion";

let navData = [
  {
    title: "Overview",
    linkUrl: "#sec-1",
  },
  {
    title: "Guide To Portal",
    linkUrl: "#sec-2",
  },
  {
    title: "Features",
    linkUrl: "#sec-3",
  },
  {
    title: "Prerequisites ",
    linkUrl: "#sec-4",
  },
  {
    title: "Explore Product",
    linkUrl: "#sec-5",
  },
];

const Header = () => {
  return (
    <header className=" w-full flex justify-between sm:px-[100px] px-[20px] py-[45px] fixed top-0 z-20">
      <div>
        <img src={MiLogoWhite} alt="logo" />
      </div>
      <nav className="flex  flex-col sm:flex-row sm:gap-[40px] gap-[20px] ">
        <ul className="flex flex-col sm:flex-row items-center  sm:gap-[40px] gap-[20px] text-[#fff] text-[15px] font-[500]">
          {navData?.map((item, ind) => {
            return (
              <li key={ind}>
                <a href={item.linkUrl} className="cursor-pointer">
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
        <button className="px-[16px] py-[8px]  hover:bg-[#000] hover:text-[#fff] duration-500 bg-[#FFFFFF] text-[16px] font-[600]">
          Sign in
        </button>
      </nav>
    </header>
  );
};

export default Header;
