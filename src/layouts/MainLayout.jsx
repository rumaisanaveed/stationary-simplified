import React from "react";
import { Sidebar } from "../components/Sidebar";

export const MainLayout = ({ children }) => {
  return (
    <div className="flex w-screen h-screen">
      <Sidebar />
      <div className="w-full">{children}</div>
    </div>
  );
};
