import React from "react";
import groupIcon from "../assets/group.svg";

let cardData = [
  {
    icon: groupIcon,
    title: "Supercharged Team.",
    subTitle: "Mirats Insights Supply Chain team",
  },
  {
    icon: "",
    title: "Flexibility, Luquidity.",
    subTitle: "Engage it. Feel it.",
  },
  {
    icon: "",
    title: "Flexibility, Luquidity.",
    subTitle: "Keep your audience engaged ",
  },
];

const BenfitsAndPerks = () => {
  return (
    <div className="box-shadow-1 w-full h-[230px] mt-[20px] bg-[#F3F9FF] flex px-[20px] items-center ">
      <div className="sm:w-[25%] ">
        <p className="text-[25px] font-[600]">Benfits & Perks</p>
        <p className="text-[16px] w-[400] leading-[151%]">
          Monetizing your audience with Ads is an old way to earn. It's time to
          connect with us and join in{" "}
        </p>
      </div>
      <div className=" h-full w-[75%] pl-[40px] py-[35px] grid grid-cols-3 gap-[20px]">
        {cardData?.map((item) => {
          return (
            <div className="w-full h-full bg-[#FFFFFF]">
              <img src={item?.icon} alt="group" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BenfitsAndPerks;
