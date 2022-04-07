import './App.css';
import React, { useState } from "react";
import Modal from "./components/Modal"
import Signup from './components/Signup';
import PasswordState from './context/passwordState';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Login } from './components/Login';
import { Home } from './components/Home';
import Navbar from './components/Navbar';

function App() {



  return (
    <>

      <PasswordState>
        <Router>
        <Navbar />
          <div>
            <Switch>
              <Route exact path="/">
                <Home />

              </Route>
              <Route exact path="/signup">
                <Signup />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
            </Switch>
          </div>
        </Router>
      </PasswordState>

    </>
  );
}

export default App;

