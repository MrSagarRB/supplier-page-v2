import React from "react";
import { motion } from "framer-motion";

const Registration = () => {
  const radioOptions = [
    {
      title: "Less than a year",
    },
    {
      title: "Mid-sized company",
    },
    {
      title: "Small company",
    },
    {
      title: "Start-up",
    },
    {
      title: "Business idea/Start-up idea",
    },
    {
      title: "Freelancer/Contractor",
    },
    {
      title: "Sole proprietorship",
    },
    {
      title: "Other",
    },
  ];
  return (
    <motion.div
      initial={{ x: 500 }}
      animate={{ x: 0 }}
      transition={{ ease: "easeOut", duration: 0.3 }}
    >
      <p className="text-[#333333] font-[500] text-[24px]">
        Some extra details we might need.
      </p>
      <div className=" mt-[35px] px-[100px]">
        <div>
          <p className="text-[#1765DC] text-[24px] font-[400]">
            {" "}
            Enter your company registration details
          </p>
          <p className="text-[text-[16px] font-[400] mt-[10px]">
            Please enter all details correctly.
          </p>
        </div>
        <table>
          <tr>
            <td>
              <p className="text-[12px] mb-[10px]">Registration Number</p>
              <input type="text" placeholder="Type.." />
            </td>
          </tr>
          <tr>
            <td>
              <p className="text-[12px] mb-[10px]">Company Start date</p>
              <input type="date" />
            </td>
          </tr>
          <tr>
            <td>
              <p className="text-[12px] mb-[10px]">
                Number of customers/Client/Suppliers in the company
              </p>
              <input type="number" placeholder="Enter total count in numbers" />
            </td>
          </tr>
          <tr>
            <td>
              <p className="text-[12px] mb-[10px]">Offices in country</p>
              <select className="w-full h-full border border-[#DFDFDF] rounded-[6px] py-[11px] px-[16px] outline-none text-[#C0C0C0]">
                <option> Select</option>
              </select>
              <p className="text-[#C0C0C0] italic text-[12px]">
                select number of countries your offices are
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p className="text-[12px] mb-[10px]">Total anuual revenue</p>
              <input type="number" placeholder="Enter total count in numbers" />
            </td>
          </tr>
          <tr>
            <td>
              <p className="text-[12px] mb-[10px]">Tax ID Number</p>
              <input type="text" placeholder="Enter in numbers" />
            </td>
          </tr>
        </table>
        <div className="mt-[24px]">
          <p className="text-[#1765DC] text-[24px] font-[400] ">
            What describes best your organisation or needs?
          </p>
          <p className="text-[text-[16px] font-[400] mt-[10px]">
            Please select any one
          </p>
          <div className="mt-[10px] text-[12px] flex flex-col gap-[20px]">
            {radioOptions?.map((radio, ind) => {
              return (
                <div className="flex gap-[16px] cursor-pointer" key={ind}>
                  <input
                    type="radio"
                    id={ind}
                    name="function"
                    className="w-[18px] cursor-pointer"
                  />
                  <label htmlFor={ind} className="cursor-pointer">
                    {radio.title}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Registration;
