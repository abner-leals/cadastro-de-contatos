import axios from "axios";
import { env } from "../react.config";

const api = axios.create({
  baseURL: `http://localhost:${env.API_PORT}`,
});

export default api;
