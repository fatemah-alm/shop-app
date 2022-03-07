import axios from "axios";

export const baseURL = "http://localhost:8088/";
export const instance = axios.create({
  baseURL: `${baseURL}api`,
});
