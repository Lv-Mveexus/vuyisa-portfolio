import { skills } from "../data/portfolio";

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        background: "var(--navy)",
        borderTop: "1px solid var(--navy-border)",
        borderBottom: "1px solid var(--navy-border)",
        padding: "6rem 2rem",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
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
          Technical Skills
        </p>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            letterSpacing: "-0.02em",
            color: "var(--navy-text)",
            marginBottom: "3.5rem",
            lineHeight: 1.1,
          }}
        >
          Tools of the trade
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              style={{
                background: "var(--navy-surface)",
                border: "1px solid var(--navy-border)",
                borderRadius: "var(--radius-lg)",
                padding: "1.5rem",
              }}
            >
              <h3
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--navy-text-muted)",
                  marginBottom: "1rem",
                }}
              >
                {category}
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {items.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      fontSize: "0.82rem",
                      fontWeight: 400,
                      color: "var(--navy-text)",
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid var(--navy-border)",
                      borderRadius: "var(--radius)",
                      padding: "0.3rem 0.65rem",
                      transition: "background var(--transition), color var(--transition), border-color var(--transition)",
                      cursor: "default",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget;
                      el.style.background = "var(--accent-light)";
                      el.style.borderColor = "var(--accent)";
                      el.style.color = "var(--accent)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget;
                      el.style.background = "rgba(255,255,255,0.05)";
                      el.style.borderColor = "var(--navy-border)";
                      el.style.color = "var(--navy-text)";
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
