"use client";
import {ImageStack} from "./imagestack";


const images = [
    "/combos/El_Rey_del_paste-4.jpg",
    "/combos/El_Rey_del_paste-11.jpg",
    "/combos/El_Rey_del_paste-22.jpg",
    "/combos/El_Rey_del_paste-24.jpg",
    "/combos/El_Rey_del_paste-26.jpg",
  ];

export function Combo() {
  return (
    <section className="text-center py-12 px-4">
      <h2 className="text-3xl text-black font-bold">
        “COME COMO <span className="text-orange-400">REY</span>” 👑
      </h2>
      <p className="text-lg text-black mt-2">Conoce nuestros combos</p>
      <br />
      <ImageStack images={images} />

      <div className="mt-6 text-lg font-semibold text-gray-800 flex items-center justify-center gap-2">
        <span className="text-orange-400 text-xl">⬅</span>
        Combo el Tuzo
        <span className="text-orange-400 text-xl">➡</span>
      </div>
    </section>
  );
}
