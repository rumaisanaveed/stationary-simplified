import React, { createContext, useState } from "react";

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [breadCrumbItems, setBreadCrumbItems] = useState([
    {
      title: "Dashboard",
      href: "/dashboard",
    },
  ]);
  return (
    <Context.Provider value={{ breadCrumbItems, setBreadCrumbItems }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
