import { NavBar } from "@/components/nav-bar";
import { Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <div>
      <NavBar />
      <div className="pt-[200px]">
        <Outlet />
      </div>
    </div>
  );
}
