
// TARJETA DE PERFIL DE MIEMBRO DEL EQUIPO (AMPLIADA)

import { Link } from "react-router-dom";

export default function ProfileCard({ member }) {
  return (
    <div className="p-6 max-w-6xl mx-auto mt-8 bg-white rounded-xl border border-gray-200 shadow-md">
      {/* Encabezado */}
      <div className="flex flex-col items-center text-center gap-4">
        <img
          src={member.image}
          alt={member.name}
          className="w-52 h-52 rounded-full border-4 border-blue-600"
        />
        <div>
          <h3 className="text-3xl font-bold text-blue-800">{member.name}</h3>
          <p className="text-blue-600 italic">{member.role}</p>
        </div>
      </div>

      {/* Bio */}
      <p className="mt-6 text-gray-800 text-sm md:text-base leading-relaxed">
        {member.bio}
      </p>

      {/* Redes sociales */}
      <div className="mt-6 text-gray-800 border-t border-gray-200 pt-4">
        <h4 className="text-lg font-semibold text-blue-700 mb-2">Redes Sociales</h4>
        <ul className="space-y-1">
          <li><strong>GitHub:</strong> <a href={member.social_media.github} className="text-blue-500 hover:underline" target="_blank">{member.social_media.github}</a></li>
          <li><strong>LinkedIn:</strong> <a href={member.social_media.linkedin} className="text-blue-500 hover:underline" target="_blank">{member.social_media.linkedin}</a></li>
          <li><strong>Instagram:</strong> <span className="text-gray-600">{member.social_media.instagram}</span></li>
        </ul>
      </div>

      {/* Experiencia */}
      <div className="mt-6 border-t border-gray-200 pt-4">
        <h4 className="text-lg font-semibold text-blue-700 mb-2">Experiencia</h4>
        <ul className="space-y-3 text-gray-800">
          {member.experience?.map((exp, index) => (
            <li key={index}>
              <p className="font-medium">{exp.role} <span className="text-sm text-gray-500">({exp.period})</span></p>
              <p className="text-sm text-gray-600">{exp.company}</p>
              <p className="text-sm">{exp.description}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Contacto */}
      <div className="mt-6 border-t border-gray-200 pt-4">
        <h4 className="text-lg font-semibold text-blue-700 mb-2">Contacto</h4>
        <ul className="text-gray-800 space-y-1">
          <li><strong>Email:</strong> {member.contact?.email}</li>
          <li><strong>Teléfono:</strong> {member.contact?.phone}</li>
          <li><strong>Ubicación:</strong> {member.contact?.location}</li>
        </ul>
      </div>

      {/* Botón */}
      <div className="text-center">
        <Link to="/presentation">
        <button
          className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
          Cerrar perfil
        </button>
          </Link>
      </div>
    </div>
  );
}
