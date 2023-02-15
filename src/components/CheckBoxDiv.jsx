import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const CheckBoxDiv = ({ props }) => {
  let [check, setCheck] = useState(false);
  console.log(props);
  return (
    <div className="">
      <label>
        <input
          type="checkbox"
          className="check-btn"
          onChange={(e) => setCheck(e.target.checked)}
        />
        <div className="container w-full py-[5px] px-[12px] border border-[#1765DC] rounded-[8px] flex items-center gap-[11px] duration-700 cursor-pointer">
          {check ? <AiOutlineMinus /> : <AiOutlinePlus />}
          {props?.title}
        </div>
      </label>
    </div>
  );
};

export default CheckBoxDiv;
