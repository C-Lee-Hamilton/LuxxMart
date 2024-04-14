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
function ItemPhotoUpload({ setFileUpload, fileUpload }) {
  return (
    <div className="flex flex-col bg-black h-full ">
      <h1 className="mx-auto text-darkgold mt-5 mb-5 text-xl">Upload Photos</h1>
      <Carousel className=" w-10/12  mx-auto ">
        <CarouselContent>
          {fileUpload.map((photo, index) => (
            <CarouselItem key={index}>
              <div className="p-1 ">
                <Card className="border-solid border-2 border-darkgold rounded-lg ">
                  <CardContent className="flex aspect-square flex-col items-center justify-center p-6">
                    <img
                      key={index}
                      className="border-solid border-2 border-darkgold rounded-lg "
                      src={URL.createObjectURL(photo)}
                    />
                    <Button
                      onClick={() => {
                        const deletedImg = [...fileUpload];
                        deletedImg.splice(index, 1);
                        setFileUpload(deletedImg);
                        console.log(fileUpload);
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

      <Input
        type="file"
        content="upload"
        placeholder="Upload Photos"
        className="  mx-auto w-10/12 mt-5  "
        onChange={(e) => {
          const files = Array.from(e.target.files || []);

          setFileUpload(files);
        }}
        multiple
      />
    </div>
  );
}

export default ItemPhotoUpload;
