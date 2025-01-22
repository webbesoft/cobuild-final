import httpClient from "../utils/httpClient";

export function login(data: { username: string; password: string }) {
  return httpClient.post("/api/v1/login/access-token", data);
}
