// utils/api.js
import axios from "axios";
import { BASE_URL } from "../constants/constant";

export const api = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
