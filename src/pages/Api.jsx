import React, { useState, useEffect } from "react";

const PAGE_SIZE = 20; // 20 gatos de una vez

export default function Api() {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setLoading(true);
    fetch(`https://cataas.com/api/cats?limit=${PAGE_SIZE}&page=0`)
      .then(res => res.json())
      .then(data => {
        const urls = data.map(cat => `https://cataas.com/cat/${cat.id}`);
        setCats(urls);
        setCurrentIndex(0);
      })
      .catch(err => console.error("Error fetch cats:", err))
      .finally(() => setLoading(false));
  }, []);

  const currentCatUrl = cats[currentIndex];

  return (
    <div className="min-h-screen bg-purple-100 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <section className="w-full max-w-7xl mx-auto p-6 sm:p-8 md:p-10 bg-white rounded-2xl shadow-xl border border-blue-100">
        <h1 className="text-3xl font-bold mb-6 text-center text-brown-900">
          Galería de Gatitos 😻
        </h1>

        <p className="text-xl text-center text-brown-800 mb-10 max-w-2xl mx-auto">
          ¡Disfrutá de 20 michis, uno a la vez!
        </p>

        <div className="flex justify-center mb-10">
          {loading && <p className="text-brown-700 text-lg">Cargando gatito...</p>}

          {!loading && currentCatUrl && (
            <img
              src={currentCatUrl}
              alt={`Gatito ${currentIndex + 1}`}
              className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 
                         object-cover rounded-xl shadow-lg border-2 border-purple-800
                         transform transition-all duration-300 
                         hover:scale-105 hover:rotate-1 hover:shadow-xl"
            />
          )}

          {!loading && !currentCatUrl && (
            <p className="text-brown-700 text-lg">No hay gatitos para mostrar.</p>
          )}
        </div>

        <div className="text-center mb-10">
          <button
            onClick={() => setCurrentIndex(i => Math.max(i - 1, 0))}
            disabled={currentIndex === 0}
            className="mr-4 px-6 py-3 bg-purple-300 rounded-lg disabled:opacity-50"
          >
            ⬅️ Anterior
          </button>

          <span className="text-lg font-bold">
            Gato {currentIndex + 1} / {cats.length}
          </span>

          <button
            onClick={() => setCurrentIndex(i => Math.min(i + 1, cats.length - 1))}
            disabled={currentIndex === cats.length - 1}
            className="ml-4 px-6 py-3 bg-purple-300 rounded-lg disabled:opacity-50"
          >
            Siguiente ➡️
          </button>
        </div>
      </section>
    </div>
  );
}
