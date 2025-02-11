import React from "react";

const testimonials = [
  {
    name: "@tony_aquinoo",
    text: "No tenía idea de que eran los pastes, ahora es mi comida favorita",
    image: "/images/tony.png", // Reemplazar con la ruta real
  },
  {
    name: "@elvisscochito",
    text: "Iba tarde a la escuela, pero gracias al Rey pude comer y llegar a tiempo",
    image: "/images/elvis.png", // Reemplazar con la ruta real
  },
  {
    name: "@joelconlentes",
    text: "Ya faltaba comida diferente en Monterrey",
    image: "/images/joel.png", // Reemplazar con la ruta real
  },
];

const Testimonials = () => {
  return (
    <div className="max-w-5xl mx-auto text-center p-6">
      <h2 className="text-3xl font-bold">
        LO <span className="text-yellow-500">QUE DICEN</span> DEL REY
      </h2>
      <p className="text-gray-600 mb-6">Comentarios de nuestros más reales clientes</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-24 h-24 object-cover rounded-full border-4 border-white shadow-lg"
            />
            <p className="text-green-700 font-semibold text-lg mt-4">
              “{testimonial.text}”
            </p>
            <p className="text-yellow-500 font-medium mt-2">{testimonial.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
