import React, { useContext, useState } from "react";
import {
  breadCrumbItems,
  sidebarLowerItems,
  sidebarUpperItems,
} from "../constants";
import { NavLink } from "react-router-dom";
import { LogoutModal } from "./Modals/LogoutModal";
import Context from "../context/Context";

export const Sidebar = () => {
  const { setBreadCrumbItems } = useContext(Context);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  return (
    <div className="h-screen flex flex-col gap-20 bg-white max-h-screen p-6">
      <div className="flex items-center w-full gap-3">
        <div className="h-8 w-8 bg-[#D9D9D9] border-none rounded"></div>
        <h1 className="font-medium text-xs">Stationary Simplified</h1>
      </div>
      <div className="flex flex-col h-full justify-between text-custom-gray-50 text-base font-normal">
        <SidebarItems
          items={sidebarUpperItems}
          setIsLogoutModalOpen={setIsLogoutModalOpen}
          setBreadCrumbItems={setBreadCrumbItems}
        />
        <SidebarItems
          items={sidebarLowerItems}
          setIsLogoutModalOpen={setIsLogoutModalOpen}
          setBreadCrumbItems={setBreadCrumbItems}
        />
      </div>
      <LogoutModal
        isLogoutModalOpen={isLogoutModalOpen}
        setIsLogoutModalOpen={setIsLogoutModalOpen}
      />
    </div>
  );
};

const SidebarItems = ({ items, setIsLogoutModalOpen, setBreadCrumbItems }) => {
  const handleAddBreadCrumb = (itemName, itemLink) => {};
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
            onClick={() => handleAddBreadCrumb(item.name, item.to)}
          >
            {item.icon && <item.icon size={20} color="#4F4F4F" />}
            <p className="text-base whitespace-nowrap">{item.name}</p>
          </NavLink>
        ) : (
          <div
            className="flex items-center gap-2 w-[240px] p-2 rounded-md bg-white text-[#4F4F4F] cursor-pointer"
            key={item.id}
            onClick={() => {
              console.log("Logout Clicked.");
              setIsLogoutModalOpen(true);
            }}
          >
            {item.icon && <item.icon size={20} color="#4F4F4F" />}
            <p className="text-base whitespace-nowrap">{item.name}</p>
          </div>
        )
      )}
    </div>
  );
};
