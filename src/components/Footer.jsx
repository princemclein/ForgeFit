import "../Css/Footer.css";

function Footer() {
  return (
    <footer>
      <div>
        <div>
          <h2>3K's Muscle Fitness Center</h2>
          <p>Build strength. Build discipline. Build yourself.</p>
        </div>

        <div>
          <h3>Quick Links</h3>
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#memberships">Membership</a>
          <a href="#facilities">Facilities</a>
          <a href="#contact">Contact</a>
        </div>

        <div>
          <h3>Contact</h3>
          <p>Olongapo City, Philippines</p>
          <p>+63 912 345 6789</p>
          <p>3ksmusclefitness@gmail.com</p>
        </div>
      </div>

      <div>
        <p>
          © {new Date().getFullYear()} 3K's Muscle Fitness Center. All rights
          reserved.
        </p>

        <p>Train Hard. Stay Strong.</p>
      </div>
    </footer>
  );
}

export default Footer;
