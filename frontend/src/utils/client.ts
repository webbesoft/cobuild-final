export default class HttpClient {
  private baseURL: string;
  private defaultHeaders: Record<string, string>;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
    this.defaultHeaders = {};
  }

  // Set the Authorization header or other custom headers
  setAuthorization(token: string | null) {
    if (token) {
      this.defaultHeaders["Authorization"] = `Bearer ${token}`;
    }
  }

  setCookie(cookie: string) {
    this.defaultHeaders["Cookie"] = cookie;
  }

  async request(
    method: string,
    path: string,
    body?: unknown,
    headers?: Record<string, string>
  ) {
    const url = new URL(path, this.baseURL).toString();
    const requestHeaders = { ...this.defaultHeaders, ...headers };

    const options: RequestInit = {
      method,
      headers: {
        "Content-Type": "application/json",
        ...requestHeaders,
      },
      credentials: "include", // For sending cookies with requests
    };

    if (body) {
      options.body = JSON.stringify(body);
    }

    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json(); // Assuming the backend returns JSON
  }

  get(path: string, headers?: Record<string, string>) {
    return this.request("GET", path, undefined, headers);
  }

  post(path: string, body: unknown, headers?: Record<string, string>) {
    return this.request("POST", path, body, headers);
  }

  put(path: string, body: unknown, headers?: Record<string, string>) {
    return this.request("PUT", path, body, headers);
  }

  delete(path: string, headers?: Record<string, string>) {
    return this.request("DELETE", path, undefined, headers);
  }
}
