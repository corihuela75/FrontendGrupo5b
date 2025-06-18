import { useState } from "react";
import roadmapDataByMember from "../data/roadmap";
import data from './../data/members.json'

// Datos de integrantes (foto, nombre)
const members = data.map((m) => ({ name: m.name, image: m.image }));

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
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  if (!data) return <p className="mt-4 text-center">No hay roadmap disponible</p>;

  // Filtrar temas según búsqueda y categoría
  const filteredTemas = data.temas.filter((tema) => {
    const matchesSearch = tema.nombre.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? tema.nombre === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  // Obtener categorías para el desplegable
  const categorias = Array.from(new Set(data.temas.map((tema) => tema.nombre)));

  return (
    <div className="p-6 max-w-6xl mx-auto mt-8 bg-white rounded-xl border border-gray-200 shadow-md">
      <h2 className="text-2xl font-bold text-black-700 mb-6 text-center">
        Roadmap de {integrante}: {data.roadmap}
      </h2>

      {/* Contenedor vertical con espacio pequeño */}
      <div className="flex flex-col space-y-3 mb-6 max-w-sm mx-auto">
        {/* Cuadro de búsqueda */}
        <input
          type="text"
          placeholder="Buscar tema..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
        />

        {/* Desplegable de categorías */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-2 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
        >
          <option value="">Todas las categorías</option>
          {categorias.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <ul className="space-y-6">
        {filteredTemas.length > 0 ? (
          filteredTemas.map((tema, idx) => (
            <li key={idx} className="p-4 bg-gray-50 rounded-lg border border-gray-100">
              <h3 className="text-xl font-semibold text-blue-800 mb-3 text-center">{tema.nombre}</h3>
              {renderProgreso(tema.progreso)}
            </li>
          ))
        ) : (
          <p className="text-center text-gray-500">No se encontraron temas que coincidan.</p>
        )}
      </ul>
    </div>
  );
}

// Componente principal
export default function TeamWithRoadmap() {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-2">Nuestras rutas de aprendizaje</h1>
        <p className="text-lg text-gray-600">a lo largo del camino del desarrollo web Front End</p>
      </header>
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
export { Roadmap };
