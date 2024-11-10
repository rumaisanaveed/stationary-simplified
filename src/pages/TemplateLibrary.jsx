import React, { useContext } from "react";
import { MainLayout } from "../layouts/MainLayout";
import { TemplateCard } from "../components/TemplateCard";
import { Breadcrumb, Radio } from "antd";
import { SearchNormal1 } from "iconsax-react";
import { breadCrumbItems, templateCategories } from "../constants";
import { useNavigate } from "react-router-dom";
import Context from "../context/Context";

export const TemplateLibrary = () => {
  const { breadCrumbItems } = useContext(Context);
  const navigate = useNavigate();
  const handleSeeMore = (name, url, subCategories) => {
    navigate(url, {
      state: { subCategories },
    });
    breadCrumbItems.push({
      title: name,
      href: url,
    });
  };

  return (
    <MainLayout>
      <div className="h-full max-w-full flex flex-col p-5 gap-4 bg-[#f4f4f4]">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl">Template Library</h1>
          <Breadcrumb
            rootClassName="rm-breadcrumb"
            separator=">"
            items={breadCrumbItems}
          />
        </div>
        <div className="flex gap-3 w-1/2 items-center bg-white border rounded-md text-custom-gray-50 px-4 py-3 border-black-30">
          <SearchNormal1 size="16" color="#4F4F4F" />
          <input
            type="text"
            placeholder="Search"
            className="w-full lg:w-auto text-xs placeholder:text-xs bg-inherit focus:outline-none"
          />
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
        <div className="h-full flex flex-col gap-4 overflow-y-scroll w-full no-scrollbar scroll-smooth">
          {templateCategories.map((item, index) => (
            <div
              key={index}
              id={`${item[1]}`}
              className="flex flex-col w-full gap-2 pt-2"
            >
              <div className="flex justify-between items-center">
                <h1 className="font-normal text-base text-black">{item[0]}</h1>
                <p
                  className="text-xs cursor-pointer"
                  onClick={() => handleSeeMore(item[0], item[2], item[3])}
                >
                  see more
                </p>
              </div>
              <div className="flex gap-2 overflow-x-scroll no-scrollbar w-full">
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
