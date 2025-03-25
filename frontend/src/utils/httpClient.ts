import HttpClient from "./client.ts";

const BACKEND_URL = process.env.BACKEND_URL;

if (!BACKEND_URL) {
  console.error("missing backend URL");
}

const httpClient = new HttpClient(BACKEND_URL ?? "http://localhost:8000");

export default httpClient;
