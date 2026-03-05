import React from 'react';
import { Calendar, Star, Users, Sparkles } from 'lucide-react';

const ExperiencesShows: React.FC = () => {
  const experiences = [
    {
      title: "Noches Temáticas",
      desc: "Cada fin de semana una temática diferente: máscaras, lingerie party, black & red night, etc. Shows en vivo y sorpresas especiales.",
      icon: <Calendar className="w-10 h-10 text-club-gold" />,
      highlight: "Sábados temáticos",
    },
    {
      title: "Shows en Vivo",
      desc: "Artistas profesionales y parejas invitadas realizan performances eróticas, pole dance avanzado y burlesque sensual.",
      icon: <Star className="w-10 h-10 text-club-gold" />,
      highlight: "Viernes y Sábados",
    },
    {
      title: "Playrooms Supervisados",
      desc: "Sesiones guiadas donde parejas o grupos pueden explorar fantasías en espacios seguros con moderadores presentes.",
      icon: <Users className="w-10 h-10 text-club-gold" />,
      highlight: "Eventos especiales",
    },
    {
      title: "Noches de Exhibición",
      desc: "Espacios diseñados para que quienes disfrutan ser observados puedan brillar, con público respetuoso y discreto.",
      icon: <Sparkles className="w-10 h-10 text-club-gold" />,
      highlight: "Una vez al mes",
    },
  ];

  return (
    <section id="experiencias-shows" className="py-20 md:py-32 bg-gradient-to-b from-black to-red-950/20 relative">
      <div className="container mx-auto px-6">
        {/* Título */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight text-glow-red">
            EXPERIENCIAS & SHOWS
          </h2>
          <p className="text-xl md:text-2xl text-red-400 font-light uppercase tracking-widest">
            Momentos que se quedan grabados para siempre
          </p>
        </div>

        {/* Grid de tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="group relative bg-black/60 backdrop-blur-lg border border-red-900/40 rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-[0_0_40px_rgba(200,50,50,0.4)] transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Fondo sutil hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Icono y título */}
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-red-900/30 rounded-full group-hover:bg-red-700/50 transition-colors">
                  {exp.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-club-gold transition-colors">
                  {exp.title}
                </h3>
              </div>

              {/* Descripción */}
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
                {exp.desc}
              </p>

              {/* Highlight */}
              <div className="inline-block px-4 py-2 bg-red-900/40 rounded-full text-club-gold text-sm font-medium">
                {exp.highlight}
              </div>
            </div>
          ))}
        </div>

        {/* Texto final de cierre */}
        <div className="mt-16 md:mt-24 text-center">
          <p className="text-2xl md:text-3xl text-club-gold font-medium italic max-w-4xl mx-auto">
            Cada noche es única.  
            ¿Cuál experiencia vas a vivir primero?
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExperiencesShows;