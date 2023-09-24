import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./work.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const MySwiper = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      className={styles.swiper}
    >
      <SwiperSlide
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      ></SwiperSlide>
      <SwiperSlide
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Slide 2
      </SwiperSlide>
      <SwiperSlide
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Slide 3
      </SwiperSlide>
      {/* Добавьте нужное количество SwiperSlide для ваших слайдов */}
    </Swiper>
  );
};
