import axios from "axios"

export const api = axios.create({
  baseURL: "http://172.25.208.1:3333"
})
