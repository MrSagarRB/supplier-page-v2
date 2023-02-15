import React, { useContext } from "react";
import { ContextProvider } from "../../Context";
import { motion } from "framer-motion";
const radioOptions = [
  {
    title: "Alliance Manager",
  },
  {
    title: "C- Level Executive",
  },
  {
    title: "Marketing",
  },
  {
    title: "Sales",
  },
  {
    title: "Technical",
  },
  {
    title: "Management",
  },
  {
    title: "Operations",
  },
  {
    title: "Other",
  },
];

const YourDetails = () => {
  let { setFormIndex, formIndex, activeSteps } = useContext(ContextProvider);
  return (
    <motion.div
      initial={{ x: 500 }}
      animate={{ x: 0 }}
      transition={{ ease: "easeOut", duration: 0.3 }}
      className=""
    >
      <p className="text-[#333333] font-[500] text-[24px]">
        Lets get started !
      </p>
      <p className=" mt-[10px] font-[16px]">
        Let's begin your registeration journey of Mirats Supe. If your company
        wants a mutual partnership with Mirats Insights and wanted us to work
        with you, please click here to register as a new Mirats One member.
      </p>
      <div className=" flex mt-[35px]">
        <div className="w-[60%]">
          <p className="text-[#1765DC] text-[24px] font-[400]">
            {" "}
            Enter your details
          </p>
          <table className="mt-[35px]">
            <tr>
              <td>
                <p className="text-[text-[16px] font-[400]">
                  All the details should match with the company domain provided.
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="text-[12px] mb-[10px]">Your full name</p>
                <input type="text" placeholder="Type your name" />
              </td>
            </tr>
            <tr>
              <td>
                <p className="text-[12px] mb-[10px]">Your Job Title</p>
                <input type="text" placeholder="Type your Job Title" />
              </td>
            </tr>
            <tr>
              <td>
                <p className="text-[12px] mb-[10px]">Your Email</p>
                <input type="text" placeholder="Enter a valid email address" />
              </td>
            </tr>
            <tr>
              <p className="text-[12px] mb-[10px]">Your Contact</p>
              <div className="w-full h-[40px] border border-[#DFDFDF] rounded-[6px] overflow-hidden flex">
                <select className="h-full border-r pl-[16px] outline-none text-[#C0C0C0]">
                  <option>+91</option>
                </select>
                <input type="text" className="h-full w-full numberInput" />
              </div>
            </tr>
            <tr>
              <td>
                <p className="text-[12px] mb-[10px]">
                  Country you currently work in
                </p>
                <select className="w-full h-full border border-[#DFDFDF] rounded-[6px] py-[11px] px-[16px] outline-none text-[#C0C0C0]">
                  <option>Select</option>
                  <option>India</option>
                </select>
              </td>
            </tr>
          </table>
        </div>
        <div className="w-[40%] pl-[50px] ">
          <p className="text-[24px] text-[#1765DC]">Your job function</p>
          <p className="mt-[35px] text-[text-[16px] font-[400]">
            {" "}
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
                    {" "}
                    {radio.title}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="mt-[50px]  flex items-center justify-center">
        <button
          onClick={() => {
            setFormIndex(1);
            activeSteps.push(formIndex);
          }}
          className="bg-[#1765DC] px-[16px] py-[8px] rounded-[8px] text-[#FFFFFF]"
        >
          Next
        </button>
      </div>
    </motion.div>
  );
};

export default YourDetails;
