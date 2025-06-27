export default function Home() {
  return (
    <section className="min-h-screen bg-gray-100 p-8">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-2">
          Organización del Trabajo en Equipo
        </h1>
        <h2 className="text-2xl font-semibold mb-4">Bitácora</h2>
      </header>

      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md text-gray-800 leading-relaxed">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Descripción del Proyecto
          </h2>
          <p>
            Este proyecto es una aplicación web desarrollada en{" "}
            <strong>React</strong> como evolución del trabajo práctico anterior.
            Implementamos una <strong>Single Page Application (SPA)</strong> que
            presenta contenido del equipo, combinando animaciones, componentes
            reutilizables, consumo de datos y mejoras visuales.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Estructura y Contenidos del Proyecto
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Sección Bitácora:</strong> Descripción de roles,
              organización del trabajo y metodología usada (reuniones, GitFlow,
              documentación).
            </li>
            <li>
              <strong>Sidebar:</strong> Barra lateral fija con el logo del grupo
              (puede ser creado con IA). Menú vertical con enlaces visibles y
              funcionales en todos los dispositivos.
            </li>
            <li>
              <strong>Sección Presentación:</strong> Página de portada con
              tarjetas de cada integrante del equipo (nombre y foto).
            </li>
            <li>
              <strong>Sección Individual por Integrante:</strong> Página con
              nombre completo, habilidades, 3 proyectos realizados y 5
              tecnologías representadas con íconos.
            </li>
            <li>
              <strong>Sección con Datos desde Archivo JSON:</strong> Muestra
              dinámica de al menos 20 objetos (películas, libros, etc.) en
              tarjetas o lista.
            </li>
            <li>
              <strong>Sección con Datos desde API Pública:</strong> Consumir y
              mostrar datos desde una API pública.
            </li>
          </ul>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Integrantes del Grupo
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Agostina Poli</li>
            <li>Elizabeth Geno</li>
            <li>Heber Duarte</li>
            <li>Cristian Orihuela</li>
          </ul>
          <p className="mt-2">
            <strong>Comisión D - Grupo 3</strong>
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Links de la Entrega
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>2da Entrega</strong>
              <ul className="list-disc list-inside ml-5">
                <li>
                  Repositorio GitHub:{" "}
                  <a
                    href="https://github.com/corihuela75/FrontendGrupo5b"
                    className="text-blue-600 underline"
                  >
                    FrontendGrupo5b
                  </a>
                </li>
                <li>
                  Vercel:{" "}
                  <a
                    href="https://frontend-grupo5b.vercel.app/"
                    className="text-blue-600 underline"
                  >
                    frontend-grupo5b.vercel.app
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <strong>1ra Entrega</strong>
              <ul className="list-disc list-inside ml-5">
                <li>
                  Repositorio GitHub:{" "}
                  <a
                    href="https://github.com/agostinapoli/FrontendGrupo5"
                    className="text-blue-600 underline"
                  >
                    FrontendGrupo5
                  </a>
                </li>
                <li>
                  Vercel:{" "}
                  <a
                    href="https://frontend-grupo5.vercel.app/"
                    className="text-blue-600 underline"
                  >
                    frontend-grupo5.vercel.app
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Tecnologías Utilizadas
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>React.js (Vite)</li>
            <li>JavaScript</li>
            <li>HTML5 + CSS3</li>
            <li>Vercel (deploy)</li>
          </ul>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Organización y Metodología de Trabajo
          </h2>
          <p className="mb-4">
            El equipo estuvo conformado por cuatro integrantes:{" "}
            <strong>Cristian, Heber, Elizabeth y Agostina</strong>. Como el
            enfoque fue Front-End, se trabajó colaborativamente distribuyendo
            tareas según habilidades.
          </p>
          <p className="mb-4">
            Uno de los miembros asumió la organización general, otro registró
            reuniones y todos colaboraron tanto en diseño como en la
            implementación. Aunque sin cronograma fijo, se definieron metas
            semanales y se usaron Discord y WhatsApp para reuniones y
            comunicación.
          </p>
          <p>
            Se adoptó una metodología ágil utilizando <strong>Notion</strong>,{" "}
            <strong>GitHub</strong> (ramas por funcionalidad, issues y PRs), y
            se mantuvo un flujo de commits ordenado.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Trabajo en Equipo
          </h2>
          <p className="mb-4">
            El trabajo grupal fue fluido y comprometido. Si bien hubo
            diferencias en la carga, todos cumplieron sus tareas y colaboraron
            activamente. Las herramientas elegidas facilitaron el trabajo remoto
            y la toma de decisiones conjunta fortaleció la cohesión del equipo.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Mejoras Implementadas
          </h2>
          <ul className="list-disc list-inside space-y-4">
            <li>
              <strong>Animaciones Suaves:</strong> transiciones y efectos hover
              con Animate.css.
            </li>
            <li>
              <strong>Búsqueda y Filtros:</strong> buscador en JSON local con
              filtros por categoría.
            </li>
            <li>
              <strong>Paginación en API:</strong> navegación de datos de API
              externa con botones.
            </li>
            <li>
              <strong>Galería Interactiva:</strong> lightbox con navegación de
              imágenes en vista ampliada.
            </li>
          </ul>
        </div>

        <div className="mb-10">
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

        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Evaluación y Conclusión
          </h2>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>✅ Adaptabilidad a dispositivos móviles</li>
            <li>✅ Bitácora clara de cambios</li>
            <li>✅ Publicación en GitHub y Vercel</li>
            <li>✅ Uso de componentes, estados y props</li>
          </ul>
          <p>
            Este proyecto fue una experiencia enriquecedora tanto técnica como
            organizativamente. Se afianzaron conocimientos de React, manejo de
            datos desde JSON y APIs, y herramientas profesionales de gestión.
            Además, se fortalecieron habilidades de colaboración y resolución de
            problemas.
          </p>
        </div>
      </div>
    </section>
  );
}
