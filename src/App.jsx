import { useState } from 'react'
import { FaPhp, FaNodeJs, FaDocker, FaGithub, FaDatabase } from "react-icons/fa";
import { SiMysql, SiNodered } from "react-icons/si";
import './App.css'

const techIcons = {
  "PHP": <FaPhp />,
  "Node.js": <FaNodeJs />,
  "MySQL": <SiMysql />,
  "SQL Server": <FaDatabase />,
  "Docker": <FaDocker />,
  "N-RED": <SiNodered />,
};

function App() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.name}>Fagner Ramos</h1>
        <h2 style={styles.title}>Desenvolvedor Full Stack</h2>

        <p style={styles.text}>
          Desenvolvedor com experiência em PHP, Node.js, integrações de sistemas e automação com Node-RED.
        </p>

        <section style={styles.section}>
          <h3 style={styles.subtitle}>Tecnologias</h3>
          <div style={styles.techList}>
            {Object.keys(techIcons).map((tech) => (
              <div key={tech} style={styles.techItem}>
                <span style={styles.icon}>{techIcons[tech]}</span>
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={styles.section}>
          <h3 style={styles.subtitle}>Projetos</h3>
          <p style={styles.text}>Em breve projetos com backend e integrações reais.</p>
        </section>

        <section style={styles.section}>
          <h3 style={styles.subtitle}>Contato</h3>
          <div style={styles.socials}>
            <a href="https://github.com/Fagner202" target="_blank" style={styles.socialIcon}>
              <FaGithub />
            </a>
          </div>
          <p style={styles.text}>Email: fagnersilveira86@gmail.com</p>
        </section>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "#0f172a",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  },
  card: {
    background: "#111827",
    padding: "40px",
    borderRadius: "16px",
    maxWidth: "700px",
    width: "100%",
    boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
  },
  name: {
    color: "#fff",
    marginBottom: "10px",
    fontSize: "32px",
  },
  title: {
    color: "#38bdf8",
    marginBottom: "25px",
    fontSize: "20px",
  },
  subtitle: {
    color: "#e5e7eb",
    marginBottom: "12px",
    fontSize: "18px",
  },
  text: {
    color: "#9ca3af",
    lineHeight: "1.6",
  },
  section: {
    marginTop: "30px",
  },
  techList: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
    gap: "12px",
    marginTop: "10px",
  },
  techItem: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    background: "#1f2933",
    padding: "10px",
    borderRadius: "10px",
    color: "#38bdf8",
    justifyContent: "center",
  },
  icon: {
    fontSize: "18px",
  },
  socials: {
    display: "flex",
    gap: "15px",
    marginBottom: "10px",
  },
  socialIcon: {
    color: "#38bdf8",
    fontSize: "22px",
  },
};


export default App
