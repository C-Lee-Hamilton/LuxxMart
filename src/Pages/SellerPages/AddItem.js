import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../Components/ui/select";
import { Input } from "../../Components/ui/input";
import { Button } from "../../Components/ui/button";
import ItemPhotoUpload from "../../Components/sellerComponents/itemPhotoUpload";
function addItem() {
  return (
    <div className=" grid sm:grid-cols-2 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  border-black border-4 border-solid ">
      <div className="w-full xs:w-1/2 col-span-1 h-screen">
        <ItemPhotoUpload />
      </div>
      <div className="grid grid-cols-1 col-span-1 lg:col-span-2 lg:grid-cols-2 ">
        <div className=" col-span-1 ">
          <Input placeholder="Enter Item Name..." />
          <Input placeholder="Enter Item Description..." />
          <Input placeholder="Serial Number" />
          <Input placeholder="Enter Price" />
        </div>
        <div className="col-span-1 ">
          <Select>
            <SelectTrigger className="w-1/6">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="active">Gems</SelectItem>
                <SelectItem value="inactive">Jewelry</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Input placeholder="separate with commas" />
          <Select>
            <SelectTrigger className="w-1/6">
              <SelectValue placeholder="Select Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-1/6">
              <SelectValue placeholder="Select Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Input placeholder="Enter Quantity For Out Of Stock..." />
          <Input placeholder="Warranty Information" />
          <Input placeholder="Item Information" />
          <Input placeholder="Weight" />
          <Button>Add Item</Button>
        </div>
      </div>
    </div>
  );
}

export default addItem;
