import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export function GitHubCarousel({ username = "corihuela75" }) {
  const [repos, setRepos] = useState([]);

  const techLogos = {
    JavaScript: "/images/logos/js.png",
    Angular: "/images/logos/angular.png",
    TypeScript: "/images/logos/ts.png",
    HTML: "/images/logos/html.png",
    CSS: "/images/logos/css.png",
    Python: "/images/logos/python.png",
    React: "/images/logos/react.png",
    Vue: "/images/logos/vue.png",
    Node: "/images/logos/node.png",
    csharp: "/images/logos/csharp.png",
    default: "/images/logos/code.png",
  };

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((repo) => repo.description);
        setRepos(filtered);
      });
  }, [username]);

  return (
    <div className="w-full max-w-6xl mx-auto p-4 relative">
      <h2 className="text-3xl font-bold mb-10 text-center">Mis proyectos en GitHub</h2>

      {/* Swiper */}
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        }}
        autoplay={{ delay: 4000 }}
        loop={true}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {repos.map((repo) => (
          <SwiperSlide key={repo.id}>
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-between min-h-[500px]">
              <img
                src={techLogos[repo.language] || techLogos.default}
                alt={repo.language}
                className="w-40 h-40 object-contain mb-4"
              />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-center">{repo.name}</h3>
                <p className="text-gray-600 text-sm text-center mb-2 line-clamp-3">{repo.description}</p>
                <p className="text-sm text-blue-600 mb-3">{repo.language || "Lenguaje no especificado"}</p>
              </div>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              >
                Ver en GitHub
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Botones personalizados de navegación */}
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>

      {/* Paginación */}
      <div className="custom-pagination mt-8 flex justify-center space-x-2" />

      {/* Estilos embebidos */}
      <style>
        {`
          .custom-pagination .swiper-pagination-bullet {
            background-color: #3b82f6;
            opacity: 1;
            width: 10px;
            height: 10px;
            margin: 0 6px;
            border-radius: 9999px;
            transition: background-color 0.3s ease;
          }

          .custom-pagination .swiper-pagination-bullet-active {
            background-color: #1d4ed8;
          }

          .swiper-button-prev,
          .swiper-button-next {
            color: #2563eb;
            top: 45%;
            width: 40px;
            height: 40px;
            background: white;
            border-radius: 50%;
            box-shadow: 0 2px 8px rgba(0,0,0,0.15);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10;
          }

          .swiper-button-prev {
            left: -10px;
          }

          .swiper-button-next {
            right: -10px;
          }
        `}
      </style>
    </div>
  );
}
