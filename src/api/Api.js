export const Api = {
  baseUrl: "http://localhost:3001",

  readAllUrl: () => Api.baseUrl + "/personagem",
  readOneUrl: (id) => Api.baseUrl + `/personagem/${id}`,

  buildApiGetRequest: (url) =>
    fetch(url, {
      method: "GET",
    }),
};
