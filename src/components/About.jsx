import "../Css/About.css";
import aboutImg from "../assets/about-img.jpg";

const reasons = [
  {
    title: "Quality Equipment",
    description:
      "Top-notch machines and free weights for effective and safe workouts.",
  },
  {
    title: "Supportive Community",
    description:
      "A friendly community that pushes you to become your best self.",
  },
  {
    title: "Expert Guidance",
    description:
      "Knowledgeable trainers available to guide and support your progress.",
  },
  {
    title: "All Fitness Levels",
    description:
      "Whether you're a beginner or an athlete, everyone is welcome and encouraged.",
  },
];

function About() {
  return (
    <section id="about" className="about-page">
      {/* About Intro */}
      <section className="about-intro">
        <div className="about-intro-content">
          <span className="section-label">ABOUT US</span>

          <h1>
            BUILT ON DISCIPLINE.
            <br />
            FOCUSED ON <span>YOU.</span>
          </h1>

          <div className="red-line"></div>

          <p>
            ForgeFit is more than just a gym—it's a community built on
            dedication, hard work, and the pursuit of a better you.
          </p>

          <p>
            Whether you're just starting your fitness journey or pushing for
            your next PR, we're here to support and motivate you every step of
            the way.
          </p>
        </div>

        <div className="about-intro-image">
          <img src={aboutImg} alt="Inside ForgeFit" />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <article className="info-card">
          <div className="info-card-content">
            <span className="card-label">OUR MISSION</span>

            <h2>Building Stronger People</h2>

            <p>
              To provide a motivating, accessible, and welcoming environment
              where everyone can achieve their fitness goals and live a
              healthier, stronger life.
            </p>
          </div>
        </article>

        <article className="info-card">
          <div className="info-card-content">
            <span className="card-label">OUR VISION</span>

            <h2>Strength Beyond the Gym</h2>

            <p>
              To be a leading fitness center that empowers individuals to build
              strength, confidence, and discipline—inside and outside the gym.
            </p>
          </div>
        </article>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose">
        <div className="section-heading">
          <span className="section-label">WHY CHOOSE ForgeFit?</span>

          <h2>MORE THAN A GYM. A LIFESTYLE.</h2>
        </div>

        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <article className="reason-card" key={reason.title}>
              <span className="reason-number">0{index + 1}</span>

              <div>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="cta-content">
          <h2>
            READY TO BECOME
            <br />A STRONGER YOU?
          </h2>

          <div className="cta-action">
            <p>Join ForgeFit today and start your transformation.</p>
            <button>JOIN NOW</button>
          </div>
        </div>
      </section>
    </section>
  );
}

export default About;
