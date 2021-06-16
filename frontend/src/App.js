import './App.css';
// import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar/navbar";
import Login from "./components/Login/login";
import SignUp from "./components/SignUp/signup";

import User from "./components/User/User";
import Home from "./components/LandingPage/HomePage";


function App() {
  return (
    <Router>
      <Navbar />
      <main className="app">
        <Switch>
          {/* <h1>hello from app</h1> */}
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/user" component={User} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
