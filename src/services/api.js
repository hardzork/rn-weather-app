import axios from "axios";

//https://api.hgbrasil.com/weather?key=61f5296c&lat=-23.682&lon=-46.875

export const key = "61f5296c";

const api = axios.create({
  baseURL: "https://api.hgbrasil.com/",
});

export default api;
