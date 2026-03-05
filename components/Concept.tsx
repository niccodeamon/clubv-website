import React from 'react';

const Concept: React.FC = () => {
  return (
    <section id="concepto" className="section-padding relative">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="relative">
              <div className="absolute -inset-4 bg-red-600 rounded-[60px] blur-xl opacity-30"></div>
              <img 
                src="https://images.unsplash.com/photo-1570752538965-4f67b5791c14?q=80&w=1974&auto=format&fit=crop" 
                alt="Club V Concept" 
                className="relative rounded-[60px] shadow-2xl w-full object-cover aspect-[4/5] z-10"
              />
            </div>
          </div>
          <div className="col-lg-6 ps-lg-5">
            <h2 className="display-4 fw-bold text-danger mb-4 text-glow-red">El concepto Club V</h2>
            <div className="bg-card-glass p-8 rounded-[40px] text-gray-200">
              <p className="mb-4 lead">
                Club V trasciende la definición tradicional de un club nocturno. Es un <span className="text-white fw-bold">santuario para la exploración</span>, donde parejas y personas de mente abierta convergen en un ambiente seguro, curado y exquisitamente diseñado.
              </p>
              <p className="mb-4">
                Creemos en la <span className="text-danger">libertad consensuada</span>. Aquí, las etiquetas se disuelven y dan paso a la conexión genuina. Nuestra filosofía se basa en tres pilares: discreción absoluta, respeto inquebrantable y una estética que estimula todos los sentidos.
              </p>
              <p>
                No es solo sexo; es seducción, es juego, es voyeurismo, es la tensión eléctrica de una mirada. Es Club V.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Concept;