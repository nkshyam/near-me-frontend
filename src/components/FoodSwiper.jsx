import React from "react";
import img1 from "../assets/images/top-slider-img1.jpg";
import img2 from "../assets/images/top-slider-img2.jpg";
import img3 from "../assets/images/top-slider-img3.jpg";
import img4 from "../assets/images/top-slider-img4.jpg";
import img5 from "../assets/images/top-slider-img5.jpg";

// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "./FoodSwiper.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default () => {
  const slides = [
    {
      id: 1,
      image: img1,
      title: "Deals on Food",
      subtitle: "Where does it come from",
    },

    {
      id: 2,
      image: img2,
      title: "Deals on Food",
      subtitle: "Where does it come from",
    },

    {
      id: 3,
      image: img3,
      title: "Deals on Food",
      subtitle: "Where does it come from",
    },

    {
      id: 4,
      image: img4,
      title: "Deals on Food",
      subtitle: "Where does it come from",
    },

    {
      id: 5,
      image: img5,
      title: "Deals on Food",
      subtitle: "Where does it come from",
    },
  ];

  return (
    <div className="w-full mt-16  px-10 ">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        speed={800}
        effect="fade"
        style={{ paddingBottom: 40 }} // room for bullets
      >
        {slides.map((slide) => (
          <SwiperSlide className="h-inherit">
            <div className="rounded-lg bg-white flex flex-wrap justify-center items-start w-full border border-black">
              <img
                className=" w-full block max-h-[180px] rounded-tl-lg rounded-tr-lg object-cover"
                src={slide.image}
                alt="img1"
              />
              <div className="pt-5 ">
                <h2 className="text-2xl text-left font-semibold  text-orange-500">
                  {slide.title}
                </h2>
                <h5>{slide.subtitle}</h5>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
