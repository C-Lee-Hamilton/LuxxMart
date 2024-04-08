import React, { createContext, useContext, useEffect, useState } from "react";
import { useGetAddress } from "@the_grid/locationfinder";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";
const PageContext = createContext();

export const usePageContext = () => useContext(PageContext);

export const PageProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { location, updateLocation } = useGetAddress(
    process.env.REACT_APP_LOC_API
  );

  const storedLocationText = JSON.parse(
    window.localStorage.getItem("stored-location")
  );
  const storedLocationPlaceholder =
    storedLocationText === null ? "No Location Set" : storedLocationText;

  const storedAddress =
    location.city + "," + " " + location.state + "," + " " + location.zip;

  useEffect(() => {
    location.state !== undefined
      ? window.localStorage.setItem(
          "stored-location",
          JSON.stringify(storedAddress)
        )
      : console.log();
  }, [storedAddress]);

  const logOut = async () => {
    try {
      await signOut(auth);
      setIsLoggedIn(false);
      console.log("logged out");
    } catch (err) {
      console.log("failed to log out");
    }
  };

  return (
    <PageContext.Provider
      value={{
        location,
        updateLocation,
        storedLocationPlaceholder,
        storedAddress,
        isLoggedIn,
        setIsLoggedIn,
        logOut,
      }}
    >
      {children}
    </PageContext.Provider>
  );
};
