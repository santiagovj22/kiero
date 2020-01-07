import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Layout from './layout/layout';
import Login from './components/login';
import "./desktop.css";
import "./navegation.css";
import "./navegation-mobile.css"


class App extends React.Component {
  render() {

    return(
      <BrowserRouter>
        <Layout>
        <Switch>
            <Route exact path = "/login" component = {Login} />
         </Switch>
        </Layout>
      </BrowserRouter>
    )
  }
}

export default App;