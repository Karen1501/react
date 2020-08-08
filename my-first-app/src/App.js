import React from "react";
import "./App.css";

// Components
import SwitchExample from "./components/SwitchExample";
import List from "./components/Lista";
import Post from "./components/Post";

function App() {
  return (
    <div className="App">
      <SwitchExample />
      <List />
      <Post />
    </div>
  );
}

export default App;
