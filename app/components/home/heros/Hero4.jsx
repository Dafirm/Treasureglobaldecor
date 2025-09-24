"use client";

import AnimatedText from "../../common/AnimatedText";
import React from "react";

export default function Hero1() {
  return (
    <div className="container min-height-50vh d-flex align-items-center pt-100 pb-100 pt-sm-120 pb-sm-120">
      {/* Home Section Content */}
      <div className="home-content text-center">
        <h1 className="hs-title-4 mb-80 mb-sm-50 mb-xs-30">
          <span className="wow charsAnimInLong" data-splitting="chars">
            <AnimatedText text="Checkout Items" />
          </span>
        </h1>
        <div
          className="local-scroll wow fadeInUpShort"
          data-wow-delay="0.57s"
        ></div>
      </div>
    </div>
  );
}
