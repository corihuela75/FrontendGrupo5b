import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";

export default function Container() {
  return (
      <div className="flex">
        <Sidebar />
        <main className="flex-grow p-4">
        <Outlet />
        </main>
      </div>
  );
}
