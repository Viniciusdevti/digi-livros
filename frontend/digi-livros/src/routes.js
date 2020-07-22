import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Book from "./componets/Book";
import Client from "./componets/Client";
import Rent from "./componets/Rent";
import Dash from "./componets/Dash";
import Home from "./componets/Home";



export default function  Routes() {
  return (
     
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/book" component={Book} />
        <Route path="/client" component={Client} />
        <Route path="/rent" component={Rent} />
        <Route path="/dash" component={Dash} />
      </Switch>
    
  );
}