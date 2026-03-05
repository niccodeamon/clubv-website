
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { lazy, Suspense } from 'react';

const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const ExperiencesShows = lazy(() => import('./components/ExperiencesShows'));
const Events = lazy(() => import('./components/EventosTematicos'));
const Location = lazy(() => import('./components/Location'));
const Membership = lazy(() => import('./components/Membership'));
const Schedule = lazy(() => import('./components/horario'));
const FAQ = lazy(() => import('./components/FAQ'));
const Contact = lazy(() => import('./components/Contact'));
const SocialSection = lazy(() => import('./components/SocialSection'));

const App: React.FC = () => {
  const [isVerified, setIsVerified] = useState<boolean>(false);
  

  useEffect(() => {
  const verified = localStorage.getItem('clubv_age_verified');
  if (verified === 'true') {
    setIsVerified(true);
  }
}, []);

  const handleVerification = () => {
    localStorage.setItem('clubv_age_verified', 'true');
    setIsVerified(true);
  };


  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden selection:bg-red-900 selection:text-white">
      {/* Global Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-red-900/10 rounded-full blur-[150px] mix-blend-screen animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-[#2a0000]/30 rounded-full blur-[180px] mix-blend-screen"></div>
      </div>

      

      <div className={`transition-opacity duration-1000 ${isVerified ? 'opacity-100' : 'opacity-0 blur-sm overflow-hidden h-screen'}`}>
        <Navbar />
        
        <Suspense fallback={<div className="text-center py-20">Cargando...</div>}>
         <main className="relative z-10">
          <Hero />
          <About />
          <Services />
          <ExperiencesShows/>
          <Events/>
          <Location />
          <Membership />
          <Schedule/>
          <FAQ />
          <Contact />
          <SocialSection/>
        </main>
        </Suspense>
        
        <footer className="py-12 bg-black text-center relative z-10 border-t border-red-900/30">
          <div className="container">
            <h4 className="text-3xl font-bold text-white mb-6 tracking-widest text-glow-red">CLUB V</h4>
            <p className="text-gray-500 font-light tracking-widest text-xs uppercase max-w-2xl mx-auto leading-relaxed">
              Nos reservamos el derecho de admisión. Prohibido el ingreso a menores de 18 años. 
              El uso de dispositivos móviles está restringido. 
              El consentimiento es nuestra regla de oro.
            </p>
            <p className="text-gray-700 text-[10px] mt-8">© {new Date().getFullYear()} Club V Chía. Todos los derechos reservados.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;