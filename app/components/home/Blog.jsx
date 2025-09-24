"use client";
import { blogs5 } from "@/data/blogs";
import { useState } from "react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Blog() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpanded = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };
  return (
    <div className="container">
      <div className="row mb-70 mb-sm-50">
        <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3 text-center">
          <h2 className="section-title mb-30 mb-sm-20">
            <span className="text-gray">Customer</span> Feedbacks
            <span className="text-gray">.</span>
          </h2>
          <div className="text-gray">
            <p className="mb-0">
              At <strong>Treasure Global Decor</strong>, we measure our success
              through the joy of our clients. Each event tells a story and
              we’re proud to be part of yours. Here’s what some of our wonderful
              customers have to say about their experiences with us.
            </p>
          </div>
        </div>
     
        <div className="col-md-2 col-lg-3 text-center text-md-end mt-10 mt-sm-30">
          <a
            href="https://www.instagram.com/treasureglobaldecor?igsh=MWloYTlubWo1bGxjaw%3D%3D&utm_source=qr"
            target="_blank"
            
            rel="noopener noreferrer"
            className="section-more"
          >
            View More Events on IG <i className="mi-chevron-right size-14" />
          </a>
        </div>
      </div>
      <div className="row mt-n30">
        {/* Post Item */}
        {blogs5.map((post, index) => {
          const isExpanded = expandedId === post.id;
          const isLong = post.text?.length > 400;
          const displayedText =
            isExpanded || !isLong
              ? post.text
              : `${post.text.substring(0, 400)}...`;

          return (
            <div
              key={index}
              className={`post-prev col-md-6 col-lg-4 mt-30 wow fadeInLeft`}
              data-wow-delay={`${post.delay}s`}
            >
              <div className="post-prev-container">
                <div className="post-prev-img">
                  <Link href={`/elegant-blog-single/${post.id}`}>
                    <Image
                      src={post.imageSrc}
                      width={607}
                      height={358}
                      alt="Add Image Description"
                    />
                  </Link>
                </div>
                <h3 className="post-prev-title">
                  <Link href={`/elegant-blog-single/${post.id}`}>
                    {post.title}
                  </Link>
                </h3>

                <div className="post-prev-text">
                  {displayedText}
                  {isLong && (
                    <button
                      onClick={() => toggleExpanded(post.id)}
                      className="btn btn-sm btn-link ps-0"
                      style={{ color: "#c09234" }} // Optional: your brand color
                    >
                      {isExpanded ? "View Less" : "View More"}
                    </button>
                  )}
                </div>

                <div className="post-prev-info clearfix mt-auto pt-3 border-top">
                  <div className="float-start">
                    <a href="#" className="icon-author">
                      <i className="mi-user size-14 align-middle" />
                    </a>
                    <a href="#">{post.author}</a>
                  </div>
                  <div className="float-end">
                    <i className="mi-calendar size-14 align-middle" />
                    <a href="#">{post.date}</a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        
      </div>
    </div>
  );
}
