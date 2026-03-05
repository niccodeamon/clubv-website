import React from 'react';
import { ChevronDown } from 'lucide-react';
import imagenHero from '../imagenes/8.webp';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      
      <div className="absolute inset-0 z-0">
        <img 
          src={imagenHero}
          alt="Club V nightlife atmosphere"
          className="w-full h-full object-cover scale-110 animate-[float-sensual_20s_ease-in-out_infinite]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-[#2a0000]/30 to-black/80"></div>
        <div className="absolute inset-0 bg-red-900/20 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-red-600/20 blur-[100px] rounded-full -z-10 animate-pulse-slow"></div>

        <h1 className="text-7xl md:text-9xl font-black text-white mb-6 text-glow-red tracking-tighter leading-none animate-fade-in-up">
          CLUB <span className="text-transparent bg-clip-text bg-gradient-to-b from-red-500 to-red-900 italic">V</span>
        </h1>

        <p className="text-2xl md:text-4xl text-red-200 font-light mb-4 font-serif italic">
          Club social para adultos · Bar swinger · Experiencias sensoriales y libertad consciente.
        </p>

        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl">
          Un espacio diseñado para quienes entienden que el placer también puede ser sofisticado, respetuoso y profundamente provocador
        </p>

        <a href="#membresia" className="btn-sensual-red">
          Reservar experiencia
        </a>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-12 h-12 text-red-500 opacity-80" />
      </div>
    </section>
  );
};

export default Hero;
