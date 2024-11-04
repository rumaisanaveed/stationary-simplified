import { Add, Eye, Heart } from "iconsax-react";
import React from "react";
import { Tag } from "./Tag";
import BackgroundImage from "../assets/images/templateBackground.png";

export const TemplateCard = () => {
  const tags = ["Business Cards", "Purple", "Modern"];
  return (
    <div
      className="w-80 min-w-80 h-80 group"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
      }}
    >
      <div className="relative group-hover:opacity-100 group-hover:duration-500 duration-500 opacity-0 bg-gradient-to-t from-black to-[#00000010] flex flex-col justify-between items-end p-4 h-full z-0">
        {" "}
        <div className="flex flex-col gap-1">
          <div className="bg-white p-1 rounded-[4px]">
            <Heart size="16" color="#000000" />
          </div>
          <div className="bg-white p-1 rounded-[4px]">
            <Add size="16" color="#000000" />
          </div>
          <div className="bg-white p-1 rounded-[4px]">
            <Eye size="16" color="#000000" />
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <h1 className="font-poppins font-medium text-xl text-white">
            Purple Business Card
          </h1>
          <div className="flex gap-1 flex-wrap">
            {tags.map((tag, index) => (
              <Tag heading={tag} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
