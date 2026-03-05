import React, { useRef, useEffect, useState } from 'react';
import imagen2 from '../imagenes/10.webp';  // ← importa aquí (ajusta ruta si es necesario)

const About: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="nosotros" className="section-padding relative">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`transition-all duration-[1.5s] ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="text-center mb-20">
            <h2 className="display-3 font-bold text-white mb-4 text-glow-red">El concepto Club V</h2>
            <p className="text-xl text-red-400 tracking-widest font-light uppercase">Más allá de lo prohibido</p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            {/* Image Card */}
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-br from-red-600 via-purple-900 to-black rounded-[60px] blur-xl opacity-40 group-hover:opacity-80 transition duration-1000 animate-pulse-slow"></div>
              <div className="relative overflow-hidden rounded-[60px] aspect-[4/5] shadow-2xl">
                <img 
                  src={imagen2}          // ← aquí va tu imagen 2.0
                  alt="Ambiente íntimo Club V" 
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-10 left-10 right-10">
                  <p className="text-white font-serif italic text-2xl leading-relaxed">
                    "El placer es el único lenguaje que todos entendemos."
                  </p>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-10">
              <div className="bg-glass-wet p-10 rounded-[50px] hover:border-red-500/40 transition-all duration-700 hover:-translate-y-2">
                <div className="text-gray-300 text-lg leading-relaxed font-light space-y-6">
                  <p>
                    Club V es un bar swinger creado para adultos que buscan explorar, observar, conectar y disfrutar desde el respeto, el consentimiento y la elegancia.
                  </p>

                  <ul className="list-none space-y-2 pl-0 text-club-gold/90 font-medium">
                    <li>• Somos un club social para adultos con identidad propia.</li>
                    <li>• Un espacio donde el respeto, el consentimiento y la estética guían cada encuentro.</li>
                    <li>• Una experiencia pensada para disfrutar sin etiquetas ni juicios.</li>
                  </ul>

                  <p>
                    Somos un club social para adultos donde cada experiencia ocurre bajo reglas claras, ambientes cuidadosamente diseñados y una atmósfera que invita a soltar sin perder el control.
                  </p>

                  <p className="text-xl font-semibold text-club-gold">
                    Aquí, el deseo se encuentra, se respeta y se comparte.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;