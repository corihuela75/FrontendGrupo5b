import roadmapData from "../data/roadmap.json";
import React from "react";

function renderProgreso(progreso) {
  const completados = [];
  const pendientes = [];

  Object.entries(progreso).forEach(([key, value]) => {
    const chip = (
      <span
        key={key}
        className={`px-5 py-3 rounded-full text-sm font-medium ${value ? "bg-green-100 text-green-800 border border-green-300" : "bg-red-100 text-red-800 border border-red-300"}`}
      >
        {key}
      </span>
    );
    value ? completados.push(chip) : pendientes.push(chip);
  });

  return (
    <div className="flex flex-col md:flex-row gap-6">
      <div className="w-full md:w-1/2">
        <h3 className="text-green-700 text-md font-semibold mb-2">Completado</h3>
        <div className="flex flex-wrap gap-2 items-start">{completados}</div>
      </div>
      <div className="w-full md:w-1/2">
        <h3 className="text-red-700 text-md font-semibold mb-2">Pendiente</h3>
        <div className="flex flex-wrap gap-2 items-start">{pendientes}</div>
      </div>
    </div>
  );
}

export default function Roadmap() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold text-blue-700 mb-4">
        Roadmap: {roadmapData.roadmap} ({roadmapData.integrante})
      </h1>
      <ul className="space-y-6">
        {roadmapData.temas.map((tema, index) => (
          <li key={index}>
            <h2 className="text-xl font-semibold text-blue-600 mb-2">{tema.nombre}</h2>
            {renderProgreso(tema.progreso)}
          </li>
        ))}
      </ul>
    </div>
  );
}
