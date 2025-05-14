import { Typography } from "@material-tailwind/react";
import { ProfileCard } from "../components/ProfileCard";

export default function Presentation() {
    const Heber = {
        name:"Heber Duarte",
        profession: "Angular & React Developer",
        url_image:"/public/images/profiles-photo/profile_heber.jpg",
        social_media:{
            github:"https://github.com/Heber-739",
            linkedin: "https://www.linkedin.com/in/heber739/",
            instagram:"a"
        }
    }

    const Cris = {
        name:"Cristian",
        profession: "Heroe del Voley",
        url_image:"/public/images/profiles-photo/crisjpg.jpg",
        social_media:{
            github:"a",
            linkedin: "a",
            instagram:"a"
        }
    }
    const Eli = {
        name:"Eli",
        profession: "Domadora de michis",
        url_image:"/public/images/profiles-photo/Eli.jpg",
        social_media:{
            github:"ha",
            linkedin: "a",
            instagram:"a"
        }
    }
    
    const Agos = {
        name:"Agostina",
        profession: "Proffesional Instagrammer",
        url_image:"/public/images/profiles-photo/Agos.jpg",
        social_media:{
            github:"a",
            linkedin: "a",
            instagram:"a"
        }
    }













    return (
        <section className="flex flex-col">
            <div className="flex flex-col py-9 px-1 gap-7">
                <Typography variant="h1" className="text-3xl text-center ">Presentación del equipo</Typography>
                <Typography variant="lead" className="text-justify">
        Material Tailwind is an easy to use components library for Tailwind CSS
        and Material Design. It provides a simple way to customize your
        components, you can change the colors, fonts, breakpoints and everything
        you need.
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