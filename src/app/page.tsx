import Featured from "@/components/featured/Featured";
import Offer from "@/components/offer/Offer";
import Slider from "@/components/slider/Slider";
import React from "react";

const page = () => {
  return (
    <main>
      <Slider />
      <Featured />
      <Offer />
    </main>
  );
};

export default page;
