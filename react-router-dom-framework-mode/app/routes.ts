import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("contact", "routes/contact.tsx"),

  layout("routes/dashboard.tsx", [
    ...prefix("/admin", [
      route("create-post", "routes/createPost.tsx"),
      route("post/:id", "routes/post.tsx"),
    ]),
  ]),
] satisfies RouteConfig;
