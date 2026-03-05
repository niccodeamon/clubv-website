import React from 'react';
import { MapPin } from 'lucide-react';

const Location: React.FC = () => {
  return (
    <section
      id="ubicacion"
      className="relative w-full min-h-[520px] md:h-[600px] overflow-hidden"
    >
      {/* MAPA */}
      <iframe
        src="https://www.google.com/maps?q=KM+12.6+V%C3%8DA+VARIANTE+COTA+CH%C3%8DA+BODEGA+L23&output=embed"
        className="absolute inset-0 w-full h-full z-0"
        style={{
          border: 0,
          filter: 'grayscale(100%) invert(95%) contrast(110%) brightness(80%)',
        }}
        loading="lazy"
      />

      {/* OVERLAYS */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10 md:hidden" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent z-10 hidden md:block" />
      <div className="absolute inset-0 bg-red-900/10 mix-blend-overlay z-10 pointer-events-none" />

      {/* CONTENIDO */}
      <div className="relative z-20 container mx-auto px-4 md:px-6 flex items-end md:items-center min-h-[520px] md:h-full">
        <div
          className="
            w-full md:max-w-lg
            bg-black/70 backdrop-blur-[40px]
            border border-red-900/40
            p-6 md:p-12
            rounded-[32px] md:rounded-[60px]
            shadow-[0_0_60px_rgba(0,0,0,0.8)]
            mb-8 md:mb-0
          "
        >
          <div className="flex items-center gap-4 mb-5">
            <div className="p-3 md:p-4 bg-red-900/30 rounded-full">
              <MapPin className="text-red-500 w-7 h-7 md:w-10 md:h-10" />
            </div>
            <h3 className="text-2xl md:text-4xl font-bold text-white">
              UBICACIÓN
            </h3>
          </div>

          <p className="text-lg md:text-2xl text-white font-bold mb-2">
            KM 12.6 Vía Variante Cota – Chía
          </p>

          <p className="text-gray-400 text-sm md:text-lg leading-relaxed mb-6">
            Bodega L23, Cota, Cundinamarca. 
            Fácil acceso desde Bogotá por la variante.
          </p>

          <a
            href="https://www.google.com/maps?q=KM+12.6+V%C3%8DA+VARIANTE+COTA+CH%C3%8DA+BODEGA+L23"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-red-500 border-b-2 border-red-500 pb-1 hover:text-white hover:border-white transition-all duration-300 uppercase tracking-widest text-xs md:text-sm font-bold"
          >
            Abrir en Google Maps
          </a>
        </div>
      </div>
    </section>
  );
};

export default Location;
