import { Api } from "api/Api";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export function AddPersonagem(props) {
  const [previewImage, setPreviewImage] = useState("");



  const [localizacao, setLocalizacao] = useState([]);

  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const response = await Api.buildApiGetRequest(
        Api.readAllUrlLocalizacao()
      );
      const bodyResult = await response.json();
      setLocalizacao(bodyResult);
      // setLoading(false);
    };
    loadData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const nome = event.target.nome.value;
    const imagemUrl = event.target.imagemUrl.value;
    const origemId = +event.target.origemId.value;

    const dados = {
      nome,
      imagemUrl,
      origemId,
    };
    console.log(dados);
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
        <label htmlFor="origemId" className="form__label">
          OrigemId:
        </label>
        <br />

        <select id="origemId" name="origemId">
          <option value="">Selecione uma opção</option>
          {localizacao.map((loc, i) => <option key={"localizacao_" + i} value={loc.id}>
              {loc.nome}
            </option>
          )}
        </select>

        <input
          type="submit"
          value="Adicionar"
          className="button button--green button--full"
        />
      </form>
    </div>
  );
}
