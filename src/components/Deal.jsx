import React from "react";

import { Navigation, Pagination, Scrollbar, A11y, Autoplay,} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// import images

import DealImg1 from "../assets/images/Deal-img1.jpg"
import DealImg2 from "../assets/images/Deal-img2.jpg"
import DealImg3 from "../assets/images/Deal-img3.jpg"
import DealImg4 from "../assets/images/Deal-img4.jpg"
import DealImg5 from "../assets/images/Deal-img5.jpg"

export default function Deal() {

    const slides = [
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

    return(
        <div className="w-full">
            <h2>Deal of the day</h2>

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
    )
}