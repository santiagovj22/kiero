import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./desktop.css";
import "./navegation.css";
import "./navegation-mobile.css"
import Header from './layout/header.jsx';

class App extends React.Component {
  render() {

    return(
      <BrowserRouter>
         <Switch>
            <Route exact path = "/login" component = {Header} />
         </Switch>
      </BrowserRouter>

    )
  }
}

export default App;