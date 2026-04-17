import Link from "next/link";
import { Mail, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-900 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <Link href="/" className="text-3xl font-serif font-bold text-primary tracking-tighter mb-6 block">
              Servet<span className="text-white">Akademisi</span>
            </Link>
            <p className="text-gray-500 max-w-md leading-relaxed">
              Yatırımcıları üst düzey finansal algoritmalar ve indikatör performans analizi ile güçlendiriyoruz. Her işlemde hassasiyet, strateji ve mükemmellik.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Hızlı Bağlantılar</h4>
            <ul className="space-y-4 text-gray-500">
              <li><Link href="/" className="hover:text-primary transition-colors">Anasayfa</Link></li>
              <li><Link href="/#performance" className="hover:text-primary transition-colors">Eşsiz Performans</Link></li>
              <li><Link href="/#pricing" className="hover:text-primary transition-colors">Fiyatlandırma</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">İletişim</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Yasal</h4>
            <ul className="space-y-4 text-gray-500">
              <li><Link href="/sales-agreement" className="hover:text-primary transition-colors">Satış Sözleşmesi</Link></li>
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Gizlilik Politikası</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-colors">Kullanım Koşulları</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-gray-900 gap-8">
          <div className="flex space-x-6 text-gray-500">
            <a href="mailto:contact@trendalgopro.com" className="hover:text-primary transition-colors flex items-center gap-2">
              <Mail size={20} />
              <span>contact@trendalgopro.com</span>
            </a>
          </div>

          <div className="flex space-x-6 text-gray-500">
            <a href="#" className="hover:text-primary transition-colors"><Twitter size={24} /></a>
            <a href="#" className="hover:text-primary transition-colors"><Instagram size={24} /></a>
            <a href="#" className="hover:text-primary transition-colors"><Linkedin size={24} /></a>
          </div>

          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Servet Akademisi. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
