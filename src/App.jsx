import Navbar from "./components/Navbar";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Memberships from "./components/Memberships.jsx";
import Facilities from "./components/Facilities.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import "./Css/App.css";

function App() {
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
    </>
  );
}

export default App;
