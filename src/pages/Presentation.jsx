import { Typography } from "@material-tailwind/react";
import { ProfileCard } from "../components/ProfileCard";

export default function Presentation() {
    const Heber = {
        name: "Heber Duarte",
        profession: "Angular & React Developer",
        url_image: "/images/profiles-photo/profile_heber.jpg",
        social_media: {
            github: "https://github.com/Heber-739",
            linkedin: "https://www.linkedin.com/in/heber739/",
            instagram: "a"
        }
    }

    const Cris = {
        name: "Cristian Orihuela",
        profession: "Administrativo-contable",
        url_image: "/images/profiles-photo/cris.jpg",
        social_media: {
            github: "https://github.com/corihuela75",
            linkedin: "https://www.linkedin.com/in/cristian-orihuela",
            instagram: "a"
        }
    }
    const Eli = {
        name: "Eli",
        profession: "Domadora de michis",
        url_image: "/images/profiles-photo/Eli.jpg",
        social_media: {
            github: "ha",
            linkedin: "a",
            instagram: "a"
        }
    }

    const Agos = {
        name: "Agostina",
        profession: "Proffesional Instagrammer",
        url_image: "/images/profiles-photo/Agos.jpg",
        social_media: {
            github: "a",
            linkedin: "a",
            instagram: "a"
        }
    }





    return (
        <section className="flex flex-col">
            <div className="flex flex-col py-9 px-1 gap-7">
                <Typography variant="h1" className="text-4xl text-center md:text-5xl font-bold mb-6 ">Presentación del equipo</Typography>
                <Typography variant="lead" className="text-justify">
                    <p className="text-lg md:text-xl px-4">
                        Somos estudiantes de la materia <strong>Desarrollo de Sistemas Web (Frontend)</strong> de la <strong>Tecnicatura 
                        Superior en Desarrollo de Software</strong>, y este proyecto representa una muestra de lo que hemos aprendido y 
                        desarrollado a lo largo de nuestra formación.
                    </p>
                    <p className="text-lg md:text-xl px-4 mt-4">
                        A través de esta página, buscamos no solo mostrar nuestras habilidades técnicas en el uso de <strong>React</strong> y 
                        <strong> Material Tailwind</strong>, sino también presentarnos como equipo: un grupo de personas comprometidas, creativas 
                        y con muchas ganas de seguir creciendo en el mundo del desarrollo web.
                    </p>
                </Typography>
            </div>
            <div className="flex flex-wrap justify-around gap-y-3 my-12">
                {/* <ProfileCard name="" subtitle="" redes={[]} img="" ></ProfileCard> */}
                <ProfileCard user={Agos} ></ProfileCard>
                <ProfileCard user={Eli} ></ProfileCard>
                <ProfileCard user={Cris}  ></ProfileCard>
                <ProfileCard user={Heber} ></ProfileCard>
            </div>
        </section>
    );
}