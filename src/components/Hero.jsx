import "../Css/Hero.css";
import heroImg from "../assets/hero-img.jpg";

function Hero() {
  return (
    <section id="hero">
      <div className="hero-left">
        <p className="hero-tag">Go Beyond Limits</p>
        <h1>Build Your Strongest Self</h1>
        <p className="hero-subtxt">
          Join ForgeFit and transform your body, one rep at a time.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary">Join Now</button>
          <button className="btn-secondary">View Facilities</button>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-image-wrap">
          <img src={heroImg} alt="Athlete training at ForgeFit" />
        </div>
      </div>
    </section>
  );
}
export default Hero;
