import { Api } from "api/Api";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../styles/personagem.css";

export default function Personagem() {
  const { id } = useParams();

  const [personagem, setPersonagem] = useState("");
  const [loading, setLoading] = useState(true);
 
  
  console.log(personagem);
  
  
  useEffect(() => {
    const loadData = async () => {
      const response = await Api.buildApiGetRequest(Api.readOneUrl(id));
      const bodyResult = await response.json();
      setPersonagem(bodyResult);
      setLoading(false);
    };
    loadData();
  }, [id]);

  if (loading) {
    return (
      <div>
        <h1>Carregando Personagem...</h1>
      </div>
    );
  }

  return (
    <div className="personagem__container">
      <div className="personagem__card">
        <div className="personagem__align">
          <div className="personagem__buttons">
            <button>Editar</button>
            <button>Excluir</button>
          </div>
          <div>{personagem.nome}</div>
          <div className="personagem__img">
            <img src={personagem.imagemUrl} alt={personagem.nome} />
            <div className="personagem__origem">
              <span>Origem</span>
              {personagem.origem.nome}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
