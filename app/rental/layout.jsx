
import Footer from "../components/Footer";
import Contact from "../components/home/Contact";
import RentalHeader from "./RentalHeader";
import { ShoppingCartProvider } from "../rental/context/ShoppingCartContext";

export default function RentalLayout({ children }) {
  return (
    <ShoppingCartProvider>
      <div className="theme-elegant">
        <div className="page" id="top">
          <nav className="main-nav dark transparent stick-fixed wow-menubar">
            <RentalHeader />
          </nav>

          <main id="main">{children}</main>
          <div>
            <Contact />
          </div>

          <footer className="bg-dark-1 light-content footer z-index-1 position-relative">
            <Footer />
          </footer>
        </div>
      </div>
    </ShoppingCartProvider>
  );
}







