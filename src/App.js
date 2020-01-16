import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import ProductsDetails from "./pages/Products_Details";
import Login from "./components/login";
import Registration from "./assets/css/registration.css";
import "./assets/css/desktop.css";
import "./assets/css/registration.css";
import "./assets/css/navegation-mobile.css";

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
