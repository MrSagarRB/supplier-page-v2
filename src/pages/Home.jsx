import React from "react";
import waves from "../assets/wave.svg";
import Header from "../components/Header";
import girlImage from "../assets/Girl.png";
import groupWaves from "../assets/Group_waves.png";
import ourVision from "../assets/our_vision.png";
import { motion } from "framer-motion";
import BenfitsAndPerks from "../components/BenfitsAndPerks";

const Home = () => {
  return (
    <div className="relative">
      <div className=" absolute top-0 overflow-hidden z-0 opacity-30">
        <img src={groupWaves} className="w-full h-full" />
      </div>
      <div className="linear-gradient-1 h-full ">
        <Header />
        <section id="sec-1" className=" relative  ">
          {/* <div className="linear-gradient-1 h-full"> */}
          <img src={waves} alt="waves" className="absolute bottom-0 w-full " />

          <motion.div
            animate={{ x: 100 }}
            transition={{ ease: "easeOut", duration: 2 }}
            className=" sm:w-[500px] sm:absolute sm:left-0 top-0  sm:top-[200px]"
          >
            <p className="text-[58px] font-[600] text-[#fff] leading-[80px]">
              The Future of <br /> Research is here
            </p>
            <p className="text-[#fff] text-[20px] font-[500] mt-[16px]">
              Try mirats supe for free
            </p>
            <button className="px-[16px] py-[8px] hover:bg-[#000] hover:text-[#fff] duration-500 bg-[#fff] mt-[31px] text-[16px] font-[600]">
              Become a supplier
            </button>
          </motion.div>
          <motion.div
            animate={{ x: -100 }}
            transition={{ ease: "easeOut", duration: 2 }}
            className=" sm:w-[500px] sm:h-[500px] sm:absolute  sm:right-0 bottom-[100px] sm:bottom-[250px]"
          >
            <img src={girlImage} className="h-full w-full object-cover" />
          </motion.div>
          {/* </div> */}
        </section>
        <section id="sec-2" className=" bg-[#fff] px-[100px] pt-[100px] ">
          <div className=" flex w-full">
            <div className="w-[40%] ">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                translate={{ duration: 1.7 }}
                className=" h-[409px] w-[485px]"
              >
                <img
                  src={ourVision}
                  alt="outVision"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
            <div className="flex flex-col  w-[60%] px-[50px] pt-[30px]">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                translate={{ duration: 1.7 }}
              >
                <p className="text-[25px] font-[600]">
                  Why Mirats Insights Supplier Portal?
                </p>
                <p className="text-[16px] font-[400] leading-[20px] tracking-[0.02em] mt-[10px]">
                  A super-easy way to monetize your web apps. Connect with our
                  system. Put the surveys in your web app. And just like that,
                  your app user will start getting surveys, where they will be
                  rewarded for sharing their opinions, and you as a supplier
                  will get rewarded by us.
                </p>
              </motion.div>
              <motion.div
                initial={{ y: 100 }}
                whileInView={{ y: 0 }}
                translate={{ duration: 1 }}
                className="mt-[50px]"
              >
                <p className="text-[25px] font-[600]">Our Vision</p>
                <p className="text-[16px] font-[400] leading-[20px] tracking-[0.02em] mt-[10px]">
                  We have a clear vision of making all the possible efforts to
                  help the suppliers effortlessly monetize their audience. We do
                  not want any sort of discrepancy b/w you and us.
                </p>
              </motion.div>
            </div>
          </div>
          <BenfitsAndPerks />
        </section>
        <section id="sec-3" className=""></section>
        <section id="sec-4" className="">
          4
        </section>
        <section id="sec-5" className="">
          5
        </section>
      </div>
    </div>
  );
};

export default Home;
