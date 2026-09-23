import { useState } from "react";
import MembershipModal from "./MembershipModal";
import "../Css/Memberships.css";

const memberships = [
  {
    name: "Day Pass",
    price: "₱99",
    period: "/ day",
    features: ["Single-day access to one club", "Great for a quick workout"],
    button: "Get Pass",
  },
  {
    name: "1 Month (Upfront)",
    price: "₱1,199",
    period: "/ month",
    features: ["One-time payment", "No lock-in contract"],
    button: "Get Started",
  },
  {
    name: "1 Month (Autodebit)",
    price: "₱899",
    period: "/ month",
    features: ["Convenient monthly billing", "Cancel or pause anytime"],
    button: "Get Started",
  },
  {
    name: "3 Months",
    price: "₱833",
    period: "/ month",
    features: ["Total: ₱2,499", "Good value & flexibility"],
    button: "Get Started",
  },
  {
    name: "6 Months",
    price: "₱749",
    period: "/ month",
    features: ["Total: ₱4,494", "Popular mid-term option"],
    button: "Get Started",
  },
  {
    name: "12 Months",
    price: "₱699",
    period: "/ month",
    features: ["Total: ₱8,388", "Our most affordable annual plan"],
    button: "Go Gym!",
    featured: true,
  },
];

function Memberships() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (planName) => {
    setSelectedPlan(planName);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPlan(null);
  };

  return (
    <>
      <section id="memberships" className="membership-section">
        <div className="membership-header">
          <p>MEMBERSHIP PLANS</p>
          <h2>Choose the Membership That Fits Your Goals</h2>
          <span>
            Flexible plans designed to keep you consistent, motivated, and
            stronger every day.
          </span>
        </div>

        <div className="membership-grid">
          {memberships.map((membership, index) => (
            <div
              className={`membership-card ${
                membership.featured ? "featured" : ""
              }`}
              key={index}
            >
              {membership.featured && (
                <div className="popular-badge">BEST VALUE</div>
              )}

              <h3>{membership.name}</h3>

              <div className="membership-price">
                <strong>{membership.price}</strong>
                <span>{membership.period}</span>
              </div>

              <ul>
                {membership.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>
                    <span>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button type="button" onClick={() => openModal(membership.name)}>
                {membership.button}
              </button>
            </div>
          ))}
        </div>
      </section>

      <MembershipModal
        isOpen={isModalOpen}
        onClose={closeModal}
        planName={selectedPlan || "Membership"}
      />
    </>
  );
}

export default Memberships;
