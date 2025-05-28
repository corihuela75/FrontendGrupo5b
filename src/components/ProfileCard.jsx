// components/ProfileCard.jsx
export default function ProfileCard({ member, onClose }) {
  return (
    <div className="mt-8 p-6 bg-white rounded shadow">
      <div className="flex items-center gap-4">
        <img src={member.image} alt={member.name} className="w-64 h-64 rounded-full" />
        <div>
          <h3 className="text-xl font-bold">{member.name}</h3>
          <p className="text-gray-600 italic">{member.role}</p>
        </div>
      </div>
      <p className="mt-4 text-gray-700">{member.bio}</p>
      <button
        className="mt-4 px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
        onClick={onClose}
      >
        Cerrar perfil
      </button>
    </div>
  );
}