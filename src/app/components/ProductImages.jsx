"use client";
//Dependencies
import Image from "next/image";
import { useState } from "react";
//images
const images = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/17477442/pexels-photo-17477442/free-photo-of-a-candle-on-top-of-pancakes-with-berries.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/28885891/pexels-photo-28885891/free-photo-of-close-up-of-freshly-sliced-figs-on-a-plate.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/28816724/pexels-photo-28816724/free-photo-of-colorful-traditional-textiles-close-up.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/17312362/pexels-photo-17312362/free-photo-of-onate-fabric-with-elephant-covering-table.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
];
//product Images
const ProductImages = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="">
      <div className="h-[500px] relative">
        <Image
          src={images[index].url}
          alt="product"
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className=" flex justify-between gap-4 mt-8  ">
        {images.map((image, imageIndex) => {
          return (
            <div
              key={image.id}
              onClick={() => setIndex(imageIndex)}
              className="w-1/4 h-32 relative gap-4 mt-8  cursor-pointer"
            >
              <Image
                src={image.url}
                alt="product"
                fill
                sizes="25vw"
                className="object-cover rounded-md"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductImages;
