import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../Components/ui/form";

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
import { Textarea } from "../../Components/ui/textarea";
import ItemPhotoUpload from "../../Components/sellerComponents/itemPhotoUpload";

function AddItem() {
  const [fileUpload, setFileUpload] = useState([]);
  const [missing, setMissing] = useState();
  const { control } = useForm();
  const formSchema = z.object({
    username: z.string().min(2, {
      message: "Name Required",
    }),
  });
  const [formData, setFormData] = useState({
    name: "",
    serial: "",
    price: "",
    description: "",
    category: "",
    tags: "",
    sale: "",
    inStock: "",
    stock: "",
    warranty: "",
    extra: "",
    weight: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const submitItem = () => {
    const emptyFields = Object.entries(formData)
      .filter(([key, value]) => value === "")
      .map(([key]) => key)
      .toString();
    emptyFields.length > 0
      ? setMissing("Missing Fields: All Fields Required")
      : setMissing();
  };

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(values) {
    // Do something with the form values.
    console.log(values);
  }

  return (
    <div className=" grid  sm:grid-cols-2 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3   border-black border-4 border-solid ">
      <div className="w-full  xs:w-1/2 col-span-1 h-screen">
        <ItemPhotoUpload
          setFileUpload={setFileUpload}
          fileUpload={fileUpload}
        />
      </div>

      {/* <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form> */}

      <div className="grid    mt-5 grid-cols-1 col-span-1 lg:col-span-2 lg:grid-cols-2 ">
        <Input
          onChange={(e) => {
            handleInputChange(e);
          }}
          className="w-10/12 mx-auto"
          placeholder="Enter Item Name..."
          type="text"
          name="name"
          value={formData.name}
        />

        <Input
          onChange={(e) => {
            handleInputChange(e);
          }}
          className="w-10/12 mx-auto"
          placeholder="Serial Number"
          name="serial"
          value={formData.serial}
        />
        <Input
          onChange={(e) => {
            handleInputChange(e);
          }}
          className="w-10/12 mx-auto"
          placeholder="Price"
          name="price"
          value={formData.price}
        />
        <Textarea
          onChange={(e) => {
            handleInputChange(e);
          }}
          className="resize-none w-10/12 mx-auto h-1/2"
          placeholder="Item Description..."
          name="description"
          value={formData.description}
        />
        <Select
          onValueChange={(e) => setFormData({ ...formData, category: e })}
        >
          <SelectTrigger className="w-10/12 mx-auto">
            <SelectValue className="w-10/12 mx-auto" placeholder="Category" />
          </SelectTrigger>
          <SelectContent className="">
            <SelectGroup className="w-10/12 mx-auto">
              <SelectItem name="category" id="gems" value="gems">
                fuck
              </SelectItem>

              <SelectItem value="jewelry" name="category">
                Jewelry
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Input
          value={formData.tags}
          name="tags"
          onChange={(e) => {
            handleInputChange(e);
          }}
          className="w-10/12 mx-auto"
          placeholder="Tags: separate with commas"
        />
        <Select onValueChange={(e) => setFormData({ ...formData, sale: e })}>
          <SelectTrigger className="w-10/12 mx-auto">
            <SelectValue
              className="w-10/12 mx-auto"
              placeholder="On Sale Status"
            />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup className="w-10/12 mx-auto">
              <SelectItem value="active" name="sale">
                Active
              </SelectItem>
              <SelectItem value="inactive" name="sale">
                Inactive
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select
          onValueChange={(e) => setFormData({ ...formData, stockStat: e })}
        >
          <SelectTrigger className="w-10/12 mx-auto">
            <SelectValue placeholder="In Stock Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="In Stock" name="stockStat">
                In Stock
              </SelectItem>
              <SelectItem value="Out of Stock" name="stockStat">
                Out of Stock
              </SelectItem>
              <SelectItem value="Pre-Order" name="stockStat">
                Pre-Order
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Input
          onChange={(e) => {
            handleInputChange(e);
          }}
          className="w-10/12 mx-auto"
          placeholder="Enter Quantity For Out Of Stock..."
          name="stock"
          value={formData.stock}
        />
        <Textarea
          onChange={(e) => {
            handleInputChange(e);
          }}
          className="resize-none w-10/12 mx-auto h-1/2"
          placeholder="Warranty Information"
          name="warranty"
          value={formData.warranty}
        />
        <Textarea
          onChange={(e) => {
            handleInputChange(e);
          }}
          className="resize-none w-10/12 mx-auto h-1/2"
          placeholder="Additional Item Information..."
          name="extra"
          value={formData.extra}
        />
        <Input
          onChange={(e) => {
            handleInputChange(e);
          }}
          className="w-10/12 mx-auto"
          placeholder="Weight"
          name="weight"
          value={formData.value}
        />
        <h1 className="w-10/12 text-red-500 text-xs">{missing}</h1>
        <Button
          onClick={submitItem}
          // onClick={() => console.log(formData)}
          className="w-10/12 mx-auto"
        >
          Add Item
        </Button>
      </div>
    </div>
  );
}

export default AddItem;
