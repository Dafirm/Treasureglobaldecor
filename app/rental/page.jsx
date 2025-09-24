// "use client";

// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { addItem, decreaseItem, removeItem } from "../features/cart/cartSlice";
// import { rentals } from "@/data/rentals";
// import Hero3 from "../components/home/heros/Hero3";
// import Contact from "../components/home/Contact";
// import Footer from "../components/Footer";
// import dynamic from "next/dynamic";
// import Image from "next/image";
// import NavBarRental from "./NavBarRental";
// import CartBasket from "./CartBasket";

// export default function RentalPage() {
//   const dispatch = useDispatch();
//   const { cartItems, totalQuantity } = useSelector((state) => state.cart);

//   const handleAdd = (item) => dispatch(addItem(item));
//   const handleDecrease = (item) => dispatch(decreaseItem(item));
//   const handleRemove = (item) => dispatch(removeItem(item));

//   const ParallaxContainer = dynamic(
//     () => import("../components/common/ParallaxContainer"),
//     { ssr: false }
//   );

//   const links = [
//     { href: "/", label: "Home" },
//     { href: "/rental", label: "Rental" },
//     { href: "/contact", label: "Contact" },
//   ];

//   return (
//     <div className="theme-elegant">
//       <NavBarRental links={links} />
//       <CartBasket />

//       <ParallaxContainer
//         className="home-section bg-dark-alpha-30 parallax-5 light-content z-index-1 scrollSpysection"
//         style={{ backgroundImage: "url(/assets/images/ban1.png)" }}
//         id="home"
//       >
//         <Hero3 />
//       </ParallaxContainer>

//       <div className="container py-12">
//         <div className="row">
//           {rentals.map((item) => {
//             const cartItem = cartItems.find((ci) => ci.id === item.id);
//             const quantity = cartItem ? cartItem.quantity : 0;

//             return (
//               <div key={item.id} className="col-md-4 mt-40">
//                 <div className="team-item border rounded-lg shadow-sm p-4">
//                   <div className="team-item-image">
//                     <Image
//                       src={item.image}
//                       width={625}
//                       height={767}
//                       className="wow scaleOutIn rounded"
//                       data-wow-duration="1.2s"
//                       alt={item.name}
//                     />
//                   </div>

//                   <div className="team-item-descr text-center mt-3">
//                     <div className="team-item-name text-black font-bold">
//                       {item.name}
//                     </div>
//                     <div className="team-item-role text-black">
//                       €{item.price}
//                     </div>

//                     <div className="flex items-center justify-center space-x-3 mt-3">
//                       <button
//                         onClick={() => handleDecrease(item)}
//                         className="px-3 py-1.5 bg-red-500 text-white rounded-lg hover:bg-red-600 disabled:opacity-40"
//                         disabled={quantity === 0}
//                       >
//                         -
//                       </button>
//                       <span className="px-4 py-1.5 bg-gray-200 rounded-lg text-black font-semibold">
//                         {quantity}
//                       </span>
//                       <button
//                         onClick={() => handleAdd(item)}
//                         className="px-3 py-1.5 bg-green-500 text-white rounded-lg hover:bg-green-600"
//                       >
//                         +
//                       </button>
//                     </div>

//                     <button
//                       onClick={() => handleAdd(item)}
//                       className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 w-full"
//                     >
//                       Add to Cart
//                     </button>

//                     {quantity > 0 && (
//                       <button
//                         onClick={() => handleRemove(item)}
//                         className="mt-2 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 w-full"
//                       >
//                         Remove from Cart
//                       </button>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       <Contact />
//       <footer className="bg-dark-1 light-content footer z-index-1 position-relative">
//         <Footer />
//       </footer>
//     </div>
//   );
// }



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










  // <div className="container py-12">
  //   <div className="row">
  //     {rentals.map((item) => {
  //       const cartItem = cartItems.find((ci) => ci.id === item.id);
  //       const quantity = cartItem ? cartItem.quantity : 0;

  //       return (
  //         <div key={item.id} className="col-md-4 mt-40">
  //           <div className="team-item border rounded-lg shadow-sm p-4">
  //             <div className="team-item-image">
  //               <Image
  //                 src={item.image}
  //                 width={625}
  //                 height={767}
  //                 className="wow scaleOutIn rounded"
  //                 alt={item.name}
  //               />
  //             </div>

  //             <div className="team-item-descr text-center mt-3">
  //               <div className="team-item-name text-black font-bold">
  //                 {item.name}
  //               </div>
  //               <div className="team-item-role text-black">€{item.price}</div>

  //               {/* Quantity controls */}
  //               <div className="flex items-center justify-center space-x-3 mt-3">
  //                 <button
  //                   onClick={() => handleDecrease(item)}
  //                   className="px-3 py-1.5 bg-red-500 text-black rounded-lg hover:bg-red-600 disabled:opacity-40"
  //                   disabled={quantity === 0}
  //                 >
  //                   -
  //                 </button>
  //                 <span className="px-4 py-1.5 bg-gray-200 rounded-lg text-black font-semibold">
  //                   {quantity}
  //                 </span>
  //                 <button
  //                   onClick={() => handleAdd(item)}
  //                   className="px-3 py-1.5 bg-green-500 text-black rounded-lg hover:bg-green-600"
  //                 >
  //                   +
  //                 </button>
  //               </div>

  //               {/* Add & Remove buttons */}
  //               <button
  //                 onClick={() => handleAdd(item)}
  //                 className="mt-3 px-4 py-2 bg-blue-600 text-black rounded-lg hover:bg-blue-700 w-full"
  //               >
  //                 Add to Cart
  //               </button>

  //               {quantity > 0 && (
  //                 <button
  //                   onClick={() => handleRemove(item)}
  //                   className="mt-2 px-4 py-2 bg-gray-500 text-black rounded-lg hover:bg-gray-600 w-full"
  //                 >
  //                   Remove from Cart
  //                 </button>
  //               )}
  //             </div>
  //           </div>
  //         </div>
  //       );
  //     })}
  //   </div>
  // </div>;