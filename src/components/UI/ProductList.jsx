// import React from "react";
import ProductCart from "./ProductCart";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
// import { delay } from "@reduxjs/toolkit/dist/utils";
const ProductList = ({ data }) => {
  return (
    <div>
        <Swiper
        loop={true}
       modules={[Autoplay]}
        slidesPerView={3}
        spaceBetween={0}
    // pagination={{
    //   dynamicBullets: true,
    // }}
    // modules={[Pagination]}
    // className="mySwiper"
  >
      {/* <div style={{width:"80%",margin:"auto"}} className="grid grid-cols-3 gap-2 container mx-4 py-4"> */}
      {data?.map((item) => (
    <SwiperSlide>



          
          <ProductCart item={item} />
        {/* </div> */}

    </SwiperSlide>
      ))}
    
  </Swiper>
    </div>
  );
};

export default ProductList;
