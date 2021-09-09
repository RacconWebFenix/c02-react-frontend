import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import logoBlue from "./img/logo-blue.gif";

// CSS
import "./App.css";
import Personagem from "pages/Personagem/Personagem";


export function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logoBlue} alt={"Logo Blue"} width="100px"/>
      </header>
      <div className="content">
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/personagem/:id" exact={true} component={Personagem} />
        </Switch>
      </div>
    </div>
  );
}
