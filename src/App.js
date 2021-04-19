import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import ExamPage from "./components/ExamPage";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={LandingPage} />
        <Route path="/exam" exact component={ExamPage} />
        <Route path="/dashboard" exact component={Dashboard} />
      </div>
    </Router>
  );
}

export default App;
