import React, { useEffect, useState, useMemo } from "react";
import {
  query,
  where,
  collection,
  getDocs,
  doc,
  limit,
} from "firebase/firestore";
import {
  ref,
  uploadBytes,
  listAll,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { db } from "../../config/firebase";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./multiCarousel";
import { Card, CardContent } from "./card";
function ItemCarousel({ category }) {
  const [miniItemList, setMiniItemList] = useState([]);

  const getItemList = async () => {
    try {
      const q = query(
        collection(db, "Product"),
        where("category", "==", category)
      );
      const qSnapshot = await getDocs(q);

      const itemListSnap = qSnapshot.docs.slice(0, 8).map((doc) => doc.data());

      setMiniItemList(itemListSnap);
    } catch (err) {
      console.error("error getting itemms");
    }
  };

  const memoGetItemList = useMemo(() => getItemList, [category]);

  useEffect(() => {
    memoGetItemList();
  }, []);

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full p-4 mb-5 mt-0 bg-white-500  h-1/6"
    >
      <CarouselContent className=" bg-white ">
        {miniItemList.map((item, index) => (
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
