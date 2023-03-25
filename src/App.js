import logo from "./logo.svg";
import "./App.css";

function App() {
  console.log(Math.sin(3.5));
  var r = 9;
  var circumference = 2 * Math.PI * r;
  console.log(circumference);

  parseInt("123", 10);
  parseInt("010", 10);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
