import crown from "../assets/crown.svg";
import "../styles/hero.css";
import { TextGenerateEffect } from "./ui/text-generate-effect";

export function Hero() {
  return (
    <section className="h-screen w-full bg-white flex items-center justify-center text-black text-4xl font-bold">
      <section className="text-center py-16 px-4">
        {/* Título animado */}
        <h1 className="text-4xl font-bold">
          <TextGenerateEffect words="EL REY DEL PASTE" />
        </h1>

        {/* Imagen (placeholder por ahora) */}
        <div className="mt-8 flex justify-center">
          <div className="w-40 h-40 bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-400">Imagen aquí</span>
          </div>
        </div>

        {/* Subtítulo */}
        <p className="text-lg mt-4 font-semibold">“El rey llegó a Monterrey”</p>

        {/* Botones */}
        <div className="mt-6 flex justify-center gap-4">
          <button className="bg-orange-400 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-orange-500">
            Contactanos
          </button>
          <a className="bg-green-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-green-700" href="#menu">
            Ver Menú
          </a>
        </div>

        {/* Beneficios */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center">
            <span className="text-orange-400 text-2xl">            <img src={crown} className="crown" alt="Logo" />
            </span>
            <h3 className="text-black font-bold mt-2">Listo para llevar</h3>
            <p className="text-gray-600 text-sm">Tu orden en 2 minutos</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-orange-400 text-2xl">            <img src={crown} className="crown" alt="Logo" />
            </span>
            <h3 className="text-black font-bold mt-2">Diferentes sabores</h3>
            <p className="text-gray-600 text-sm">Para cada gusto</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-orange-400 text-2xl">            <img src={crown} className="crown" alt="Logo" />
            </span>
            <h3 className="text-black font-bold mt-2">Alimento tradicional</h3>
            <p className="text-gray-600 text-sm">De Hidalgo a tu paladar</p>
          </div>
        </div>
      </section>
    </section>
  );
}
