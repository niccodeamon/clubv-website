import React from 'react';
import { Clock } from 'lucide-react';

const Booking: React.FC = () => {
  return (
    <section id="booking" className="section-padding bg-black relative">
      {/* Decorative Blur */}
      <div className="absolute left-0 bottom-0 w-1/2 h-full bg-gradient-to-r from-red-900/20 to-transparent blur-3xl pointer-events-none"></div>

      <div className="container relative z-10">
        <div className="row g-5">
          {/* Booking Column */}
          <div className="col-lg-6">
            <div className="h-full flex flex-col justify-center">
              <h2 className="display-4 fw-bold text-danger text-glow-red mb-6">Ingreso y Reservas</h2>
              <p className="text-white text-lg mb-8 leading-relaxed">
                Para garantizar la privacidad y exclusividad de nuestros asistentes, el ingreso a Club V es <span className="text-red-400 fw-bold">exclusivamente con reserva previa</span>. 
                <br /><br />
                La ubicación exacta se comparte únicamente el día del evento a los usuarios confirmados. No aceptamos visitas sin anuncio.
              </p>
              
              <a 
                href="https://wa.me/+573001234567?text=Hola%2C%20deseo%20hacer%20una%20reserva%20en%20Club%20V" 
                target="_blank"
                rel="noreferrer"
                className="btn btn-club-red align-self-start"
              >
                Reservar por WhatsApp
              </a>
            </div>
          </div>

          {/* Schedule Column */}
          <div className="col-lg-6">
            <div className="bg-card-glass p-10 rounded-[60px] text-center border border-white/10 shadow-intense">
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-red-600 rounded-full shadow-glow animate-pulse">
                  <Clock size={32} className="text-white" />
                </div>
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-8">Horarios de Apertura</h3>
              
              <div className="space-y-6">
                <div className="bg-black/40 p-6 rounded-[30px]">
                  <h4 className="text-danger font-bold text-xl">Viernes</h4>
                  <p className="text-white text-lg m-0">9:00 PM — 3:00 AM</p>
                  <span className="text-gray-400 text-sm">Fiestas temáticas</span>
                </div>
                
                <div className="bg-black/40 p-6 rounded-[30px]">
                  <h4 className="text-danger font-bold text-xl">Sábados</h4>
                  <p className="text-white text-lg m-0">9:00 PM — 4:00 AM</p>
                  <span className="text-gray-400 text-sm">Evento principal Club V</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;