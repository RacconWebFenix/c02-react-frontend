import { Api } from "api/Api";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "../../styles/edit.css";

export default function EditPersonagem(props) {
  const { id } = useParams();

  const [personagem, setPersonagem] = useState("");
  const [loading, setLoading] = useState(true);

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

  const handleSubmit = async (event) => {
    event.preventDefault();

    const nome = event.target.nome.value;
    const imagemUrl = event.target.imagemUrl.value;

    const dados = {
      nome,
      imagemUrl,
    };
    console.log(dados);
    const resultado = await Api.buildApiPutRequest(Api.readOneUrl(id), dados);
    const jsonResultado = await resultado.json();
    props.history.push(`/view/${jsonResultado.id}`);
  };

  return (
    <div>
      <div className="edit__title">Editar: {personagem.nome}</div>
      <form className="form" onSubmit={handleSubmit}>
        <br />
        <label htmlFor="nome" className="form__label">
          Nome
        </label>
        <input
          type="text"
          id="nome"
          defaultValue={personagem.nome}
          className="input__text"
        />
        <br />
        <label htmlFor="imagemUrl">Imagem URL</label>
        <input
          type="text"
          id="imagemUrl"
          defaultValue={personagem.imagemUrl}
          className="input__text"
        />
        <br />
        <input type="submit" value="Adicionar" className="add__btn" />
      </form>
    </div>
  );
}
