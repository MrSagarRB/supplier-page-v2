import React from "react";
import { motion } from "framer-motion";

const FeaturesCarousel = () => {
  return (
    <motion.div
      initial={{ y: 200 }}
      whileInView={{ y: 0 }}
      transition={{ ease: "easeOut", duration: 1 }}
      className=" relative mt-[44px] 2xl:w-[70%] w-full  "
    >
      <div className="h-[488px] w-[221px] linear-gradient-1"></div>
      <div className=" h-[350px] w-[85%] absolute top-[69px] left-[90px] overflow-hidden">
        <div className="img-slider  h-full ">
          <div className="slider-container h-full">
            <div className="slide h-full flex">
              <div className="w-[50%] h-full ">
                <img
                  src="https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2230&q=80"
                  className="h-full w-full box-shadow-2"
                />{" "}
              </div>
              <div className="w-[50%] h-full px-[60px]">
                <p className="text-[32px] text-[#407BFF] font-[600] mt-[10px]">
                  01
                </p>
                <p className="text-[25px] font-[500] leading-[20px] mt-[14px] ">
                  Privacy is built in
                </p>
                <p className="mt-[14px]">
                  Your data is secure with us. Only you can see your statstics,
                  the costs and other data you share on our portal. Your
                  location and history are never stored on Mirats Insights
                  Supplier Portal itself. Only Mirats Insights knows your
                  account data which help us to identity you and your
                  performance, the rest of your data we don't save at our end
                  too.
                </p>
              </div>
            </div>
            {/* second */}
            <div className="slide h-full flex">
              <div className="w-[50%] h-full ">
                <img
                  src="https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2230&q=80"
                  className="h-full w-full box-shadow-2"
                />{" "}
              </div>
              <div className="w-[50%] h-full px-[60px]">
                <p className="text-[32px] text-[#407BFF] font-[600] mt-[10px]">
                  02
                </p>
                <p className="text-[25px] font-[500] leading-[20px] mt-[14px] ">
                  Fully Automated
                </p>
                <p className="mt-[14px]">
                  Create manage migrate and monetize your audiences-and keep
                  your community highly engaged and healthy engaged and healthy
                  with our panel and revenue management solution
                </p>
              </div>
            </div>

            {/* Third */}
            <div className="slide h-full flex">
              <div className="w-[50%] h-full ">
                <img
                  src="https://images.unsplash.com/photo-1501556424050-d4816356b73e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
                  className="h-full w-full box-shadow-2"
                />{" "}
              </div>
              <div className="w-[50%] h-full px-[60px]">
                <p className="text-[32px] text-[#407BFF] font-[600] mt-[10px]">
                  03
                </p>
                <p className="text-[25px] font-[500] leading-[20px] mt-[14px] ">
                  Beautifully simple.
                </p>
                <p className="mt-[14px]">
                  A one-click destination to get access to hundreds of best for
                  you surveys. Wanted to automatically add projects on your
                  project list use? No Problem. Want to check for records?
                  Absolutely, No Problem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturesCarousel;
