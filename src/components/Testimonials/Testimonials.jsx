import React from "react";
import "./testimonials.css";
import AVATAR1 from "../../assets/avatar1.png";
import AVATAR2 from "../../assets/avatar2.jpg";
import AVATAR3 from "../../assets/avatar3.jpg";
import AVATAR4 from "../../assets/avatar4.jpg";
import AVATAR5 from "../../assets/avatar5.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVATAR1,
    name: "Clever Programmer",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam placeat possimus, ea illum reiciendis cupiditate voluptatum esse amet perspiciatis iure enim expedita dolorum minus laudantium voluptas delectus aliquam quia excepturi nostrum in ad, pariatur rem non. Deleniti quis magni eius?",
  },
  {
    avatar: AVATAR2,
    name: "Soony Sangha",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam placeat possimus, ea illum reiciendis cupiditate voluptatum esse amet perspiciatis iure enim expedita dolorum minus laudantium voluptas delectus aliquam quia excepturi nostrum in ad, pariatur rem non. Deleniti quis magni eius?",
  },
  {
    avatar: AVATAR3,
    name: "Naz Dummeskky",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam placeat possimus, ea illum reiciendis cupiditate voluptatum esse amet perspiciatis iure enim expedita dolorum minus laudantium voluptas delectus aliquam quia excepturi nostrum in ad, pariatur rem non. Deleniti quis magni eius?",
  },
  {
    avatar: AVATAR4,
    name: "Web Development",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam placeat possimus, ea illum reiciendis cupiditate voluptatum esse amet perspiciatis iure enim expedita dolorum minus laudantium voluptas delectus aliquam quia excepturi nostrum in ad, pariatur rem non. Deleniti quis magni eius?",
  },
  {
    avatar: AVATAR5,
    name: "Software Development",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam placeat possimus, ea illum reiciendis cupiditate voluptatum esse amet perspiciatis iure enim expedita dolorum minus laudantium voluptas delectus aliquam quia excepturi nostrum in ad, pariatur rem non. Deleniti quis magni eius?",
  },
];

const Testimonials = () => {
  return (
    <section id="terimonials">
      <h5>Reviews from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials-container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={true}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client-avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
              <h5 className="client-name">{name}</h5>
              <small className="client-review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
