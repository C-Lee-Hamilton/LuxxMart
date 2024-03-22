import React, { createContext, useContext } from "react";
// import axios from "axios";

const PageContext = createContext();

export const usePageContext = () => useContext(PageContext);

export const PageProvider = ({ children }) => {
  return <PageContext.Provider value={{}}>{children}</PageContext.Provider>;
};
