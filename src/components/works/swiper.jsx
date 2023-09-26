import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./work.module.css";
import "swiper/css"; // Подключаем общие стили Swiper
import "swiper/css/autoplay"; // Подключаем стили для autoplay
import "swiper/css/pagination"; // Подключаем стили для pagination
import "swiper/css/navigation"; // Подключаем стили для navigation

export const MySwiper = () => {
  return (
    <Swiper
      spaceBetween={50}
      autoplay={{ delay: 3000 }}
      slidesPerView={1}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className={styles.swiper}
    >
      <SwiperSlide
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          margin:0,
          
        }}
      >


<div className={styles.card}>
  <div className={styles.content}>
    <div className={styles.back}>
      <div className={styles.back_content}>
      </div>
    </div>
    <div className={styles.front}>
      
      <div className={styles.img}>
        <div className={styles.bottom_circle}>
        </div>
        <div className={styles.right_circle} >
        </div>
        <div className={styles.left_circle} >
        </div>
      </div>

      <div className={styles.front_content}>
        <div className={styles.description}>
          <div className={styles.title}>
            <p className={styles.title}>
              <strong>Сайт автомастерской</strong>
            </p>
          </div>
          <p className={styles.card_footer}>
           Technologies: JavaScript &nbsp; | &nbsp; React.js | &nbsp; HTML  | &nbsp; CSS
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

      </SwiperSlide>
      <SwiperSlide
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          margin:0
        }}
      >
       <div className={styles.card}>
  <div className={styles.content}>
    <div className={styles.back}>
      <div className={styles.back_content_icecream}>
      </div>
    </div>
    <div className={styles.front}>
      
      <div className={styles.img}>
        <div className={styles.bottom_circle}>
        </div>
        <div className={styles.right_circle} >
        </div>
        <div className={styles.left_circle} >
        </div>
      </div>

      <div className={styles.front_content}>
        <div className={styles.description}>
          <div className={styles.title}>
            <p className={styles.title}>
              <strong>Сайт производителя мороженного</strong>
            </p>
          </div>
          <p className={styles.card_footer}>
           Technologies: JavaScript &nbsp; | &nbsp; HTML  | &nbsp; CSS
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
      </SwiperSlide>
      <SwiperSlide
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          margin:0
        }}
      >
        <div className={styles.card}>
  <div className={styles.content}>
    <div className={styles.back}>
      <div className={styles.back_content_film}>
      </div>
    </div>
    <div className={styles.front}>
      
      <div className={styles.img}>
        <div className={styles.bottom_circle}>
        </div>
        <div className={styles.right_circle} >
        </div>
        <div className={styles.left_circle} >
        </div>
      </div>

      <div className={styles.front_content}>
        <div className={styles.description}>
          <div className={styles.title}>
            <p className={styles.title}>
              <strong>Сайт для поиска фильмов</strong>
            </p>
          </div>
          <p className={styles.card_footer}>
           Technologies: JavaScript &nbsp; | &nbsp; React.js | &nbsp; HTML  | &nbsp; CSS
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
      </SwiperSlide>
      {/* Добавьте нужное количество SwiperSlide для ваших слайдов */}
    </Swiper>
  );
};
