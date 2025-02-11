

import React from "react";

const kings = [
  {
    name: "Alan Jese Rivas",
    title: "El rey del paste",
    image: "/images/alan.png", // Reemplaza con la imagen real
  },
  {
    name: "Alberto Josue Rivas",
    title: "El rey del paste",
    image: "/images/alberto.png", // Reemplaza con la imagen real
  },
];

const KingsSection = () => {
  return (
    <div className="max-w-4xl mx-auto text-center p-6">
      {/* Title */}
      <h2 className="text-3xl font-bold">
        CONOCE A <span className="text-yellow-500">LOS REYES</span> 👑
      </h2>
      <p className="text-gray-600 mb-6">Del reino de los pastes</p>

      {/* Kings List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {kings.map((king, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <img
              src={king.image}
              alt={king.name}
              className="w-24 h-24 object-cover rounded-full border-4 border-white shadow-lg"
            />
            <h3 className="font-bold text-lg mt-4">{king.name}</h3>
            <p className="text-gray-500 italic">“{king.title}”</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KingsSection;
