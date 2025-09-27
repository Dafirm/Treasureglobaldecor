

"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, decreaseItem, removeItem } from "../features/cart/cartSlice";

import Hero3 from "../components/home/heros/Hero3";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Col, Row} from "react-bootstrap"
import storeItems from "../../data/items.json";
import { StoreItem } from "../rental/StoreItem";

export default function RentalPage() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const handleAdd = (item) => dispatch(addItem(item));
  const handleDecrease = (item) => dispatch(decreaseItem(item));
  const handleRemove = (item) => dispatch(removeItem(item));

  const ParallaxContainer = dynamic(
    () => import("../components/common/ParallaxContainer"),
    { ssr: false }
  );

  return (
    <div className="theme-elegant">

      <ParallaxContainer
        className="home-section bg-dark-alpha-30 parallax-5 light-content z-index-1 scrollSpysection"
        style={{ backgroundImage: "url(/assets/images/ban1.png)" }}
        id="home"
      >
        <Hero3 />
      </ParallaxContainer>

      {/* products listing */}


    <h1>Store Items</h1>
    <Row md={2} xs={1} lg={3} className ="g-3">
      {storeItems.map(item => (
        <Col key={item.id}><StoreItem {...item}/></Col>
      ))}
    </Row>
 
    


    </div>
  );
}





