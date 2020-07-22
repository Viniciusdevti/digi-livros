import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Book from "./componets/Book";
import Client from "./componets/Client";
import Rent from "./componets/Rent";
import Dash from "./componets/Dash";
import Home from "./componets/Home";



export default function  Routes() {
  return (
        <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/register" component={Book} />
        <Route path="/profile" component={Client} />
        <Route path="/incidents/new" component={Rent} />
        <Route path="/redeemid" component={Dash} />
      </Switch>
    </BrowserRouter>
  );
}