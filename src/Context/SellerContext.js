import React, { createContext, useContext, useState } from "react";
// import axios from "axios";

const SellerContext = createContext();

export const useSellerContext = () => useContext(SellerContext);

export const SellerProvider = ({ children }) => {
  const [storedImg, setStoredImg] = useState();

  return (
    <SellerContext.Provider
      value={{
        storedImg,
        setStoredImg,
      }}
    >
      {children}
    </SellerContext.Provider>
  );
};
