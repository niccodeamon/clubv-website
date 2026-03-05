import React from 'react';

const Spaces: React.FC = () => {
  const spaces = [
    {
      title: "Jacuzzi & Sauna",
      desc: "Aguas termales y vapor para relajar el cuerpo y disolver las inhibiciones.",
      img: "https://images.unsplash.com/photo-1603525547614-257a0279633e?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Pista de Baile & Pole",
      desc: "Música envolvente, luces tenues y barras de pole dance para exhibir tu lado más salvaje.",
      img: "https://images.unsplash.com/photo-1547407139-3c921a66005c?q=80&w=1974&auto=format&fit=crop"
    },
    {
      title: "EROS ROOM",
      desc: "Espacios de privacidad absoluta para cuando la química requiere intimidad total.",
      img: "https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?q=80&w=2015&auto=format&fit=crop"
    },
    {
      title: "DOMINION",
      desc: "Una zona equipada para los amantes del control, las ataduras y el juego de poder.",
      img: "https://images.unsplash.com/photo-1598555909249-138374d7547a?q=80&w=1974&auto=format&fit=crop"
    },
    {
      title: "Zona Voyeur & Lounge",
      desc: "Sillones cómodos estratégicamente ubicados para quienes disfrutan el arte de mirar.",
      img: "https://images.unsplash.com/photo-1583847661884-378336b54145?q=80&w=1974&auto=format&fit=crop"
    },
    {
      title: "Bar Premium",
      desc: "Coctelería de autor diseñada para elevar la temperatura y estimular los sentidos.",
      img: "https://images.unsplash.com/photo-1574096079513-d8259312b785?q=80&w=1974&auto=format&fit=crop"
    }
  ];

  return (
    <section id="espacios" className="section-padding bg-sensual-gradient">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold text-danger text-glow-red mb-3">Nuestros Espacios</h2>
          <p className="text-white lead">Diseñados para despertar los sentidos</p>
        </div>

        <div className="row g-4">
          {spaces.map((space, idx) => (
            <div key={idx} className="col-md-6 col-lg-4">
              <div className="group relative h-96 rounded-[50px] overflow-hidden cursor-pointer shadow-lg transition-transform hover:scale-105 duration-700">
                <img 
                  src={space.img} 
                  alt={space.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity"></div>
                
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors text-shadow">{space.title}</h3>
                  <p className="text-gray-300 text-sm opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    {space.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Spaces;