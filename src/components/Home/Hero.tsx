"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20 pb-10">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-primary font-bold tracking-[0.3em] uppercase mb-6 text-sm md:text-base">
            Premium Trend İndikatörü
          </h2>
          <h1 className="text-5xl md:text-8xl font-serif font-bold mb-8 leading-tight">
            Piyasalarda <br />
            <span className="text-primary italic">Algoritmik Üstünlük</span> Kur
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Yükselişleri yakala, düşüşlerden kaç. TrendAlgo Pro ile ABD borsasında, Türk borsasında ve kriptoda trendleri takip et.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link href="#performance" className="gold-button w-full md:w-auto text-center">
              PERFORMANSI İNCELE
            </Link>
            <Link href="#pricing" className="px-8 py-3 rounded-full border border-gray-700 hover:border-primary/50 transition-all text-white font-bold w-full md:w-auto text-center">
              FİYATLANDIRMAYI GÖR
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
