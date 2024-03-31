import { useState, useEffect } from 'react';
import './App.css';
import './Border.css';
import axios from "axios";
import HashLoader from "react-spinners/HashLoader";

function App() {
  const [loading, setLoading] = useState(0);

  const [data, setData] = useState(null); // Define state variable for data
  const [inputUrl, setInputUrl] = useState(""); // State variable to store the input URL

  const fetchAPI = async () => {
    try {
      const response = await axios.get("https://bias-vector.onrender.com/json"); //http://127.0.0.1:1000/json
      setData(response.data); // Set the fetched data to the state
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  const handleAnalyze = async () => {
    setLoading(1);
    try {
      const response = await axios.post("https://bias-vector.onrender.com/analyze", { url: inputUrl });
      console.log("Response from backend:", response.data);
      setData(response.data); // Update state with the analyzed data
    } catch (error) {
      console.error("Error analyzing URL:", error);
    }
    setLoading(2);
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
        <br></br>
        <div className="spinner">
          {loading === 0 ? (
          <div></div>
        ) : loading === 1 ? (
          <HashLoader
          size={30}
          color={"#FFFFFF"}
          loading={loading}
          />
        ) : loading === 2 ? (
          <div>
            {/* Display analyzed data */}
            {data && (
              
              <container className="output">

              <div className="output">
                <div className="flex-container">
                  <div className="card">
                    <h1 className="results">Gender Bias</h1>
                    <h2 className="results">Bias Score: {data.GenderBiasScore}</h2>
                    <h2 className="results">Bias Type: {data.GenderBiasType}</h2>
                  </div>
                  <div className="card">
                    <h1 className="results">Justification</h1>
                    <p>{data.GenderBiasJustification}</p>
                  </div>
                </div>

                <div className="flex-container">
                  <div className="card">
                    <h1 className="results">Racial Bias</h1>
                    <h2 className="results">Bias Score: {data.RacialBiasScore}</h2>
                    <h2 className="results">Bias Type: {data.RacialBiasType}</h2>
                  </div>
                  <div className="card">
                    <h1 className="results">Justification</h1>
                    <p>{data.RacialBiasJustification}</p>
                  </div>
                </div>

                <div className="flex-container">
                  <div className="card">
                    <h1 className="results">Economic Bias</h1>
                    <h2 className="results">Bias Score: {data.EconomicBiasScore}</h2>
                    <h2 className="results">Bias Type: {data.EconomicBiasType}</h2>
                  </div>
                  <div className="card">
                    <h1 className="results">Justification</h1>
                    <p>{data.EconomicBiasJustification}</p>
                  </div>
                </div>

                <div className="flex-container">
                  <div className="card">
                    <h1 className="results">Political Bias</h1>
                    <h2 className="results">Bias Score: {data.PoliticalBiasScore}</h2>
                    <h2 className="results">Bias Type: {data.PoliticalBiasType}</h2>
                  </div>
                  <div className="card">
                    <h1 className="results">Justification</h1>
                    <p>{data.PoliticalBiasJustification}</p>
                  </div>
                </div>

                <div className="flex-container">
                  <div className="card">
                    <h1 className="results">Societal Bias</h1>
                    <h2 className="results">Bias Score: {data.SocietalBiasScore}</h2>
                    <h2 className="results">Bias Type: {data.SocietalBiasType}</h2>
                  </div>
                  <div className="card">
                    <h1 className="results">Justification</h1>
                    <p>{data.SocietalBiasJustification}</p>
                  </div>
                </div>

                <div className="flex-container">
                  <div className="card">
                    <h1 className="results">Cultural Bias</h1>
                    <h2 className="results">Bias Score: {data.CulturalBiasScore}</h2>
                    <h2 className="results">Bias Type: {data.CulturalBiasType}</h2>
                  </div>
                  <div className="card">
                    <h1 className="results">Justification</h1>
                    <p>{data.CulturalBiasJustification}</p>
                  </div>
                </div>
              </div>


              </container>
            )}
            </div>
        ) :(null)}
        </div>
      </section>
    </body>
  );
}

export default App;
