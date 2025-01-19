import { Outlet } from "react-router";
import type { Route } from "./+types/home";
import Sidebar from "~/components/Sidebar";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Ynym Portal" },
    { name: "description", content: "Welcome to Ynym Portal!" },
  ];
}

export default function AppLayout() {
  return (
    <div className="flex">
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
