import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { ModalProps } from "@/components/modal/modal.model.ts";

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  className = "",
  position = "right",
}) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const slideDirection =
    position === "right" ? "translate-x-full" : "-translate-x-full";
  const positionClass = position === "right" ? "right-0" : "left-0";

  return createPortal(
    <div className="fixed inset-0 z-50">
      <div
        className={`absolute inset-0 bg-black/80 transition-opacity duration-300 ${
          isOpen ? "bg-opacity-50" : "bg-opacity-0"
        }`}
        onClick={onClose}
      />

      <div
        className={`
          fixed top-0 ${positionClass} h-full p-6 round
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : slideDirection}
          ${className}
        `}
      >
        {children}
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
