import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";

export default function Container() {
  return (
    <body>
      <div className="flex">
        <Sidebar />
        <main className="w-full">
        <Outlet />
        </main>
      </div>
    </body>
  );
}
