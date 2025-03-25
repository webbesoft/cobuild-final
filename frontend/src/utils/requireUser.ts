import { redirect } from "react-router";
import httpClient from "./httpClient";

export async function requireUser(request: Request) {
  const response = await httpClient.get("/login/test-token");

  if (!response.ok) {
    throw redirect("/login"); // Redirect if not authenticated
  }

  return await response.json(); // Return user data
}
