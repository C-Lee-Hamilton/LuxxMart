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

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Name Required",
  }),

  serial: z.string().min(1, {
    message: "Serial Number Required",
  }),

  price: z.string().min(1, {
    message: "Price Required",
  }),

  description: z.string().min(1, {
    message: "Description Required",
  }),
  category: z.string().min(1, {
    message: "Category Required",
  }),
  tags: z.string().min(1, {
    message: "Tags Required",
  }),

  status: z.string().min(1, {
    message: "Set Status of Item",
  }),
  warranty: z.string().min(0, {
    message: "Not Required",
  }),
  weight: z.string().min(0, {
    message: "Not Required",
  }),
  dimensions: z.string().min(0, {
    message: "Not Required",
  }),
  extra: z.string().min(0, {
    message: "Not Required",
  }),
});

function AddItem() {
  const [fileUpload, setFileUpload] = useState([]);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      serial: "",
      price: "",
      description: "",
      category: "",
      tags: "",
      status: "",
      warranty: "",
      weight: "",
      dimensions: "",
      extra: "",
    },
  });

  function onSubmit(values) {
    console.log(values);
  }

  return (
    <div className=" grid  bg-black sm:bg-offwhite sm:grid-cols-2 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3    border-black border-4 border-solid ">
      <div className="w-full  xs:w-1/2 col-span-1 h-full">
        <ItemPhotoUpload
          setFileUpload={setFileUpload}
          fileUpload={fileUpload}
        />
      </div>

      <Form {...form} className="col-span-2 w-full ">
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid  w-full  space-y-1 lg:space-y-4 lg:col-span-2  col-span-1"
        >
          <h1 className="mx-auto  mt-6 mb-3 text-xl sm:text-black text-gold  ">
            Product Details
          </h1>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="w-10/12 mx-auto border-2 border-solid border-darkgold rounded-md"
                    placeholder="Enter Item Name"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="w-10/12 mx-auto" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="serial"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="w-10/12 mx-auto border-2 border-solid border-darkgold rounded-md"
                    placeholder="Serial Number"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="w-10/12 mx-auto" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="w-10/12 mx-auto border-2 border-solid border-darkgold rounded-md"
                    placeholder="Price"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="w-10/12 mx-auto" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    className="w-10/12 mx-auto border-2 border-solid border-darkgold rounded-md"
                    placeholder="Description..."
                    {...field}
                  />
                </FormControl>
                <FormMessage className="w-10/12 mx-auto" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div {...field}>
                    <Select>
                      <SelectTrigger className="w-10/12 mx-auto border-2 border-solid border-darkgold rounded-md">
                        <SelectValue placeholder="Select Category" />
                      </SelectTrigger>

                      <SelectContent>
                        <SelectGroup className="w-10/12 mx-auto">
                          <SelectItem value="Gems">Gems</SelectItem>

                          <SelectItem value="Jewelry">Jewelry</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </FormControl>
                <FormMessage className="w-10/12 mx-auto" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tags"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="w-10/12 mx-auto border-2 border-solid border-darkgold rounded-md"
                    placeholder="Tags: separate by commas"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="w-10/12 mx-auto" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div {...field}>
                    <Select>
                      <SelectTrigger className="w-10/12 mx-auto border-2 border-solid border-darkgold rounded-md">
                        <SelectValue placeholder="Select Item Status" />
                      </SelectTrigger>

                      <SelectContent>
                        <SelectGroup className="w-10/12 mx-auto">
                          <SelectItem value="Active">Active</SelectItem>

                          <SelectItem value="Inactive">Inactive</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </FormControl>
                <FormMessage className="w-10/12 mx-auto" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="warranty"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    className="w-10/12 mx-auto border-2 border-solid border-darkgold rounded-md"
                    placeholder="Warranty Information..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="weight"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="w-10/12 mx-auto border-2 border-solid border-darkgold rounded-md"
                    placeholder="Weight"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dimensions"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="w-10/12 mx-auto border-2 border-solid border-darkgold rounded-md"
                    placeholder="Dimensions"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="extra"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="w-10/12 mx-auto border-2 border-solid border-darkgold rounded-md"
                    placeholder="Addtional Information"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="w-full flex">
            <Button
              className="w-10/12 mx-auto mt-2 mb-5 border-2 border-solid border-darkgold rounded-md"
              type="submit"
            >
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default AddItem;

// /* <div className="grid    mt-5 grid-cols-1 col-span-1 lg:col-span-2 lg:grid-cols-2 ">
