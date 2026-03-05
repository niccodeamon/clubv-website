import React from 'react';
import { ShieldCheck, Eye, HeartHandshake } from 'lucide-react';

const Policies: React.FC = () => {
  const policies = [
    {
      icon: <ShieldCheck className="w-12 h-12 text-club-gold" />,
      title: "Discreción Total",
      desc: "Lo que sucede entre estas paredes, muere aquí. Prohibido el uso de cámaras. Tu privacidad es nuestro tesoro."
    },
    {
      icon: <HeartHandshake className="w-12 h-12 text-club-gold" />,
      title: "Consentimiento Ardiente",
      desc: "El deseo debe ser mutuo. Un 'No' es absoluto. Un 'Sí' entusiasta es la llave que abre todas las puertas."
    },
    {
      icon: <Eye className="w-12 h-12 text-club-gold" />,
      title: "Elegancia y Respeto",
      desc: "Mantén la clase. La seducción es un arte que requiere respeto. Comportamientos agresivos no tienen lugar en Club V."
    }
  ];

  return (
    <section id="politicas" className="py-32 bg-black relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-red-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="display-4 font-bold text-white mb-4 text-glow-red">CÓDIGO DE HONOR</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {policies.map((item, index) => (
            <div 
              key={index}
              className="group bg-glass-wet p-12 rounded-[60px] hover:bg-red-950/30 transition-all duration-700 hover:-translate-y-4 flex flex-col items-center text-center relative overflow-hidden"
            >
              {/* Internal Glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-red-600/0 via-red-600/5 to-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="mb-8 p-6 bg-black/40 rounded-full group-hover:scale-110 transition-transform duration-500 shadow-[0_0_30px_rgba(244,162,97,0.3)] relative z-10">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-red-400 transition-colors relative z-10">{item.title}</h3>
              <p className="text-gray-300 text-base leading-relaxed font-light relative z-10">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Policies;