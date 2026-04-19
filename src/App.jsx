import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{ padding: "40px", fontFamily: "Arial" }}>
        <h1>Fagner Ramos</h1>
        <h2>Desenvolvedor Full Stack</h2>

        <p>
          Desenvolvedor com experiência em PHP, Node.js, integrações de sistemas e automação com Node-RED.
        </p>

        <h3>Tecnologias</h3>
        <ul>
          <li>PHP</li>
          <li>Node.js</li>
          <li>MySQL / SQL Server</li>
          <li>Docker</li>
          <li>Node-RED</li>
        </ul>

        <h3>Projetos</h3>
        <p>Em breve...</p>

        <h3>Contato</h3>
        <p>Email: fagnersilveira86@gmail.com</p>
        <p>GitHub: github.com/Fagner202</p>
      </div>
    </>
  )
}

export default App
