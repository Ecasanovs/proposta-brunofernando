import { Instagram, Facebook, Twitter } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-black border-t border-white/10 py-16">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h2 className="font-display text-4xl text-white uppercase tracking-wider">
              Bruno <span className="text-jordan-red">Fernando</span>
            </h2>
            <p className="text-gray-500 text-sm mt-2 uppercase tracking-widest">
              {t.footer.tagline}
            </p>
          </div>

          <div className="flex items-center gap-8">
            <a href="https://www.instagram.com/the_angolan_bf/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-jordan-red transition-colors duration-300">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-jordan-red transition-colors duration-300">
              <Facebook size={24} />
            </a>
            <a href="https://twitter.com/bruno_fernando" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-jordan-red transition-colors duration-300">
              <Twitter size={24} />
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600 uppercase tracking-wider">
          <p>&copy; 2025 Bruno Fernando. {t.footer.copyright}</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">{t.footer.privacy}</a>
            <a href="#" className="hover:text-white transition-colors">{t.footer.terms}</a>
            <a href="#" className="hover:text-white transition-colors">{t.footer.contact}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
