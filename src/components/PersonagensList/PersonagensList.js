import PersonagensCard from "../PersonagensCard/PersonagensCard";
import React from "react";
import { useEffect, useState } from "react";
import { Api } from "../../api/Api";
import { Link } from "react-router-dom";
export function PersonagensList() {
  const [personagens, setPersonagens] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      const response = await Api.buildApiGetRequest(Api.readAllUrl(), true);
      const bodyResult = await response.json();
      setPersonagens(bodyResult);
    };
    loadData();
  }, []);

  return (
    <div className="cards">
      {personagens.map((personagem, index) => (
        <Link to={`/view/${personagem.id}`} key={"personagem_" + index}>
          <PersonagensCard
            personagem={personagem}
            key={"personagem_" + index}
          ></PersonagensCard>
        </Link>
      ))}
    </div>
  );
}
