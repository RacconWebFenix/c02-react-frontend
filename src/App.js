import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import logoBlue from "./img/logo-blue.gif";

// CSS
import "./App.css";
import Personagem from "pages/Personagem/Personagem";

import { AddPersonagem } from "./pages/Personagem/AddPersonagem";

import EditPersonagem from "pages/Personagem/EditPersonagem";

export function App() {
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
          <Route path="/create/" exact={true} component={AddPersonagem} />
        </Switch>
      </div>
    </div>
  );
}
