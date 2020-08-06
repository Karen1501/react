import React from "react";
import logo from "./logo.svg";
import "./App.css";

//components
import FunctionGreet from "./components/FunctionGreet/index";
import ClassGreet from "./components/ClassGreet/index";
import Post from "./components/Post/index";

function App() {
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
        <FunctionGreet firstName="Karen" lastName="Corona" />
        <ClassGreet firstName="Hagen" lastName="Salinas" />
      </header>

      <body>
        <Post
          CardTitle="Are you writing print() statements to debug your Python code?"
          CardText="I was one such person who used to debug code using print() statements. Some times, if the code is lengthy, then there are more prints with multiple symbols to differentiate from one another.
        Have a look at the code snippet below.
        (Code snippets in this blog, follow the syntax of Python 3.7)"
          CardSubtitle="Phyton"
        />
      </body>
    </div>
  );
}

export default App;
