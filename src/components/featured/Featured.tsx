import { featuredProducts } from "@/data";
import Image from "next/image";
import React from "react";

const Featured = () => {
  return (
    <div className="w-screen overflow-x-scroll text-red-500">
      {/*wrapper*/}
      <div className="w-max flex ">
        {/*single*/}
        {featuredProducts.map((item) => (
          <div
            key={item.id}
            className="w-screen md:w-[50vw] xl:w-[33vw] xl:h-[90vh] h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50
                       transition-all duration-300">
            {/*image cont*/}
            {item.img && (
              <div className="relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500">
                <Image src={item.img} alt="" fill className="object-contain" />
              </div>
            )}
            {/*text cont*/}
            <div className="flex-1 flex flex-col items-center justify-center text-center gap-4  ">
              <h1 className="text-xl xl:text-2xl 2xl:text-3xl font-bold uppercase ">
                {item.title}
              </h1>
              <p className="p-4 2xl:p-8">{item.desc}</p>
              <span className="text-xl font-bold">${item.price}</span>
              <button className="p-2 rounded-md cursor-pointer text-white bg-red-500">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
