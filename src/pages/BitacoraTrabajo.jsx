export default function BitacoraTrabajo() {
  return (
    <section className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">📝 BITÁCORA DEL TRABAJO</h1>
          <h2 className="text-2xl mb-4">DESARROLLO WEB FRONT-END</h2>
        </header>

        <article className="bg-white p-8 rounded-lg shadow-md space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold mb-3">👥 Equipo</h2>
            <p>
              El equipo estuvo conformado por cuatro integrantes: <strong>Cristian, Heber, Elizabeth y Agostina</strong>. Como el enfoque del proyecto fue exclusivamente en el desarrollo Front End se trabajó de manera colaborativa, distribuyendo las tareas en función de los intereses y habilidades de cada integrante.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">🗓️ Organización y Metodología de Trabajo</h2>
            <p>A lo largo de las reuniones grupales se fueron definiendo las secciones del proyecto y dividiendo el trabajo por consenso.</p>
            <ul className="list-disc list-inside mt-3 space-y-2">
              <li><strong>Heber</strong>, al tener experiencia previa en herramientas similares, tomó un rol más activo en la organización general del proyecto, ayudando a definir objetivos y a distribuir tareas con claridad.</li>
              <li><strong>Cristian</strong> se encargó de registrar las reuniones y redactar minutas que ayudaron a mantener un buen seguimiento del proceso.</li>
              <li>Todos los miembros colaboraron tanto en el diseño como en la implementación del sitio web, apoyándose mutuamente cuando surgían dudas técnicas o bloqueos.</li>
            </ul>
            <p className="mt-3">
              La organización del trabajo fue dinámica. No se estableció un cronograma ni sprints fijos, pero sí se acordaron metas semanales y se avanzó en función de los tiempos y la disponibilidad de cada uno de los integrantes.
            </p>
            <p>
              Las decisiones se tomaron en conjunto durante las reuniones, que se realizaron aproximadamente una vez por semana o cada quince días por Discord. A su vez se utilizó WhatsApp como canal de comunicación ágil para coordinar avances, revisar dudas o avisar sobre nuevos pull requests.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">⚙️ Herramientas de Gestión</h2>
            <p>Se adoptó una metodología ágil y colaborativa utilizando:</p>
            <ul className="list-disc list-inside mt-3 space-y-2">
              <li><strong>Notion</strong> para tomar notas, organizar tareas y registrar acuerdos importantes.</li>
              <li><strong>GitHub</strong> como repositorio central del proyecto, trabajando con ramas por funcionalidad y manteniendo la trazabilidad del trabajo mediante pull requests.</li>
              <li>Uso de <strong>issues</strong> en GitHub para asignar tareas, registrar avances y mantener actualizada la organización general.</li>
              <li>Un flujo de commits ordenado, registrando cada avance concreto con mensajes claros.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">🤝 Trabajo en Equipo</h2>
            <p>El trabajo en equipo se desarrolló con fluidez y compromiso.</p>
            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>Si bien la carga de tareas no fue completamente equitativa en todos los casos, todos los integrantes cumplieron con sus responsabilidades y mantuvieron una actitud colaborativa.</li>
              <li>La combinación de GitHub, Notion y WhatsApp resultó muy efectiva para coordinar el trabajo en un entorno remoto.</li>
              <li>La toma de decisiones por consenso favoreció la cohesión del grupo y permitió avanzar sin mayores contratiempos.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">🎯 Conclusión y Aprendizajes</h2>
            <p>A modo de cierre, el proyecto fue una experiencia enriquecedora tanto en lo técnico como en lo organizativo.</p>
            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>Aprendimos a trabajar con <strong>React</strong> de forma práctica.</li>
              <li>Integramos datos desde archivos <strong>JSON</strong> y <strong>APIs públicas</strong>.</li>
              <li>Aplicamos herramientas profesionales para gestionar un proyecto real.</li>
              <li>Desarrollamos habilidades de colaboración, comunicación y resolución de problemas que consideramos fundamentales para cualquier entorno laboral dentro del ámbito de la tecnología.</li>
            </ul>
          </section>
        </article>
      </div>
    </section>
  );
}
