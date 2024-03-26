import React, { createContext, useContext } from "react";
// import axios from "axios";

const UserContext = createContext();

export const usePageContext = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
};
