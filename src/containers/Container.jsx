import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";


export default function Container() {
    return (
        <div className="flex">
        <Sidebar />
        <Outlet />
        </div>
        
    );
}