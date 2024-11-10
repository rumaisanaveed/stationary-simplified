import React from "react";
import { Header } from "../components/Header";
import HeroImage from "../assets/images/heroImage.png";
import HowItWorks from "../assets/images/howItWorks.png";

export const Home = () => {
  return (
    <div>
      <Header />
      <div className="flex items-center p-20 overflow-x-hidden">
        <div className="flex-flex-col gap-3 basis-5/12">
          <h1 className="text-[40px] font-semibold">
            Create Professional Stationery in Minutes
          </h1>
          <p className="text-2xl">
            Design custom business cards, letterheads, and more with just a few
            clicks.
          </p>
          <div className="px-10 py-3 rounded border mt-2 w-min bg-[#55A4FF]">
            <p className="text-base text-white whitespace-nowrap">
              Get Started
            </p>
          </div>
        </div>
        <div className="relative">
          <img
            src={HeroImage}
            alt="hero"
            className="relative -right-60 shadow-2xl"
          />
        </div>
      </div>
      <div className="flex items-center flex-row-reverse p-20 overflow-x-hidden">
        <div className="flex-flex-col gap-3 basis-5/12">
          <h1 className="text-[32px] font-semibold py-3">How It Works</h1>
          <div className="flex flex-col gap-3 pl-5">
            <div>
              <h2 className="bullet-list text-black font-medium text-2xl">
                Step 1: “Choose a Template”
              </h2>
              <p className="text-base font-normal">
                Select from hundreds of pre-designed templates.
              </p>
            </div>
            <div>
              <h2 className="bullet-list text-black font-medium text-2xl">
                Step 2: “Customize Your Design”
              </h2>
              <p className="text-base font-normal">
                Edit text, images, and colors with easy-to-use tools.
              </p>
            </div>
            <div>
              <h2 className="bullet-list text-black font-medium text-2xl">
                Step 3: “Download”
              </h2>
              <p className="text-base font-normal">
                Export your finished design in a professional format, ready for
                print or online use.
              </p>
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            src={HowItWorks}
            alt="mockup"
            className="relative -left-60 shadow-2xl"
          />
        </div>
      </div>
      <div className="flex items-center p-20 overflow-x-hidden">
        <div className="flex-flex-col gap-3 basis-5/12">
          <h1 className="text-[40px] font-semibold">
            Ready to Create Your Perfect Stationery?
          </h1>
          <p className="text-2xl">Get started for free and upgrade anytime!</p>
          <div className="px-10 py-3 rounded border mt-2 w-min bg-[#55A4FF]">
            <p className="text-base text-white whitespace-nowrap">
              Get Started
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
