import React, { useState, useEffect } from "react";

const MAX_CATS = 8;

export default function Api() {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCat = () => {
    if (loading) return;
    setLoading(true);
    fetch("https://cataas.com/cat?json=true")
      .then(res => res.json())
      .then(data => {
        const url = data.url.startsWith("http")
          ? data.url
          : "https://cataas.com" + data.url;

        setCats(prevCats => {
          const newCats = [...prevCats, url];
          if (newCats.length > MAX_CATS) {
            newCats.shift();
          }
          return newCats;
        });
      })
      .catch(err => console.error("Error fetch cat:", err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchCat();
  }, []);

  return (
    <div className="min-h-screen bg-purple-100 flex items-center justify-center p-4 sm:p-6 lg:p-8">
    <section className="w-full max-w-7xl mx-auto p-6 sm:p-8 md:p-10 bg-white rounded-2xl shadow-xl border border-blue-100">
    <h1 className="text-3xl font-bold mb-6 text-center text-brown-900">
        Galería de Gatitos 😻</h1>

    <p className="text-xl text-center text-brown-800 mb-10 max-w-2xl mx-auto">
          ¡Dale un click al botón para descubrir nuevos y adorables michis!
        </p>

  <div className="flex flex-wrap gap-6 justify-center mb-10">
    {cats.length === 0 && !loading && (
      <p className="text-brown-700 text-lg">No hay gatitos aún...</p>
    )}

    {cats.map((url, index) => (
      <img
        key={index}
        src={url}
        alt={`Gatito ${index + 1}`}
        className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 
                  object-cover rounded-xl shadow-lg border-2 border-purple-800
                  transform transition-all duration-300 
                  hover:scale-105 hover:rotate-1 hover:shadow-xl"
      />
    ))}
  </div>

  <div className="text-center">
    <button
      onClick={fetchCat}
      disabled={loading}
      className="px-10 py-4 
                bg-purple-200 
                text-brown 
                font-semibold rounded-full
                shadow-lg 
                hover:bg-purple-300 
                hover:scale-105
                hover:shadow-xl 
                hover:scale-105  
                active:scale-98
                active:shadow-inner
                transition-all duration-300 ease-in-out
                disabled:opacity-50 disabled:cursor-not-allowed
                flex items-center justify-center mx-auto text-lg"
    >
      {loading ? (
              <>
                <span className="animate-spin mr-2">🔄</span> Cargando michi...
              </>
            ) : (
              "Otro 🐱 por favor"
            )}
    </button>
  </div>
  
</section>
</div>
  );
}
