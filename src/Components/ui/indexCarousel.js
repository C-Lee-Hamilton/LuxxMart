import React from "react";

import { Card, CardContent } from "./card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel";
function IndexCarousel() {
  return (
    <Carousel className="w-full h-1/3 flex  mx-auto ">
      <CarouselContent className=" w-screen h-full">
        <CarouselItem className=" bg-blue-500 ">
          <div className="p-1 "></div>
        </CarouselItem>
        <CarouselItem className=" bg-green-500 ">
          <div className="p-1"></div>
        </CarouselItem>
        <CarouselItem className=" bg-red-500 ">
          <div className="p-1"></div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="" />
      <CarouselNext className="" />
    </Carousel>
  );
}
export default IndexCarousel;
