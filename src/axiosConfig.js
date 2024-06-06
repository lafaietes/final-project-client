import axios from "axios";

const instance = axios.create({
  baseURL: "https://final-project-hfz7.onrender.com/", // Certifique-se de usar HTTP se seu servidor não estiver configurado para HTTPS
});

export default instance;
