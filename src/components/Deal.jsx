 import React from "react";
 import { useState, useEffect } from "react";

 


import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "@mui/material/Button";
import "./Deal.css"

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000"



export default function Deal({heading, subheading, slides}) {
  

  const [deal, setDeal] = useState([]);

    useEffect(() => {
        fetch(`${API_URL}/api/deal`)
        .then((res) => res.json())
        .then((data) => setDeal(data))
        .catch((err) => console.error("error fetching deal", err));
    },[])

  return (
    <div className="w-full">
      <div className="flex flex-wrap justify-between items-center">
        <h2 className=" text-left  text-2xl font-bold text-black mb-8">
          {heading}
        </h2>
        <h5 className="text-green-800">{subheading}</h5>
      </div>

      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade ]}
        spaceBetween={24}
        slidesPerView={3}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={deal.length > 3}
        speed={800}
        effect="fade"
        style={{ paddingBottom: 40 }} // room for bullets
      >
        {deal.map((items) => (
          <SwiperSlide key={items._id} className="h-inherit">
            <div className="rounded-lg bg-white flex flex-wrap justify-center items-start w-full border border-black">
              <img
                className=" w-full block max-h-[180px] rounded-tl-lg rounded-tr-lg object-cover"
                src={`${API_URL}${items.image}`}
                alt="img1"
              />
              <div className="pt-5 pb-3 deal-cont">
                <h2 className="text-2xl text-left font-semibold  text-orange-500">
                  {items.title}
                </h2>
                <h5>{items.subtitle}</h5>
                <button className="">
                  Book Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
