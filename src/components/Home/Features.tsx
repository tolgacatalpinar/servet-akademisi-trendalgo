"use client";

import { motion } from "framer-motion";
import { LayoutDashboard, Globe, Clock } from "lucide-react";

const FEATURES = [
  {
    icon: <LayoutDashboard size={32} />,
    title: "Objektif ve basit kullanım",
  },
  {
    icon: <Globe size={32} />,
    title: "50+ varlıkta çalışır",
  },
  {
    icon: <Clock size={32} />,
    title: "Sürekli takip gerektirmez",
  }
];

const Features = () => {
  return (
    <section className="py-10 bg-black relative">
      <div className="gold-divider mt-0 mb-10" />
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {FEATURES.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="premium-card p-8 bg-gray-900/40 backdrop-blur-sm border-gray-800 flex flex-col items-center text-center group hover:bg-gray-800/60 transition-all duration-500"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-500 shadow-gold-glow">
                {feature.icon}
              </div>
              <h3 className="text-xl font-serif font-bold text-white">
                {feature.title}
              </h3>
              {feature.title === "Sürekli takip gerektirmez" && (
                <p className="text-gray-500 text-xs mt-2 italic">
                  (Türk Borsası hariç)
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
