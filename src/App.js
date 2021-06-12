import logo from './indir.jpg';
import React, {useState} from 'react';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import Entry from "./components/Entry";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App(){

  const [updateTitle] = useState(null);
  const [errorMessage, updateErrorMessage] = useState(null);

  return (
      <div className="Login-component">
        <Router>
          <div className="App">
            <Header/>
            <div className="container d-flex align-items-center flex-column">
              <Switch>
                <Route path="/" exact={true}>
                  <LoginPage showError={updateErrorMessage} updateTitle={updateTitle}/>
                </Route>
                <Route path="/register">
                  <RegisterPage showError={updateErrorMessage} updateTitle={updateTitle}/>
                </Route>
                <Route path="/login">
                  <LoginPage showError={updateErrorMessage} updateTitle={updateTitle}/>
                </Route>
                <Route path="/entry">
                  <Entry/>
                </Route>
              </Switch>
            </div>
            <Footer/>
          </div>
        </Router>
      </div>
  );
}

export default App;