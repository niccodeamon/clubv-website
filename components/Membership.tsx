import React from "react";
import { Crown, Star } from "lucide-react";

const Membership: React.FC = () => {
  return (
    <section
      id="membresia"
      className="relative overflow-hidden bg-black py-24"
    >
      {/* Fondo */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-red-950/40 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Título */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-6">
            Sé parte de <span className="text-red-500">Club V</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            La membresía Club V está diseñada para quienes quieren ir un paso más allá.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          
          {/* Membresía Mensual */}
          <div className="bg-black/70 border border-red-800/40 rounded-3xl p-10 text-center hover:scale-105 transition flex flex-col">
            <div className="mx-auto mb-6 p-4 rounded-full bg-red-900/30 w-fit">
              <Star className="text-red-400" size={36} />
            </div>

            <h3 className="text-3xl font-bold text-white mb-4">
              Membresía Mensual
            </h3>

            <ul className="text-gray-300 space-y-3 text-lg mb-10">
              <li>✓ Acceso a shows privados exclusivos</li>
              <li>✓ Eventos privados solo para socios</li>
              <li>✓ Descuentos en consumos</li>
              <li>✓ Prioridad en reservas</li>
            </ul>

            <a
              href="https://wa.me/573213896107?text=Hola%2C%20quiero%20la%20Membres%C3%ADa%20Mensual%20de%20Club%20V"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-block bg-red-600 hover:bg-red-700 text-white text-lg font-bold py-4 px-10 rounded-full transition hover:scale-110 shadow-[0_0_30px_rgba(220,38,38,0.6)]"
            >
              Quiero la Membresía Mensual
            </a>
          </div>

          {/* Membresía Anual */}
          <div className="bg-black/80 border-2 border-red-600 rounded-3xl p-12 text-center shadow-[0_0_60px_rgba(220,38,38,0.35)] hover:scale-105 transition flex flex-col">
            <div className="mx-auto mb-6 p-5 rounded-full bg-red-600 w-fit">
              <Crown className="text-white" size={40} />
            </div>

            <h3 className="text-3xl font-bold text-white mb-4">
              Membresía Anual
            </h3>

            <ul className="text-gray-200 space-y-3 text-lg mb-10">
              <li>✓ Acceso a shows privados exclusivos</li>
              <li>✓ Eventos privados solo para socios</li>
              <li>✓ Descuentos en consumos y experiencias</li>
              <li>✓ Prioridad total en reservas</li>
              <li>✓ Invitaciones a experiencias únicas</li>
            </ul>

            <a
              href="https://wa.me/573213896107?text=Hola%2C%20quiero%20la%20Membres%C3%ADa%20Anual%20de%20Club%20V"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-block bg-red-600 hover:bg-red-700 text-white text-lg font-bold py-4 px-10 rounded-full transition hover:scale-110 shadow-[0_0_40px_rgba(220,38,38,0.8)]"
            >
              Quiero la Membresía Anual
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Membership;
