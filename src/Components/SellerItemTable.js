import React, { useEffect } from "react";
import { useSellerContext } from "../Context/SellerContext";
import ItemEditor from "./sellerComponents/itemEditor";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Button } from "./ui/button";

function SellerItemTable() {
  const { itemList, memoGetItemList, deleteProduct } = useSellerContext();

  useEffect(() => {
    memoGetItemList();
  }, []);

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
      <TableBody className="w-full ">
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
            <TableCell className="overflow-x-hidden">{item.name}</TableCell>
            <TableCell>{item.price}</TableCell>
            <TableCell>{item.sale}</TableCell>
            <TableCell>
              <ItemEditor info={item} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default SellerItemTable;
