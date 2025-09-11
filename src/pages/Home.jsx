import React from "react";
import Header from "../components/Header";
import LocSer from "../components/LocSer";
import './Home.css'
import FoodSwiper from "../components/FoodSwiper";
import Deal from "../components/Deal";

export default function Home() {
  return (
    <div className="w-full mx-0 px-0 ">
      <Header />
      <LocSer />
      <FoodSwiper/>
      <Deal />
    </div>
  );
}
