"use client";
import { useEffect } from "react";
import { headerChangeOnScroll } from "@/utils/changeHeaderOnScroll";
import { toggleMobileMenu } from "@/utils/toggleMobileMenu";
import Nav3 from "./Nav3";
import Link from "next/link";

import Image from "next/image";
export default function Header2({ links }) {
  useEffect(() => {
    window.addEventListener("scroll", headerChangeOnScroll);
    return () => {
      window.removeEventListener("scroll", headerChangeOnScroll);
    };
  }, []);
  return (
    <>
      <div className="main-nav-sub full-wrapper">
        <div className="nav-logo-wrap local-scroll">
          <a href="/" className="logo font-alt">
            <Image
              src="/assets/images/lo2b.png"
              alt="Treasure Global Decor"
              width={170}
              height={12}
            />
          </a>
        </div>
        {/* Mobile Menu Button */}
        <div
          onClick={toggleMobileMenu}
          className="mobile-nav"
          role="button"
          tabIndex={0}
        >
          <i className="mobile-nav-icon" />
          <span className="visually-hidden">Menu</span>
        </div>
        {/* Main Menu */}
        <div className="inner-nav desktop-nav">
          <ul className="clearlist scroll-nav local-scroll justify-content-end scrollspyLinks">
            <Nav3 links={links} />
            <li className="ms-3 me-2" />
            {/* <li>
              <Link
                href="/rental" // this matches app/rental/page.jsx
                className="opacity-1 no-hover"
              >
                <span
                  className="btn btn-mod btn-small btn-border-w btn-circle"
                  data-btn-animate="y"
                >
                  <span className="btn-animate-y">
                    <span className="btn-animate-y-1">Rentals</span>
                    <span className="btn-animate-y-2" aria-hidden="true">
                      Rentals
                    </span>
                  </span>
                </span>
              </Link>
            </li> */}
          </ul>
        </div>
        {/* End Main Menu */}
      </div>
    </>
  );
}
