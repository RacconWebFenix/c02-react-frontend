export const Api = {
  baseUrl: "http://localhost:3001",

  readAllUrl: () => Api.baseUrl + "/personagem",
  readOneUrl: (id) => Api.baseUrl + `/personagem/${id}`,
  createUrl: () => Api.baseUrl + "/personagem/",
  //login
  loginUrl: () => Api.baseUrl + "/login/",

  deleteUrl: (id) => Api.baseUrl + `/personagem/${id}`,

  readAllUrlLocalizacao: () => Api.baseUrl + "/localizacao",

  //authHeadert
  authHeader: {
    Authorization: "Bearer " + localStorage.getItem("JWT"),
  },

  buildApiGetRequest: (url, auth) =>
    fetch(url, {
      method: "GET",
      headers: auth
        ? new Headers({
            ...Api.authHeader,
          })
        : undefined,
    }),

  buildApiPutRequest: (url, body) => {
    return fetch(url, {
      method: "PATCH",
      headers: new Headers({
        "Content-type": "application/json",
      }),
      body: JSON.stringify(body),
    });
  },

  buildApiPostRequest: (url, body) => {
    return fetch(url, {
      method: "POST",
      headers: new Headers({
        "Content-type": "application/json",
      }),
      body: JSON.stringify(body),
    });
  },

  buildApiDeleteRequest: (url) => {
    fetch(url, {
      method: "DELETE",
    });
  },
};
