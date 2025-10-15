import Home from "./components/home"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero1 from "./components/home/heros/Hero1"
import { navpage } from "@/data/menu";
import dynamic from "next/dynamic";


const ParallaxContainer = dynamic(
  () => import("./components/common/ParallaxContainer"),
  {
    ssr: false, // Disable server-side rendering
  }
);

export const metadata = {
  title: "Treasure Global Decor | Event Decoration & Styling in Finland",
  description:
    "Treasure Global Decor specializes in luxury event styling, floral design, balloon artistry, and interior decoration across Finland. We transform spaces into breathtaking experiences for weddings, birthdays, and corporate events.",
  icons: {
    icon: "/tgicon.ico",
  },
};

export default function Homepage() {
  return (
    <>
      <div className="theme-elegant">
        <div className="page" id="top">
          <nav className="main-nav dark transparent stick-fixed wow-menubar">
            <Header links={navpage} />
          </nav>
          <main id="main">
            <ParallaxContainer
              className="home-section bg-dark-alpha-30 parallax-5 light-content z-index-1 scrollSpysection"
              style={{
                backgroundImage:
                  "url(/assets/images/ban1.png)",
              }}
              id="home"
            >
              <Hero1 />
            </ParallaxContainer>

            <Home onePage />
          </main>
          <footer className="bg-dark-1 light-content footer z-index-1 position-relative">
            <Footer />
          </footer>
        </div>{" "}
      </div>
    </>
  );
}


