import HttpClient from "./client.ts";

const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:8000";
const httpClient = new HttpClient(BACKEND_URL);

httpClient.setAuthorization(localStorage.getItem("cobuild_jwt"));

export default httpClient;
