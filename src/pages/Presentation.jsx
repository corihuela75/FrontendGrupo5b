import members from "./../data/members.json";
import { Mail, Github } from "lucide-react";
import { Button } from "../components/ui/button";
import TeamCard from "../components/TeamCard";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function Presentation() {
  const navigate = useNavigate();


  return (
    <section className="min-h-screen bg-gray-100 p-8">
      {/* Header */}
      <div className="max-w-4xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-2">Hola! somos el grupo 5</h1>
          <p className="text-lg text-gray-600"> de la materia: Desarrollo de Sistemas Web - Front End</p>

          {/* Botones */}
          <div className="mt-4 flex justify-center gap-4">
            <Button variant="outline" onClick={() => navigate("/bitacora")}>
              <Mail className="w-4 h-4 mr-2" /> Mirá nuestra Bitacora
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                window.open("https://github.com/agostinapoli/FrontendGrupo5", "_blank")
              }
            >
              <Github className="w-4 h-4 mr-2" /> Ir al repo en GitHub
            </Button>
          </div>
        </header>

        {/* Lista de integrantes o perfil individual */}
        <section className="mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {members.map((member) => (

              <Link to={`/presentation/${member.id}`}>
                <TeamCard key={member.name} member={member} />
              </Link>


            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
