import React, { useContext, useEffect, useState } from "react";
import confetti from "https://cdn.skypack.dev/canvas-confetti";
import { ContextProvider } from "../../Context";

const SuccessfullRegister = () => {
  let [loading, setLoading] = useState(true);
  let { formIndex, setFormIndex, activeSteps } = useContext(ContextProvider);

  useEffect(() => {
    setTimeout(() => {
      confetti();
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div>
      {loading ? (
        <div className="h-[500px] w-full flex items-center justify-center  ">
          <div class="loader"></div>
        </div>
      ) : (
        <div className=" h-full text-[24px] text-[#1765DC] font-[600] ">
          <div className=" flex flex-col items-center justify-center">
            <p className=" ">Woohoo, Congratulations!!</p>
            <div className="flex justify-center items-center flex-col gap-[40px]  mt-[100px]">
              <p>You have successfully completed your profile</p>
              <p>Lets Have Business..</p>
              <p>🥳</p>
              <a href="/">
                <button className="bg-[#1765DC] px-[16px] py-[8px] rounded-[8px] text-[20px] font-[400] text-[#fff]">
                  Go to dashboard
                </button>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SuccessfullRegister;
