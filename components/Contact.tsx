import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [nombre, setNombre] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [interes, setInteres] = useState('Reserva de Experiencia');
  const [mensaje, setMensaje] = useState('');

  const handleSendWhatsApp = () => {
    const phoneNumber = '573213896107'; // SIN + ni espacios

    const text = `
Hola, quiero contactarlos desde la web de Club V.

Nombre / Pseudónimo: ${nombre}
WhatsApp: ${whatsapp}
Interés: ${interes}

Mensaje:
${mensaje}
    `;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contacto" className="section-padding relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl relative z-10">

        <div className="bg-black/60 backdrop-blur-[60px] border border-red-900/30 rounded-[80px] p-8 md:p-20 shadow-[0_0_100px_rgba(100,0,0,0.5)]">
          <div className="text-center mb-16">
            <h2 className="display-4 font-bold text-white mb-6 text-glow-red">
              CONTÁCTANOS
            </h2>
            <p className="text-gray-400 text-lg">
              ¿Tienes alguna duda o deseo especial? Escríbenos directamente.
            </p>
          </div>

          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-red-400 text-sm font-bold ml-4 uppercase tracking-wider">
                  Nombre / Pseudónimo
                </label>
                <input
                  type="text"
                  className="input-organic"
                  placeholder="Tu nombre discreto"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="text-red-400 text-sm font-bold ml-4 uppercase tracking-wider">
                  WhatsApp
                </label>
                <input
                  type="tel"
                  className="input-organic"
                  placeholder="+57 300..."
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-red-400 text-sm font-bold ml-4 uppercase tracking-wider">
                Interés
              </label>
              <select
                className="input-organic appearance-none cursor-pointer text-gray-300"
                value={interes}
                onChange={(e) => setInteres(e.target.value)}
              >
                <option>Reserva de Experiencia</option>
                <option>Información de Membresía</option>
                <option>Duda sobre Dress Code</option>
                <option>Otro</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-red-400 text-sm font-bold ml-4 uppercase tracking-wider">
                Mensaje
              </label>
              <textarea
                rows={4}
                className="input-organic resize-none"
                placeholder="Cuéntanos tus deseos..."
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
              />
            </div>

            <div className="pt-8 text-center">
              <button
                type="button"
                onClick={handleSendWhatsApp}
                className="btn-sensual-red w-full md:w-auto min-w-[300px] flex items-center justify-center gap-4 text-xl py-6"
              >
                <Send size={24} />
                ENVIAR MENSAJE
              </button>

              <p className="text-gray-600 text-xs mt-6">
                Tus datos son tratados con estricta confidencialidad.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
