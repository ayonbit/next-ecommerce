"use client";
//Dependencies
import { useState } from "react";

//Add quantity and add to cart button
const Add = () => {
  const [quantity, setQuantity] = useState(1);
  //Temporary Stock
  const stock = 5;
  //Handle quantity
  const handleQuantity = (type) => {
    if (type === "d" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
    if (type === "i" && quantity < stock) {
      setQuantity((prev) => prev + 1);
    }
  };

  return (
    <div className="flex flex-col gap-4 mb-4">
      <h4 className="font-medium">Choose Quantity</h4>
      <div className="flex justify-between">
        <div className="flex items-center gap-4  ">
          <div className="bg-gray-100 py-2 px-4 rounded-3xl  flex items-center justify-between w-32 ">
            <button
              className=" cursor-pointer text-xl"
              onClick={() => handleQuantity("d")}
            >
              -
            </button>
            {quantity}
            <button
              className=" cursor-pointer text-xl"
              onClick={() => handleQuantity("i")}
            >
              +
            </button>
          </div>
          <div className="text-xs">
            Only <span className="text-orange-500">5 items</span> left!
            <br /> {"Don't"} miss it miss it!
          </div>
        </div>
        <button className="w-36 text-sm rounded-3xl ring-1 ring-ayon text-ayon py-2 px-4 hover:bg-ayon hover:text-white disabled:cursor-not-allowed disabled:bg-pink-200 disabled:ring-0 disabled:text-white disabled:ring-none">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Add;
