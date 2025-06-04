export default function Home() {
  return (
    <section className="min-h-screen bg-gray-100 p-8">

      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4"> Objetivo General del Trabajo</h1>
      </header>

      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md text-gray-800 leading-relaxed">
        <p className="text-lg mb-10 text-center">
          Desarrollar una Single Page Application (SPA) usando React y React Router, aplicando buenas prácticas
          de diseño y organización. El proyecto debe incluir el consumo de datos desde archivos locales (JSON) y
          APIs externas. Además, debe estar desplegado en la nube con Vercel y gestionado con GitHub.
        </p>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Organización del Trabajo en Equipo
          </h2>
          <p>
            El equipo debe tener 4 integrantes, con roles definidos como: Frontend, Backend, Documentación y Coordinación.
            El trabajo colaborativo debe reflejarse en una bitácora final donde se explique cómo se organizaron y qué metodología utilizaron.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Estructura y Contenidos del Proyecto
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Sidebar:</strong> Barra lateral fija con el logo del grupo (puede ser creado con IA). Menú vertical con enlaces visibles y funcionales en todos los dispositivos.
            </li>
            <li>
              <strong>Sección Presentación:</strong> Página de portada con tarjetas de cada integrante del equipo (nombre y foto).
            </li>
            <li>
              <strong>Sección Individual por Integrante:</strong> Página con nombre completo, habilidades, 3 proyectos realizados y 5 tecnologías representadas con íconos.
            </li>
            <li>
              <strong>Sección con Datos desde Archivo JSON:</strong> Muestra dinámica de al menos 20 objetos (películas, libros, etc.) en tarjetas o lista.
            </li>
            <li>
              <strong>Sección con Datos desde API Pública:</strong> Consumir y mostrar datos desde una API pública.
            </li>
            <li>
              <strong>Sección Bitácora:</strong> Descripción de roles, organización del trabajo y metodología usada (reuniones, Trello, GitFlow).
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Requisitos Técnicos y Funcionales
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>React Router para navegación sin recargar.</li>
            <li>Diseño responsivo: adaptable a móvil, tablet y escritorio.</li>
            <li>Uso de componentes reutilizables.</li>
            <li>Despliegue en Vercel.</li>
            <li>Repositorio en GitHub con commits claros y organizados.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
