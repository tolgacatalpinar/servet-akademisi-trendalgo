"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

const PRODUCTS = [
  { name: "TrendAlgo Pro – ABD Piyasaları", id: "us" },
  { name: "TrendAlgo Pro – BIST Edge", id: "bist" },
  { name: "TrendAlgo Pro – Kripto Alfa", id: "crypto" },
];

const PRICING_DATA = {
  originalMonthly: [2250, 3590, 4490],
  discountedMonthly: [1490, 2390, 2990],
};

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("yearly");

  const getMonthlyPrice = (count: number) => {
    const monthlyBase = PRICING_DATA.discountedMonthly[count - 1];
    if (billingCycle === "monthly") {
      return monthlyBase;
    }
    // Yıllık: 10 aylık fiyat / 12 ay
    return Math.round((monthlyBase * 10) / 12);
  };

  const getYearlyTotal = (count: number) => {
    return PRICING_DATA.discountedMonthly[count - 1] * 10;
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('tr-TR').format(price);
  };

  return (
    <section id="pricing" className="py-12 bg-black relative font-sans">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="section-title"
          >
            Abonelik Planları
          </motion.h2>
          
          {/* Toggle */}
          <div className="flex items-center justify-center gap-6 mb-12">
            <span className={`text-sm font-bold uppercase tracking-widest ${billingCycle === "monthly" ? "text-primary" : "text-gray-500"}`}>Aylık</span>
            <button 
              onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
              className="w-16 h-8 bg-gray-800 rounded-full relative p-1 transition-all duration-300 border border-gray-700"
            >
              <div className={`w-6 h-6 bg-primary rounded-full transition-all duration-300 ${billingCycle === "yearly" ? "translate-x-8 shadow-gold-glow" : "translate-x-0"}`} />
            </button>
            <span className={`text-sm font-bold uppercase tracking-widest ${billingCycle === "yearly" ? "text-primary" : "text-gray-500"}`}>
              Yıllık <span className="ml-2 text-[10px] bg-primary/20 text-primary px-2 py-1 rounded-full border border-primary/30">2 AY ÜCRETSİZ</span>
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-10 items-stretch">
          {[1, 2, 3].map((count) => {
            const isPopular = count === 2;
            const monthlyPrice = getMonthlyPrice(count);
            const originalPrice = PRICING_DATA.originalMonthly[count - 1];
            
            return (
              <motion.div
                key={count}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: count * 0.1 }}
                className={`premium-card p-10 flex flex-col items-center text-center relative ${
                  isPopular ? "border-primary/50 shadow-gold-glow-hover scale-105 z-10 my-4 md:my-0" : "bg-gray-900 border-gray-800"
                }`}
              >
                {/* Lansmana Özel Fiyat Label */}
                <div className="absolute top-0 left-0 overflow-hidden w-32 h-32 -translate-x-2 -translate-y-2 pointer-events-none z-30">
                  <div className="bg-primary text-black text-[10px] font-bold py-1 px-10 absolute top-6 -left-8 -rotate-45 shadow-gold-glow uppercase tracking-tighter">
                    Lansmana Özel
                  </div>
                </div>

                {isPopular && (
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-black px-6 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-2 z-40 shadow-gold-glow whitespace-nowrap">
                    <Star size={14} fill="currentColor" />
                    EN POPÜLER
                  </div>
                )}
                
                <h3 className="text-xl font-bold text-white mb-2">
                  {count} İndikatör
                </h3>
                <p className="text-gray-500 text-sm mb-6 px-4 leading-relaxed">
                  {count === 1 
                    ? "ABD Borsası, Türk Borsası, Kripto indikatörlerinden yalnızca 1'i" 
                    : count === 2 
                      ? "ABD Borsası, Türk Borsası, Kripto indikatörlerinden yalnızca 2'si" 
                      : "ABD Borsası, Türk Borsası, Kripto indikatörlerinden 3'ü"}
                </p>
                
                <div className="mb-8 flex flex-col items-center">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-gray-500 line-through text-lg font-bold">{formatPrice(originalPrice)} TL</span>
                    <span className="text-4xl font-bold text-white">{formatPrice(monthlyPrice)} TL</span>
                    <span className="text-gray-500 text-sm">/ay</span>
                  </div>
                  
                  {billingCycle === "yearly" && (
                    <div className="mt-2 flex flex-col items-center">
                      <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">
                        Yıllık {formatPrice(getYearlyTotal(count))} TL Faturalandırılır
                      </p>
                      <p className="text-primary-light text-[10px] font-bold mt-1 uppercase">
                        YILLIK {formatPrice(PRICING_DATA.discountedMonthly[count - 1] * 2)} TL TASARRUF EDİN
                      </p>
                    </div>
                  )}
                </div>

                <ul className="space-y-4 mb-10 w-full text-left flex-grow">
                  {count === 3 ? (
                    <>
                      <li className="flex items-center gap-3 text-gray-300 text-sm">
                        <Check size={18} className="text-primary flex-shrink-0" />
                        <span>TrendAlgo Pro – ABD</span>
                      </li>
                      <li className="flex items-center gap-3 text-gray-300 text-sm">
                        <Check size={18} className="text-primary flex-shrink-0" />
                        <span>TrendAlgo Pro – BIST</span>
                      </li>
                      <li className="flex items-center gap-3 text-gray-300 text-sm">
                        <Check size={18} className="text-primary flex-shrink-0" />
                        <span>TrendAlgo Pro – Kripto</span>
                      </li>
                    </>
                  ) : (
                    <li className="flex items-center gap-3 text-gray-300 text-sm">
                      <Check size={18} className="text-primary flex-shrink-0" />
                      <span>{count === 1 ? "Bir" : "İki"} indikatör erişimi</span>
                    </li>
                  )}
                  
                  <li className="flex items-center gap-3 text-gray-300 text-sm">
                    <Check size={18} className="text-primary flex-shrink-0" />
                    <span>İndikatör kurulum desteği</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-300 text-sm">
                    <Check size={18} className="text-primary flex-shrink-0" />
                    <span>Alarm kurulum desteği</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-300 text-sm">
                    <Check size={18} className="text-primary flex-shrink-0" />
                    <span>24/7 Destek</span>
                  </li>
                  {count >= 2 && (
                    <li className="flex items-center gap-3 text-primary text-sm font-bold">
                      <Check size={18} className="text-primary flex-shrink-0" />
                      <span>İzleme Listesi Oluşturma Desteği</span>
                    </li>
                  )}
                </ul>

                <button className={`w-full py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-all duration-300 ${
                  isPopular ? "bg-primary text-black hover:shadow-gold-glow" : "bg-white text-black hover:bg-primary hover:text-black"
                }`}>
                  ŞİMDİ ERİŞİM SAĞLAYIN
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
      <div className="gold-divider" />
    </section>
  );
};

export default Pricing;
