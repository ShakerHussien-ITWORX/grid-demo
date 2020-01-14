import React from "react";
import "./App.css";
import Grid from "./components/grid";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
function App() {
  return (
    <main className="container">
      <Router>
        <Grid />
      </Router>
    </main>
  );
}

export default App;
