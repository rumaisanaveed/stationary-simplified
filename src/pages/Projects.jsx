import React from "react";
import { MainLayout } from "../layouts/MainLayout";
import { SearchButton } from "../components/Buttons/SearchButton";
import { Breadcrumb, Radio } from "antd";
import { breadCrumbItems, templateCategories } from "../constants";
import { Add } from "iconsax-react";
import { TemplateCard } from "../components/TemplateCard";

export const Projects = () => {
  return (
    <MainLayout>
      <div className="h-full max-w-full flex flex-col p-5 gap-4 bg-[#f4f4f4]">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl">My Projects</h1>
          <Breadcrumb
            rootClassName="rm-breadcrumb"
            separator=">"
            items={breadCrumbItems}
          />
        </div>
        <div className="flex items-center w-full justify-between">
          <SearchButton />
          <button className="bg-custom-blue-50 flex items-center justify-center gap-1 text-white text-sm font-normal w-28 py-3 rounded-md">
            <Add color="#fff" />
            <p>Create</p>
          </button>
        </div>
        <div className="flex flex-col gap-2 font-normal">
          <h1 className="font-normal text-base text-black">Categories</h1>
          <Radio.Group
            defaultValue="0"
            buttonStyle="solid"
            rootClassName="rm-radio-tags"
          >
            {templateCategories.map((item, index) => (
              <Radio.Button
                value={`${index}`}
                key={index}
                onClick={() => (window.location.href = `#${item[1]}`)}
              >
                {item[0]}
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
