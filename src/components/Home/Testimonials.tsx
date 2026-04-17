"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Alex Thompson",
    location: "Londra, İngiltere",
    text: "TrendAlgo Pro ticaretimi tamamen değiştirdi. ABD Piyasaları indikatörü oyunun kurallarını değiştiriyor. Daha önce hiç görmediğim kadar hassas girişler.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
  },
  {
    name: "Murat Yılmaz",
    location: "İstanbul, Türkiye",
    text: "BIST Edge, Türk borsası için mükemmel. O kadar güvenilir ki, diğer indikatörlere bakmayı tamamen bıraktım.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
  },
  {
    name: "Sarah Chen",
    location: "Singapur",
    text: "Kripto Alfa son üç BTC kırılımını mükemmel bir şekilde yakaladı. Sadece bir aydaki ROI, yıllık aboneliğimi şimdiden ödedi.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="section-title"
          >
            Müşteri Başarıları
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12">
            Dünya çapındaki profesyoneller tarafından güveniliyor. Elit tüccarlar topluluğumuza katılın.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {TESTIMONIALS.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="premium-card p-10 bg-gray-900 border-gray-800 relative flex flex-col items-center text-center"
            >
              <div className="absolute top-6 left-6 text-primary/20">
                <Quote size={48} />
              </div>
              <img 
                src={testimonial.avatar} 
                alt={testimonial.name}
                className="w-20 h-20 rounded-full border-2 border-primary/30 mb-6 object-cover"
              />
              <p className="text-gray-300 italic mb-8 relative z-10">
                "{testimonial.text}"
              </p>
              <div className="mt-auto">
                <h4 className="text-white font-serif font-bold text-lg">{testimonial.name}</h4>
                <p className="text-primary text-sm uppercase tracking-widest">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="gold-divider" />
    </section>
  );
};

export default Testimonials;
