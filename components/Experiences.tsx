import React from 'react';

const Experiences: React.FC = () => {
  return (
    <section id="experiencias" className="section-padding relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-800/20 rounded-full blur-[100px]"></div>

      <div className="container relative z-10">
        <div className="row align-items-center flex-row-reverse">
          <div className="col-lg-6 mb-5 mb-lg-0 text-end">
            <h2 className="display-4 fw-bold text-danger text-glow-red mb-4">Experiencias sensoriales & Shows</h2>
            <div className="bg-black/40 backdrop-blur-md p-8 rounded-[50px] border border-red-900/30">
              <p className="text-white text-lg mb-4 leading-relaxed">
                Cada noche en Club V es una obra de teatro donde tú puedes ser protagonista o espectador. Ofrecemos shows en vivo de alto nivel artístico que fusionan erotismo, danza y performance.
              </p>
              <ul className="list-unstyled text-gray-300 space-y-3 mb-6 text-end">
                <li className="flex items-center justify-end gap-3">
                  <span>Masajes sensitivos para parejas</span>
                  <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                </li>
                <li className="flex items-center justify-end gap-3">
                  <span>Performances BDSM Light</span>
                  <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                </li>
                <li className="flex items-center justify-end gap-3">
                  <span>Body painting neón</span>
                  <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                </li>
                <li className="flex items-center justify-end gap-3">
                  <span>Catas de licor afrodisíaco</span>
                  <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1533227297464-954f2a33f37a?q=80&w=1974&auto=format&fit=crop" 
                className="rounded-[40px] w-full h-64 object-cover mt-12 shadow-2xl animate-pulse-glow" 
                alt="Show 1"
              />
              <img 
                src="https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&w=2070&auto=format&fit=crop" 
                className="rounded-[40px] w-full h-64 object-cover shadow-2xl" 
                alt="Show 2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;