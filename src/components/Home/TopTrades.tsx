"use client";

import { motion } from "framer-motion";

const TRADES_DATA = [
  {
    caption: "Yükselişin sonuna kadar tutuyoruz.",
    image: "/up.png",
  },
  {
    caption: "Düşüşlerden kaçınıyoruz.",
    image: "/down.png",
  },
  {
    caption: "Market, yönünü şaşırdığında yanılabiliyoruz. Yanıldığımızı erken fark ederek kayıpları minimize ediyoruz.",
    image: "/range.png",
  },
];

const TopTrades = () => {
  return (
    <section className="py-12 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="section-title"
          >
            İşlem Mantığı
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12">
            İndikatörlerin hedefi, kaybederken az kaybetmek, kazanırken olabildiğince çok kazanmaktır.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {TRADES_DATA.map((trade, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="premium-card group bg-gray-900 border-gray-800"
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={trade.image} 
                  alt={`İşlem Mantığı ${idx + 1}`}
                  className="w-full h-full object-contain bg-black/50 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
              </div>
              <div className="p-8 text-center">
                <p className="text-gray-300 leading-relaxed text-sm md:text-base font-medium">
                  {trade.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="gold-divider" />
    </section>
  );
};

export default TopTrades;
