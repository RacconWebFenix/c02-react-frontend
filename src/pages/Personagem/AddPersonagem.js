import { Api } from "api/Api";
import React from "react";
import { useState } from "react";

export function AddPersonagem(props) {
  const [previewImage, setPreviewImage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const nome = event.target.nome.value;
    const imagemUrl = event.target.imagemUrl.value;
    const origemId = parseInt(event.target.origemId.value);

    const dados = {
      nome,
      imagemUrl,
      origemId,
    };
    console.log(dados)
    const resultado = await Api.buildApiPostRequest(Api.createUrl(), dados);

    const jsonResultado = await resultado.json();

    props.history.push(`/view/${jsonResultado.id}`);

  };

  const updatePreview = (event) => {
    setPreviewImage(event.target.value);
  };

  return (
    <div className="create">
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="nome" className="form__label">
          Nome:
        </label>
        <br />

        <input type="text" id="nome" name="nome" className="form__input" />
        <br />

        <label htmlFor="origemId" className="form__label">
          OrigemId:
        </label>
        <br />
        <input type="number" id="origemId" name="origemId" />
        <br />
        <label htmlFor="imagemUrl" className="form__label">
          URL da Imagem:
        </label>
        <br />
        <input
          type="text"
          id="imagemUrl"
          name="imagemUrl"
          className="form__input"
          onChange={updatePreview}
        />
        <br />

        {previewImage ? (
          <div>
            <span className="form__label">Prévia da imagem:</span>
            <br />
            <img
              src={previewImage}
              className="preview-image"
              alt="Prévia da Imagem"
            />
          </div>
        ) : (
          ""
        )}
        <br />

        <input
          type="submit"
          value="Adicionar"
          className="button button--green button--full"
        />
      </form>
    </div>
  );
}
