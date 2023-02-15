import React from "react";
import { motion } from "framer-motion";
const radioOptions = [
  {
    title: "Less than a year",
  },
  {
    title: "1-3 Years",
  },
  {
    title: "3-5 Years",
  },
  {
    title: "5-10 Years",
  },
  {
    title: "More than 10 Years",
  },
];
const radioOptions2 = [
  {
    title: "1-9 employees",
  },
  {
    title: "10-49 employees",
  },
  {
    title: "50-99 employees",
  },
  {
    title: "100-499 employees",
  },
  {
    title: "500-999 employees",
  },
  {
    title: "1000-9,999 employees",
  },
];
const Extras = () => {
  return (
    <motion.div
      initial={{ x: 500 }}
      animate={{ x: 0 }}
      transition={{ ease: "easeOut", duration: 0.3 }}
      className="tst"
    >
      <p className="text-[#333333] font-[500] text-[24px]">
        Some more selections..
      </p>
      <div className="mt-[24px] px-[100px]">
        <p className="text-[#1765DC] text-[24px] font-[400] ">
          Years in business
        </p>
        <p className="text-[text-[16px] font-[400] mt-[10px]">
          Please select any one
        </p>
        <div className="mt-[10px] text-[12px] flex flex-col gap-[20px]">
          {radioOptions?.map((radio, ind) => {
            return (
              <div
                className="flex gap-[16px] cursor-pointer pl-[10px]"
                key={ind}
              >
                <input
                  type="radio"
                  id={radio.title}
                  name="function"
                  className="w-[18px] cursor-pointer"
                />
                <label htmlFor={radio.title} className="cursor-pointer">
                  {" "}
                  {radio.title}
                </label>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-[24px] px-[100px]">
        <p className="text-[#1765DC] text-[24px] font-[400] ">
          Number of employees
        </p>
        <p className="text-[text-[16px] font-[400] mt-[10px]">
          Please select an appropriate option
        </p>
        <div className="mt-[10px] text-[12px] flex flex-col gap-[20px] ">
          {radioOptions2?.map((radio, ind) => {
            return (
              <div
                className="flex gap-[16px] cursor-pointer pl-[10px]"
                key={ind}
              >
                <input
                  type="radio"
                  id={radio.title}
                  name="emp"
                  className="w-[18px] cursor-pointer"
                />
                <label htmlFor={radio.title} className="cursor-pointer">
                  {radio.title}
                </label>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Extras;
