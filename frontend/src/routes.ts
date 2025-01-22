import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  index("./pages/home.tsx"),

  layout("./layouts/dashboard.tsx", [
    route("login", "./pages/auth/login.tsx"),
    route("register", "./pages/auth/register.tsx"),
  ]),

  route("*?", "catchall.tsx"),
] satisfies RouteConfig;
