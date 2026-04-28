import { useState } from 'react'
import { FaPhp, FaNodeJs, FaDocker, FaGithub, FaDatabase, FaLinkedin } from "react-icons/fa";
import { SiMysql, SiNodered } from "react-icons/si";
import './App.css'

const techIcons = {
  "PHP": <FaPhp />,
  "Node.js": <FaNodeJs />,
  "MySQL": <SiMysql />,
  "SQL Server": <FaDatabase />,
  "Docker": <FaDocker />,
  "Node-RED": <SiNodered />,
};

function App() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>

        {/* Header */}
        <div style={styles.header}>
          <h1 style={styles.name}>Fagner Ramos</h1>
          <h2 style={styles.title}>Desenvolvedor Full Stack</h2>
        </div>

        <p style={styles.text}>
          Desenvolvedor com experiência em PHP, Node.js, integrações de sistemas e automação com Node-RED.
          Focado em soluções práticas e escaláveis.
        </p>

        {/* Technologies */}
        <section style={styles.section} className="fade-up s3">
          <h3 style={styles.sectionLabel}>Tecnologias</h3>
          <div style={styles.techList}>
            {Object.keys(techIcons).map((tech) => (
              <div key={tech} style={styles.techItem} className="tech-chip">
                <span style={styles.icon}>{techIcons[tech]}</span>
                <span style={styles.techLabel}>{tech}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section style={styles.section} className="fade-up s4">
          <h3 style={styles.sectionLabel}>Projetos</h3>

          <div style={styles.projectCard}>
            <div style={styles.projectCardHeader}>
              <h4 style={styles.projectTitle}>Gerador de ASO</h4>
              <span style={styles.liveBadge}>● Em produção</span>
            </div>

            <p style={styles.projectDesc}>
              Sistema completo para gestão e emissão de Atestados de Saúde Ocupacional, com integração
              entre frontend e backend, persistência de dados e geração de documentos.
            </p>

            <div style={styles.projectLinks}>
              <a
                href="https://frontend-omega-virid-98.vercel.app/"
                target="_blank"
                style={styles.projectLinkPrimary}
                className="proj-link-primary"
              >
                <ExternalLinkIcon />
                Ver projeto
              </a>

              <a
                href="https://github.com/Fagner202/frontend"
                target="_blank"
                style={styles.projectLinkSecondary}
                className="proj-link-secondary"
              >
                <GitHubInlineIcon />
                GitHub
              </a>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section style={styles.section} className="fade-up s5">
          <div style={styles.divider} />
          <h3 style={styles.sectionLabel}>Contato</h3>
          <div style={styles.socials}>
            <a href="https://github.com/Fagner202" target="_blank" style={styles.socialBtn} className="social-btn">
              <GitHubInlineIcon />
              GitHub
            </a>

            <a href="https://www.linkedin.com/in/fagner-joaquim-ramos-a65914248/" target="_blank" style={styles.socialBtn} className="social-btn">
              <LinkedInInlineIcon />
              LinkedIn
            </a>

            <span style={styles.email}>fagnersilveira86@gmail.com</span>
          </div>
        </section>

      </div>
    </div>
  );
}

function ExternalLinkIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ flexShrink: 0 }}>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function GitHubInlineIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.79-.26.79-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.005 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.19.7.8.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedInInlineIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zm1.78 13.02H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46C23.2 24 24 23.23 24 22.27V1.73C24 .77 23.2 0 22.23 0z" />
    </svg>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "#0f172a",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "32px 20px",
  },
  card: {
    background: "#111827",
    padding: "40px",
    borderRadius: "20px",
    maxWidth: "680px",
    width: "100%",
    border: "0.5px solid rgba(56, 189, 248, 0.15)",
  },
  header: {
    borderLeft: "3px solid #38bdf8",
    paddingLeft: "16px",
    marginBottom: "24px",
  },
  name: {
    color: "#f1f5f9",
    margin: "0 0 4px",
    fontSize: "28px",
    fontWeight: "500",
  },
  title: {
    color: "#38bdf8",
    margin: "0",
    fontSize: "15px",
    fontWeight: "400",
    letterSpacing: "0.02em",
  },
  text: {
    color: "#94a3b8",
    lineHeight: "1.7",
    fontSize: "14px",
    margin: "0 0 32px",
  },
  section: {
    marginTop: "32px",
  },
  sectionLabel: {
    color: "#cbd5e1",
    fontSize: "13px",
    fontWeight: "500",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    margin: "0 0 14px",
  },
  techList: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(110px, 1fr))",
    gap: "10px",
  },
  techItem: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    background: "#1e293b",
    padding: "10px 12px",
    borderRadius: "10px",
    border: "0.5px solid rgba(56, 189, 248, 0.12)",
    color: "#38bdf8",
    cursor: "default",
  },
  techLabel: {
    color: "#cbd5e1",
    fontSize: "13px",
  },
  icon: {
    fontSize: "15px",
    lineHeight: "1",
  },
  projectCard: {
    background: "#1e293b",
    borderRadius: "14px",
    padding: "22px",
    border: "0.5px solid rgba(56, 189, 248, 0.12)",
  },
  projectCardHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "8px",
    marginBottom: "10px",
  },
  projectTitle: {
    color: "#f1f5f9",
    fontSize: "15px",
    fontWeight: "500",
    margin: "0",
  },
  liveBadge: {
    background: "rgba(16, 185, 129, 0.12)",
    color: "#34d399",
    fontSize: "11px",
    padding: "3px 10px",
    borderRadius: "20px",
    border: "0.5px solid rgba(52, 211, 153, 0.25)",
  },
  projectDesc: {
    color: "#64748b",
    fontSize: "13px",
    lineHeight: "1.65",
    margin: "0 0 16px",
  },
  projectLinks: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
  },
  projectLinkPrimary: {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    background: "#0f172a",
    color: "#38bdf8",
    fontSize: "13px",
    padding: "8px 16px",
    borderRadius: "8px",
    textDecoration: "none",
    border: "0.5px solid rgba(56, 189, 248, 0.25)",
  },
  projectLinkSecondary: {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    background: "#0f172a",
    color: "#94a3b8",
    fontSize: "13px",
    padding: "8px 16px",
    borderRadius: "8px",
    textDecoration: "none",
    border: "0.5px solid rgba(148, 163, 184, 0.15)",
  },
  divider: {
    borderTop: "0.5px solid rgba(255, 255, 255, 0.07)",
    marginBottom: "24px",
  },
  socials: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    flexWrap: "wrap",
  },
  socialBtn: {
    display: "inline-flex",
    alignItems: "center",
    gap: "7px",
    color: "#94a3b8",
    fontSize: "13px",
    padding: "8px 14px",
    borderRadius: "8px",
    textDecoration: "none",
    border: "0.5px solid rgba(148, 163, 184, 0.15)",
    background: "transparent",
  },
  email: {
    color: "#475569",
    fontSize: "13px",
  },
};

export default App