import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";

export default (
  	<Switch>
    	<Route exact path="/" component={Home} />
    	<Route path="/contact" component={Contact} />
    	<Route path="/about" component={About} />
    </Switch>
);