import React from "react";
import { Sidebar } from "../components/Sidebar";

export const MainLayout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div>{children}</div>
    </div>
  );
};
