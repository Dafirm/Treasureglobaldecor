

// "use client";
// import { contactItems } from "@/data/contact";
// import React from "react";

// export default function Contact() {

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const formData = {
//       name: form.name.value,
//       email: form.email.value,
//       message: form.message.value,
//     };

//     const res = await fetch("/api/contact", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(formData),
//     });

//     const result = await res.json();
//     alert(result.message);
//     form.reset();
//   };

//   return (
//     <div className="container position-relative ">
//       <div className="row">
//         {/* Left Column */}
//         <div
//           className="col-lg-4 mb-md-50 mb-sm-30 position-relative z-index-1"
//           style={{ border: "1px solid black" }}
//         >
//           <h4 className="h3 mt-4 mb-50 mb-sm-30">
//             We’re open to talk to good people.
//           </h4>
//           {/* Contact Information */}
//           <div className="row">
//             <div className="col-md-11">
//               {/* Address */}
//               {contactItems.map((item, index) => (
//                 <React.Fragment key={index}>
//                   <div
//                     className={`contact-item ${
//                       index !== 3 ? "mb-40 mb-sm-20" : ""
//                     }`}
//                   >
//                     <div className="ci-icon">
//                       <i className={item.iconClass} />
//                     </div>
//                     <h4 className="ci-title  visually-hidden">{item.title}</h4>
//                     <div className="ci-text">{item.text}</div>
//                     <div>
//                       <a
//                         href={item.link.url}
//                         target={item.link.target}
//                         rel={item.link.rel}
//                         className="link-hover-anim"
//                         data-link-animate="y"
//                       >
//                         <span className="link-strong link-strong-unhovered">
//                           {item.link.text}{" "}
//                           <i
//                             className="mi-arrow-right size-18"
//                             aria-hidden="true"
//                           ></i>
//                         </span>
//                         <span
//                           className="link-strong link-strong-hovered"
//                           aria-hidden="true"
//                         >
//                           {item.link.text}{" "}
//                           <i
//                             className="mi-arrow-right size-18"
//                             aria-hidden="true"
//                           ></i>
//                         </span>
//                       </a>
//                     </div>
//                   </div>
//                 </React.Fragment>
//               ))}
//               {/* End Phone */}
//             </div>
//           </div>
//           {/* End Contact Information */}
//         </div>
//         {/* End Left Column */}
//         {/* Right Column */}
//         <div
//           className="col-lg-8 col-xl-7 offset-xl-1 wow fadeInUp"
//           style={{ border: "1px solid black" }}
//         >
//           <div className="row g-0">
//             {/* Google Map Column */}
//             <div className="col-md-5 d-flex align-items-stretch pt-40 pt-sm-0 pb-40 pb-sm-0 mb-sm-30">
//               <div className="map-boxed-1 d-flex align-items-stretch">
//                 <iframe
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7930.23045163803!2d24.67192933902862!3d60.20460380245927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468df3e9da0ceda1%3A0x4e133970ee0c524f!2sTreasure%20Global%20Decor!5e0!3m2!1sen!2sfi!4v1756739907158!5m2!1sen!2sfi"
//                   width={600}
//                   height={450}
//                   style={{ border: 0 }}
//                   allowFullScreen=""
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                 />
//               </div>
//             </div>
//             {/* End Google Map Column */}
//             {/* Contact Form Column */}
//             <div className="col-md-7">
//               <div className="box-shadow bg-white round p-4 p-sm-5 position-relative z-index-1">
//                 <h4 className="h3 mb-40 mb-sm-30">Get in Touch</h4>
//                 {/* Contact Form */}
//                 <form
//                   onSubmit={handleSubmit}
//                   className="form contact-form"
//                   id="contact_form"
//                 >
//                   {/* Name */}
//                   <div className="form-group">
//                     <label htmlFor="name" className="visually-hidden">
//                       Name
//                     </label>
//                     <input
//                       type="text"
//                       name="name"
//                       id="name"
//                       className="input-lg input-circle form-control"
//                       placeholder="Name"
//                       pattern=".{3,100}"
//                       required
//                       aria-required="true"
//                     />
//                   </div>
//                   {/* End Name */}
//                   {/* Email */}
//                   <div className="form-group">
//                     <label htmlFor="email" className="visually-hidden">
//                       Email
//                     </label>
//                     <input
//                       type="email"
//                       name="email"
//                       id="email"
//                       className="input-lg input-circle form-control"
//                       placeholder="Email"
//                       pattern=".{5,100}"
//                       required
//                       aria-required="true"
//                     />
//                   </div>
//                   {/* End Email */}
//                   {/* Message */}
//                   <div className="form-group">
//                     <label htmlFor="message" className="visually-hidden">
//                       Message
//                     </label>
//                     <textarea
//                       name="message"
//                       id="message"
//                       className="input-lg input-circle form-control"
//                       style={{ height: 130 }}
//                       placeholder="Message"
//                       defaultValue={""}
//                     />
//                   </div>
//                   {/* Send Button */}
//                   <button
//                     className="submit_btn btn btn-mod btn-color btn-large btn-full btn-circle btn-hover-anim"
//                     id="submit_btn"
//                     aria-controls="result"
//                   >
//                     <span>Send Message</span>
//                   </button>
//                   {/* End Send Button */}
//                   {/* Inform Tip */}
//                   <div className="form-tip w-100 pt-30 mt-sm-20">
//                     <i className="icon-info size-16" />
//                     All the fields are required.
//                   </div>
//                   {/* End Inform Tip */}
//                   <div
//                     id="result"
//                     role="region"
//                     aria-live="polite"
//                     aria-atomic="true"
//                   />
//                 </form>
//                 {/* End Contact Form */}
//               </div>
//             </div>
//             {/* End Contact Form Column */}
//           </div>
//         </div>
//         {/* End Right Column */}
//       </div>
//     </div>
//   );
// }



// "use client";
// import { contactItems } from "@/data/contact";
// import React, { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export default function Contact() {
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const form = e.target;
//     const formData = {
//       name: form.name.value,
//       email: form.email.value,
//       message: form.message.value,
//     };

//     try {
//       const res = await fetch("/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const result = await res.json();

//       if (res.ok) {
//         toast.success("✅ Message sent successfully!");
//         form.reset();
//       } else {
//         toast.error(`❌ Failed: ${result.error || "Something went wrong."}`);
//       }
//     } catch (err) {
//       console.error(err);
//       toast.error("❌ Failed to send message.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="container position-relative ">
//       <div className="row">
//         {/* Left Column */}
//         <div className="col-lg-4 mb-md-50 mb-sm-30 position-relative z-index-1">
//           <h4 className="h3 mt-4 mb-50 mb-sm-30">
//             We’re open to talk to good people.
//           </h4>
//           <div className="row">
//             <div className="col-md-11">
//               {contactItems.map((item, index) => (
//                 <React.Fragment key={index}>
//                   <div
//                     className={`contact-item ${
//                       index !== 3 ? "mb-40 mb-sm-20" : ""
//                     }`}
//                   >
//                     <div className="ci-icon">
//                       <i className={item.iconClass} />
//                     </div>
//                     <h4 className="ci-title visually-hidden">{item.title}</h4>
//                     <div className="ci-text">{item.text}</div>
//                     <div>
//                       <a
//                         href={item.link.url}
//                         target={item.link.target}
//                         rel={item.link.rel}
//                         className="link-hover-anim"
//                         data-link-animate="y"
//                       >
//                         <span className="link-strong link-strong-unhovered">
//                           {item.link.text}{" "}
//                           <i className="mi-arrow-right size-18" />
//                         </span>
//                         <span
//                           className="link-strong link-strong-hovered"
//                           aria-hidden="true"
//                         >
//                           {item.link.text}{" "}
//                           <i className="mi-arrow-right size-18" />
//                         </span>
//                       </a>
//                     </div>
//                   </div>
//                 </React.Fragment>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Right Column */}
//         <div className="col-lg-8 col-xl-7 offset-xl-1 wow fadeInUp">
//           <div className="row g-0">
//             {/* Map */}
//             <div className="col-md-5 d-flex align-items-stretch mb-sm-30">
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7930.23045163803!2d24.67192933902862!3d60.20460380245927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468df3e9da0ceda1%3A0x4e133970ee0c524f!2sTreasure%20Global%20Decor!5e0!3m2!1sen!2sfi!4v1756739907158!5m2!1sen!2sfi"
//                 width={600}
//                 height={450}
//                 style={{ border: 0 }}
//                 allowFullScreen=""
//                 loading="lazy"
//               />
//             </div>

//             {/* Contact Form */}
//             <div className="col-md-7">
//               <div className="box-shadow bg-white round p-4 p-sm-5">
//                 <h4 className="h3 mb-40 mb-sm-30">Get in Touch</h4>
//                 <form onSubmit={handleSubmit} className="form contact-form">
//                   <div className="form-group">
//                     <input
//                       type="text"
//                       name="name"
//                       placeholder="Name"
//                       className="input-lg input-circle form-control"
//                       required
//                     />
//                   </div>
//                   <div className="form-group">
//                     <input
//                       type="email"
//                       name="email"
//                       placeholder="Email"
//                       className="input-lg input-circle form-control"
//                       required
//                     />
//                   </div>
//                   <div className="form-group">
//                     <textarea
//                       name="message"
//                       placeholder="Message"
//                       className="input-lg input-circle form-control"
//                       style={{ height: 130 }}
//                       required
//                     />
//                   </div>
//                   <button
//                     type="submit"
//                     disabled={loading}
//                     className="submit_btn btn btn-mod btn-color btn-large btn-full btn-circle btn-hover-anim"
//                   >
//                     <span>{loading ? "Sending..." : "Send Message"}</span>
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Toast Notifications */}
//       <ToastContainer position="top-right" autoClose={4000} />
//     </div>
//   );
// }


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
