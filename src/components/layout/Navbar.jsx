import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../common/Logo";
import Button from "../common/Button";
import Container from "../common/Container";
import MobileMenu from "./MobileMenu";
import { navLinks } from "../../data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Close the mobile menu whenever the page changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ink/90 backdrop-blur">
      <Container>
        <nav
          aria-label="Main"
          className="flex h-20 items-center justify-between"
        >
          <Logo />

          <ul className="hidden items-center gap-10 lg:flex">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    `relative block py-1 text-sm font-semibold transition-colors after:absolute after:inset-x-0 after:-bottom-1.5 after:h-0.5 after:rounded after:transition-colors ${
                      isActive
                        ? "text-white after:bg-accent"
                        : "text-soft hover:text-white after:bg-transparent"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <Button
  to="/membership"
  className="hidden! px-6 py-3 lg:block!"
>
  Join Now
</Button>
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-muted text-white transition-colors hover:bg-raised lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? (
                <X size={22} aria-hidden="true" />
              ) : (
                <Menu size={22} aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>
      </Container>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
