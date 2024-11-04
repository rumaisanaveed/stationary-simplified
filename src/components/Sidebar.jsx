import React, { useState } from "react";
import { sidebarLowerItems, sidebarUpperItems } from "../constants";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className="h-screen flex flex-col gap-20 bg-white max-h-screen p-6">
      <div className="flex items-center w-full gap-3">
        <div className="h-8 w-8 bg-[#D9D9D9] border-none rounded"></div>
        <h1 className="font-medium text-xs">Stationary Simplified</h1>
      </div>
      <div className="flex flex-col h-full justify-between text-custom-gray-50 text-base font-normal">
        <SidebarItems items={sidebarUpperItems} />
        <SidebarItems items={sidebarLowerItems} />
      </div>
    </div>
  );
};

const SidebarItems = ({ items }) => {
  return (
    <div className="flex flex-col gap-1">
      {items.map((item) =>
        item.id !== 14 ? (
          <NavLink
            to={item.to}
            key={item.id}
            className={({ isActive }) =>
              `flex items-center gap-2 w-[240px] p-2 rounded-md ${
                isActive ? "bg-[#55A4FF] text-white" : "bg-white text-[#4F4F4F]"
              }`
            }
            onClick={item.id === 14 ? () => console.log("Logout") : undefined}
          >
            {item.icon && <item.icon size={20} color="#4F4F4F" />}
            <p className="text-base whitespace-nowrap">{item.name}</p>
          </NavLink>
        ) : (
          <div
            className="flex items-center gap-2 w-[240px] p-2 rounded-md bg-white text-[#4F4F4F] cursor-pointer"
            key={item.id}
          >
            {item.icon && <item.icon size={20} color="#4F4F4F" />}
            <p className="text-base whitespace-nowrap">{item.name}</p>
          </div>
        )
      )}
    </div>
  );
};
