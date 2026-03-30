import { useState } from "react";
import { projects, githubProfile } from "../data/portfolio";

interface FlipCardProps {
  project: typeof projects[number];
  index: number;
}

function FlipCard({ project, index }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      onClick={() => setFlipped((f) => !f)}
      style={{
        perspective: "1200px",
        cursor: "pointer",
        height: "320px",
      }}
      role="button"
      aria-label={`${project.title} — click to flip`}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
          transition: "transform 0.55s cubic-bezier(0.4, 0.2, 0.2, 1)",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* ── FRONT ── */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius-lg)",
            padding: "1.75rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.9rem",
            transition: "box-shadow 200ms ease, border-color 200ms ease",
          }}
        >
          <span
            style={{
              fontSize: "0.72rem",
              color: "var(--text-muted)",
              fontWeight: 500,
              letterSpacing: "0.06em",
            }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.2rem",
              letterSpacing: "-0.01em",
              color: "var(--text-primary)",
              lineHeight: 1.2,
            }}
          >
            {project.title}
          </h3>

          <p
            style={{
              fontSize: "0.875rem",
              color: "var(--text-secondary)",
              lineHeight: 1.65,
              fontWeight: 300,
              flexGrow: 1,
            }}
          >
            {project.description}
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
            {project.stack.map((tech) => (
              <span
                key={tech}
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 500,
                  letterSpacing: "0.04em",
                  color: "var(--accent)",
                  background: "rgba(15,138,126,0.08)",
                  borderRadius: "var(--radius)",
                  padding: "0.2rem 0.55rem",
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Flip hint */}
          <p
            style={{
              fontSize: "0.68rem",
              color: "var(--text-muted)",
              letterSpacing: "0.06em",
              textAlign: "right",
              marginTop: "auto",
            }}
          >
            tap to flip ↻
          </p>
        </div>

        {/* ── BACK ── */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            background: "var(--surface)",
            border: "1px solid var(--accent)",
            borderRadius: "var(--radius-lg)",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Image area — click navigates to GitHub */}
          <a
            href={githubProfile}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            style={{
              display: "block",
              flexGrow: 1,
              overflow: "hidden",
              position: "relative",
            }}
          >
            {project.image ? (
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  transition: "transform 300ms ease",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget.style.transform = "scale(1.03)"))
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget.style.transform = "scale(1)"))
                }
              />
            ) : (
              /* Placeholder */
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  background: "rgba(15,138,126,0.08)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  transition: "background 200ms ease",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget.style.background = "rgba(15,138,126,0.15)"))
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget.style.background = "var(--accent-light)"))
                }
              >
                {/* Image icon */}
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
                <span
                  style={{
                    fontSize: "0.72rem",
                    color: "var(--accent)",
                    fontWeight: 500,
                    letterSpacing: "0.06em",
                  }}
                >
                  Screenshot coming soon
                </span>
              </div>
            )}
          </a>

          {/* Bottom CTA */}
          <div
            style={{
              padding: "1rem 1.25rem",
              borderTop: "1px solid var(--border)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "var(--bg)",
            }}
          >
            <span
              style={{
                fontSize: "0.8rem",
                fontWeight: 500,
                color: "var(--text-primary)",
                letterSpacing: "-0.01em",
                fontFamily: "var(--font-display)",
              }}
            >
              {project.title}
            </span>
            <a
              href={githubProfile}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              style={{
                fontSize: "0.75rem",
                fontWeight: 500,
                color: "#fff",
                background: "var(--accent)",
                padding: "0.35rem 0.85rem",
                borderRadius: "var(--radius)",
                letterSpacing: "0.03em",
                transition: "background 200ms ease",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget.style.background = "var(--accent-hover)"))
              }
              onMouseLeave={(e) =>
                ((e.currentTarget.style.background = "var(--accent)"))
              }
            >
              View on GitHub ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        padding: "6rem 2rem",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      <p
        style={{
          fontSize: "0.72rem",
          fontWeight: 500,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "var(--accent)",
          marginBottom: "0.75rem",
        }}
      >
        Selected Work
      </p>
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2rem, 4vw, 3rem)",
          letterSpacing: "-0.02em",
          color: "var(--text-primary)",
          marginBottom: "0.75rem",
          lineHeight: 1.1,
        }}
      >
        Projects
      </h2>
      <p
        style={{
          fontSize: "0.82rem",
          color: "var(--text-muted)",
          marginBottom: "3rem",
          fontWeight: 300,
        }}
      >
        Click any card to preview
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "1.25rem",
        }}
      >
        {projects.map((project, i) => (
          <FlipCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
