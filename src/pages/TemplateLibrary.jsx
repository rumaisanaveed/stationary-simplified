import React from "react";
import { MainLayout } from "../layouts/MainLayout";
import { TemplateCard } from "../components/TemplateCard";
import { Breadcrumb, Radio } from "antd";
import { SearchNormal1 } from "iconsax-react";
import { templateCategories } from "../constants";

export const TemplateLibrary = () => {
  return (
    <MainLayout>
      <div className="h-screen w-full flex flex-col p-5 gap-4 bg-[#f4f4f4]">
        <h1 className="text-xl ">Template Library</h1>
        <Breadcrumb
          rootClassName="rm-breadcrumb"
          separator=">"
          items={[
            {
              title: "Dashboard",
              href: "/dashboard",
            },
            {
              title: "Template Library",
              href: "/template-library",
            },
          ]}
        />
        <div className="flex w-[494px] items-center bg-white border rounded-md text-custom-gray-50 px-4 py-2 border-black-30">
          <SearchNormal1 size="20" color="#4F4F4F" />
          <input
            type="text"
            placeholder="Search"
            className="ml-2 w-full lg:w-auto text-base bg-inherit focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-2 font-normal">
          <h1 className="font-normal text-lg text-black">Categories</h1>
          <Radio.Group
            defaultValue="a"
            buttonStyle="solid"
            rootClassName="rm-radio-tags"
          >
            {templateCategories.map((item, index) => (
              <Radio.Button value="a" key={index}>
                {item}
              </Radio.Button>
            ))}
          </Radio.Group>
        </div>
        <div className="h-full overflow-y-scroll w-full">
          {templateCategories.map((heading, index) => (
            <div key={index} className="flex flex-col w-full gap-2 pt-2">
              <h1 className="font-normal text-lg text-black">{heading}</h1>
              <div className="flex items-center gap-4 overflow-x-scroll no-scrollbar w-full">
                {Array.from({ length: 8 }, (_, index) => (
                  <TemplateCard key={index} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};
