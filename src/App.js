import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import logoBlue from "./img/logo-blue.gif";

// CSS
import "./App.css";
import Personagem from "pages/Personagem/ReadOnePersonagem/Personagem";

import { AddPersonagem } from "./pages/Personagem/AddPersonagem/AddPersonagem";

import EditPersonagem from "pages/Personagem/EditPersonagem/EditPersonagem";
import RemoverPersonagem from "pages/Personagem/RemoverPersonagem/RemoverPersonagem";
import GuardedRoute from "components/GuardedRoute/GuardedRoute";

export function App() {
  const isAuthenticated = true;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logoBlue} alt={"Logo Blue"} width="100px" />
      </header>
      <div className="content">
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/view/:id" exact={true} component={Personagem} />
          <Route path="/edit/:id" exact={true} component={EditPersonagem} />
          <GuardedRoute
            path="/create/"
            exact={true}
            component={AddPersonagem}
            auth={isAuthenticated}
          />
          <Route
            path="/remover/:id"
            exact={true}
            component={RemoverPersonagem}
          />
        </Switch>
      </div>
    </div>
  );
}
