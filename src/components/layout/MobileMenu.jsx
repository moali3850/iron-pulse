import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Button from "../common/Button";
import useBodyScrollLock from "../../hooks/useBodyScrollLock";
import { navLinks } from "../../data/site";

// Slide-down menu shown below the navbar on screens smaller than lg.
export default function MobileMenu({ open, onClose }) {
  useBodyScrollLock(open);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <div
      id="mobile-menu"
      className={`absolute inset-x-0 top-full overflow-hidden bg-ink transition-[max-height,opacity] duration-300 lg:hidden ${
        open
          ? "max-h-[calc(100vh-5rem)] border-b border-line opacity-100"
          : "pointer-events-none max-h-0 opacity-0"
      }`}
      aria-hidden={!open}
      inert={!open}
    >
      <ul className="flex flex-col gap-1 px-5 py-6 sm:px-8">
        {navLinks.map((link) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              end={link.to === "/"}
              onClick={onClose}
              className={({ isActive }) =>
                `block rounded-xl px-4 py-4 text-lg font-bold transition-colors ${isActive ? "bg-raised text-accent" : "text-white hover:bg-panel"}`
              }
            >
              {link.label}
            </NavLink>
          </li>
        ))}
        <li className="pt-4">
          <Button to="/membership" full onClick={onClose}>
            Join Now
          </Button>
        </li>
      </ul>
    </div>
  );
}
