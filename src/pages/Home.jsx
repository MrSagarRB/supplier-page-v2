import React, { useContext } from "react";
import waves from "../assets/wave.svg";
import Header from "../components/Header";
import girlImage from "../assets/Girl.png";
import groupWaves from "../assets/Group_waves.png";
import ourVision from "../assets/our_vision.png";
import { motion } from "framer-motion";
import BenfitsAndPerks from "../components/BenfitsAndPerks";
import FeaturesCarousel from "../components/FeaturesCarousel";
import Footer from "../components/Footer";
import TimeLine from "../components/TimeLine";
import userIcon from "../assets/timeline icon/User.svg";
import fileIcon from "../assets/timeline icon/file.svg";
import checkIcon from "../assets/timeline icon/CheckCircle.svg";
import uploadIcon from "../assets/timeline icon/UploadSimple.svg";
import roketIcon from "../assets/timeline icon/Rocket.svg";
import Explore from "../components/Explore";
import imgLastDiv from "../assets/imageLastDiv.svg";
import wavesBot from "../assets/waves-botoom.svg";
import footerWave from "../assets/footerWave.svg";
import locationIcon from "../assets/footer-icon/location.svg";
import phone from "../assets/footer-icon/phon.svg";
import message from "../assets/footer-icon/message.svg";
import tweeter from "../assets/social/tweeter.svg";
import facebook from "../assets/social/facebook.svg";
import linkdin from "../assets/social/linkdin.png";
import { ContextProvider } from "../Context";
import { Link } from "react-router-dom";

let timelLine = [
  {
    icon: userIcon,
    title: "Sign up on our supplier portal",
  },
  {
    icon: fileIcon,
    title: "Receive your application",
  },
  {
    icon: checkIcon,
    title: "Check at our end ",
  },
  {
    icon: uploadIcon,
    title: "Submit other external documents for verification (if required)",
  },
  {
    icon: roketIcon,
    title: "Launch a few campaigns OTC (over the counter), after your review ",
  },
];

let preReqData = [
  {
    title: "Should have atleast two year of experience.",
  },
  {
    title:
      "You cannot monetize if you've added another third-party ads service integration such as (Adsense, ClickBank, etc.) ",
  },
  {
    title: "Should have atleast 1k+ members in your web application. ",
  },
  {
    title:
      "SYou should be compliant with GDPR Policies and CCPA (if your users exists in US and European countries)",
  },
];

const Home = () => {
  let { isOpen, setOpen } = useContext(ContextProvider);
  return (
    <div className="relative overflow-hidden">
      <div
        className={`bg-black ${
          isOpen ? "" : "hidden"
        }  h-full w-full absolute z-10 duration-500 opacity-20`}
      >
        {" "}
      </div>
      <div className=" absolute top-0 overflow-hidden z-0 opacity-30">
        <img src={groupWaves} className="h-full w-full " />
      </div>
      <div className="linear-gradient-1 h-full ">
        <Header />
        <section id="sec-1" className=" relative h-screen   overflow-hidden ">
          <img
            src={waves}
            alt="waves"
            className=" xl:w-full absolute  bottom-0"
          />
          <div className=" sm:flex justify-between lg:pt-[100px] pt-[50px]  ">
            <motion.div
              animate={{ x: 100 }}
              transition={{ ease: "easeOut", duration: 1 }}
              className=" w-[500px] "
            >
              <p className="text-[58px] font-[600] text-[#fff] leading-[80px]">
                The Future of <br /> Research is here
              </p>
              <p className="text-[#fff] text-[20px] font-[500] mt-[16px]">
                Try mirats supe for free
              </p>
              <Link to="onboarding-form">
                <button className="px-[16px] py-[8px] hover:bg-[#000] hover:text-[#fff] duration-500 bg-[#fff] mt-[31px] text-[16px] font-[600]">
                  Become a supplier
                </button>
              </Link>
            </motion.div>
            <motion.div
              animate={{ x: -100 }}
              transition={{ ease: "easeOut", duration: 1 }}
              className="h-[400px]   w-[400px]   2xl:h-[700px] 2xl:w-[600px]"
            >
              <img src={girlImage} className="h-full w-full object-cover " />
            </motion.div>{" "}
          </div>
        </section>
        <section
          id="sec-2"
          className="px-[100px] bg-white 2xl:pt-[200px] flex flex-col items-center  "
        >
          <div className="lg:flex w-full  mb-[100px] 2xl:mb-[200px]  2xl:w-[70%] ">
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
            <div className="flex lg:flex-col   lg:w-[60%] px-[50px] pt-[30px] ">
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
                className="lg:mt-[50px]"
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
        <section
          id="sec-3"
          className="h-screen px-[100px] bg-white   flex flex-col justify-center items-center"
        >
          <div className=" w-full">
            <p className="text-[25px] font-[600]">Supplier Portal Features</p>
          </div>
          <FeaturesCarousel />
        </section>{" "}
        <section id="sec-4" className=" bg-white flex  items-center w-full  ">
          <div className="bg-[#F3F9FF]  w-full   items-center flex">
            <motion.div
              initial={{ x: -200 }}
              whileInView={{ x: 0 }}
              transition={{ ease: "easeOut", duration: 1 }}
              className=" h-full w-[50%] flex items-center justify-center pl-[130px] pr-[70px] "
            >
              <div className="   ">
                <p className="font-[600] text-[25px]">How does it Work?</p>{" "}
                <p className="text-[20px] font-[400] mt-[10px]">
                  It's simple and easy
                </p>
                <div>
                  <ul className="text-[16px] font-[300] list-disc mt-[80px]">
                    <li>
                      {" "}
                      Your data quality will be reviewed before going ahead with
                      the official partnerships.
                    </li>
                    <li>
                      You can choose different products available at our end to
                      monetize your application/community
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ x: 200 }}
              whileInView={{ x: 0 }}
              transition={{ ease: "easeOut", duration: 1 }}
              className=" h-full w-[50%] py-[70px] "
            >
              <TimeLine props={timelLine} />
            </motion.div>
          </div>
        </section>
        <section
          id="sec-5"
          className="bg-[#fff] px-[100px] pt-[100px]  flex  flex-col  items-center "
        >
          <div className="w-full">
            <p className="text-[25px] font-[600]  mt-[50px]">
              Explore Products in a Nutshell
            </p>
          </div>

          <div className="h-[500px]  w-full mt-[40px] 2xl:mt-[200px] flex justify-center items-center 2xl:w-[70%] ">
            <Explore />
          </div>
        </section>
        <section id="sec-6" className=" bg-[#fff]  pt-[100px]  h-[500px]">
          <div className="px-[100px]">
            <p className="text-[25px] font-[600]">
              Mirats Insights Supplier prerequisites{" "}
            </p>
          </div>
          <ul className="mt-[60px]">
            {preReqData.map((item, ind) => {
              return (
                <li key={ind} className="oddBg">
                  <div className="py-[24px] px-[100px] flex items-center gap-[34px] ">
                    <div className="h-[10px] w-[10px] rounded-full linear-gradient-1"></div>
                    <p> {item.title}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
        <div
          id=""
          className="bg-[#fff] px-[100px] pt-[2em] flex justify-center items-start "
        >
          <div className="flex w-full 2xl:w-[60%] mt-[3em]">
            <div className=" w-[60%] flex items-center justify-center">
              <div className=" px-[50px]">
                <p className="text-[25px] font-[600]">
                  More panelist. More fun. More you.
                </p>
                <p className="mt-[40px]">
                  Your data is secure with us. Only you can see your statstics,
                  the costs and other data you share on our portal. Your
                  location and history are never stored on Mirats Insights
                  Supplier Portal itself. Only Mirats Insights knows your
                  account data which help us to identiy you and your performace,
                  the rest of your data we don't save at our end too.
                </p>
              </div>
            </div>
            <div className="w-[40%] flex items-center justify-center">
              <div>
                <img src={imgLastDiv} />
              </div>
            </div>
          </div>
        </div>
        <section className="h-[550px] 2xl:h-[700px] ">
          <div className="w-full ">
            <img src={footerWave} alt="waves" className="h-full w-full " />
          </div>
          <div className=" text-[#FFFFFF] px-[100px] flex justify-between w-full">
            <div className=" ">
              <p className="text-[25px] font-[600]">Customer Service</p>
              <p className="mt-[20px]">
                Have a question? Contact us. Email <br /> us at support
                @miratsinsights.com
              </p>
              <div className="flex gap-[25px]">
                <button className="px-[16px] text-[#000] py-[8px] hover:bg-[#000] hover:text-[#fff] duration-500 bg-[#fff] mt-[31px] text-[16px] font-[600]">
                  Become a supplier
                </button>
                <button className="px-[16px] text-[#000] py-[8px] hover:bg-[#000] hover:text-[#fff] duration-500 bg-[#fff] mt-[31px] text-[16px] font-[600]">
                  Sign in
                </button>
              </div>
            </div>

            <div className=" flex flex-col justify-between">
              <p>Privacy Policy</p>
              <p>Term of use</p>
              <p> Legal</p>
              <p> Sales</p>
            </div>

            <div className=" flex flex-col justify-between">
              <div className="flex gap-[20px]">
                <img src={locationIcon} alt="location" />
                <p>
                  6386 Spring St undefined Anchorage, <br /> Georgia 12473
                  United States
                </p>{" "}
              </div>
              <div className="flex gap-[20px]">
                <img src={phone} alt="location" />
                <p> (843) 555-0130</p>{" "}
              </div>
              <div className="flex gap-[20px]">
                <img src={message} alt="location" />
                <p> support@miratsinsights.com.</p>
              </div>
            </div>
          </div>
          <div className="w-full   flex gap-[25px] px-[100px] mt-[32px] ">
            <img src={tweeter} alt="tweet" className="h-[26px] w-[26px]" />
            <img src={facebook} alt="facebook" className="h-[24px] w-[24px]" />
            <img src={linkdin} alt="linkdin" className="h-[24px] w-[24px]" />
          </div>
          <div className="text-[#FFFFFF] px-[100px] mt-[55px]">
            <p> Copyright © 2022 Mirats Insights. All rights reserved.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
