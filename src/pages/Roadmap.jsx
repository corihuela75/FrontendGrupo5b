import React, { useState } from "react";
import roadmapDataByMember from "../data/roadmap";

// Datos de integrantes (foto, nombre)
const members = [
  { name: "Eli", image: "/images/profiles-photo/Eli.jpg" },
  { name: "Agostina", image: "/images/profiles-photo/Agos.jpg" },
  { name: "Heber Duarte", image: "/images/profiles-photo/profile_heber.jpg" },
  { name: "Cristian Orihuela", image: "/images/profiles-photo/cris.jpg" },
];

// Función para renderizar progreso
function renderProgreso(progreso) {
  const completados = [];
  const pendientes = [];

  Object.entries(progreso).forEach(([key, value]) => {
    const chip = (
      <span
        key={key}
        className={`px-6 py-4 rounded-lg text-xs font-semibold mr-1 mb-1 ${value
            ? "bg-green-100 text-green-800 border border-green-300"
            : "bg-red-100 text-red-800 border border-red-300"
          }`}
      >
        {key}
      </span>
    );
    if (value) completados.push(chip);
    else pendientes.push(chip);
  });

  return (
    <div className="mt-4">
      <div className="mb-3">
        <h4 className="text-green-700 font-semibold text-sm mb-1">Completado</h4>
        <div className="flex flex-wrap gap-2">{completados}</div>
      </div>
      <div>
        <h4 className="text-red-700 font-semibold text-sm mb-1">Pendiente</h4>
        <div className="flex flex-wrap gap-2">{pendientes}</div>
      </div>
    </div>
  );
}

// Componente Roadmap que recibe datos para mostrar
function Roadmap({ integrante }) {
  const data = roadmapDataByMember[integrante];
  if (!data) return <p className="mt-4 text-center">No hay roadmap disponible</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto mt-8 bg-white rounded-xl border border-gray-200 shadow-md">
      <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">
        Roadmap de {integrante}: {data.roadmap}
      </h2>
      <ul className="space-y-6">
        {data.temas.map((tema, idx) => (
          <li key={idx} className="p-4 bg-gray-50 rounded-lg border border-gray-100">
            <h3 className="text-xl font-semibold text-blue-800 mb-3 text-center">{tema.nombre}</h3>
            {renderProgreso(tema.progreso)}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Componente principal
export default function TeamWithRoadmap() {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Nuestro Equipo</h1>

      <div className="flex justify-center gap-8 flex-wrap mb-10">
        {members.map((member) => (
          <button
            key={member.name}
            onClick={() => setSelectedMember(member.name)}
            className="flex flex-col items-center focus:outline-none"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 rounded-full object-cover border-4 border-transparent hover:border-blue-500 transition"
            />
            <span className="mt-2 text-lg font-medium text-gray-800">{member.name}</span>
          </button>
        ))}
      </div>

      {selectedMember && <Roadmap integrante={selectedMember} />}
    </div>
  );
}
