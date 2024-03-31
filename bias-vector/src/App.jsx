import { useState, useEffect } from 'react';
import './App.css';
import './Border.css';
import axios from "axios";

function App() {
  const [data, setData] = useState(null); // Define state variable for data
  const [inputUrl, setInputUrl] = useState(""); // State variable to store the input URL

  const fetchAPI = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:1000/json");
      setData(response.data); // Set the fetched data to the state
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  const handleAnalyze = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:1000/analyze", { url: inputUrl });
      console.log("Response from backend:", response.data);
      setData(response.data); // Update state with the analyzed data
    } catch (error) {
      console.error("Error analyzing URL:", error);
    }
  };

  return (
    <body>
      <header>
        <img src="src\images\logo_white.png" className="logo" alt="logo" />
        <nav>
          <ul className="nav_links">
            <li><a href="index.html">Home</a></li>
            <li><a href="/../database.html">Database</a></li>
            <li><a href="/../about.html">About</a></li>
            <li><a href="/../team.html">Team</a></li>
            <li><a href="/../references.html">References</a></li>
          </ul>
        </nav>
        <a className="cta" href="/../feedback.html"><button>Feedback</button></a>
      </header>
      <section>
        <div>
          <h1 className="title">Bias Vector</h1>
          <div className="b">
            Find the bias in your source. Powered by Google Gemini.
          </div>
        </div>

        <div className="center-box">
          <div className="animated-border-box-glow"></div>
          <div className="animated-border-glow"></div>
          <div className="highz">
            <input 
              type="text" 
              placeholder="Enter a URL" 
              value={inputUrl} 
              onChange={(e) => setInputUrl(e.target.value)} // Update state when input changes
            />
          </div>
        </div>
        <br />
        <div>
          <button className="analyze" onClick={handleAnalyze}>
            Analyze
          </button>
        </div>


          {/* Display analyzed data */}
          {data && (
            <div>
              <h3>Analysis Result:</h3>
              <p>
                bias_score: {data.score}
                <br></br>
                explanation: {data.explanation}
              </p>
            </div>
          )}

      </section>
    </body>
  );
}

export default App;
