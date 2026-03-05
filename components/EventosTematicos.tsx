import React from "react";
import { Sparkles, Send } from "lucide-react";

const Events: React.FC = () => {
  const thematicEvents = [
    {
      name: "Noches Neón",
      vibe: "Luces UV, body paint fluorescente y glow total en la pista",
    },
    {
      name: "Noches de Máscaras",
      vibe: "Anonimato, misterio y una atmósfera única",
    },
    {
      name: "Fetish Night",
      vibe: "Estética alternativa, cuero y una vibra intensa",
    },
    {
      name: "Dominio & Sumisión",
      vibe: "Juegos de poder y control consensuado",
    },
    {
      name: "Fantasías Prohibidas",
      vibe: "Explora lo que siempre te dio curiosidad",
    },
    {
      name: "Ediciones Privadas",
      vibe: "Solo socios · Exclusividad absoluta",
    },
  ];

  return (
    <section
      id="eventos"
      className="relative overflow-hidden bg-black py-24 md:py-40"
    >
      {/* Fondo */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-purple-900/10 to-black pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Título */}
        <div className="text-center mb-20 md:mb-32">
          <h2 className="text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-400 to-yellow-400 tracking-wider">
            EVENTOS TEMÁTICOS
          </h2>
          <p className="mt-6 text-xl md:text-3xl text-red-300 uppercase tracking-widest opacity-90">
            Noches irrepetibles.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {thematicEvents.map((event, idx) => (
            <div
              key={idx}
              className="group relative rounded-3xl border border-red-800/40 bg-gradient-to-br from-black/80 to-red-950/50 p-10 backdrop-blur-xl transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,0,0,0.5)]"
            >
              <div className="absolute top-6 right-6 opacity-40 group-hover:opacity-100 transition">
                <Sparkles className="w-14 h-14 text-yellow-400" />
              </div>

              <h3 className="text-3xl font-extrabold text-white mb-4">
                {event.name}
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                {event.vibe}
              </p>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-0 group-hover:opacity-80 transition" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <p className="text-gray-300 text-xl max-w-3xl mx-auto mb-12">
            Cada evento tiene su propia energía y reglas.<br />
            Algunos son abiertos, otros solo para miembros.
          </p>

          <a
            href="https://t.me/+tu_canal_telegram"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 rounded-full bg-gradient-to-r from-red-600 to-red-800 px-12 py-6 text-xl font-bold text-white transition hover:scale-110 hover:shadow-[0_0_50px_rgba(220,38,38,0.9)]"
          >
            <Send size={32} />
            Únete al canal de Telegram
          </a>
        </div>
      </div>
    </section>
  );
};

export default Events;
