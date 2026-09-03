import "../Css/Contact.css";

function Contact() {
  return (
    <section id="contact">
      <div>
        <span>GET IN TOUCH</span>

        <h2>Ready to Get Stronger?</h2>

        <p>
          Have questions about our membership, facilities, or training options?
          Reach out to us and take the next step toward your fitness goals.
        </p>
      </div>

      <div>
        <div>
          <h3>Contact Information</h3>

          <div>
            <strong>Location</strong>
            <p>ForgeFit</p>
            <p>Olongapo City, Philippines</p>
          </div>

          <div>
            <strong>Phone</strong>
            <p>+63 912 345 6789</p>
          </div>

          <div>
            <strong>Email</strong>
            <p>forgefit@gmail.com</p>
          </div>

          <div>
            <strong>Opening Hours</strong>
            <p>Monday – Saturday</p>
            <p>6:00 AM – 10:00 PM</p>
          </div>
        </div>

        <form>
          <div>
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="How can we help?"
            />
          </div>

          <div>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
