// components/TeamCard.jsx
import { Card, CardContent } from "./ui/card";
import { Github, Linkedin, Instagram } from "lucide-react";

export default function TeamCard({ member, onClick }) {
  return (
    <Card onClick={onClick} className="cursor-pointer">
      <CardContent className="p-6 flex flex-col items-center">
        <img src={member.image} alt={member.name} className="rounded-full w-36 h-36 mb-4" />
        <p className="text-lg font-medium text-gray-700 mb-2">{member.name}</p>
        <div className="flex gap-4">
          <Github className="w-6 h-6 text-gray-500 hover:text-black" />
          <Linkedin className="w-6 h-6 text-blue-600 hover:text-blue-800" />
          <Instagram className="w-6 h-6 text-pink-500 hover:text-pink-700" />
        </div>
      </CardContent>
    </Card>
  );
}