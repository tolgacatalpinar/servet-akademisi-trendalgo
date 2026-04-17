"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="section-title">İletişime Geçin</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Elit destek ekibimiz, TrendAlgo Pro hakkındaki tüm sorularınızda size yardımcı olmaya hazır. Hassas araçlar için hassas destek.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-12"
          >
            <div className="flex items-start gap-6 group">
              <div className="w-14 h-14 bg-gray-900 border border-gray-800 rounded-xl flex items-center justify-center text-primary group-hover:shadow-gold-glow transition-all">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold mb-2">Bize E-posta Gönderin</h3>
                <p className="text-gray-400">Genel Sorular: <a href="mailto:contact@trendalgopro.com" className="text-primary hover:underline">contact@trendalgopro.com</a></p>
                <p className="text-gray-400">Teknik Destek: <a href="mailto:support@trendalgopro.com" className="text-primary hover:underline">support@trendalgopro.com</a></p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="w-14 h-14 bg-gray-900 border border-gray-800 rounded-xl flex items-center justify-center text-primary group-hover:shadow-gold-glow transition-all">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold mb-2">Bizi Arayın</h3>
                <p className="text-gray-400">Uluslararası: +1 (555) 123-4567</p>
                <p className="text-gray-400">Pzt-Cum: 09:00 - 18:00 EST</p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="w-14 h-14 bg-gray-900 border border-gray-800 rounded-xl flex items-center justify-center text-primary group-hover:shadow-gold-glow transition-all">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold mb-2">Bizi Ziyaret Edin</h3>
                <p className="text-gray-400">Finans Bölgesi, New York, NY 10005</p>
                <p className="text-gray-400">Canary Wharf, Londra, İngiltere E14 5AB</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="premium-card p-10 bg-gray-900/40 backdrop-blur-sm border-gray-800"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Ad Soyad</label>
                  <input 
                    type="text" 
                    placeholder="Ahmet Yılmaz"
                    className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">E-posta Adresi</label>
                  <input 
                    type="email" 
                    placeholder="ahmet@ornek.com"
                    className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Konu</label>
                <input 
                  type="text" 
                  placeholder="Size nasıl yardımcı olabiliriz?"
                  className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Mesaj</label>
                <textarea 
                  rows={6}
                  placeholder="İşlem ihtiyaçlarınızdan bahsedin..."
                  className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none transition-all resize-none"
                />
              </div>

              <button 
                type="button"
                className="gold-button w-full flex items-center justify-center gap-2"
              >
                <Send size={18} />
                MESAJ GÖNDER
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
