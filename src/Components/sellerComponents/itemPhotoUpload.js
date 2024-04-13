import React, { useState, useEffect } from "react";
import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/photoUploadCarousel";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
function ItemPhotoUpload() {
  const [fileUpload, setFileUpload] = useState();
  return (
    <div className="flex flex-col bg-black h-full ">
      <h1 className="mx-auto text-darkgold mt-5 mb-5 text-xl">Upload Photos</h1>
      <Carousel className=" w-10/12   mx-auto ">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                  <Button className="w-full h-5">Delete</Button>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext className="mr-10" />
        <CarouselPrevious className=" ml-10" />
      </Carousel>

      <Input
        type="file"
        content="upload"
        placeholder="Upload Photos"
        className="  mx-auto w-10/12 mt-5  "
        onChange={(e) => setFileUpload(e.target.files)}
      />
    </div>
  );
}

export default ItemPhotoUpload;
