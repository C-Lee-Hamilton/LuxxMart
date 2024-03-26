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

function addItem() {
  return (
    <div className="h-screen">
      <h1 className="w-full text-center">Add Item</h1>
      <Input placeholder="Enter Item Name..." />
      <Input placeholder="Enter Item Description..." />
      <Input placeholder="Enter Price" />
      <Button>Upload Photos</Button>

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
  );
}

export default addItem;
