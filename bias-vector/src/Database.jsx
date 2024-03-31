import { useState } from 'react'
import './App.css'
import './Database.css'

function Database() {
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
      <div class="carousel-primary">
  <div class="website">
    <h2>CNN</h2>
    <p class="bias-score">Bias Score: 78</p>
  </div>
  <div class="website">
    <h2>Fox News</h2>
    <p class="bias-score">Bias Score: 98</p>
  </div>
  <div class="website">
    <h2>The New York Times</h2>
    <p class="bias-score">Bias Score: 52</p>
  </div>
  <div class="website">
    <h2>BBC</h2>
    <p class="bias-score">Bias Score: 47</p>
  </div>
  <div class="website">
    <h2>Reuters</h2>
    <p class="bias-score">Bias Score: 43</p>
  </div>
  <div class="website">
    <h2>Al Jazeera</h2>
    <p class="bias-score">Bias Score: 39</p>
  </div>
  <div class="website">
    <h2>The Guardian</h2>
    <p class="bias-score">Bias Score: 36</p>
  </div>
  <div class="website">
    <h2>Breitbart</h2>
    <p class="bias-score">Bias Score: 82</p>
  </div>
  <div class="website">
    <h2>NPR</h2>
    <p class="bias-score">Bias Score: 32</p>
  </div>
  <div class="website">
    <h2>Politico</h2>
    <p class="bias-score">Bias Score: 49</p>
  </div>
</div>
<div class="carousel-secondary">
  <div class="website">
    <h2>CNN</h2>
    <p class="bias-score">Bias Score: 7.8</p>
  </div>
  <div class="website">
    <h2>Fox News</h2>
    <p class="bias-score">Bias Score: 6.5</p>
  </div>
  <div class="website">
    <h2>The New York Times</h2>
    <p class="bias-score">Bias Score: 5.2</p>
  </div>
  <div class="website">
    <h2>BBC</h2>
    <p class="bias-score">Bias Score: 4.7</p>
  </div>
  <div class="website">
    <h2>Reuters</h2>
    <p class="bias-score">Bias Score: 4.3</p>
  </div>
  <div class="website">
    <h2>Al Jazeera</h2>
    <p class="bias-score">Bias Score: 3.9</p>
  </div>
  <div class="website">
    <h2>The Guardian</h2>
    <p class="bias-score">Bias Score: 3.6</p>
  </div>
  <div class="website">
    <h2>Breitbart</h2>
    <p class="bias-score">Bias Score: 8.2</p>
  </div>
  <div class="website">
    <h2>NPR</h2>
    <p class="bias-score">Bias Score: 3.2</p>
  </div>
  <div class="website">
    <h2>Politico</h2>
    <p class="bias-score">Bias Score: 4.9</p>
  </div>
  </div>

<script>
  const container = document.querySelector('.container');
  const originalContent = container.innerHTML;

  // Clone original content and append to container
  container.innerHTML += originalContent;
</script>

    </body>
  )
}

export default Database