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
    role: "Abogada en transición tecnológica",
    image: "/images/profiles-photo/Eli.jpg",
    bio: "Conectando el mundo legal con regulación digital y protección de datos para impulsar proyectos seguros e innovadores.",
    social_media: {
      github: "https://github.com/LizGeno",
      linkedin: "https://www.linkedin.com/in/eli-catmaster",
      instagram: "https://www.instagram.com/eli.y.michis"
    },
    experience: [
      {
        company: "Refugio Gatuno",
        role: "Coordinadora de Bienestar Felino",
        period: "2021 - Presente",
        description: "Implementación de espacios colaborativos y sistemas de adopción responsable."
      },
      {
        company: "Zen Code",
        role: "Coach de mindfulness felino",
        period: "2018 - 2021",
        description: "Facilitación de sesiones relajantes para devs con ayuda de michis."
      }
    ],
    contact: {
      email: "eli.michis@example.com",
      phone: "+54 11 2345-6789",
      location: "Corrientes, Argentina"
    }
  },
  {
    name: "Agostina",
    role: "Professional Instagrammer",
    image: "/images/profiles-photo/Agos.jpg",
    bio: "Agos domina el arte de contar historias visuales y captar la atención en redes.",
    social_media: {
      github: "https://github.com/agos-media",
      linkedin: "https://www.linkedin.com/in/agostina-social",
      instagram: "https://www.instagram.com/agos.visuals"
    },
    experience: [
      {
        company: "SocialShine",
        role: "Content Creator",
        period: "2020 - Presente",
        description: "Gestión de campañas visuales, reels y colaboraciones con influencers."
      },
      {
        company: "Freelance",
        role: "Community Manager",
        period: "2017 - 2020",
        description: "Administración de marcas personales, planificación de contenido y métricas."
      }
    ],
    contact: {
      email: "agostina.visuals@example.com",
      phone: "+54 11 9876-5432",
      location: "Rosario, Argentina"
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
      instagram: "https://www.instagram.com/heber.dev"
    },
    experience: [
      {
        company: "EDUCONEXION",
        role: "Desarrollador Frontend",
        period: "2021 - Presente",
        description: "Desarrollo de interfaces en React y Angular, con enfoque en UX y performance."
      },
      {
        company: "SoftDev SRL",
        role: "Desarrollador Junior",
        period: "2019 - 2021",
        description: "Soporte en proyectos web y mantenimiento de aplicaciones en Angular."
      }
    ],
    contact: {
      email: "heber.duarte@example.com",
      phone: "+54 11 3210-6543",
      location: "Mendoza, Argentina"
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
    },
    experience: [
      {
        company: "EDUCONEXION",
        role: "Responsable administrativo-contable",
        period: "2020 - Presente",
        description: "Gestión integral de procesos contables, conciliaciones bancarias, facturación electrónica y reportes financieros mensuales."
      },
      {
        company: "Soluciones IT SRL",
        role: "Asistente contable",
        period: "2015 - 2020",
        description: "Apoyo en tareas de registración contable, manejo de cuentas corrientes y armado de balances anuales."
      }
    ],
    contact: {
      email: "cristian.orihuela@example.com",
      phone: "+54 11 4567-8910",
      location: "Buenos Aires, Argentina"
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
      </div>
    </section>
  );
}
