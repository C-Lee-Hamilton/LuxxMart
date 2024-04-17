import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/photoUploadCarousel";
import { Card, CardContent } from "../ui/card";
import {
  ref,
  uploadBytes,
  listAll,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";

import { storage } from "../../config/firebase";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../Components/ui/select";
import { Textarea } from "../../Components/ui/textarea";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../Components/ui/form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

// name: values.name,
// serial: values.serial,
// price: values.price,
// description: values.description,
// category: values.category,
// tags: values.tags,
// status: values.status,
// warranty: values.warranty,
// weight: values.weight,
// dimensions: values.dimensions,
// extra: values.extra,
// sale: "inactive",
// owner: uid,
// storeId: uuid,

function ItemEditor({ info }) {
  const [storedImgs, setStoredImgs] = useState([]);
  const uid = info.owner;
  const imageListRef = ref(storage, `product/${uid}/${info.name}`);

  const form = useForm({
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
  const fetchImages = async () => {
    try {
      const response = await listAll(imageListRef);
      const urls = await Promise.all(
        response.items.map((item) => getDownloadURL(item))
      );
      setStoredImgs(urls);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };
  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] overflow-y-auto h-3/4">
        <DialogHeader>
          <DialogTitle>Edit Item</DialogTitle>
          <DialogDescription>
            Make changes to your Item here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-2">
          <Carousel className=" w-10/12  mx-auto ">
            <CarouselContent>
              {storedImgs.map((photo, index) => (
                <CarouselItem key={index}>
                  <div className="p-1 ">
                    <Card className="border-solid border-2 border-darkgold rounded-lg ">
                      <CardContent className="flex aspect-square flex-col items-center justify-center p-6">
                        <img
                          className="border-solid border-2 border-darkgold rounded-lg "
                          src={URL.createObjectURL(photo)}
                        />
                        <Button
                          onClick={() => {
                            // const deletedImg = [...fileUpload];
                            // deletedImg.splice(index, 1);
                            // setFileUpload(deletedImg);
                            // console.log(fileUpload);
                          }}
                          className="w-11/12 border-2 border-solid border-darkgold mt-2 h-8"
                        >
                          Delete
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext className="mr-10" />
            <CarouselPrevious className=" ml-10" />
          </Carousel>
          {/* <div className="grid grid-cols-4 items-center gap-4"> */}
          <Form {...form} className="col-span-2 w-full overflow-y-auto ">
            <form
              onSubmit={form.handleSubmit()}
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
                        placeholder="Price (in USD)"
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
                              <SelectItem value="Apparel">Apparel</SelectItem>
                              <SelectItem value="Home&Office">
                                Home & Office
                              </SelectItem>
                              <SelectItem value="Kitchen">Kitchen</SelectItem>
                              <SelectItem value="TimePieces">
                                Time Pieces
                              </SelectItem>
                              <SelectItem value="RareMetals">
                                Rare Metals
                              </SelectItem>
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
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
export default ItemEditor;
