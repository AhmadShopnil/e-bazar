import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const ProductDetailsSlider = () => {
  return (
    <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={60}
        className="productCarousel"
      >
        <img src="/assets/img/p1.png" alt="" />
        <img src="/assets/img/p2.png" alt="" />
        <img src="/assets/img/p3.png" alt="" />
        <img src="/assets/img/p4.png" alt="" />
        <img src="/assets/img/p5.png" alt="" />
        <img src="/assets/img/p6.png" alt="" />
        <img src="/assets/img/p7.png" alt="" />
      </Carousel>
    </div>
  );
};

export default ProductDetailsSlider;
