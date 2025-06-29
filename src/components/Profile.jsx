// import { useParams } from "react-router-dom";
// import ProfileCard from "./ProfileCard";
// import { Roadmap } from "../pages/Roadmap";
// import members from "./../data/members.json";

// export default function Profile() {
//   const { id } = useParams();
//   const member = members.find((m) => m.id === id);
//   return (
//     <>
//       <ProfileCard member={member} />
//       <Roadmap integrante={member.name} />
//     </>
//   );
// }

import { useParams } from "react-router-dom";
import ProfileCard from "./ProfileCard";
import { GitHubCarousel } from "../components/GitHubCarousel";
import members from "./../data/members.json";

export default function Profile() {
  const { id } = useParams();
  const member = members.find((m) => m.id === id);

  if (!member) return <p className="text-center">Integrante no encontrado</p>;

  const githubUsername = member.social_media.github.split("github.com/")[1];

  return (
    <>
      <ProfileCard member={member} />
      <GitHubCarousel username={githubUsername} />
    </>
  );
}
