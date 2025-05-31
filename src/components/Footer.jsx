// src/components/Footer.jsx
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Sección de copyright */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-sm">
            © {new Date().getFullYear()} Grupo 5. Todos los derechos reservados.
          </p>
        </div>

        {/* Enlaces útiles o de navegación */}
        <nav className="flex flex-wrap justify-center gap-6">
          <a href="/home" className="text-sm hover:text-white transition-colors">
            Inicio
          </a>
          <a href="/presentation" className="text-sm hover:text-white transition-colors">
            Presentación
          </a>
          <a href="/roadmap" className="text-sm hover:text-white transition-colors">
            Roadmap
          </a>
        </nav>

        {/* Iconos sociales o de contacto */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <a
            href="mailto:tuemail@dominio.com"
            className="hover:text-white transition"
            aria-label="Enviar email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/tu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/tu-perfil/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
