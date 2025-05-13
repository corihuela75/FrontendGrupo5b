// components/Sidebar.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  HomeIcon,
  UserCircleIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-white shadow-md p-4">
      <h2 className="text-xl font-bold mb-6">Mi App</h2>
      <nav className="flex flex-col space-y-4">
        <Link to="/" className="flex items-center space-x-2 hover:text-blue-500">
          <HomeIcon className="h-5 w-5" />
          <span>Inicio</span>
        </Link>
        <Link to="/perfil" className="flex items-center space-x-2 hover:text-blue-500">
          <UserCircleIcon className="h-5 w-5" />
          <span>Perfil</span>
        </Link>
        <Link to="/configuracion" className="flex items-center space-x-2 hover:text-blue-500">
          <Cog6ToothIcon className="h-5 w-5" />
          <span>Configuración</span>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;