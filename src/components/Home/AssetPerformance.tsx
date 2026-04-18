"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PERFORMANCE_DATA = {
  "ABD Borsası": [
    { asset: "GOLD", performance: 6769, startYear: 1970, hold: 13196 },
    { asset: "GEV", performance: 540, startYear: 2024, hold: 468 },
    { asset: "LRCX", performance: 79102, startYear: 1985, hold: 120809 },
    { asset: "ASML", performance: 23756, startYear: 1996, hold: 25551 },
    { asset: "ANET", performance: 3017, startYear: 2015, hold: 4000 },
    { asset: "CVNA", performance: 85610, startYear: 2017, hold: 2760 },
    { asset: "ALAB", performance: 288, startYear: 2024, hold: 140 },
    { asset: "RKLB", performance: 2659, startYear: 2021, hold: 729 },
    { asset: "COIN", performance: 285, startYear: 2021, hold: -17 },
    { asset: "SOFI", performance: 538, startYear: 2021, hold: 14 },
    { asset: "NFLX", performance: 707668, startYear: 2002, hold: 133233 },
    { asset: "AMD", performance: 25656516, startYear: 1973, hold: 89577 },
    { asset: "SHOP", performance: 8788, startYear: 2016, hold: 4417 },
    { asset: "NOW", performance: 1874, startYear: 2013, hold: 1241 },
    { asset: "NET", performance: 2424, startYear: 2020, hold: 765 },
    { asset: "IREN", performance: 4425, startYear: 2022, hold: 329 },
    { asset: "HUT", performance: 3088, startYear: 2018, hold: 363 },
    { asset: "NNE", performance: 704, startYear: 2024, hold: 415 },
    { asset: "HIMS", performance: 1202, startYear: 2020, hold: 177 },
    { asset: "IONQ", performance: 474, startYear: 2021, hold: 292 },
    { asset: "NVDA", performance: 1030903, startYear: 1999, hold: 454445 },
    { asset: "TSLA", performance: 45649, startYear: 2010, hold: 30511 },
    { asset: "PLTR", performance: 1973, startYear: 2021, hold: 568 },
    { asset: "SNDK", performance: 1568, startYear: 2025, hold: 1768 },
    { asset: "MSTR", performance: 78691, startYear: 1998, hold: 817 },
    { asset: "MU", performance: 588063, startYear: 1984, hold: 16591 },
  ],
  "Kripto": [
    { asset: "BTC", performance: 8963, startYear: 2017, hold: 1743 },
    { asset: "ETH", performance: 17456, startYear: 2017, hold: 677 },
    { asset: "SOL", performance: 39536, startYear: 2020, hold: 4535 },
    { asset: "RAY", performance: 456, startYear: 2021, hold: -93 },
    { asset: "PEPE", performance: 3162, startYear: 2023, hold: 223 },
    { asset: "DOGE", performance: 24735, startYear: 2019, hold: 3746 },
    { asset: "SUI", performance: 693, startYear: 2023, hold: 44 },
    { asset: "XRP", performance: 5554, startYear: 2018, hold: 138 },
    { asset: "ADA", performance: 11956, startYear: 2018, hold: 63 },
    { asset: "ENS", performance: 782, startYear: 2021, hold: -84 },
  ],
  "İstanbul Borsası": [
    { asset: "BIST 100", performance: 312.4, startYear: "Saatlik Grafik", hold: 250 },
    { asset: "THYAO", performance: 412.8, startYear: "Saatlik Grafik", hold: 380 },
    { asset: "EREGL", performance: 298.1, startYear: "Saatlik Grafik", hold: 220 },
    { asset: "SISE", performance: 312.4, startYear: "Saatlik Grafik", hold: 260 },
    { asset: "TUPRS", performance: 345.2, startYear: "Saatlik Grafik", hold: 310 },
  ],
};

const AssetPerformance = () => {
  const [activeTab, setActiveTab] = useState<keyof typeof PERFORMANCE_DATA>("ABD Borsası");
  const currentYear = 2026;

  const sortedData = [...PERFORMANCE_DATA[activeTab]].sort((a, b) => {
    // İstanbul Borsası sorting (keep as is or simple descending)
    if (activeTab === "İstanbul Borsası") {
      return (b.performance as number) - (a.performance as number);
    }

    // Fixed orders for different markets
    const fixedOrders: Record<string, string[]> = {
      "ABD Borsası": ["GOLD", "NVDA", "PLTR", "TSLA", "AMD", "NFLX", "MU"],
      "Kripto": ["BTC", "ETH", "SOL"]
    };

    const currentFixedOrder = fixedOrders[activeTab] || [];
    const aIndex = currentFixedOrder.indexOf(a.asset);
    const bIndex = currentFixedOrder.indexOf(b.asset);

    // If both are in fixed order, use their relative position
    if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex;
    // If only one is in fixed order, it comes first
    if (aIndex !== -1) return -1;
    if (bIndex !== -1) return 1;

    // CAGR Calculation for the rest
    const getCAGR = (item: any) => {
      const years = currentYear - (item.startYear as number);
      if (years <= 0) return item.performance; // Handling 2026 or future start
      return Math.pow(item.performance / 100 + 1, 1 / years) - 1;
    };

    return getCAGR(b) - getCAGR(a);
  });

  return (
    <section id="performance" className="py-12 bg-black relative">
      <div className="gold-divider mt-0 mb-12" />
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="section-title"
          >
            Eşsiz Performans
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Geçmiş verilerde test edilmiş yüksek performans sonuçları.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12 space-x-2 p-1 bg-gray-900/50 rounded-full max-w-md mx-auto border border-gray-800">
          {(Object.keys(PERFORMANCE_DATA) as Array<keyof typeof PERFORMANCE_DATA>).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 flex-1 ${
                activeTab === tab 
                  ? "bg-primary text-black shadow-gold-glow" 
                  : "text-gray-500 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Table Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="premium-card bg-gray-900/40 backdrop-blur-sm border border-gray-800"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-black/50 border-b border-gray-800">
                    <th className="px-8 py-6 text-sm uppercase tracking-widest font-bold text-primary">Varlık</th>
                    <th className="px-8 py-6 text-sm uppercase tracking-widest font-bold text-primary"></th>
                    <th className="px-8 py-6 text-sm uppercase tracking-widest font-bold text-primary">Zaman Aralığı</th>
                    <th className="px-8 py-6 text-sm uppercase tracking-widest font-bold text-primary">Grafik Tipi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  {sortedData.map((row, idx) => {
                    const maxVal = Math.max(row.performance as number, Math.abs(row.hold as number));
                    const getWidth = (val: number) => {
                      if (maxVal === 0) return "0%";
                      return `${Math.max((val / maxVal) * 100, 2)}%`;
                    };

                    return (
                      <tr key={idx} className="hover:bg-gray-800/30 transition-colors">
                        <td className="px-8 py-6 font-bold text-white whitespace-nowrap">{row.asset}</td>
                        <td className="px-8 py-6 min-w-[300px]">
                          <div className="flex flex-col space-y-3">
                            {/* Indicator Bar */}
                            <div className="flex items-center gap-3">
                              <span className="text-[10px] text-gray-400 uppercase tracking-tighter w-16 text-right shrink-0">İndikatör</span>
                              <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                                <motion.div 
                                  initial={{ width: 0 }}
                                  whileInView={{ width: getWidth(row.performance as number) }}
                                  className="h-full bg-primary shadow-gold-glow"
                                />
                              </div>
                              <span className="text-[10px] font-bold text-primary w-12 shrink-0">%{new Intl.NumberFormat('tr-TR').format(row.performance as number)}</span>
                            </div>
                            {/* Hold Bar */}
                            <div className="flex items-center gap-3">
                              <span className="text-[10px] text-white/50 uppercase tracking-tighter w-16 text-right shrink-0">Hold</span>
                              <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                                <motion.div 
                                  initial={{ width: 0 }}
                                  whileInView={{ width: getWidth(Math.abs(row.hold as number)) }}
                                  className={`h-full ${ (row.hold as number) < 0 ? 'bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]' : 'bg-white/90' }`}
                                />
                              </div>
                              <span className={`text-[10px] font-medium w-12 shrink-0 ${ (row.hold as number) < 0 ? 'text-red-500' : 'text-white/70' }`}>
                                %{new Intl.NumberFormat('tr-TR').format(row.hold as number)}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="px-8 py-6 text-gray-400 whitespace-nowrap">
                          {typeof row.startYear === 'number' ? `${row.startYear} - ${currentYear}` : row.startYear}
                        </td>
                        <td className="px-8 py-6 text-gray-400 whitespace-nowrap">
                          {activeTab === "İstanbul Borsası" ? "Saatlik Grafik" : "Günlük Grafik"}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="gold-divider" />
    </section>
  );
};

export default AssetPerformance;
