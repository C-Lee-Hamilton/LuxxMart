import React, { useState, useEffect } from "react";
import {
  query,
  where,
  collection,
  getDocs,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../config/firebase";
import { usePageContext } from "../Context/PageContext";

import { Link } from "react-router-dom";
import ItemEditor from "./sellerComponents/itemEditor";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Button } from "./ui/button";

function SellerItemTable() {
  const { uid } = usePageContext();
  const [itemList, setItemList] = useState([]);
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
  useEffect(() => {
    getItemList();
  }, []);

  const deleteProduct = async (id) => {
    const productDoc = doc(db, "Product", id);
    await deleteDoc(productDoc);
    getItemList();
  };

  const getList = () => {
    console.log(itemList);

    console.log(uid);
  };

  return (
    <Table className="w-11/12 mx-auto mt-5 flex flex-col items-center  whitespace-nowrap">
      <TableHeader className="w-full  ">
        <TableRow className="  flex flex-row w-full justify-between">
          <TableHead className="text-left">Remove Item</TableHead>
          <TableHead className="">Serial</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Price</TableHead>
          <TableHead className="">On Sale</TableHead>
          <TableHead>Edit Item</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="w-full">
        {itemList.map((item, index) => (
          <TableRow
            className="flex flex-row w-full  justify-between "
            key={index}
          >
            <TableCell>
              <Button
                onClick={() => {
                  deleteProduct(item.storeId);
                }}
                className="text-xs "
              >
                Remove
              </Button>
            </TableCell>

            <TableCell>{item.serial}</TableCell>
            <TableCell>{item.status}</TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.price}</TableCell>
            <TableCell>{item.sale}</TableCell>
            <TableCell>
              {/* <Link
                className="
            border-solid border-greyblue border-2
            h-10 px-4 py-2  bg-gold text-black rounded-sm text-xs"
                to="/edititem"
              >
                Edit
              </Link> */}

              <ItemEditor info={item} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default SellerItemTable;
