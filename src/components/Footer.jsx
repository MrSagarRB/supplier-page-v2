import React from "react";
import miLogoBlack from "../assets/mi_black_logo.png";
import { MdLocationOn, MdEmail, MdCall } from "react-icons/md";

let cardData = [
  {
    icon: <MdLocationOn />,
    title: "Address",
    subTitle1:
      "Mirats Insights Private LimitedOffice No.305, 1 Aerocity, NIBR Corporate Park, Near Safed Pul, Saki Naka, Mumbai,Maharashtra - 400072, India.",
  },
  {
    icon: <MdEmail />,
    title: "Contact",
    subTitle1: "Mobile No. +91 895733 6583",
    subTitle2: "Telephone No.  0522 350 5265 ",
  },
  {
    icon: <MdCall />,
    title: "Email",
    subTitle1: "mayank.patel@miratsinsights.com",
  },
];

const Footer = () => {
  return (
    <div className=" h-[394px] bg-[#E0E0E0] rounded-tr-[24px] rounded-tl-[24px] px-[100px] pt-[47px]">
      <img src={miLogoBlack} alt="" />
      <div className=" w-full  mt-[40px] h-[200px]  flex gap-[20px] border-b border-[#AEAEAE] px-[20px]">
        {/* Card */}

        {cardData.map((item) => {
          return (
            <div className="h-full w-[400px] flex">
              <div className="  h-full">
                <div className="h-[50px] w-[50px] bg-[#fff] rounded-full flex items-center justify-center text-[24px] text-[#333333]">
                  {item.icon}
                </div>
              </div>
              <div className=" w-full  h-full">
                <div className="h-[50px] flex items-center pl-[15px] ">
                  <p className="text font-[700]"> {item.title}</p>
                </div>
                <div className=" pl-[15px] text-[16px]">
                  <p className="font-[500] text-[#666666]">{item.subTitle1}</p>
                  <p className="font-[500] text-[#666666]">{item?.subTitle2}</p>
                </div>
              </div>
            </div>
          );
        })}

        {/*  */}
      </div>
      <div className=" w-full flex justify-between pt-[30px] px-[20px]">
        <p>Copyright (c) 2023 Mirats Insights, LLC. All rights reserved.</p>
        <p> Privacy Policy | Terms of Use | Privacy Policy | Legal | Sitemap</p>
        <p>भारत</p>
      </div>
    </div>
  );
};

export default Footer;
