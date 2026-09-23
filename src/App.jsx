import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Memberships from "./components/Memberships.jsx";
import Facilities from "./components/Facilities.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import "./Css/App.css";

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Header */}
      <header>
        <Navbar />
      </header>
      {/* Main */}
      <main>
        <Hero />
        <About />
        <Memberships />
        <Facilities />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {showScrollTop && (
        <button
          type="button"
          className="scroll-top-btn"
          onClick={scrollToTop}
          aria-label="Scroll back to top"
        >
          ↑
        </button>
      )}
    </>
  );
}

export default App;
