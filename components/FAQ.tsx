import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "¿Es obligatorio participar?",
      a: "Aquí puedes observar, socializar o solo dejarte llevar por el ambiente. Participar es una elección, nunca una obligación.",
    },
    {
      q: "¿Existen normas?",
      a: "Sí. El respeto, el consentimiento y el comportamiento adecuado son obligatorios para todos los asistentes.",
    },
   
    {
      q: "¿Puedo asistir solo o sola?",
      a: "Sí. Puedes asistir de manera individual sin ningún inconveniente.",
    },
    {
      q: "¿Cuál es la edad mínima?",
      a: "El ingreso es exclusivo para personas mayores de 18 años.",
    },
    {
      q: "¿Es seguro?",
      a: "Sí. Contamos con control, supervisión y reglas claras para garantizar una experiencia segura.",
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="preguntas-frecuentes"
      className="section-padding bg-[#050000]"
    >
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="display-4 font-bold text-center text-white mb-20 text-glow-red">
          DUDAS FRECUENTES
        </h2>

        <div className="space-y-8">
          {faqs.map((item, idx) => (
            <div
              key={idx}
              className={`bg-glass-wet rounded-[50px] overflow-hidden transition-all duration-700 hover:shadow-glow ${
                openIndex === idx
                  ? "border-red-600/40 shadow-glow"
                  : "border-white/5"
              }`}
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full flex justify-between items-center p-8 text-left focus:outline-none bg-transparent border-0 group"
              >
                <span
                  className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${
                    openIndex === idx
                      ? "text-red-500"
                      : "text-white group-hover:text-red-400"
                  }`}
                >
                  {item.q}
                </span>

                <span
                  className={`p-3 rounded-full transition-all duration-500 ${
                    openIndex === idx
                      ? "bg-red-600 text-white rotate-180 shadow-[0_0_20px_rgba(255,0,0,0.5)]"
                      : "bg-white/5 text-gray-400"
                  }`}
                >
                  {openIndex === idx ? (
                    <Minus size={24} />
                  ) : (
                    <Plus size={24} />
                  )}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-700 ease-in-out ${
                  openIndex === idx
                    ? "max-h-60 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-8 pt-0 text-gray-300 text-lg font-light leading-relaxed border-t border-red-900/20">
                  {item.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
