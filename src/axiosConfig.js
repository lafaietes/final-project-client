import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000", // Certifique-se de usar HTTP se seu servidor não estiver configurado para HTTPS
});

export default instance;
