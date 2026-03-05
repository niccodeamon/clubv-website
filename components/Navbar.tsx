import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'FAQ', href: '#preguntas-frecuentes' },
    { label: 'Membresía', href: '#membresia' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-1000 ${isScrolled ? 'py-2 bg-black/80 backdrop-blur-2xl border-b border-red-900/40 shadow-[0_10px_30px_rgba(0,0,0,0.8)]' : 'py-6 bg-transparent'}`}>
      <div className="container-fluid px-6 md:px-12 d-flex justify-content-between align-items-center">
        
        {/* Logo */}
        <a href="#" className="text-decoration-none group">
          <span className="h2 fw-bold text-white tracking-tighter text-glow-red group-hover:text-red-500 transition-colors duration-500">
            CLUB <span className="text-danger italic">V</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="d-none d-xl-flex align-items-center gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              className="text-white text-decoration-none text-sm text-uppercase fw-bold tracking-[0.15em] hover:text-red-500 transition-all duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-red-600 transition-all duration-500 group-hover:w-full box-shadow-glow"></span>
            </a>
          ))}
          
          <a 
            href="https://wa.me/+573001234567?text=Hola%2C%20quiero%20reservar%20una%20experiencia%20en%20Club%20V"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-sensual-red py-3 px-8 text-xs animate-pulse-glow"
          >
            RESERVAR AHORA
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="d-xl-none text-white bg-transparent border-0 z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={36} className="text-danger drop-shadow-[0_0_10px_rgba(255,0,0,0.8)]" /> : <Menu size={36} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black/95 backdrop-blur-[50px] z-40 flex flex-col items-center justify-center space-y-10 transition-all duration-700 ease-in-out ${mobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
        
        {/* Decorative background element inside menu */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/20 blur-[80px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-600/20 blur-[80px] rounded-full"></div>

        {navLinks.map((link) => (
          <a 
            key={link.label}
            href={link.href}
            onClick={() => setMobileMenuOpen(false)}
            className="text-3xl text-white font-light tracking-[0.2em] uppercase hover:text-red-500 transition-all duration-300 no-underline hover:scale-110"
          >
            {link.label}
          </a>
        ))}
        <a 
          href="https://wa.me/+573001234567?text=Hola%2C%20quiero%20entrar%20en%20Club%20V"
          className="btn-sensual-red mt-8"
        >
          RESERVAR AHORA
        </a>
      </div>
    </nav>
  );
};

export default Navbar;