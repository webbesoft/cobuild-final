import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  index("./pages/home.tsx"),

  // authentication
  route("login", "./pages/auth/login.tsx"),
  route("register", "./pages/auth/register.tsx"),

  layout("./layouts/dashboard.tsx", [
    route("dashboard", "./pages/dashboard/index.tsx"),
  ]),

  route("*?", "catchall.tsx"),
] satisfies RouteConfig;
