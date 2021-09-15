export const Api = {
  baseUrl: "http://localhost:3001",

  readAllUrl: () => Api.baseUrl + "/personagem",
  readOneUrl: (id) => Api.baseUrl + `/personagem/${id}`,
  createUrl: () => Api.baseUrl + "/personagem/",
  deleteUrl: (id) => Api.baseUrl + `/personagem/${id}`,


  readAllUrlLocalizacao: () => Api.baseUrl + "/localizacao",

  buildApiGetRequest: (url) =>
    fetch(url, {
      method: "GET",
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
