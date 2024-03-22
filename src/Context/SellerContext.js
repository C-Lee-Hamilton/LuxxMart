import React, { createContext, useContext } from "react";
// import axios from "axios";

const SellerContext = createContext();

export const usePageContext = () => useContext(PageContext);

export const PageProvider = ({ children }) => {
  return <SellerContext.Provider value={{}}>{children}</SellerContext.Provider>;
};
