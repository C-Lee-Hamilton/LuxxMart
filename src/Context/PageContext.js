import React, { createContext, useContext, useEffect, useState } from "react";
import { useGetAddress } from "@the_grid/locationfinder";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";
const PageContext = createContext();

export const usePageContext = () => useContext(PageContext);

export const PageProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isBusAcct, setIsBusAcct] = useState(false);
  const [uid, setUid] = useState("");
  const [storedName, setStoredName] = useState(() => {
    const storedNameFromLocalStorage = JSON.parse(
      window.localStorage.getItem("stored-name")
    );
    return storedNameFromLocalStorage || "sign in";
  });
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

  useEffect(() => {
    const userId = JSON.parse(window.localStorage.getItem("uid"));
    setUid(userId);
    const storedName2 = JSON.parse(window.localStorage.getItem("stored-name"));
    setStoredName(storedName2);
    const storedLoginStatus = JSON.parse(
      window.localStorage.getItem("logged-in")
    );
    storedLoginStatus == "true" ? setIsLoggedIn(true) : setIsLoggedIn(false);
    const busAcct = JSON.parse(window.localStorage.getItem("is-bus"));
    busAcct == "true" ? setIsBusAcct(true) : setIsBusAcct(false);
  }, [isLoggedIn]);

  const logOut = async () => {
    try {
      await signOut(auth);
      setIsLoggedIn(false);
      setIsBusAcct(false);
      setStoredName("sign in");
      window.localStorage.setItem("stored-name", JSON.stringify("sign in"));
      window.localStorage.setItem("logged-in", JSON.stringify("false"));
      window.localStorage.setItem("is-bus", JSON.stringify("false"));
      window.localStorage.setItem("uid", JSON.stringify(""));
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
        // userName,
        // setUserName,
        storedName,
        setStoredName,
        isBusAcct,
        setIsBusAcct,
        uid,
      }}
    >
      {children}
    </PageContext.Provider>
  );
};
