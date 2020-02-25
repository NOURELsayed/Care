import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
import Details from "./Pages/Details";

const Routing = () => {
  return (
    <Router>
      <Switch>
          <Route exact path="/">
           <Home/>
          </Route>

          <Route  path="/about">
           <AboutUs/>
          </Route>

          <Route  path="/contact">
           <Contact/>
          </Route>

          <Route path="/details">
           <Details/>
          </Route>
      </Switch>
    </Router>
  );
};

export default Routing;
