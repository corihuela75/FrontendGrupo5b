import { Button } from "@material-tailwind/react";
import { CardDefault } from "../component/CardDefault";

// pages/Home.jsx
export default function Home() {
    return (
        <>
    <h1 className="text-2xl">Página de Inicio</h1>
    <div className="items-center justify-center">
            <Button variant="filled">filled</Button>
      <Button variant="gradient">gradient</Button>
      <Button variant="outlined">outlined</Button>
      <Button variant="text">text</Button>
        </div>
    <h1 className="text-2xl">Página de Inicio</h1>
    <CardDefault></CardDefault>
    </>
);
  }