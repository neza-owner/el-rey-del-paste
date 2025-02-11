import React from "react";

const Pedidos = () => {
  const phoneNumber = "5537391771"; // Reemplaza con el número real
  const message = "¡Hola! Me gustaría hacer un pedido de pastes.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="max-w-lg mx-auto p-6 text-center">
      <h2 className="text-3xl font-bold">
        ¿<span className="text-black">LISTO PARA</span>{" "}
        <span className="text-yellow-500">PEDIR</span>?
      </h2>
      <p className="text-gray-600 my-2">
        Mándanos un mensaje y nosotros tomamos tu orden
      </p>

      <div className="flex justify-center">
        <img
          src="/images/pastes.png" // Reemplaza con la ruta correcta de la imagen
          alt="Pastes"
          className="w-full max-w-sm rounded-lg shadow-lg"
        />
      </div>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block bg-green-600 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 hover:bg-green-700 transition duration-300"
      >
        <img src="/images/whatsapp-icon.png" alt="WhatsApp" className="w-5 h-5" />
        Pedir por WhatsApp
      </a>

      <p className="text-gray-500 text-sm mt-3">
        ¡No olvides que en sucursal te daremos cuponera por tu compra!
      </p>
    </div>
  );
};

export default Pedidos;
