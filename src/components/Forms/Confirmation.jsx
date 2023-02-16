import React, { useContext } from "react";
import { motion } from "framer-motion";

import { ContextProvider } from "../../Context";

const Confirmation = () => {
  let { formIndex, setFormIndex, activeSteps } = useContext(ContextProvider);
  return (
    <motion.div
      initial={{ x: 500 }}
      animate={{ x: 0 }}
      transition={{ ease: "easeOut", duration: 0.3 }}
      className="h-[500px] w-full "
    >
      <p className="text-[#333333] font-[500] text-[24px]">Final Step!</p>
      <p className="text-[text-[16px] font-[400] mt-[10px]">
        Let’s finish your account setup
      </p>
      <div className="  w-full bg-[#F8FBFF] px-[185px] rounded-[12px] mt-[32px] py-[32px]">
        <div>
          <p className="text-[#1765DC] text-[24px] font-[500]">
            Enter your Email and password
          </p>
          <table>
            <tr>
              <td>
                <p className="text-[#333333] text-[12px] mb-[10px]">
                  {" "}
                  Official Email Address
                </p>
                <input type="text" placeholder="Type.." />
              </td>
            </tr>
            <tr>
              <td>
                <p className="text-[#333333] text-[12px] mb-[10px]">Password</p>
                <input type="password" placeholder="*******" />
              </td>
            </tr>
            <tr>
              <td>
                <p className="text-[#333333] text-[12px] mb-[10px]">
                  Confirm your password
                </p>
                <input type="password" placeholder="*******" />
              </td>
            </tr>
          </table>
          <div>
            <div className="flex justify-between mt-[57px] ">
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
        </div>
      </div>
    </motion.div>
  );
};

export default Confirmation;
