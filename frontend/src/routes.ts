import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  index("./pages/home.tsx"),
  route("about", "./about.tsx"),

  layout("./dashboard/layout.tsx", [
    route("login", "./auth/login.tsx"),
    route("register", "./auth/register.tsx"),
  ]),
] satisfies RouteConfig;
