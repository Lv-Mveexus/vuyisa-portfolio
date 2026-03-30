import { personal } from "../data/portfolio";

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--navy)",
        borderTop: "1px solid var(--navy-border)",
        padding: "1.75rem 2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "1rem",
      }}
    >
      <p style={{ fontSize: "0.78rem", color: "var(--navy-text-muted)", fontWeight: 300 }}>
        © {new Date().getFullYear()} {personal.name}
      </p>
      <p style={{ fontSize: "0.78rem", color: "var(--navy-text-muted)", fontWeight: 300 }}>
        Built with React · TypeScript · Tailwind CSS
      </p>
    </footer>
  );
}
