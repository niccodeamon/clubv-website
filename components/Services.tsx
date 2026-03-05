import React from "react";
import { Flame, Music, Wine, Users, Eye, Heart, Martini } from "lucide-react";

import img1 from "../imagenes/5.webp";
import img2 from "../imagenes/4.webp";
import img3 from "../imagenes/6.webp";
import img4 from "../imagenes/7.webp";
import img5 from "../imagenes/14.webp";
import img6 from "../imagenes/15.webp";
import img7 from "../imagenes/16.webp";

const Services: React.FC = () => {
  const services = [
    {
      title: "Jacuzzi & Sauna",
      desc: "Agua caliente, vapor denso y cuerpos relajados. Zonas mixtas para romper el hielo sin palabras.",
      icon: <Flame className="w-10 h-10" />,
      img: img1,
      large: true,
    },
    {
      title: "Pista de Baile & Pole Dance",
      desc: "Luces estroboscópicas, Deep House y barras para moverte como nunca. Exhibe o observa.",
      icon: <Music className="w-8 h-8" />,
      img: img2,
    },
    {
      title: "Eros Room",
      desc: "Intimidad total. Super Cama, espejos y penumbra. Solo para quienes ya se rindieron al deseo.",
      icon: <Heart className="w-8 h-8" />,
      img: img3,
      alignRight: true,
    },
    {
      title: "Dominion",
      desc: "Juegos de poder, cuerdas y control. Espacio diseñado para explorar límites con respeto absoluto.",
      icon: <Users className="w-8 h-8" />,
      img: img4,
    },
    {
      title: "Zonas de Voyeurismo & Lounge",
      desc: "Vidrios unidireccionales, sofás cómodos y penumbra perfecta. Mira o déjate mirar.",
      icon: <Eye className="w-8 h-8" />,
      img: img5,
      large: true,
    },
    {
      title: "Bar & Barra de Servicio",
      desc: "Cócteles afrodisíacos de autor, shots que encienden la noche y conversaciones que empiezan todo.",
      icon: <Martini className="w-8 h-8" />,
      img: img6,
    },
    {
      title: "Zona de Masajes",
      desc: "Aceites calientes, luces bajas y manos expertas. El preludio perfecto para lo que venga después.",
      icon: <Wine className="w-8 h-8" />,
      img: img7,
    },
  ];

  return (
    <section id="servicios" className="section-padding relative bg-black/90">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-20 text-center">
          <h2 className="display-3 font-bold text-white mb-4 text-glow-red">
            NUESTROS ESPACIOS
          </h2>
          <p className="text-xl text-red-400 tracking-widest font-light uppercase">
            Diseñados para despertar cada sentido
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {services.map((service, idx) => {
            const isLarge = service.large;
            const isRight = service.alignRight;
            const colSpan = isLarge ? "md:col-span-8" : "md:col-span-4";

            return (
              <div
                key={idx}
                className={`group relative rounded-3xl overflow-hidden shadow-2xl cursor-pointer ${colSpan} ${
                  isRight ? "md:order-last" : ""
                }`}
                style={{ height: isLarge ? "520px" : "400px" }}
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-85 group-hover:opacity-70 transition-opacity duration-700" />

                <div className="absolute inset-0 flex flex-col justify-end p-10 md:p-12">
                  <div className="flex items-center gap-4 mb-4 text-club-gold animate-pulse-slow">
                    {service.icon}
                    <h3 className="text-3xl md:text-4xl font-bold text-white group-hover:text-club-gold transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-200 text-base md:text-lg opacity-90 group-hover:opacity-100 transition-opacity duration-700 leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                <div className="absolute inset-0 border-4 border-transparent group-hover:border-club-red/60 rounded-3xl transition-all duration-700 pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
