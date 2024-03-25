import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./multiCarousel";
import { Card, CardContent } from "./card";
function ItemCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full p-4 mb-20 mt-10 bg-white-500  h-1/6"
    >
      <CarouselContent className=" bg-white ">
        {Array.from({ length: 15 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="basis-1/4 bg-white basis-1/4 p-6"
          >
            <div className="p-1">
              <Card className="">
                <CardContent className="flex bg-gold aspect-square items-center justify-center p-2">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="" />
      <CarouselNext className="" />
    </Carousel>
  );
}

export default ItemCarousel;
