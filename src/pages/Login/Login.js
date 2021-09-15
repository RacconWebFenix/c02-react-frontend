import { Api } from "api/Api";
import React from "react";

export default function Login(props) {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const senha = event.target.senha.value;

    const payload = {
      email,
      senha,
    };

    const resultado = await Api.buildApiPostRequest(Api.loginUrl(), payload);

    const jsonResultado = await resultado.json();

    localStorage.setItem("JWT", jsonResultado.accessToken);

    props.history.push("/");
  };

  return (
    <div className="create">
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="email" className="form__label">
          E-mail:
        </label>
        <br />

        <input type="text" id="email" name="email" className="form__input" />

        <br />
        <label htmlFor="senha" className="form__label">
          Senha:
        </label>
        <br />
        <input type="text" id="senha" name="senha" className="form__input" />
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
