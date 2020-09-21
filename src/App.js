import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Contacts from "./components/Contacts";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import About from "./components/pages/About";


import NotFound from './components/pages/NotFound';
import Test from './components/test/Test'

import { Provider } from "./contextprovider/context";

function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Header title="Contacts Manager"></Header>
          <div className="container-fluid">
            <Switch>
              <Route exact path="/" component={Contacts}></Route>
              <Route exact path="/about" component={About}></Route>
              <Route exact path="/contact/add" component={AddContact}></Route>
              <Route exact path="/test" component={Test}></Route>
              <Route component={NotFound}></Route>
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
