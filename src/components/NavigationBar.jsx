import React, { useContext } from "react";
import { ContextProvider } from "../Context";

const NavigationBar = () => {
  let { formIndex, setFormIndex, activeSteps } = useContext(ContextProvider);

  return (
    <div
      className={`${
        activeSteps[0] === undefined ? "hidden" : "flex"
      }   justify-center pt-[100px]`}
    >
      <div className="w-[900px] flex justify-between ">
        <button
          onClick={() => {
            setFormIndex(formIndex - 1);
            activeSteps.pop();
          }}
          className="text-[#1765DC] border border-[#1765DC] px-[16px] py-[8px] rounded-[8px] "
        >
          Back
        </button>
        <button
          onClick={() => {
            setFormIndex(formIndex + 1);
            activeSteps.push(formIndex);
          }}
          className="bg-[#1765DC] px-[16px] py-[8px] rounded-[8px] text-[#FFFFFF]"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default NavigationBar;
