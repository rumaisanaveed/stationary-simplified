import React, { useContext, useState } from "react";
import { MainLayout } from "../layouts/MainLayout";
import { Breadcrumb, Radio } from "antd";
import { SearchButton } from "../components/Buttons/SearchButton";
import { breadCrumbItems } from "../constants";
import { TemplateCard } from "../components/TemplateCard";
import { ArrowLeft } from "iconsax-react";
import { useLocation } from "react-router-dom";
import Context from "../context/Context";

export const BusinessCards = () => {
  const { breadCrumbItems } = useContext(Context);
  const location = useLocation();
  const { subCategories } = location.state || {};
  const [categoryWiseData, setCategoryWiseData] = useState([]);
  const showCategoryData = (category) => {};
  return (
    <MainLayout>
      <div className="h-full max-w-full flex flex-col p-5 gap-4 bg-[#f4f4f4]">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <ArrowLeft color="#000000" />
            <h1 className="text-2xl">Business Cards</h1>
          </div>
          <Breadcrumb
            rootClassName="rm-breadcrumb"
            separator=">"
            items={breadCrumbItems}
          />
        </div>
        <SearchButton />
        <div className="flex flex-col gap-2 font-normal">
          <h1 className="font-normal text-base text-black">Categories</h1>
          <Radio.Group
            defaultValue="0"
            buttonStyle="solid"
            rootClassName="rm-radio-tags"
          >
            {subCategories?.map((item, index) => (
              <Radio.Button
                value={`${index}`}
                key={index}
                onClick={() => showCategoryData(item)}
              >
                {item}
              </Radio.Button>
            ))}
          </Radio.Group>
        </div>
        <div className="grid grid-cols-3 overflow-y-scroll gap-x-3 gap-y-2 w-full">
          {Array.from({ length: 8 }, (_, index) => (
            <TemplateCard key={index} className="w-full h-96" />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};
