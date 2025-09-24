import { services } from "@/data/services";
import Image from "next/image";


export default function Service() {
  return (
    <>
      <div
        className="page-section bg-dark-1 bg-dark-alpha-70 light-content parallax-7 pb-140"
        style={{
          backgroundImage: "url(/assets/images/ban1.png",
        }}
      >
        <div className="container position-relative">
          <div className="row mb-70 mb-sm-50">
            <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3 text-center">
              <h2 className="section-title mb-30 mb-sm-20">Our Services.</h2>
              <div className="text-gray mb-30 mb-sm-20">
                <p className="mb-0">
                  At <strong>Treasure Global Decor</strong>, we curate
                  exceptional spaces for events that matter. From weddings and
                  corporate gatherings to cultural celebrations and private
                  setups, our services are tailored to reflect your vision with
                  style and precision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-n140 position-relative z-index-1">
        <div className="row mb-n30">
          {/* Services Item*/}
          {services.map((elm, i) => (
            <div
              key={i}
              className="col-md-6 col-lg-4 d-flex align-items-stretch mb-30"
            >
              <div className="services-3-item round text-center">
                <div className="wow fadeInUpShort" data-wow-offset={50}>
                  <div className="services-3-icon">
                    <Image
                      src={elm.imageSrc}
                      alt={elm.imageAlt}
                      width={elm.width}
                      height={elm.height}
                      className="rounded-circle object-cover"
                      style={{
                        width: `${elm.width}px`,
                        height: `${elm.height}px`,
                      }}
                    />
                  </div>
                  <h3 className="services-3-title">{elm.title}</h3>
                  <div className="services-3-text">{elm.text}</div>
                </div>
              </div>
            </div>
          ))}
          
        </div>
      </div>
    </>
  );
}
