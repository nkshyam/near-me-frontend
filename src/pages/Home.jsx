import React from "react";
import Header from "../components/Header";
import LocSer from "../components/LocSer";
import "./Home.css";
import FoodSwiper from "../components/FoodSwiper";
import Deal from "../components/Deal";
import Wonder from "../components/Wonder";
import { useEffect, useState } from "react";


import DealImg1 from "../assets/images/Deal-img1.jpg";
import DealImg2 from "../assets/images/Deal-img2.jpg";
import DealImg3 from "../assets/images/Deal-img3.jpg";
import DealImg4 from "../assets/images/Deal-img4.jpg";
import DealImg5 from "../assets/images/Deal-img5.jpg";

const Foodslides = [
    {
        id: 1,
        image: DealImg1,
        title: "Deals on Food",
        subtitle: "Where does it come from",
    },
    {
        id: 2,
        image: DealImg2,
        title: "Deals on Food",
        subtitle: "Where does it come from",
    },
    {
        id: 3,
        image: DealImg3,
        title: "Deals on Food",
        subtitle: "Where does it come from",
    },
    {
        id: 4,
        image: DealImg4,
        title: "Deals on Food",
        subtitle: "Where does it come from",
    },
    {
        id: 5,
        image: DealImg5,
        title: "Deals on Food",
        subtitle: "Where does it come from",
    },
];

export default function Home() {

    


    return (
        <div className="w-full mx-auto px-0  ">
            <Header />
            <LocSer />
            <div className="w-full max-w-[94%] mx-auto">
                <FoodSwiper />
                <div className="w-full py-8">
                    <Deal
                        heading="Deals on food"
                        subheading="See more details"
                        slides={Foodslides}
                    />
                </div>
                <div className="w-full py-8">
                    <Deal
                        heading="Popular Dining Deals"
                        subheading="See more details"
                        slides={Foodslides}
                    />
                </div>

                <div className="w-full">
                    <Wonder />
                </div>
            </div>
        </div>
    );
}
