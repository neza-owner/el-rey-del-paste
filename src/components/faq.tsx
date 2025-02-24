import { useState } from "react";

const faqs = [
  { question: "¿Cuánto cuesta cada paste?", answer: "El precio varía según el sabor y tamaño, pero comienzan desde $35 MXN." },
  { question: "¿Dónde están ubicados?", answer: "Nos encontramos en MP25+62 Monterrey, Nuevo León." },
  { question: "¿Cómo puedo facturar?", answer: "Puedes solicitar tu factura enviándonos un mensaje por WhatsApp con tu ticket de compra." },
  { question: "¿Cuáles son los tipos y sabores que tienen?", answer: "Ofrecemos pastes salados como carne con papa, hawaiano y mole verde, además de opciones dulces." },
  { question: "¿Horario de atención?", answer: "Nuestro horario es de 8:00 AM a 9:00 PM todos los días." },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="h-screen w-full bg-white flex items-center justify-center text-black text-4xl font-bold">
      <section id="faq" className="max-w-3xl mx-auto text-center p-6">
        {/* Title */}
        <h2 className="text-3xl font-bold">
          ALGUNA <span className="text-yellow-500">PREGUNTA</span> PARA EL REY?
        </h2>
        <p className="text-gray-600 mb-6">
          Mira las preguntas más frecuentes que nos han hecho
        </p>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg p-4 text-left cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <span className="font-semibold">{faq.question}</span>
                <span className="text-gray-500">{openIndex === index ? "−" : "+"}</span>
              </div>
              {openIndex === index && <p className="text-gray-600 mt-2">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default FAQSection;
