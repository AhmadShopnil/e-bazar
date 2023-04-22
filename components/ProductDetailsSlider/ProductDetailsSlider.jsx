import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

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
        <Image
          className="image"
          src="/assets/img/p1.png"
          alt=""
          width={400}
          height={500}
        />
        <img src="/assets/img/p1.png" alt="" />
        <img src="/assets/img/p2.png" alt="" />
        <img src="/assets/img/p3.png" alt="" />
        <img src="/assets/img/p4.png" alt="" />
        <img src="/assets/img/p5.png" alt="" />
        <img src="/assets/img/p6.png" alt="" />
        <img src="/assets/img/p7.png" alt="" />

        {/* <Image src="/assets/img/p2.png" alt="" width={400} height={500} />
        <Image src="/assets/img/p3.png" alt="" width={400} height={500} />
        <Image src="/assets/img/p4.png" alt="" width={400} height={500} />
        <Image src="/assets/img/p5.png" alt="" width={400} height={500} />
        <Image src="/assets/img/p6.png" alt="" width={400} height={500} />
        <Image src="/assets/img/p7.png" alt="" width={400} height={500} /> */}
      </Carousel>
    </div>
  );
};

export default ProductDetailsSlider;
