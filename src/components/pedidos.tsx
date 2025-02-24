import { IconBrandWhatsapp } from "@tabler/icons-react";


const Pedidos = () => {
  const phoneNumber = "5537391771"; // Reemplaza con el número real
  const message = "¡Hola! Me gustaría hacer un pedido de pastes.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section className="h-screen w-full bg-white flex items-center justify-center text-black text-4xl font-bold">
      <div className="max-w-md mx-auto p-6 text-center">
        {/* Título */}
        <h2 className="text-4xl font-extrabold">
          ¿<span className="text-black">LISTO PARA</span>{" "}
          <span className="text-yellow-500">PEDIR</span>?
        </h2>
        <p className="text-gray-600 text-lg my-3">
          Mándanos un mensaje y nosotros tomamos tu orden
        </p>

        {/* Imagen */}
        <div className="flex justify-center">
          <img
            src="/entrega.png" // Reemplaza con la ruta correcta de la imagen
            alt="Pastes"
            className="w-full max-w-md rounded-lg shadow-lg border border-gray-200"
          />
        </div>

        <p className="text-slate-700 text-xs mt-4">
          Contactanos
        </p>

        {/* Botón de WhatsApp */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center bg-green-600 text-white font-semibold py-3 px-6 rounded-full text-lg shadow-md hover:bg-green-700 transition duration-300"
        >
          <IconBrandWhatsapp size={24} />
        </a>


      </div>
    </section>
  );
};

export default Pedidos;
