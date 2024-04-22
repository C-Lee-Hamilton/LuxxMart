import React, { createContext, useContext, useState, useMemo } from "react";
import {
  query,
  where,
  collection,
  getDocs,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../config/firebase";
import { usePageContext } from "./PageContext";

const SellerContext = createContext();

export const useSellerContext = () => useContext(SellerContext);

export const SellerProvider = ({ children }) => {
  const [storedImg, setStoredImg] = useState();
  const [itemList, setItemList] = useState([]);
  const { uid } = usePageContext();

  const getItemList = async () => {
    try {
      const q = query(collection(db, "Product"), where("owner", "==", uid));
      const qSnapshot = await getDocs(q);
      const itemListSnap = qSnapshot.docs.map((doc) => doc.data());
      setItemList(itemListSnap);
    } catch (err) {
      console.error("error getting items");
    }
  };

  const memoGetItemList = useMemo(() => getItemList, [uid]);

  const deleteProduct = async (id) => {
    const productDoc = doc(db, "Product", id);
    await deleteDoc(productDoc);
    getItemList();
  };

  return (
    <SellerContext.Provider
      value={{
        storedImg,
        setStoredImg,
        itemList,
        setItemList,
        memoGetItemList,
        deleteProduct,
      }}
    >
      {children}
    </SellerContext.Provider>
  );
};
