import { useState } from "react";

const pastes = [
  { id: 1, name: "Carne con papas", type: "Salados", image: "/pastes/03.jpg", isFavorite: true },
  { id: 2, name: "Hawaiano", type: "Salados", image: "/pastes/01.jpg", isFavorite: true },
  { id: 3, name: "Frijol con chorizo", type: "Salados", image: "/pastes/06.jpg", isFavorite: true },
  { id: 4, name: "Mole verde", type: "Salados", image: "/pastes/02.jpg" },
  { id: 5, name: "Chicharrón", type: "Salados", image: "/pastes/04.jpg" },
  { id: 6, name: "Tinga de pollo", type: "Salados", image: "/pastes/05.jpg" }
];

export default function Menu() {
  const [filter, setFilter] = useState("Todos");

  const filteredPastes =
    filter === "Todos" ? pastes : pastes.filter((paste) => paste.type === filter);

  return (
    <section id="menu" className="max-w-4xl mx-auto text-center py-10">
      <h1 className="text-4xl font-bold">
        PASTES DEL <span className="text-yellow-500">REY</span>
      </h1>
      <p className="text-gray-600">Conoce el menú completo de la realeza</p>

      <div className="flex justify-center gap-4 my-6">
        {["Todos", "Salados", "Dulces"].map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-lg ${filter === category ? "bg-yellow-500 text-white" : "bg-gray-200"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {filteredPastes.map((paste) => (
          <div key={paste.id} className="border rounded-lg p-3 shadow-md">
            <img src={paste.image} alt={paste.name} className="w-full rounded-lg mb-3" />
            <h3 className="text-lg font-semibold">{paste.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
