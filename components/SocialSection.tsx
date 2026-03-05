import React from "react";
import { Instagram, Facebook, MessageCircle, Send } from "lucide-react";

const SocialSection: React.FC = () => {
  return (
    <section
      id="redes"
      className="w-full bg-black py-16 border-t border-red-900/30"
    >
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          SÍGUENOS
        </h2>

        <p className="text-gray-400 mb-10 max-w-xl mx-auto">
          Conéctate con Club V y descubre eventos exclusivos,
          experiencias privadas y contenido reservado.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          {/* Instagram */}
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-red-900/20 hover:bg-red-600 transition-all duration-300 rounded-full"
          >
            <Instagram className="w-7 h-7 text-red-500 hover:text-white" />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/573143254309"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-red-900/20 hover:bg-red-600 transition-all duration-300 rounded-full"
          >
            <MessageCircle className="w-7 h-7 text-red-500 hover:text-white" />
          </a>

          {/* Telegram */}
          <a
            href="#"
            className="p-4 bg-red-900/20 hover:bg-red-600 transition-all duration-300 rounded-full"
          >
            <Send className="w-7 h-7 text-red-500 hover:text-white" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
