import axios from "axios";


const url = process.env.NEXT_PUBLIC_URL
export const baseUrl = axios.create({
  baseURL: url
}) 