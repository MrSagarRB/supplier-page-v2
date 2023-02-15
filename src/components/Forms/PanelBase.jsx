import React from "react";
import CheckBoxDiv from "../CheckBoxDiv";
import UploadFile from "../UploadFile";
import { motion } from "framer-motion";

let PanelBaseData = [
  {
    title: "Consumer",
  },
  {
    title: "B2B",
  },
  {
    title: "Health Care",
  },
];

let PanelBaseData2 = [
  {
    title: "Ouantitative",
  },
  {
    title: "Qualitative",
  },
  {
    title: "Focus Groups",
  },
  {
    title: "Omnibus",
  },
];

const PanelBase = () => {
  return (
    <motion.div
      className=" "
      initial={{ x: 500 }}
      animate={{ x: 0 }}
      transition={{ ease: "easeOut", duration: 0.3 }}
    >
      <p className="text-[#333333] font-[500] text-[24px]">
        Your company panel base
      </p>
      <p className="text-[text-[16px] font-[400] mt-[10px]">
        Please provide company’s panel statistics which will eventually help us
        to identify the perfect opportunities for you!
      </p>
      <div className="mt-[24px] px-[100px]">
        <p className="text-[#1765DC] text-[24px] font-[400] ">Panel Base</p>
        <div className="flex gap-[10px] flex-col w-[50%] mt-[16px]">
          {PanelBaseData.map((item) => {
            return <CheckBoxDiv props={item} />;
          })}
        </div>
        <div className="mt-[10px]">
          <table>
            <tr>
              <td>
                <p className="text-[12px] mb-[10px]">Panel Count</p>
                <input type="text" placeholder="Type.." />
              </td>
            </tr>
            <tr>
              <td>
                <p className="text-[12px] mb-[10px]">
                  Turn around time for quoting
                </p>
                <input type="text" placeholder="Enter in numbers" />
              </td>
            </tr>
            <tr>
              <td>
                <p className="text-[12px] mb-[10px]">Panel registration URL</p>
                <input type="text" placeholder="Type.." />
              </td>
            </tr>
          </table>
          <p className="text-[#1765DC] text-[24px] font-[400] mt-[10px] ">
            Your Feasibility
          </p>
          <div className="flex gap-[10px] flex-col w-[50%] mt-[16px]">
            {PanelBaseData2.map((item) => {
              return <CheckBoxDiv props={item} />;
            })}
          </div>
          <p className="text-[#1765DC] text-[24px] font-[400] mt-[10px] ">
            Provide your panel book URL or Upload Document
          </p>
          <table>
            <tr>
              <td>
                <p className="text-[12px] mb-[10px]">Panel URL</p>
                <input type="text" placeholder="Paste your URL here" />
              </td>
            </tr>
          </table>
          <div className="flex items-center justify-center gap-[10px] mt-[25px] text-[16px]">
            {" "}
            <hr className="w-[30%] border-[#A8A8A8]" />
            or <hr className="w-[30%] border-[#A8A8A8]" />
          </div>
          <div className="mt-[25px]">
            <UploadFile />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PanelBase;
