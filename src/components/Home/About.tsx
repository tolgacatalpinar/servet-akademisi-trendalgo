"use client";

import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-12 bg-black relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto mb-6 overflow-hidden rounded-2xl border-2 border-primary/20 shadow-gold-glow">
              <img 
                src="/havuz-foto.png" 
                alt="Tolga Çatalpınar" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <h2 className="section-title">Ben Kimim?</h2>
            
            <div className="premium-card p-8 md:p-12 bg-gray-900/40 backdrop-blur-sm border-gray-800 text-left">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Ben <span className="text-primary font-bold">Tolga Çatalpınar</span>. Derece yaparak girdiğim Bilkent Üniversitesi'nde bilgisayar mühendisliğini bitirdikten sonra 4 yıl boyunca çeşitli yazılımlar geliştirdim. 6 yıldır ise hisse ve kripto piyasalarında al-sat yapıyorum. Borsanın kurallarını öğrenip kendi lehime nasıl kullanacağımı keşfettikten sonra bundan sizin de yararlanmanızı istedim. Profesyonel indikatörlerle ve test edilmiş stratejilerle servetimi büyütüyorum.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="gold-divider" />
    </section>
  );
};

export default About;
