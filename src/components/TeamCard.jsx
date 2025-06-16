// components/TeamCard.jsx

// TARJETA DE MIEMBRO DEL EQUIPO (RESUMIDA)

import { Card, CardContent } from "./ui/card";
import { Github, Linkedin, Instagram } from "lucide-react";

export default function TeamCard({ member, onClick }) {
  return (
    <Card onClick={onClick} className="cursor-pointer">
      <CardContent className="p-6 flex flex-col gap-2 items-center">
        <img
          src={member.image}
          alt={member.name}
          className="rounded-full w-36 h-36 mb-4"
        />
        <p className="text-lg font-medium text-gray-700 mb-2">{member.name}</p>
        <div className="flex gap-8">
          {member.social_media.github && (
            <a
            onClick={(e) => e.stopPropagation()}
              href={member.social_media.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="p-2 rounded-full border-2 hover:border-black hover:shadow-lg hover:shadow-black/40
               bg-gray-100 transition-transform duration-300 hover:scale-125 hover:bg-gray-700 hover:text-white">
                <Github className="w-6 h-6 text-black-500" />
              </div>
            </a>
          )}
          {member.social_media.linkedin && (
            <a
            onClick={(e) => e.stopPropagation()}
              href={member.social_media.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="p-2 rounded-full border-2 hover:border-blue-900 bg-gray-100 text-blue-800 hover:shadow-lg hover:shadow-blue-800/40
               transition-transform duration-300 hover:scale-125 hover:bg-blue-500 hover:text-white">
                <Linkedin className="w-6 h-6 "/>
              </div>
            </a>
          )}
          {member.social_media.instagram && (
            <a
            onClick={(e) => e.stopPropagation()}
              href={member.social_media.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="p-2 rounded-full border-2 hover:border-pink-900 bg-gray-100 text-pink-500 hover:shadow-lg hover:shadow-pink-800/40
               transition-transform duration-300 hover:scale-125 hover:bg-pink-500 hover:text-white">
                <Instagram className="w-6 h-6 " />
              </div>
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
