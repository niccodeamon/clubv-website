import React from 'react';
import { Calendar, Users, Drama } from 'lucide-react';

const Events: React.FC = () => {
  return (
    <section id="eventos" className="section-padding bg-black">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="display-4 fw-bold text-danger text-glow-red">Noches Temáticas</h2>
          <p className="text-white lead">Eventos especiales cada fin de semana</p>
        </div>

        <div className="row g-5 justify-content-center">
          {[
            { title: "Noche de Máscaras", icon: <Drama size={40} />, desc: "El misterio es el mejor afrodisíaco. Cubre tu rostro, libera tus deseos." },
            { title: "Noches Neón", icon: <Users size={40} />, desc: "Pintura corporal fluorescente y luces UV. Brilla en la oscuridad." },
            { title: "Ladies Night", icon: <Calendar size={40} />, desc: "Ellas toman el control. Entrada especial para mujeres solas y parejas." }
          ].map((evt, i) => (
            <div key={i} className="col-md-4">
              <div className="bg-card-glass p-10 rounded-[60px] text-center h-100 hover:bg-red-900/20 transition-all duration-500">
                <div className="text-gold mb-6 inline-block p-4 rounded-full bg-white/5 shadow-glow text-[#F4A261]">
                  {evt.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{evt.title}</h3>
                <p className="text-gray-400">{evt.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a 
            href="https://t.me/clubv_oficial" 
            target="_blank" 
            className="btn btn-club-red"
          >
            Únete a nuestro canal de Telegram
          </a>
        </div>
      </div>
    </section>
  );
};

export default Events;