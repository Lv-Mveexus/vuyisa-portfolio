import { useState, useEffect } from "react";
import { personal } from "../data/portfolio";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "background 300ms ease, box-shadow 300ms ease",
        background: scrolled ? "rgba(246,244,240,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled ? "0 1px 0 var(--border)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 2rem",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a
          href="#hero"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.1rem",
            letterSpacing: "-0.01em",
            color: "var(--text-primary)",
          }}
        >
          VM
        </a>

        <ul style={{ display: "flex", gap: "2.5rem", listStyle: "none" }} className="nav-links">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 400,
                  color: "var(--text-secondary)",
                  letterSpacing: "0.03em",
                  transition: "color var(--transition)",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--accent)")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--text-secondary)")
                }
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={`mailto:${personal.email}`}
          style={{
            fontSize: "0.8rem",
            fontWeight: 500,
            letterSpacing: "0.04em",
            color: "#fff",
            background: "var(--accent)",
            padding: "0.4rem 1rem",
            borderRadius: "var(--radius)",
            transition: "background var(--transition)",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = "var(--accent-hover)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "var(--accent)")
          }
          className="nav-cta"
        >
          Hire me
        </a>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .nav-links { display: none !important; }
          .nav-cta { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
