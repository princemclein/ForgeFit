import { useState, useEffect, useRef } from "react";
import Logo from "../assets/logo.png";
import "../Css/Navbar.css";

const navLinks = [
  { label: "Home", id: "hero" },
  { label: "About", id: "about" },
  { label: "Memberships", id: "memberships" },
  { label: "Facilities", id: "facilities" },
  { label: "Contact", id: "contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    // Only close the menu.
    // The IntersectionObserver controls the active section.
    setIsOpen(false);
  };

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    if (sections.length === 0) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.25;

      let currentSection = "home";

      sections.forEach((section) => {
        if (section.offsetTop <= scrollPosition) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    // Set the correct section immediately when the page loads.
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav>
      {/* Header Logo */}
      <div className="header-logo">
        <img src={Logo} alt="ForgeFit Logo" />
      </div>

      {/* Nav Links */}
      <ul className={isOpen ? "active" : ""}>
        {navLinks.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              className={activeSection === link.id ? "active" : ""}
              onClick={handleLinkClick}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Overlay */}
      <div
        className={`menu-overlay ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Hamburger Menu */}
      <button
        className={`hamburger ${isOpen ? "active" : ""}`}
        aria-label="Toggle menu"
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}

export default Navbar;
