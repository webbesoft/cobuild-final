import { useLoaderData } from "react-router";
import { User } from "../types/ModelTypes";

export default function useAuth() {
  const { user } = useLoaderData<{ user: User }>();
  const accessToken = useLoaderData<{ accessToken: string }>();
  return { user, accessToken };
}
