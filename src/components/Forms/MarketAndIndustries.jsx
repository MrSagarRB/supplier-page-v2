import React from "react";
import { motion } from "framer-motion";

import CheckBoxDiv from "../CheckBoxDiv";

let checkBoxData = [
  {
    title: "Consumer",
  },
  {
    title: "Health Care",
  },
  {
    title: "Education",
  },
  {
    title: "Non-profits",
  },
  {
    title: "Government",
  },
  {
    title: "Financial Enterprise",
  },
  {
    title: "Other",
  },
];

let checkBoxData2 = [
  {
    title: "Advertising & Marketing",
  },
  {
    title: "Government",
  },
  {
    title: "Agriculture",
  },
  {
    title: "Healthcare & Life Science ",
  },
  {
    title: "Automative",
  },
  {
    title: "Industrial Goods & Manufacturing",
  },
  {
    title: "Business & Professional service",
  },
  {
    title: "Logistics & Transportation",
  },
  {
    title: "Consumer package goods",
  },
  {
    title: "Media & Entertainment",
  },
  {
    title: "Education",
  },

  {
    title: "Non-profits",
  },
  {
    title: "Electrical & Electronics",
  },
  {
    title: "Retail & Wholesale",
  },
  {
    title: "Energy & Utilities",
  },
  {
    title: "Software & Internet",
  },
  {
    title: "Financial Services",
  },
  {
    title: "Telecommunications",
  },

  {
    title: "Food, Beverage & Restaurants",
  },
  {
    title: "Tourism & Leisure",
  },
  {
    title: "Gaming",
  },
];

const MarketAndIndustries = () => {
  return (
    <motion.div
      className=" "
      initial={{ x: 500 }}
      animate={{ x: 0 }}
      transition={{ ease: "easeOut", duration: 0.3 }}
    >
      <p className="text-[#333333] font-[500] text-[24px]">
        Markets & Industries.
      </p>
      <div className="mt-[30px]  px-[100px] ">
        <p className="text-[#1765DC] text-[24px] font-[400] ">Target Markets</p>
        <p className="text-[text-[16px] font-[400] mt-[10px]">
          Please select necessary appropriate option
        </p>
        <div className="mt-[16px] grid grid-cols-2 w-full gap-[10px] ">
          {checkBoxData.map((item) => {
            return <CheckBoxDiv props={item} />;
          })}
        </div>
      </div>
      <div className="mt-[30px]  px-[100px] ">
        <p className="text-[#1765DC] text-[24px] font-[400] ">
          Target Industries
        </p>
        {/* <p className="text-[text-[16px] font-[400] mt-[10px]">
          Please select necessary appropriate option
        </p> */}
        <div className="mt-[16px] grid grid-cols-2 w-full gap-[10px] ">
          {checkBoxData2.map((item) => {
            return <CheckBoxDiv props={item} />;
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default MarketAndIndustries;
