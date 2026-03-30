import { personal, certifications } from "../data/portfolio";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "6rem 2rem 4rem",
        position: "relative",
      }}
    >
      {/* Subtle background accent blob */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "10%",
          right: "-5%",
          width: "420px",
          height: "420px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(15,138,126,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Eyebrow — amber for warmth */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            background: "var(--amber-light)",
            border: "1px solid var(--amber)",
            borderRadius: "100px",
            padding: "0.3rem 0.85rem",
            marginBottom: "1.75rem",
            width: "fit-content",
          }}
        >
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "var(--amber)",
              flexShrink: 0,
              boxShadow: "0 0 0 3px rgba(200,118,26,0.2)",
            }}
          />
          <span
            style={{
              fontSize: "0.75rem",
              fontWeight: 500,
              color: "var(--amber)",
              letterSpacing: "0.06em",
            }}
          >
            Available for work &nbsp;·&nbsp; {personal.location}
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            color: "var(--text-primary)",
            maxWidth: "16ch",
            marginBottom: "1.75rem",
          }}
        >
          {personal.name}
        </h1>

        {/* Role pill — teal */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            background: "var(--accent-light)",
            border: "1px solid var(--accent)",
            borderRadius: "100px",
            padding: "0.35rem 0.9rem",
            marginBottom: "2rem",
            width: "fit-content",
          }}
        >
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "var(--accent)",
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontSize: "0.8rem",
              fontWeight: 500,
              color: "var(--accent)",
              letterSpacing: "0.04em",
            }}
          >
            {personal.title}
          </span>
        </div>

        {/* Tagline */}
        <p
          style={{
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            color: "var(--text-secondary)",
            maxWidth: "54ch",
            lineHeight: 1.7,
            fontWeight: 300,
            marginBottom: "3rem",
          }}
        >
          {personal.tagline}
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <a
            href="#projects"
            style={{
              display: "inline-block",
              background: "var(--navy)",
              color: "var(--navy-text)",
              padding: "0.75rem 1.75rem",
              borderRadius: "var(--radius)",
              fontSize: "0.875rem",
              fontWeight: 500,
              letterSpacing: "0.02em",
              transition: "background var(--transition)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "var(--accent)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "var(--navy)")
            }
          >
            View Projects
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              border: "1px solid var(--border)",
              color: "var(--text-secondary)",
              padding: "0.75rem 1.75rem",
              borderRadius: "var(--radius)",
              fontSize: "0.875rem",
              fontWeight: 400,
              letterSpacing: "0.02em",
              transition: "border-color var(--transition), color var(--transition)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--accent)";
              e.currentTarget.style.color = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.color = "var(--text-secondary)";
            }}
          >
            LinkedIn ↗
          </a>
        </div>

        {/* Cert strip */}
        <div
          style={{
            marginTop: "5rem",
            paddingTop: "2rem",
            borderTop: "1px solid var(--border)",
            display: "flex",
            flexWrap: "wrap",
            gap: "1.5rem",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontSize: "0.72rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
              fontWeight: 500,
            }}
          >
            Certifications
          </span>
          {certifications.map((c) => (
            <span
              key={c.name}
              style={{
                fontSize: "0.78rem",
                color: "var(--text-secondary)",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius)",
                padding: "0.25rem 0.7rem",
              }}
            >
              {c.name}{" "}
              <span style={{ color: "var(--text-muted)" }}>· {c.issuer}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
