import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { Trophy } from "lucide-react";

export default function Hero() {
  const { t } = useLanguage();
  
  return (
    <section className="relative h-screen w-full overflow-x-hidden bg-black flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 z-10"></div>
        <img 
          src="/bruno/profile.png" 
          alt="Bruno Fernando" 
          className="w-full h-full object-cover object-top opacity-60 grayscale md:grayscale-0"
        />
      </div>

      {/* Content Container - Sem usar classe container */}
      <div className="relative z-20 flex flex-col justify-center h-full pt-20 w-full px-4 md:px-12 lg:px-20 max-w-[1400px] mx-auto">
        
        {/* Big Number Background */}
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute left-0 top-1/2 -translate-y-1/2 text-[12rem] md:text-[25rem] lg:text-[35rem] font-display font-bold text-jordan-red/20 md:text-jordan-red/10 select-none pointer-events-none leading-none"
        >
          20
        </motion.div>

        {/* Main Text Content */}
        <div className="relative pl-0 md:pl-4 lg:pl-8 pr-4 md:pr-8">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-gray-400 text-sm md:text-base uppercase tracking-[0.3em] mb-4"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="font-display text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl text-white italic uppercase leading-[1.2] mb-4 md:mb-8"
            style={{ maxWidth: "100%" }}
          >
            {t.hero.title1} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">{t.hero.title2}</span> <br />
            <span className="text-jordan-red">{t.hero.title3}</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="flex flex-col md:flex-row flex-wrap gap-6 md:gap-8 mt-8 md:mt-12"
          >
            {/* Primeiro achievement - ícone acima, texto abaixo */}
            <div className="border-l-2 border-jordan-red pl-4">
              <Trophy className="text-white mb-2" size={24} strokeWidth={1.5} />
              <p className="text-gray-400 text-xs uppercase tracking-wider">{t.hero.achievement1.label}</p>
            </div>
            
            {/* Segundo achievement */}
            <div className="border-l-2 border-jordan-red pl-4">
              <Trophy className="text-white mb-2" size={24} strokeWidth={1.5} />
              <p className="text-gray-400 text-xs uppercase tracking-wider">{t.hero.achievement2.label}</p>
            </div>
            
            {/* Terceiro achievement */}
            <div className="border-l-2 border-jordan-red pl-4">
              <p className="text-white font-display text-2xl">{t.hero.achievement3.value}</p>
              <p className="text-gray-400 text-xs uppercase tracking-wider">{t.hero.achievement3.label}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute right-4 bottom-0 md:right-0 md:bottom-10 flex items-center gap-2"
          >
            <span className="text-gray-500 text-xs uppercase tracking-widest">{t.hero.established}</span>
            <div className="w-12 h-[1px] bg-jordan-red"></div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-gray-500 text-[10px] uppercase tracking-[0.2em]">{t.hero.scroll}</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-jordan-red to-transparent"></div>
      </motion.div>
    </section>
  );
}
