import { useState } from 'react'
import './About.css'

function About() {
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
      <section id="name-origin">
    <h2>The Name "Vector" and Its Origin</h2>
    <p>Derived from a fusion of Victor and Hector, the name Vector embodies both triumph and strength, mirroring the powerful capabilities of our innovative product.</p>
  </section>

  <section id="product-description">
    <h2>Introducing Vector Bias</h2>
    <p>Vector Bias is not just another tool; it's a paradigm shift in how we approach knowledge acquisition. In today's information age, understanding the biases and preferences inherent in the sources we rely on is crucial for making informed decisions. This is where Vector Bias steps in.</p>
    <p>Imagine having a virtual assistant that can analyze any link you throw at it, providing you with valuable insights into the biases and preferences present in the content. Whether you're a researcher, journalist, student, or just a curious individual, Vector Bias equips you with the tools to navigate the vast sea of information with clarity and confidence.</p>
    <p>Powered by state-of-the-art technology, Vector Bias leverages the immense capabilities of Google Gemini AI, ensuring unparalleled accuracy and efficiency in its analyses. By employing advanced web scraping techniques, it scours the web to unearth hidden biases, offering you a comprehensive overview of the information landscape.</p>
    <p>With Vector Bias, you can bid farewell to information silos and echo chambers. Gain access to a diverse range of perspectives and viewpoints, enabling you to form well-rounded opinions and make informed decisions.</p>
  </section>

  <section id="how-to-use">
    <h2>How to Use Vector Bias</h2>
    <ol>
      <li>Copy the link of the content you want to analyze.</li>
      <li>Paste the link into the designated input field on the Vector Bias platform.</li>
      <li>Click on the "Analyze" button and let Vector Bias work its magic.</li>
    </ol>
    <p>You'll receive a detailed report outlining the biases and preferences identified in the source material. Armed with this knowledge, you can approach the information with clarity and confidence, knowing you have a comprehensive understanding of its nuances.</p>
    <p>If no results are given, verify that the link is accessible, not through paywall, and is correct.</p>
  </section>
</div>

    </body>
  )
}

export default About