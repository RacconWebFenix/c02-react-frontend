import React from "react";
import { Link } from "react-router-dom";
import { PersonagensList } from "../../components/PersonagensList/PersonagensList";

export function Home() {
  return (
    <div>
      <header className="App-header">
        <Link to={"/create/"}>
          <button>Adicionar Personagem</button>
        </Link>
      </header>
      <PersonagensList></PersonagensList>
    </div>
  );
}
