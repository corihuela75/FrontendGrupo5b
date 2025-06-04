import { useParams } from "react-router-dom";
import ProfileCard from "./ProfileCard";
import { Roadmap } from "../pages/Roadmap";
import members from "./../data/members.json";

export default function Profile() {
  const { id } = useParams();
  const member = members.find((m) => m.id === id);
  return (
    <>
      <ProfileCard member={member} />
      <Roadmap integrante={member.name} />
    </>
  );
}
