import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import ProductsDetails from "./pages/Products_Details";
import Login from "./components/login";
import Registration from "./components/registration";

import "./desktop.css";
import "./navegation.css";
import "./navegation-mobile.css";
import Slider1 from "./components/Products-details/Slider1";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/register" component={Registration} />
          <Route exact path="/login" component={Login} />
          <Route path="/products" component={ProductsDetails} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
