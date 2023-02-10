import React from "react";

const TimeLine = ({ props }) => {
  console.log(props);
  return (
    <div className=" text-[16px] font-[400] relative">
      <div className="border-dashed border-l border-[#B5B5B5] absolute h-full z-0 left-[25px]">
        {" "}
      </div>
      <ul className="flex flex-col gap-[40px]">
        {props.map((item) => {
          return (
            <li>
              <div className="flex items-center gap-[25px] relative">
                <div className="h-[50px] w-[50px] linear-gradient-3 rounded-full flex items-center justify-center ">
                  <img src={item.icon} />
                </div>
                <p className="text-[16px]">{item.title}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TimeLine;
