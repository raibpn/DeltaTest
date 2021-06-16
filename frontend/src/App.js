import './App.css';
// import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar/navbar";
import Login from "./components/Login/Login";
// import SignUp from "./components/SignUp/signup";
import CreateUser from "./components/User/User";
import HomeScreen from "./components/LandingPage/HomePage";

function App() {
  return (
    <Router>
      <Navbar />
      <main className="app">
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route path="/login" component={Login} />
          <Route path="/user" component={CreateUser} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
