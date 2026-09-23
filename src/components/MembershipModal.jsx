import { useEffect, useRef } from "react";
import MembershipForm from "./MembershipForm";

function MembershipModal({ isOpen, onClose, planName }) {
  const modalRef = useRef(null);
  const firstFocusableRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusableSelector = [
      "button:not([disabled])",
      "input:not([disabled])",
      "select:not([disabled])",
      "textarea:not([disabled])",
      "[href]",
      '[tabindex]:not([tabindex="-1"])',
    ].join(", ");

    const focusableElements =
      modalRef.current?.querySelectorAll(focusableSelector) ?? [];
    const firstElement = focusableElements[0];
    firstElement?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key === "Tab" && modalRef.current) {
        const elements = [
          ...modalRef.current.querySelectorAll(focusableSelector),
        ];
        const first = elements[0];
        const last = elements[elements.length - 1];

        if (!elements.length) {
          event.preventDefault();
          return;
        }

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) return;

    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="membership-modal-title"
    >
      <div className="membership-modal" ref={modalRef}>
        <div className="modal-header">
          <div>
            <p className="modal-kicker">ForgeFit</p>
            <h3 id="membership-modal-title">Membership Request</h3>
          </div>
          <button
            type="button"
            className="modal-close"
            onClick={onClose}
            aria-label="Close membership form"
            ref={firstFocusableRef}
          >
            ×
          </button>
        </div>

        <MembershipForm selectedPlan={planName} onClose={onClose} />
      </div>
    </div>
  );
}

export default MembershipModal;
