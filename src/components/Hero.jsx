import "../Css/Hero.css";
import heroImg from "../assets/hero-img.jpg";

function Hero() {
  return (
    <section id="hero">
      <div className="hero-bg" aria-hidden="true" />

      <div className="hero-left">
        <p className="hero-tag">Forge your future</p>
        <h1>
          Train hard.
          <br />
          Rise stronger.
        </h1>
        <p className="hero-subtxt">
          Transform your routine with expert coaching, premium training spaces,
          and a motivating community built to push your limits every day.
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
