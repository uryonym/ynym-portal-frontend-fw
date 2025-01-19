import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout("routes/layout.tsx", [
    index("routes/home.tsx"),
    route("task", "routes/task.tsx"),
    route("refueling", "routes/refueling.tsx"),
    route("credential", "routes/credential.tsx"),
    route("note", "routes/note.tsx"),
  ])
] satisfies RouteConfig;
