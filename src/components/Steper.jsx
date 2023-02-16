import React, { useContext } from "react";
import { FiCheck } from "react-icons/fi";
import { AiOutlineLine } from "react-icons/ai";
import { ContextProvider } from "../Context";
const Steper = () => {
  const steps = [
    {
      title: "Your Details",
      icon: 0,
    },
    {
      title: "Company Details",
      icon: 1,
    },
    {
      title: "Registration",
      icon: 2,
    },
    {
      title: "Extras",
      icon: 3,
    },
    {
      title: "Market & Industries",
      icon: 4,
    },
    {
      title: "Panel Base",
      icon: 5,
    },
    {
      title: "Confirmation",
      icon: 6,
    },
  ];

  const { activeSteps } = useContext(ContextProvider);

  return (
    <div
      className={` ${
        activeSteps[0] === undefined || activeSteps.length >= 7
          ? "hidden"
          : "flex"
      } mb-[50px] flex items-center  justify-center`}
    >
      <div className="flex items-center justify-center lg:flex-row flex-col gap-[10px] text-[14px] w-full">
        {steps.map((item) => {
          return (
            <div className="flex items-center gap-[5px] stepper">
              <div
                className={`${
                  activeSteps.includes(item.icon)
                    ? "bg-[#1765DC] text-[#fff]"
                    : "bg-[#F9F9F9] text-[#A3A3A3]"
                } h-[32px] w-[32px]  font-[600]  flex justify-center items-center rounded-[8px] box-shadow-3 duration-700 `}
              >
                {/* <FiCheck /> */}
                {item.icon === 0 ? <FiCheck /> : item.icon}
              </div>
              <p
                className={`${
                  activeSteps.includes(item.icon)
                    ? "text-[#1765DC] "
                    : "text-[#A3A3A3]"
                } font-[500] duration-1000`}
              >
                {item.title}
              </p>
              <hr
                className={`${
                  activeSteps.includes(item.icon)
                    ? "border-[#1765DC] border-2"
                    : " border-dashed border-2"
                }    w-[50px] rounded-full duration-700`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Steper;
