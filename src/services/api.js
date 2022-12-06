import axios from "axios";
import { env } from "../react.config";

const api = axios.create({
  baseURL: `${env.TYPEORM_HOST}:${env.API_PORT}`,
});

export default api;
