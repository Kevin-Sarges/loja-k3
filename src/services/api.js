import axios from "axios";
import { REACT_APP_URLAPI } from "@env";

const api = axios.create({
  baseURL: REACT_APP_URLAPI,
});

export default api;
