import React, { useEffect, useState } from "react";
import lines from "../assets/line2.svg";
import arrow from "../assets/arrow.svg";
import { motion } from "framer-motion";

let ExploreData = [
  {
    id: 0,
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80",
    title: "Projects API",
    subTitle:
      "You'll get a list of surveys inventory, launch them accordingly where you have the capability to choose which projects to run and get access to pricing data, ",
  },
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    title: "Projects API 2",
    subTitle:
      "You'll get a list of surveys inventory, launch them accordingly where you have the capability to choose which projects to run and get access to pricing data, ",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    title: "Projects API 3",
    subTitle:
      "You'll get a list of surveys inventory, launch them accordingly where you have the capability to choose which projects to run and get access to pricing data, ",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1504610926078-a1611febcad3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    title: "Projects API 4",
    subTitle:
      "You'll get a list of surveys inventory, launch them accordingly where you have the capability to choose which projects to run and get access to pricing data, ",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    title: "Projects API 5",
    subTitle:
      "You'll get a list of surveys inventory, launch them accordingly where you have the capability to choose which projects to run and get access to pricing data, ",
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    title: "Projects API 6",
    subTitle:
      "You'll get a list of surveys inventory, launch them accordingly where you have the capability to choose which projects to run and get access to pricing data, ",
  },
];

const Explore = () => {
  let [index, setIndex] = useState(0);

  let nextBtn = () => {
    ExploreData.length - 1 > index ? setIndex(index + 1) : setIndex(0);
  };

  let prevBtn = () => {
    index === 0 ? setIndex(ExploreData.length - 1) : setIndex(index - 1);
  };

  useEffect(() => {
    setTimeout(() => {
      nextBtn();
    }, 5000);
  });

  return (
    <div className="h-full w-[80%] relative  ">
      <div className="linear-gradient-4 h-[80%] p-[30px] flex relative">
        <img
          src={lines}
          alt="line"
          className="opacity-50 absolute right-0 top-0"
        />
        <div className="w-[50%] h-full ">
          <img
            className="w-full h-full object-fill  box-shadow-2"
            src={ExploreData[index].img}
          />
        </div>
        <div className=" w-[50%] relative h-full">
          <div className=" pl-[50px] mt-[80px] text-[#fff]">
            <p className="text-[25px] font-[600]">{ExploreData[index].title}</p>
            <p className="text-[16px] font-[400] mt-[30px]">
              You'll get a list of surveys inventory, launch them accordingly
              where you have the capability to choose which projects to run and
              get access to pricing data,
            </p>
          </div>
          <div className=" absolute bottom-0 left-[50px]  flex gap-[20px]">
            <div
              onClick={() => {
                prevBtn();
              }}
              className=" flex items-center justify-center border-2 border-[#FFFFFF] h-[40px] w-[40px] rounded-full"
            >
              <img src={arrow} />
            </div>
            <div
              onClick={() => {
                nextBtn();
              }}
              className=" flex items-center justify-center border-2 border-[#FFFFFF] h-[40px] w-[40px] rounded-full"
            >
              <img src={arrow} className="rotate-180" />
            </div>
          </div>
        </div>
      </div>
      <div className=" w-[50%] absolute bottom-0 left-[400px] flex gap-[20px] ">
        {ExploreData.map((item, ind) => {
          return (
            <div
              onClick={() => {
                setIndex(ind);
              }}
              key={ind}
              className={`${
                index == item.id ? "bg-[#165ECB]" : "bg-[#1765DC33]"
              }  w-[31px] h-[8px]   rounded-[10px]`}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Explore;
