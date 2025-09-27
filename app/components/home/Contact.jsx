
"use client";
import { contactItems } from "@/data/contact";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const form = e.target;
      const fullName = form.name.value.trim();
      const firstName = fullName.split(" ")[0]; // ✅ extract first name

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          name: fullName,
          first_name: firstName, // ✅ send to template
          email: form.email.value,
          message: form.message.value,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      toast.success("✅ Message sent successfully!");
      form.reset();
    } catch (err) {
      console.error("EmailJS Error:", err);
      toast.error("❌ Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container position-relative">
      <div className="row">
        {/* Left Column */}
        <div className="col-lg-4 mb-md-50 mb-sm-30 position-relative z-index-1">
          <h4 className="h3 mt-4 mb-50 mb-sm-30">
            We’re open to talk to good people.
          </h4>
          <div className="row">
            <div className="col-md-11">
              {contactItems.map((item, index) => (
                <React.Fragment key={index}>
                  <div
                    className={`contact-item ${
                      index !== 3 ? "mb-40 mb-sm-20" : ""
                    }`}
                  >
                    <div className="ci-icon">
                      <i className={item.iconClass} />
                    </div>
                    <h4 className="ci-title visually-hidden">{item.title}</h4>
                    <div className="ci-text">{item.text}</div>
                    <div>
                      <a
                        href={item.link.url}
                        target={item.link.target}
                        rel={item.link.rel}
                        className="link-hover-anim"
                        data-link-animate="y"
                      >
                        <span className="link-strong link-strong-unhovered">
                          {item.link.text}{" "}
                          <i className="mi-arrow-right size-18" />
                        </span>
                        <span
                          className="link-strong link-strong-hovered"
                          aria-hidden="true"
                        >
                          {item.link.text}{" "}
                          <i className="mi-arrow-right size-18" />
                        </span>
                      </a>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-lg-8 col-xl-7 offset-xl-1 wow fadeInUp">
          <div className="row g-0">
            {/* Map */}
            <div className="col-md-5 d-flex align-items-stretch mb-sm-30">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7930.23045163803!2d24.67192933902862!3d60.20460380245927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468df3e9da0ceda1%3A0x4e133970ee0c524f!2sTreasure%20Global%20Decor!5e0!3m2!1sen!2sfi!4v1756739907158!5m2!1sen!2sfi"
                width={600}
                height={450}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>

            {/* Contact Form */}
            <div className="col-md-7">
              <div className="box-shadow bg-white round p-4 p-sm-5">
                <h4 className="h3 mb-40 mb-sm-30">Get in Touch</h4>
                <form onSubmit={handleSubmit} className="form contact-form">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="input-lg input-circle form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="input-lg input-circle form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      placeholder="Message"
                      className="input-lg input-circle form-control"
                      style={{ height: 130 }}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="submit_btn btn btn-mod btn-color btn-large btn-full btn-circle btn-hover-anim"
                  >
                    <span>{loading ? "Sending..." : "Send Message"}</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Notifications */}
      <ToastContainer position="top-right" autoClose={4000} />
    </div>
  );
}
