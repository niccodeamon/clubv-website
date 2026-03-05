import React from "react";
import { Clock, CalendarCheck } from "lucide-react";

const Schedule: React.FC = () => {
  return (
    <section
      id="horarios"
      className="relative bg-black py-16 md:py-24 overflow-hidden"
    >
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-950/30 to-black pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-5xl">
        
        {/* Título */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-extrabold text-white mb-4 md:mb-6">
            Horarios de <span className="text-red-500">apertura</span>
          </h2>
          <p className="text-base md:text-xl text-gray-300">
            Vive la experiencia Club V en noches seleccionadas.
          </p>
        </div>

        {/* Card principal */}
        <div className="bg-black/70 border border-red-800/40 rounded-2xl md:rounded-3xl p-6 md:p-12 shadow-[0_0_50px_rgba(220,38,38,0.25)]">
          <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">
            
            {/* Horarios */}
            <div>
              <div className="flex items-center gap-3 md:gap-4 mb-5 md:mb-6">
                <CalendarCheck className="text-red-500 w-7 h-7 md:w-9 md:h-9" />
                <h3 className="text-xl md:text-3xl font-bold text-white">
                  Días de apertura
                </h3>
              </div>

              <ul className="text-gray-300 text-sm md:text-lg space-y-3 md:space-y-4">
                <li>✓ Jueves, viernes y sábado</li>
                <li>✓ Domingo únicamente cuando el lunes sea festivo</li>
              </ul>
            </div>

            {/* Nota shows */}
            <div className="bg-red-900/20 border border-red-700/40 rounded-xl md:rounded-2xl p-6 md:p-8 text-center">
              <Clock className="mx-auto mb-3 md:mb-4 text-red-400 w-8 h-8 md:w-10 md:h-10" />
              <p className="text-lg md:text-xl text-white font-semibold">
                Shows privados
              </p>
              <p className="text-gray-300 mt-1 md:mt-2 text-sm md:text-base">
                Disponibles todos los días de apertura
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
