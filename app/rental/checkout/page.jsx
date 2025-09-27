


"use client";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import dynamic from "next/dynamic";
import Hero4 from "../../components/home/heros/Hero4";

export default function CheckoutPage() {
  const { cartItems = [], totalAmount = 0 } = useSelector(
    (state) => state.cart
  );
  const [form, setForm] = useState({ name: "", email: "", address: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Order placed successfully!\nTotal: €${totalAmount}`);
  };

  const ParallaxContainer = dynamic(
    () => import("../../components/common/ParallaxContainer"),
    { ssr: false }
  );

  return (
    <div className="theme-elegant">
     
      <ParallaxContainer
        className="home-section bg-dark-alpha-30 parallax-5 light-content z-index-1 scrollSpysection"
        style={{ backgroundImage: "url(/assets/images/ban1.png)" }}
        id="home"
      >
        <Hero4 />
      </ParallaxContainer>

      
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-10 text-center text-gray-900">
          Checkout
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
         
          <form
            onSubmit={handleSubmit}
            className="space-y-5 bg-white p-6 rounded-xl shadow-md border"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Billing Information
            </h3>

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
              required
            />
            <textarea
              name="address"
              placeholder="Delivery Address"
              value={form.address}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
              rows="4"
              required
            />

            <button
              type="submit"
              className="w-full px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Place Order
            </button>
          </form>

          {/* Order Summary */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-md border">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Order Summary
            </h3>

            {cartItems.length === 0 ? (
              <p className="text-gray-500">Your cart is empty.</p>
            ) : (
              <ul className="divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <li
                    key={item.id}
                    className="flex justify-between py-3 text-gray-700"
                  >
                    <span>
                      {item.name} × {item.quantity}
                    </span>
                    <span className="font-semibold">
                      €{item.price * item.quantity}
                    </span>
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-6 flex justify-between text-lg font-bold text-gray-900">
              <span>Total</span>
              <span>€{totalAmount}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
