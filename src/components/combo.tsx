"use client";
import {ImageStack} from "./imagestack";


const images = [
    "https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=3425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1554931670-4ebfabf6e7a9?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=2581&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

export function Combo() {
  return (
    <section className="text-center py-12 px-4">
      <h2 className="text-3xl text-black font-bold">
        “COME COMO <span className="text-orange-400">REY</span>” 👑
      </h2>
      <p className="text-lg text-black mt-2">Conoce nuestros combos</p>
      <ImageStack images={images} />

      <div className="mt-6 text-lg font-semibold text-gray-800 flex items-center justify-center gap-2">
        <span className="text-orange-400 text-xl">⬅</span>
        Combo el Tuzo
        <span className="text-orange-400 text-xl">➡</span>
      </div>
    </section>
  );
}
