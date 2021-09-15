import { Api } from "api/Api";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./personagem.css";

export default function Personagem(props) {
  const id = props.match.params.id
 

  const [personagem, setPersonagem] = useState(undefined);
  const isLoading = personagem === undefined 
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const response = await Api.buildApiGetRequest(Api.readOneUrl(id));
      const bodyResult = await response.json();
      setPersonagem(bodyResult);
      // setLoading(false);
    };
    loadData();
  }, [id]);
  
  console.log(personagem);

  if (isLoading) {
    return (
      <div>
        <h1>Carregando Personagem...</h1>
      </div>
    );
  }

  const deleteF = async () => {
    let del = window.confirm("Você realmente deseja Excluir?");
    if (del === true) {
      await Api.buildApiDeleteRequest(Api.deleteUrl(id));
      props.history.push(`/`);
    }
  };

  return (
    <div className="personagem__container">
      <div className="personagem__card">
        <div className="personagem__buttons">
          <Link to={`/edit/${id}`}>Editar</Link>
          <button onClick={deleteF}>Excluir</button>
        </div>
        <span className="personagem__name">{personagem.nome}</span>
        <div className="person__innerAll">
          <div className="personagem__inner">
            <img src={personagem.imagemUrl} alt={personagem.nome} />
          </div>
          <div className="personagem__origem">
            <span>Origem</span>
            {personagem.origem.nome}
          </div>
        </div>
      </div>
    </div>
  );
}
