import axios from "axios";
//import { REACT_APP_URLAPI } from "@env";

const api = axios.create({
  baseURL: "http://127.0.0.1:3333",
});

export default api;
