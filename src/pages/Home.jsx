import React from "react";
import { Header } from "../components/Header";
import HeroImage from "../assets/images/heroImage.png"
import HowItWorks from "../assets/images/howItWorks.png"

export const Home = () => {
  return <div>
    <Header/>
    <div className="flex items-center p-20 overflow-x-hidden">
      <div className="flex-flex-col gap-3 basis-5/12">
        <h1 className="text-[40px] font-semibold">Create Professional Stationery in Minutes</h1>
        <p className="text-2xl">Design custom business cards, letterheads, and more with just a few clicks.</p>
        <div className="px-10 py-3 rounded border w-min bg-[#55A4FF]">
          <p className="text-base text-white whitespace-nowrap">Get Started</p>
        </div>
      </div>
      <div className="relative">
        <img src={HeroImage} alt="" className="relative -right-60 shadow-2xl" />
      </div>
    </div>
    <div className="flex items-center flex-row-reverse p-20 overflow-x-hidden">
      <div className="flex-flex-col gap-3 basis-5/12">
        <h1 className="text-[40px] font-semibold">Create Professional Stationery in Minutes</h1>
        <p className="text-2xl">Design custom business cards, letterheads, and more with just a few clicks.</p>
        <div className="px-10 py-3 rounded border w-min bg-[#55A4FF]">
          <p className="text-base text-white whitespace-nowrap">Get Started</p>
        </div>
      </div>
      <div className="relative">
        <img src={HowItWorks} alt="" className="relative -left-60 shadow-2xl" />
      </div>
    </div>
  </div>
  ;
};
