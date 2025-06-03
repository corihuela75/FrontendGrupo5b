// src/containers/Container.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import Footer from "../components/Footer";

export default function Container() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Contenedor principal: sidebar + contenido */}
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-grow p-4 bg-gray-100">
          <Outlet />
        </main>
      </div>

      {/* Footer siempre pegado al final */}
      <Footer />
    </div>
  );
}
