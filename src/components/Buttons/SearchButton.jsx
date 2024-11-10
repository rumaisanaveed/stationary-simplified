import { SearchNormal1 } from "iconsax-react";
import React from "react";

export const SearchButton = () => {
  return (
    <div className="flex gap-3 w-1/2 items-center bg-white border rounded-md text-custom-gray-50 px-4 py-3 border-black-30">
      <SearchNormal1 size="16" color="#4F4F4F" />
      <input
        type="text"
        placeholder="Search"
        className="w-full lg:w-auto text-xs placeholder:text-xs bg-inherit focus:outline-none"
      />
    </div>
  );
};
