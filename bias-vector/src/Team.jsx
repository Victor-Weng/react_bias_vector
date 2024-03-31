import { useState } from 'react'
import './App.css'
import './About.css'

function Team() {
  const [count, setCount] = useState(0)

  return (
    <body>
      <header>
        <img src="src\images\logo_white.png" class="logo" alt="logo">
        </img>
        <nav>
          <ul class="nav_links">
            <li><a href="index.html">Home</a></li>
            <li><a href="/../database.html">Database</a></li>
            <li><a href="/../about.html">About</a></li>
            <li><a href="/../team.html">Team</a></li>
            <li><a href="/../references.html">References</a></li>
          </ul>
        </nav>
        <a class="cta" href="/../feedback.html"><button>Feedback</button></a>
      </header>
      <div class="container">
  <div class="profile">
    <img src="src/images/victor.jpg" alt="Victor"/>
    <div class="profile-info">
      <h2 className="ln">Victor Weng</h2>
      <p className="lng">Engineering Science Year 1</p>
      <p className="ln">Hello! I'm Victor and I enjoy designing, programming, and sleeping. I'm always looking for new things to try! </p>
      <div className="ln">
        <a className="ln" href="https://www.linkedin.com/in/victorweng0/" target="_blank">LinkedIn</a>
      </div>
      <div className="ln">
        <a className="gh" href="https://github.com/Victor-Weng" target="_blank">GitHub</a>
      </div>
      
    </div>
  </div>

  <div class="profile">
  <img src="src/images/hector.jpg" alt="Hector"/>
    <div class="profile-info">
      <h2 className="ln">Hector Chen</h2>
      <p className="lng">Engineering Science Year 1</p>
      <p className="ln">Hello! I'm Hector and I enjoy designing, programming, and sleeping. I'm always looking for new things to try! </p>
      <div className="ln">
        <a className="ln" href="https://www.linkedin.com/in/hector-chen-b607772a8/" target="_blank">LinkedIn</a>
      </div>
      <div className="ln">
        <a className="gh" href="https://github.com/Enahtem" target="_blank">GitHub</a>
      </div>
      
    </div>
  </div>
</div>
    </body>
  )
}

export default Team