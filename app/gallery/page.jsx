"use client";
import { portfolios } from "@/data/portfolio";
import React, {  useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";
import Hero5 from "../components/home/heros/Hero5"
import { Gallery, Item } from "react-photoswipe-gallery";
import Slider from "./Slider"

const filters = [
  { name: "All", category: "all" },
  { name: "Birthday", category: "birthday" },
  { name: "Branding", category: "branding" },
  { name: "Wedding", category: "wedding" },
  { name: "Interior", category: "interior" },
];
export default function Page({ dark = false }) {
  const [currentCategory, setCurrentCategory] = useState("all");
  const [filtered, setFiltered] = useState(portfolios);

  
  const ParallaxContainer = dynamic(
      () => import("../components/common/ParallaxContainer"),
      { ssr: false }
    );
  return (
    <>
      <ParallaxContainer
        className="home-section bg-dark-alpha-30 parallax-5 light-content z-index-1 scrollSpysection"
        style={{
          backgroundImage: "url(/assets/images/ban1.png)",
        }}
        id="home"
      >
        <Hero5 />
      </ParallaxContainer>
      <section
        className={`page-section pb-0  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        } `}
        id="portfolio"
      >
        <div className="container">
          <div className="row mb-70 mb-sm-50">
            <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3 text-center">
              <h2 className="section-title mb-30 mb-sm-20">
                <span className="text-gray">Our</span> Portfolio
                <span className="text-gray">.</span>
              </h2>
              <div className="text-gray">
                <p className="mb-0">
                  At <strong>Treasure Global Decor</strong>, we don’t just
                  decorate we design experiences. Every project reflects a
                  unique story, creatively told through thoughtful detail,
                  stylish execution, and purposeful design.
                </p>
                <p className="mb-0 mt-3">
                  Our portfolio captures the essence of events brought to life
                  with precision, passion, and personal flair.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        {/* Works Filter */}
        <div className="works-filter works-filter-elegant text-center mb-50">
          {filters.map((elm, i) => (
            <a
              onClick={() => setCurrentCategory(elm.category)}
              key={i}
              className={`filter ${
                currentCategory == elm.category ? "active" : ""
              }`}
            >
              {elm.name}
            </a>
          ))}
        </div>
        {/* End Works Filter */}
      </div>
      <div className="position-relative">
        {/* Works Grid */}
        <ul
          className="works-grid work-grid-4 work-grid-gut-sm hide-titles"
          id="work-grid"
        >
          <Gallery>
            {/* Work Item (Lightbox) */}
            {filtered.map((item, index) => (
              <li
                key={index}
                className={`work-item mix ${item.categories.join(" ")}`}
              >
                {item.type === "View" ? (
                  <Item
                    original={item.imageSrc}
                    thumbnail={item.imageSrc}
                    width={650}
                    height={773}
                  >
                    {({ ref, open }) => (
                      <a
                        onClick={open}
                        className="work-lightbox-link mfp-image"
                      >
                        <div className="work-img">
                          <div className="work-img-bg wow-p scalexIn" />

                          <Image
                            src={item.imageSrc}
                            ref={ref}
                            width={650}
                            height={761}
                            alt="Work Description"
                          />
                        </div>
                        <div className="work-intro">
                          <h3 className="work-title">{item.title}</h3>
                          <div className="work-descr">{item.type}</div>
                        </div>
                      </a>
                    )}
                  </Item>
                ) : (
                  <Link
                    href={`/elegant-portfolio-single/${item.id}`}
                    className="work-ext-link"
                  >
                    <div className="work-img">
                      <div className="work-img-bg" />
                      <Image
                        src={item.imageSrc}
                        width={650}
                        height={761}
                        alt="Work Description"
                      />
                    </div>
                    <div className="work-intro">
                      <h3 className="work-title">{item.title}</h3>
                      <div className="work-descr">{item.type}</div>
                    </div>
                  </Link>
                )}
              </li>
            ))}{" "}
          </Gallery>
        </ul>
      </div>
      <div className="col-12 d-flex justify-content-center py-5">
        <a
          href="https://www.instagram.com/treasureglobaldecor?igsh=MWloYTlubWo1bGxjaw%3D%3D&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          className="section-more"
        >
          View More Events on IG <i className="mi-chevron-right size-14" />
        </a>
      </div>
    </>
  );
}
