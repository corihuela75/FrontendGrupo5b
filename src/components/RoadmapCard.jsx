// RoadmapCard.jsx (o dentro del componente que renderiza cada sección del roadmap)

export default function RoadmapCard({ title, items }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 mt-4">
      <h3 className="text-2xl font-bold text-blue-800 mb-4 text-center">{title}</h3>
      <ul className="space-y-3 text-gray-700 list-disc list-inside">
        {items.map((item, index) => (
          <li key={index} className="pl-1">{item}</li>
        ))}
      </ul>
    </div>
  );
}