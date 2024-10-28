import React from "react";
import { MainLayout } from "../layouts/MainLayout";
import { TemplateCard } from "../components/TemplateCard";

export const TemplateLibrary = () => {
  return (
    <MainLayout>
      <div className="flex flex-col p-5 gap-4 bg-[#f4f4f4]">
        <h1 className="text-xl ">Template Library</h1>
        <div className="flex items-center flex-wrap gap-4">
          {Array.from({ length: 10 }, () => (
            <TemplateCard />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};
