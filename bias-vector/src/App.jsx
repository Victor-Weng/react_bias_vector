import { useState, useEffect } from 'react'
import './App.css'
import './Border.css'

function App() {
  // loading logo
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
  }, [])


  const [count, setCount] = useState(0)
  // Declare dynamic variable and set variable function and default value. To change variables in react,
  // you need to use a useState hook
  const [link, setLink] = useState("www.google.com") 
  const analyze = () => { // create function "analyze"
    // WHAT HAPPENS WHEN YOU PRESS THE BUTTON that has onClick = {analyze}

    alert(link) // to show alert for the link
  }
  const change = event => { //create function "change" that lets you change the value of the input box
    // pass in the event and get the value. Assign it back to the setState
    setLink(event.target.value)
  }

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
      <section>
        <div>
          <h1 className="title">Bias 
          Vector</h1>
          <div className="b">
          Find the bias in your source. Powered by Google Gemini.
          </div>
        </div>

        <div class="center-box">
        <div class="animated-border-box-glow"></div>
            <div class="animated-border-glow">
          </div>  
          <div class="highz">
                <input type="text" value={link} onChange={change}/>
              </div>    
        </div>
        <br/>
        <div>
          <button className="analyze" onClick = {analyze}>
            Analyze
          </button> 
        </div>
        <div>
          
        </div>
      </section>
    </body>
  )
}

export default App
