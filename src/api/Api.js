export const Api = {
  baseUrl: "http://localhost:3001",
  
  readAllUrl: () => Api.baseUrl + "/personagem",

  buildApiGetRequest: (url) =>
    fetch(url, {
      method: "GET",
    }),
};
