export default function BitacoraTrabajo() {
  return (
    <section className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">BITÁCORA DEL TRABAJO</h1>
          <h2 className="text-2xl mb-4">DESARROLLO WEB FRONT-END</h2>
        </header>

        <article className="bg-white p-8 rounded-lg shadow-md space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold mb-3">📚 Descripción del Proyecto</h2>
            <p>
              Este proyecto es una aplicación web desarrollada en <strong>React</strong> como evolución del trabajo práctico anterior. Implementamos una <strong>Single Page Application (SPA)</strong> que presenta contenidos ficticios del equipo, combinando animaciones, componentes reutilizables, consumo de datos y mejoras visuales.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">👨‍💻 Integrantes del Grupo</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Agostina Poli</li>
              <li>Elizabeth Geno</li>
              <li>Heber Duarte</li>
              <li>Cristian Orihuela</li>
            </ul>
            <p className="mt-2"><strong>Comisión D - Grupo 3</strong></p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">🌐 Links de 2da. Entrega</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>📁 Repositorio: <a className="text-blue-600 underline" href="https://github.com/corihuela75/FrontendGrupo5b" target="_blank">https://github.com/corihuela75/FrontendGrupo5b</a></li>
              <li>🚀 Sitio en Vercel: <a className="text-blue-600 underline" href="https://frontend-grupo5b.vercel.app/" target="_blank">https://frontend-grupo5b.vercel.app/</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">🌐 Links de 1ra. Entrega</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>📁 Repositorio: <a className="text-blue-600 underline" href="https://github.com/agostinapoli/FrontendGrupo5" target="_blank">https://github.com/agostinapoli/FrontendGrupo5</a></li>
              <li>🚀 Sitio en Vercel: <a className="text-blue-600 underline" href="https://frontend-grupo5.vercel.app/" target="_blank">https://frontend-grupo5.vercel.app/</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">🔧 Tecnologías Utilizadas</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>React.js (Vite)</li>
              <li>JavaScript</li>
              <li>HTML5 + CSS3</li>
              <li>Vercel (deploy)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">🗓️ Organización y Metodología de Trabajo</h2>
            <p>A lo largo de las reuniones grupales se fueron definiendo las secciones del proyecto y distribuyendo las tareas por consenso.</p>
            <p>Uno de los integrantes, con experiencia previa en herramientas similares, asumió un rol más activo en la organización general, colaborando en la definición de objetivos y en la asignación clara de responsabilidades. Otro miembro se encargó de registrar las reuniones y elaborar minutas, lo que permitió un adecuado seguimiento del proceso.</p>
            <p>Todos los participantes contribuyeron tanto en el diseño como en la implementación del sitio web, brindándose apoyo mutuo ante dudas técnicas o bloqueos.</p>
            <p>La organización del trabajo fue flexible y se adaptó a la disponibilidad de cada integrante. Aunque no se estableció un cronograma ni sprints formales, se fijaron metas semanales para guiar el avance.</p>
            <p>Las decisiones se tomaron de manera conjunta durante reuniones realizadas, en general, una vez por semana o cada quince días a través de Discord. Además, se utilizó WhatsApp como canal de comunicación ágil para coordinar avances, resolver consultas y notificar nuevos pull requests.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">⚙️ Herramientas de Gestión</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Notion</strong> para tomar notas, organizar tareas y registrar acuerdos importantes.</li>
              <li><strong>GitHub</strong> como repositorio central del proyecto, trabajando con ramas por funcionalidad y manteniendo la trazabilidad del trabajo mediante pull requests.</li>
              <li>Uso de <strong>issues</strong> en GitHub para asignar tareas, registrar avances y mantener actualizada la organización general.</li>
              <li>Un flujo de commits ordenado, registrando cada avance concreto con mensajes claros.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">🤝 Trabajo en Equipo</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Si bien la carga de tareas no fue completamente equitativa en todos los casos, todos los integrantes cumplieron con sus responsabilidades y mantuvieron una actitud colaborativa.</li>
              <li>La combinación de GitHub, Notion y WhatsApp resultó muy efectiva para coordinar el trabajo en un entorno remoto.</li>
              <li>La toma de decisiones por consenso favoreció la cohesión del grupo y permitió avanzar sin mayores contratiempos.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">✨ Mejoras implementadas</h2>
            <p>A continuación detallamos las <strong>4 mejoras</strong> aplicadas al proyecto, elegidas del listado propuesto:</p>
            <ul className="list-disc list-inside space-y-2 mt-3">
              <li>
                <strong>🎨 Mejora de Interfaz: Animaciones Suaves</strong><br />
                Se aplicaron transiciones animadas, efectos <code>hover</code> y se utilizó Animate.css para mayor fluidez visual.
              </li>
              <li>
                <strong>🔍 Búsqueda y Filtros en JSON Local</strong><br />
                Implementamos un buscador y selectores desplegables para mejorar la accesibilidad al contenido.
              </li>
              <li>
                <strong>📄 Paginación para API Externa</strong><br />
                Se consumió una API y se aplicó paginación con botones Anterior / Siguiente.
              </li>
              <li>
                <strong>📷 Galería de Imágenes Interactiva</strong><br />
                Incluimos una galería en <code>grid</code> con lightbox, vista ampliada y navegación.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">✅ Evaluación cumplida</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>✅ Adaptabilidad a dispositivos móviles</li>
              <li>✅ Bitácora clara de cambios</li>
              <li>✅ Publicación en GitHub y Vercel</li>
              <li>✅ Uso de componentes, estados y props</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">📌 Notas adicionales</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>El proyecto fue desarrollado en equipo usando Git y GitHub, dividiendo tareas por componentes y rutas.</li>
              <li>Todos los datos se cargan desde un JSON local o desde la API externa.</li>
              <li>La SPA no requiere recarga completa del navegador gracias a React Router DOM.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">🎯 Conclusión y Aprendizajes</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Aprendimos a trabajar con <strong>React</strong> de forma práctica.</li>
              <li>Integramos datos desde archivos <strong>JSON</strong> y <strong>APIs públicas</strong>.</li>
              <li>Aplicamos herramientas profesionales para gestionar un proyecto real.</li>
              <li>Desarrollamos habilidades de colaboración, comunicación y resolución de problemas fundamentales en tecnología.</li>
            </ul>
          </section>
        </article>
      </div>
    </section>
  );
}
