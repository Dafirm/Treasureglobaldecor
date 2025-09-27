"use client";
import AnimatedText from "../../common/AnimatedText";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const divSections = [
  {
    className: "home-section bg-scroll ",
    bgImage: "/assets/images/ban1.png",
    darkclassName: "home-section bg-scroll bg-dark-alpha-70",
  },
  {
    className: "home-section bg-scroll",
    darkclassName: "home-section bg-scroll bg-dark-alpha-70",
    bgImage: "/assets/images/ban2.png",
  },
  {
    className: "home-section bg-scroll",
    bgImage: "/assets/images/ban3.png",
    darkclassName: "home-section bg-scroll bg-dark-alpha-70",
  },
];
export default function Hero5({ dark }) {
  return (
    <>
      <div className="fullwidth-gallery-wrapper ">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          modules={[Autoplay, EffectFade]}
          autoplay
          effect="fade"
          watchSlidesProgress
          resizeObserver
          className="fullwidth-gallery owl-carousel owl-theme  overflow-hidden position-static"
          style={{
            opacity: 1,
            display: "block",
          }}
        >
          {/* Team item */}
          {divSections.map((elm, index) => (
            <SwiperSlide className="owl-item" key={index}>
              <div
                className={dark ? elm.darkclassName : elm.className}
                style={{
                  backgroundImage: `url(${elm.bgImage})`,
                }}
              />
            </SwiperSlide>
          ))}

          {/* End Team item */}
        </Swiper>
      </div>
      {/* End Fullwidth Slider */}
      <div className="fullwidth-galley-content">
        <div className="container min-height-100vh d-flex align-items-center pt-100 pb-100 pt-sm-120 pb-sm-120">
          {/* Home Section Content */}
          <div className="home-content">
            <div className="row">
              {/* Home Section Text */}
              <div className="col-md-10 offset-md-1 mb-20 mb-sm-0">
                <h2
                  className="hs-title-11 mb-30 mb-xs-10 wow fadeInUp"
                  
                >
                  TG GALLERY
                </h2>
                <h1 className="hs-title-12 mb-50 mb-sm-30">
                  <span className="charsAnimIn" data-splitting="chars">
                    <AnimatedText text="Plan your next event with Treasure Global Decor." />
                  </span>
                </h1>
              </div>
            </div>
          </div>

         

          <div className="hs-status wow fadeInUp" data-wow-offset={0}>
            Based in Finland, Uusima
          </div>
        </div>
      </div>
    </>
  );
}

