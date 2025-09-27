

"use client";
import { toggleMobileMenu } from "@/utils/toggleMobileMenu";
import Nav from "./Nav2";
import Link from "next/link";
import Image from "next/image";
import { Button } from "react-bootstrap";
import { useShoppingCart } from "../rental/context/ShoppingCartContext";

export default function RentalHeader({ links }) {
    const { openCart, cartQuantity } = useShoppingCart();
  return (
    <div className="main-nav-sub container">
      <div className="nav-logo-wrap">
        <Link href="/" className="logo font-alt">
          <Image
            src="/assets/images/lo2b.png"
            alt="Treasure Global Decor"
            width={170}
            height={12}
          />
        </Link>
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
          <Nav links={links} />

          {/* Social Links */}

          <li>
            <Link
              href="/rental"
              className="hover:text-gray-300 font-semibold text-white"
            >
              Products
            </Link>
          </li>

          <li>
            <Link
              href="/"
              className="hover:text-gray-300 font-semibold text-white"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/rental/checkout"
              className="hover:text-gray-300 font-semibold text-white"
            >
              Checkout
            </Link>
          </li>
          <li>
            <div className="relative">
       
              <Button
                onClick={openCart}
                style={{ width: "3rem", height: "3rem", position: "relative" }}
                variant="outline-primary"
                className="rounded-circle"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  fill="currentColor"
                >
                  <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
                </svg>

                <div
                  className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                  style={{
                    color: "white",
                    width: "1.5rem",
                    height: "1.5rem",
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    transform: "translate(25%, 25%)",
                  }}
                >
                  {cartQuantity}
                </div>
              </Button>
            </div>
          </li>
          {/* End Social Links  */}
        </ul>
      </div>
      {/* End Main Menu */}
    </div>
  );
}





// "use client";
// import { toggleMobileMenu } from "@/utlis/toggleMobileMenu";
// import Nav from "./Nav2";
// import Link from "next/link";
// import Image from "next/image";
// import { useSelector } from "react-redux";
// import { ShoppingCart, X } from "lucide-react";
// import { useState } from "react";

// export default function RentalHeader({ links }) {
//   const totalQuantity = useSelector((state) => state.cart.totalQuantity);
//   const cartItems = useSelector((state) => state.cart.cartItems); // assuming you track items
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       {/* Navbar */}
//       <div className="main-nav-sub container">
//         <div className="nav-logo-wrap">
//           <Link href="/" className="logo font-alt">
//             <Image
//               src="/assets/images/lo2b.png"
//               alt="Treasure Global Decor"
//               width={170}
//               height={12}
//             />
//           </Link>
//         </div>

//         {/* Mobile Menu Button */}
//         <div
//           onClick={toggleMobileMenu}
//           className="mobile-nav"
//           role="button"
//           tabIndex={0}
//         >
//           <i className="mobile-nav-icon" />
//           <span className="visually-hidden">Menu</span>
//         </div>

//         {/* Main Menu */}
//         <div className="inner-nav desktop-nav">
//           <ul className="clearlist scroll-nav local-scroll justify-content-end scrollspyLinks">
//             <Nav links={links} />

//             <li className="desktop-nav-display">
//               <div className="vr mt-2" />
//             </li>

//             <li>
//               <a href="tel:+358442388567">
//                 <i className="mi-mobile size-24 color-primary-1 align-center" />
//                 +358 44 2388567
//               </a>
//             </li>

//             <li>
//               <Link
//                 href="/"
//                 className="hover:text-gray-300 font-semibold text-white"
//               >
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="/rental/checkout"
//                 className="hover:text-gray-300 font-semibold text-white"
//               >
//                 Checkout
//               </Link>
//             </li>

//             {/* Cart Basket */}
//             <li>
//               <div className="relative">
//                 <button
//                   onClick={() => setIsOpen(true)}
//                   className="relative hover:opacity-80 transition"
//                 >
//                   <ShoppingCart className="w-7 h-7 text-red-600 font-bold" />
//                   {totalQuantity > 0 && (
//                     <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
//                       {totalQuantity}
//                     </span>
//                   )}
//                 </button>
//               </div>
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Side Drawer (Cart) */}
//       <div
//         className={`fixed top-0 right-0 h-full w-[350px] bg-white shadow-lg z-50 transform transition-transform duration-300 ${
//           isOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         {/* Header with Close Button */}
//         <div className="flex items-center justify-between p-4 border-b">
//           <h2 className="text-lg font-semibold">Your Cart</h2>
//           <button onClick={() => setIsOpen(false)}>
//             <X className="w-6 h-6 text-gray-700 hover:text-red-600" />
//           </button>
//         </div>

//         {/* Cart Items */}
//         <div className="p-4 space-y-3 overflow-y-auto h-[calc(100%-60px)]">
//           {cartItems.length === 0 ? (
//             <p className="text-gray-500">Your cart is empty.</p>
//           ) : (
//             cartItems.map((item, i) => (
//               <div
//                 key={i}
//                 className="flex justify-between items-center border-b pb-2"
//               >
//                 <span>{item.name}</span>
//                 <span className="font-semibold">x{item.quantity}</span>
//               </div>
//             ))
//           )}
//         </div>
//       </div>

//       {/* Overlay (dark background when open) */}
//       {isOpen && (
//         <div
//           onClick={() => setIsOpen(false)}
//           className="fixed inset-0 bg-black bg-opacity-50 z-40"
//         />
//       )}
//     </>
//   );
// }
