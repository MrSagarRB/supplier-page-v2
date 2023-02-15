import React from "react";
import { motion } from "framer-motion";

const CompanyDetails = () => {
  return (
    <motion.div
      className=" "
      initial={{ x: 500 }}
      animate={{ x: 0 }}
      transition={{ ease: "easeOut", duration: 0.3 }}
    >
      <p className="text-[#333333] font-[500] text-[24px]">
        Fill up your company details
      </p>
      <div className="mt-[30px]  ">
        <p className="text-[#1765DC] text-[24px] font-[400] ">
          Enter your company details
        </p>
        <p className="text-[text-[16px] font-[400] mt-[10px]">
          All the details should match with the company domain provided.
        </p>
        <table>
          <tr>
            <td>
              <p className="text-[12px] mb-[10px]">Company name</p>
              <input type="text" placeholder="Enter your company name" />
            </td>
          </tr>
          <tr>
            <td>
              <p className="text-[12px] mb-[10px]">Company website URL</p>
              <input type="text" placeholder="Enter your company domain" />
              <p className="text-[#C0C0C0] italic text-[12px]">
                If corporate email address is username@companyabc.com then your
                account domain would be companyabc.com{" "}
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p className="text-[12px] mb-[10px]">Company name</p>
              <textarea placeholder="Describe your company" />
            </td>
          </tr>
        </table>
        <table className="mt-[20px]">
          <tr>
            <td>
              <p className="text-[12px] mb-[10px]">Company Address</p>
              <input type="text" placeholder="Address Line 1" />
            </td>
          </tr>
          <tr>
            <td>
              <input type="text" placeholder="Address Line 2" />
            </td>
          </tr>
          <tr>
            <td>
              <p className="text-[12px] mb-[10px]">Country</p>
              <select className="w-full h-full border border-[#DFDFDF] rounded-[6px] py-[11px] px-[16px] outline-none text-[#C0C0C0]">
                <option> Select</option>
                <option>India</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <div className="flex gap-[26px]">
                <div className="w-[50%]">
                  <p className="text-[12px] mb-[10px]">City</p>
                  <select className="w-full  border border-[#DFDFDF] rounded-[6px] py-[11px] px-[16px] outline-none text-[#C0C0C0]">
                    <option> Select</option>
                    <option>Mumbai</option>
                  </select>
                </div>
                <div className="w-[50%]">
                  <p className="text-[12px] mb-[10px]">Postal Code</p>
                  <input type="text" placeholder="Address Line 2" />
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </motion.div>
  );
};

export default CompanyDetails;
