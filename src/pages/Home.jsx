import React from "react";
import Header from "../components/Header";
import LocSer from "../components/LocSer";
import "./Home.css";
import FoodSwiper from "../components/FoodSwiper";
import Deal from "../components/Deal";

export default function Home() {
  return (
    <div className="w-full mx-auto px-0  ">
      <Header />
      <LocSer />
      <div className="w-full max-w-[94%] mx-auto">
        <FoodSwiper />
        <div className="w-full py-8">
        <Deal  />
        </div>
        
      </div>
    </div>
  );
}
