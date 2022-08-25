import logo from "./assets/logoTI.png";
import axios from "axios";
import "./App.css";
import ApiHost from "./service/api";

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
        {/* <button>
        </button> */}
        <a className="round-button" type="button" onClick={speedTest}>
          INICIAR
        </a>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
