import { useState } from "react";

const initialFormData = {
  fullName: "",
  email: "",
  phone: "",
  branch: "",
  message: "",
};

const branchOptions = [
  "Main Gym",
  "Downtown Studio",
  "North Ridge Club",
  "Riverside Fitness",
];

function MembershipForm({ selectedPlan, onClose }) {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((current) => ({
        ...current,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const nextErrors = {};

    if (!formData.fullName.trim()) {
      nextErrors.fullName = "Full name is required.";
    }

    if (!formData.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      nextErrors.phone = "Phone number is required.";
    }

    return nextErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const nextErrors = validateForm();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus({
        type: "error",
        message: "Please fix the highlighted fields and try again.",
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    window.alert(
      "This is a demo form for preview purposes only. The submission is not connected to a live backend yet.",
    );

    try {
      const payload = {
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        plan: selectedPlan,
        branch: formData.branch,
        message: formData.message,
        _subject: `ForgeFit membership inquiry: ${selectedPlan}`,
      };

      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result?.error || "Could not send your request.");
      }

      setStatus({
        type: "success",
        message: `Thanks, ${formData.fullName.split(" ")[0]}! Your request for ${selectedPlan} has been received.`,
      });
      setFormData(initialFormData);
      setErrors({});
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error.message ||
          "Something went wrong. Please try again in a moment.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="membership-form" onSubmit={handleSubmit} noValidate>
      <div className="modal-plan-header">
        <span className="modal-plan-label">You’re signing up for:</span>
        <strong>{selectedPlan}</strong>
      </div>

      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="fullName">Full Name</label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="John Smith"
            aria-invalid={Boolean(errors.fullName)}
          />
          {errors.fullName && (
            <span className="field-error">{errors.fullName}</span>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email && <span className="field-error">{errors.email}</span>}
        </div>

        <div className="form-field">
          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(555) 123-4567"
            aria-invalid={Boolean(errors.phone)}
          />
          {errors.phone && <span className="field-error">{errors.phone}</span>}
        </div>

        <div className="form-field">
          <label htmlFor="branch">Preferred Branch / Location</label>
          <select
            id="branch"
            name="branch"
            value={formData.branch}
            onChange={handleChange}
          >
            <option value="">Select a location</option>
            {branchOptions.map((branch) => (
              <option key={branch} value={branch}>
                {branch}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="form-field form-field-full">
        <label htmlFor="message">Message / Notes</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your goals, preferred schedule, or anything you want us to know."
        />
      </div>

      {status.type === "error" && (
        <div className="form-status error">{status.message}</div>
      )}

      {status.type === "success" && (
        <div className="form-status success">{status.message}</div>
      )}

      <div className="modal-actions">
        <button type="button" className="btn btn-secondary" onClick={onClose}>
          Close
        </button>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Submit Request"}
        </button>
      </div>
    </form>
  );
}

export default MembershipForm;
