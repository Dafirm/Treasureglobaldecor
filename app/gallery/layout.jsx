import Footer from "../components/Footer";
import Contact from "../components/home/Contact";
import Header2 from "./Header2"
import { navpage2 } from "@/data/menu";


export default function GalleryLayout({ children }) {
  return (
    
      <div className="theme-elegant">
        <div className="page" id="top">
          <nav className="main-nav dark transparent stick-fixed wow-menubar">
            <Header2 links={navpage2}/>
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
    
  );
}
