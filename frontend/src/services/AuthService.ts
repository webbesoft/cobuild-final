import httpClient from "../utils/httpClient";

const login = async (data: { username: string; password: string }) => {
  return httpClient.post("/api/v1/login/access-token", data);
};

const register = async (data: {
  fullname: string;
  email: string;
  password: string;
}) => {
  return httpClient.post("/api/v1/register", data);
};

export default {
  login,
  register,
};
