import logo from "./assets/logoTI.png";
import ApiHost from "./service/api";
import axios from "axios";
import "./App.css";

async function speedTest() {
  console.log("run");
  const response = await axios.get(`${ApiHost}/api/speed-test`).then((res) => {
    return res.data;
  });

  return response;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button className="round-button" type="button" onClick={speedTest}>
          INICIAR
        </button>
        <p class="speed-text"></p>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
