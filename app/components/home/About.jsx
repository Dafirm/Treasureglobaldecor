


"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { aboutImages } from "@/data/about";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Custom CSS animation
const styles = `
  .zoom-slide {
    transition: transform 0.6s ease, box-shadow 0.6s ease;
    border-radius: 12px;
  }
  .swiper-slide-active .zoom-slide {
    transform: scale(1.1) rotateZ(-2deg);
    box-shadow: 0 20px 40px rgba(0,0,0,0.3);
  }
`;

export default function About() {
  return (
    <div className="col-lg-6 offset-lg-1">
      {/* Inject animation styles */}
      <style>{styles}</style>

      <div className="row">
        {/* Left slider */}
        <div className="col-sm-6 pt-60 pt-xs-0 mb-xs-40">
          <div className="spot-box clearfix mb-30">
              <div className="spot-box-icon float-end ms-3" />
            <div className="spot-box-text text-end">
              <span className="text-gray">
                Let's design your next<br />
              </span>
              events.
            </div>
            
          </div>
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            pagination={{ clickable: true }}
          >
            {aboutImages.map((img, i) => (
              <SwiperSlide key={i}>
                <Image
                  src={img.src}
                  width={400}
                  height={489}
                  alt={img.alt}
                  className="w-100 zoom-slide"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Right slider */}
        <div className="col-sm-6">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
          >
            {aboutImages.map((img, i) => (
              <SwiperSlide key={i}>
                <Image
                  src={img.src}
                  width={400}
                  height={489}
                  alt={img.alt}
                  className="w-100 zoom-slide"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Description box */}
          <div className="spot-box clearfix mt-30">
            <div className="spot-box-icon float-start me-3" />
            <div className="spot-box-text">
              <span className="text-gray">
                We design events <br />
                with love and passion.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


