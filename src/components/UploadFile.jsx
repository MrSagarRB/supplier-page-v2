import React, { useState } from "react";
import { AiOutlineFilePdf } from "react-icons/ai";
import { BsUpload } from "react-icons/bs";
import { MdOutlineDeleteOutline } from "react-icons/md";

const UploadFile = ({ selectFile, setSelectFile }) => {
  let handelUploadFile = (e) => {
    Object?.entries(e.target.files)?.map(([key, value]) =>
      setSelectFile((prev) => [...prev, { key: value }])
    );
    console.log("Call");
    // setFileContainer(e.target.files);
  };

  let bytesToSize = (bytes) => {
    var sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    if (bytes == 0) return "n/a";
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    if (i == 0) return bytes + " " + sizes[i];
    return (bytes / Math.pow(1024, i)).toFixed(1) + " " + sizes[i];
  };

  const handelDeleteFile = (e, data, index) => {
    e.preventDefault();
    setSelectFile((prev) => selectFile?.filter((d, i) => i !== index));

    console.log("delete.....", index);
  };
  return (
    <div className=" border border-[#1765DC] rounded-[12px] p-[16px] flex gap-[16px]">
      <div className="min-h-[160px] w-[50%] border border-dashed border-[#333333] rounded-[12px] flex justify-center items-center">
        <label htmlFor="file-input">
          <div className=" flex items-center justify-center flex-col">
            <input
              type="file"
              multiple
              className="input-file"
              id="file-input"
              onChange={(e) => {
                handelUploadFile(e);
              }}
            />
            <BsUpload className="text-[#333333]" />
            <p className="text-[#333333] text-[12px]">
              Upload your file(s) here
            </p>
            <p className="text-[#333333] text-[12px]">or</p>
            <div className="bg-[#1765DC] rounded-[6px] py-[4px] px-[16px] text-[#fff] mt-[8px] cursor-pointer">
              Browse
            </div>
          </div>
        </label>
      </div>
      <div className="min-h-[160px] w-[50%]  ">
        <p className="ml-[10px]">File</p>
        <div className="border-l h-[160px] border-[#DFDFDF] pl-[10px] py-[10px] flex flex-col overflow-y-scroll gap-[5px] pr-[10px]">
          {selectFile?.map((item, index) => {
            return (
              <div className="border w-[98%] border-[#DFDFDF] flex gap-[10px] items-center justify-between py-[4px] px-[7px] bg-[#F9F9F9] rounded-[4px] relative">
                <div className="flex justify-between items-center gap-[10px]">
                  <AiOutlineFilePdf />
                  <p className="w-[200px] truncate ..."> {item.key.name} </p>
                </div>
                <p className="text-[10px]">{bytesToSize(item.key.size)} </p>
                <MdOutlineDeleteOutline
                  className="absolute -right-[20px] text-red-500 cursor-pointer"
                  onClick={(e) => handelDeleteFile(e, item, index)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UploadFile;
