import React from "react";

import { Link } from "react-router-dom";
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

const placeholderItems = [
  {
    serial: "INV001",
    status: "Active",
    name: "Item 1",
    price: "$0",
    saleStatus: "Inactive",
  },
  {
    serial: "INV002",
    status: "Active",
    name: "Item 2",
    price: "$1",
    saleStatus: "Active",
  },
];
function SellerItemTable() {
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
        {placeholderItems.map((item) => (
          <TableRow
            className="flex flex-row w-full  justify-between "
            key={item}
          >
            <TableCell>
              <Button className="text-xs ">Remove</Button>
            </TableCell>

            <TableCell>{item.serial}</TableCell>
            <TableCell>{item.status}</TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.price}</TableCell>
            <TableCell>{item.saleStatus}</TableCell>
            <TableCell>
              <Link
                className="
            border-solid border-greyblue border-2
            h-10 px-4 py-2  bg-gold text-black rounded-sm text-xs"
                to="/edititem"
              >
                Edit
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default SellerItemTable;
