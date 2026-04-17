"use client";

import { motion } from "framer-motion";

const SalesAgreementPage = () => {
  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="section-title">Satış Sözleşmesi</h1>
          <p className="text-gray-500 italic">Son Güncelleme: 12 Nisan 2026</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="premium-card p-10 md:p-16 bg-gray-900/40 backdrop-blur-sm border-gray-800 prose prose-invert prose-gold max-w-none"
        >
          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-primary mb-6">1. Giriş</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Bu Satış Sözleşmesi ("Sözleşme"), Servet Akademisi ("Şirket", "biz" veya "bizim") ile mülkiyetimizdeki finansal indikatörlere ve algoritmalara ("Ürün") erişim satın alan birey veya kuruluş ("Müşteri", "siz" veya "sizin") arasında akdedilmiştir.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Web sitemizden bir satın alma işlemini tamamlayarak, bu Sözleşmenin şartlarını okuduğunuzu, anladığınızı ve bunlarla bağlı kalmayı kabul ettiğinizi beyan edersiniz.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-primary mb-6">2. Ürün Lisansı</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Başarılı bir ödemenin ardından Şirket, Müşteriye Ürünü yalnızca kişisel veya dahili iş amaçları için kullanması için münhasır olmayan, devredilemez ve iptal edilebilir bir lisans verir.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Servet Akademisi indikatörlerinin herhangi birinin yeniden dağıtılması, yeniden satılması veya tersine mühendislik yapılması kesinlikle yasaktır ve geri ödeme yapılmaksızın erişimin derhal durdurulmasına neden olacaktır.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-primary mb-6">3. Finansal Tavsiye Değildir</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong>SERVET AKADEMİSİ BİR FİNANSAL DANIŞMAN DEĞİLDİR.</strong> Ürün yalnızca eğitim ve bilgilendirme amaçlı sunulmaktadır. Finansal piyasalarda işlem yapmak önemli ölçüde kayıp riski içerir.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Tüm indikatör sinyalleri geçmiş verilere ve matematiksel algoritmalara dayanmaktadır. Geçmiş performans, gelecekteki sonuçların bir göstergesi değildir. Kendi işlem kararlarınızdan yalnızca siz sorumlusunuz.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-primary mb-6">4. Abonelik ve Faturalandırma</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Abonelikler, yinelenen bir temelde (aylık veya yıllık) peşin olarak faturalandırılır. Aboneliğinizi istediğiniz zaman iptal edebilirsiniz; ancak erişim, mevcut fatura döneminin sonuna kadar devam edecektir.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Ürünümüzün dijital doğası ve fikri mülkiyetin anında teslim edilmesi nedeniyle, <strong>tüm satışlar kesindir ve iade yapılamaz</strong>.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-primary mb-6">5. Sorumluluğun Sınırlandırılması</h2>
            <p className="text-gray-300 leading-relaxed">
              Servet Akademisi, Ürünün kullanımından veya kullanılamamasından kaynaklanan hiçbir doğrudan, dolaylı, arızi veya sonuçsal zarardan (kar kaybı veya işlem kayıpları dahil ancak bunlarla sınırlı olmamak üzere) hiçbir durumda sorumlu tutulamaz.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-primary mb-6">6. İletişim Bilgileri</h2>
            <p className="text-gray-300 leading-relaxed">
              Bu Sözleşme ile ilgili sorularınız için lütfen <a href="mailto:legal@trendalgopro.com" className="text-primary hover:underline">legal@trendalgopro.com</a> adresinden bizimle iletişime geçin.
            </p>
          </section>

          <div className="pt-12 border-t border-gray-800 text-center">
            <p className="text-gray-500 text-sm italic">
              Hizmetimizi kullanarak bu şartları kabul etmiş olursunuz. Servet Akademisi, bu sözleşmeyi herhangi bir zamanda değiştirme hakkını saklı tutar.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SalesAgreementPage;
