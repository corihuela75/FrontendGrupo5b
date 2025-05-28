import { Mail, Github } from "lucide-react";
import { Button } from "../components/ui/button";
import TeamCard from "../components/TeamCard";
import ProfileCard from "../components/ProfileCard";
import { useState } from "react";

export default function Presentation() {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      name: "Eli",
      role: "Domadora de michis",
      image: "/images/profiles-photo/Eli.jpg",
      bio: "Eli es nuestra gurú de la calma felina, siempre lista para traer armonía al equipo.",
      social_media: {
        github: "ha",
        linkedin: "a",
        instagram: "a"
      }
    },
    {
      name: "Agostina",
      role: "Professional Instagrammer",
      image: "/images/profiles-photo/Agos.jpg",
      bio: "Agos domina el arte de contar historias visuales y captar la atención en redes.",
      social_media: {
        github: "ha",
        linkedin: "a",
        instagram: "a"
      }
    },
    {
      name: "Heber Duarte",
      role: "Angular & React Developer",
      image: "/images/profiles-photo/profile_heber.jpg",
      bio: "Desarrollador frontend con experiencia en Angular y React.",
      social_media: {
        github: "https://github.com/Heber-739",
        linkedin: "https://www.linkedin.com/in/heber739/",
        instagram: "a"
      }
    },
    {
      name: "Cristian Orihuela",
      role: "Administrativo-contable",
      image: "/images/profiles-photo/cris.jpg",
      bio: "Cristian se especializa en gestión administrativa y contabilidad para proyectos tecnológicos.",
      social_media: {
        github: "https://github.com/corihuela75",
        linkedin: "https://www.linkedin.com/in/cristian-orihuela",
        instagram: "a"
      }
    }
  ];

  
  return (
    <section className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-2">Hola! somos el grupo 5</h1>
          <p className="text-lg text-gray-600"> de la materia: Desarrollo de Sistemas Web - Front End</p>
          <div className="mt-4 flex justify-center gap-4">
            <Button variant="outline">
              <Mail className="w-4 h-4 mr-2" /> Mirá nuestra Bitacora
            </Button>
            <Button variant="outline">
              <Github className="w-4 h-4 mr-2" /> ir al repo en GitHub
            </Button>
          </div>
        </header>


        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Integrantes del equipo:</h2>
          {!selectedMember && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {teamMembers.map((member, index) => (
                <TeamCard key={index} member={member} onClick={() => setSelectedMember(member)} />
              ))}
            </div>
          )}
          {selectedMember && (
            <div className="mt-8">
              <ProfileCard member={selectedMember} onClose={() => setSelectedMember(null)} />
            </div>
          )}
        </section>



        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Objetivo General del Trabajo</h2>
          <p className="text-gray-700 mb-6">
            Desarrollar una Single Page Application (SPA) usando React y React Router, aplicando buenas prácticas
            de diseño y organización. El proyecto debe incluir el consumo de datos desde archivos locales (JSON) y
            APIs externas. Además, el proyecto debe estar desplegado en la nube a través de Vercel y gestionado con GitHub.
          </p>

          <h3 className="text-xl font-semibold mb-2">Organización del Trabajo en Equipo</h3>
          <p className="text-gray-700 mb-6">
            El equipo debe tener 4 integrantes, con roles definidos como: Frontend, Backend, Documentación y Coordinación.
            El trabajo colaborativo debe reflejarse en una bitácora final donde se explique cómo se organizaron y qué metodología utilizaron.
          </p>

          <h3 className="text-xl font-semibold mb-2">Estructura y Contenidos del Proyecto</h3>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li><strong>Sidebar:</strong> Barra lateral fija con el logo del grupo (puede ser creado con IA). Menú vertical con enlaces a las secciones del sitio. Debe ser visible y funcional en todos los dispositivos.</li>
            <li><strong>Sección Presentación:</strong> Página de portada con tarjetas de cada integrante del equipo (nombre y foto, que puede ser una foto generada por IA o de su mascota).</li>
            <li><strong>Sección Individual por Integrante:</strong> Página para cada integrante con nombre completo, habilidades, 3 proyectos realizados, y 5 tecnologías representadas con íconos.</li>
            <li><strong>Sección con Datos desde Archivo JSON:</strong> Archivo con al menos 20 objetos (películas, libros, etc.). Mostrar los datos de manera dinámica (tarjetas o lista).</li>
            <li><strong>Sección con Datos desde API Pública:</strong> Consumir y mostrar datos desde una API pública.</li>
            <li><strong>Sección Bitácora:</strong> Describir los roles, organización y metodología (reuniones diarias, Trello, GitFlow).</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">Requisitos Técnicos y Funcionales</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>React Router para navegación sin recargar.</li>
            <li>Responsividad: diseño adaptable a móvil, tablet y escritorio.</li>
            <li>Componentización: reutilización de componentes.</li>
            <li>Deploy en Vercel.</li>
            <li>Repositorio en GitHub con commits claros.</li>
          </ul>
        </section>

      </div>
    </section>
  );
}
