import { useState } from 'react'
import './App.css'
import './References.css'

function References() {
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
  <h1>References</h1>
    <ul>
        <li><a className="b" href="https://gemini.google.com/" target="_blank">Google Gemini</a></li>
        <li><a className="b" href="https://sdgs.un.org/goals" target="_blank">United Nations</a></li>
        <li><a className="b" href="https://makeagif.com/gif/ultra-high-definition-4k-color-changing-sleek-relaxing-lines-rainbow-wavy-background-bEU4y6" target="_blank">MakeAGif.com</a></li>
        <li><a className="b" href="https://codepen.io/liyrofx/pen/poVZeEG" target="_blank">Liyrofx Codepen</a></li>
        <li><a className="b" href="https://medium.com/@mintpw/how-to-create-infinite-horizontal-scroll-and-hover-pause-with-pure-css-b052caa683bd" target="_blank">Mintpw Medium</a></li>
        <li><a className="b" href="https://www.davidhu.io/react-spinners/" target="_blank">David Hu Spinners</a></li>
        <li><a className="b" href="https://github.com/BetterForAll/HonestyMeter" target="_blank">Honesty Meter</a></li>
    </ul>
    </div>
    </body>
  )
}

export default References