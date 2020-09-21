import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Contacts from "./components/contact/Contacts";
import Header from "./components/pages/Header";
import AddContact from "./components/contact/AddContact";
import About from "./components/pages/About";


import NotFound from './components/pages/NotFound';
import Test from './components/test/Test'

import { Provider } from 'react-redux';
import store from './store'

// import { Provider } from "./contextprovider/context";

function App() {
  return (
    <Provider store={store}>
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
