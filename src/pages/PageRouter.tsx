import Home from "./Home/Home";
import React from "react";
import { Switch, Route } from "react-router-dom";
import NewReceipt from "./Receipt/NewReceipt";
import Receipts from "./Receipts/Receipts";
import Stock from "./Stock/Stock";

const PageRouter = () => {
  return (
    <Switch>
      <Route path="/receipts">
        <Receipts />
      </Route>
      <Route path="/new-receipt">
        <NewReceipt />
      </Route>
      <Route path="/stock">
        <Stock />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default PageRouter;
