import React, { useContext } from "react";
import Steper from "../components/Steper";
import NavigationBar from "../components/NavigationBar";
import { ContextProvider } from "../Context";
import YourDetails from "../components/Forms/YourDetails";
import CompanyDetails from "../components/Forms/CompanyDetails";
import Registration from "../components/Forms/Registration";
import Extras from "../components/Forms/Extras";
import MarketAndIndustries from "../components/Forms/MarketAndIndustries";
import PanelBase from "../components/Forms/PanelBase";
import Confirmation from "../components/Forms/Confirmation";

const OnboardingForm = () => {
  const forms = [
    <YourDetails />,
    <CompanyDetails />,
    <Registration />,
    <Extras />,
    <MarketAndIndustries />,
    <PanelBase />,
    <Confirmation />,
  ];

  let { formIndex } = useContext(ContextProvider);

  return (
    <div className=" h-screen py-[64px] px-[20px]">
      <Steper />
      <div className=" flex items-center justify-center">
        <div className="w-[900px]  min-h-[600px]"> {forms[formIndex]}</div>
      </div>
      <NavigationBar />
    </div>
  );
};

export default OnboardingForm;
