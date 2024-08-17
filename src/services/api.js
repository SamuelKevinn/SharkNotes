import axios from "axios";

export const api = axios.create({
  baseURL: "https://rocketnotes-api-don2.onrender.com",
});
