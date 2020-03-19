import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage } from "../pages/Home.page";
import { BeerPage } from "../pages/Beer.page";
import { withLoading } from "../../lib/withLoading";

export const App = withLoading(() => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/beers" component={BeerPage} />
      </Switch>
    </Router>
  );
});

export default App;
