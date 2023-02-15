import React from "react";
import { AiOutlineFilePdf } from "react-icons/ai";
import { BsUpload } from "react-icons/bs";

const UploadFile = () => {
  return (
    <div className=" border border-[#1765DC] rounded-[12px] p-[16px] flex gap-[16px]">
      <div className="min-h-[160px] w-[50%] border border-dashed border-[#333333] rounded-[12px] flex justify-center items-center">
        <div className=" flex items-center justify-center flex-col">
          <BsUpload className="text-[#333333]" />
          <p className="text-[#333333] text-[12px]">Upload your file(s) here</p>
          <p className="text-[#333333] text-[12px]">or</p>
          <button className="bg-[#1765DC] rounded-[6px] py-[4px] px-[16px] text-[#fff] mt-[8px]">
            {" "}
            Browse
          </button>
        </div>
      </div>
      <div className="min-h-[160px] w-[50%]  ">
        <p className="ml-[10px]">File</p>
        <div className="border-l h-[160px] border-[#DFDFDF] pl-[10px] py-[10px] flex flex-col overflow-y-scroll gap-[5px] pr-[20px]">
          <div className="border border-[#DFDFDF] flex items-center py-[4px] px-[7px] bg-[#F9F9F9] rounded-[4px]">
            <AiOutlineFilePdf />
            <p> FileName.pdf</p>
          </div>
          <div className="border border-[#DFDFDF] flex items-center py-[4px] px-[7px] bg-[#F9F9F9] rounded-[4px]">
            <AiOutlineFilePdf />
            <p> FileName.pdf</p>
          </div>
          <div className="border border-[#DFDFDF] flex items-center py-[4px] px-[7px] bg-[#F9F9F9] rounded-[4px]">
            <AiOutlineFilePdf />
            <p> FileName.pdf</p>
          </div>
          <div className="border border-[#DFDFDF] flex items-center py-[4px] px-[7px] bg-[#F9F9F9] rounded-[4px]">
            <AiOutlineFilePdf />
            <p> FileName.pdf</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadFile;
