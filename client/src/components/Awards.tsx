import { motion } from "framer-motion";
import { Trophy, Medal, Star, Crown } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const AwardItem = ({ title, year, icon: Icon, delay }: { title: string; year: string; icon: any; delay: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="group relative flex flex-col md:flex-row md:items-center gap-3 md:gap-6 p-4 md:p-6 border-b border-white/10 hover:bg-white/5 transition-colors duration-300 cursor-pointer md:bg-transparent md:backdrop-blur-none"
    >
      {/* Blur background - only on mobile */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md rounded-lg md:hidden z-0"></div>
      <div className="text-gray-500 group-hover:text-jordan-red transition-colors duration-300 relative z-10 flex-shrink-0">
        <Icon size={32} strokeWidth={1.5} />
      </div>
      <div className="flex-1 relative z-10 md:flex-1">
        <h3 className="font-display text-lg md:text-2xl lg:text-3xl text-white uppercase group-hover:translate-x-2 transition-transform duration-300">
          {title}
        </h3>
      </div>
      <div className="text-gray-500 font-body text-xs md:text-sm lg:text-base group-hover:text-white transition-colors duration-300 relative z-10 md:flex-shrink-0">
        {year}
      </div>
      
      {/* Hover Reveal Image (Concept) */}
      <div className="absolute right-20 top-1/2 -translate-y-1/2 w-32 h-20 bg-jordan-red/10 hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-sm overflow-hidden">
        <div className="w-full h-full bg-gradient-to-r from-jordan-red to-black opacity-20"></div>
      </div>
    </motion.div>
  );
};

export default function Awards() {
  const { t } = useLanguage();
  
  return (
    <section id="awards" className="bg-black py-24 relative">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-16">
          {/* Left Column: Title & Image */}
          <div className="w-full md:w-1/3 sticky top-24 h-fit z-0">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-5xl md:text-7xl text-white uppercase leading-none mb-8"
            >
              {t.awards.title} <br />
              <span className="text-jordan-red">{t.awards.titleHighlight}</span>
            </motion.h2>
            
            <div className="relative w-full aspect-[3/4] overflow-hidden border border-white/10 group">
              <div className="absolute inset-0 bg-jordan-red/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
              {/* Dark overlay for better text readability on mobile scroll if this image is background */}
              <div className="absolute inset-0 bg-black/40 z-20 md:hidden"></div>
              <img 
                src="/bruno/headshot.png" 
                alt="Bruno Fernando Portrait" 
                className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Right Column: Awards List */}
          <div className="w-full md:w-2/3 pt-8 md:pt-24 relative z-10">
            <div className="flex flex-col">
              <AwardItem title={t.awards.award1} year="2025" icon={Crown} delay={0.1} />
              <AwardItem title={t.awards.award2} year="2024" icon={Trophy} delay={0.2} />
              <AwardItem title={t.awards.award3} year="2024" icon={Star} delay={0.3} />
              <AwardItem title={t.awards.award4} year="2024" icon={Medal} delay={0.4} />
              <AwardItem title={t.awards.award5} year="2025" icon={Trophy} delay={0.5} />
              <AwardItem title={t.awards.award6} year="2025" icon={Star} delay={0.6} />
              <AwardItem title={t.awards.award7} year={t.awards.award7Year} icon={Star} delay={0.7} />
              <AwardItem title={t.awards.award8} year={t.awards.award8Year} icon={Medal} delay={0.8} />
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-12 p-8 border border-jordan-red/20 bg-jordan-red/5"
            >
              <p className="text-gray-300 font-body italic text-lg text-center">
                "{t.awards.quote}"
              </p>
              <p className="text-jordan-red text-center mt-4 font-display uppercase tracking-widest">
                — {t.awards.quoteAuthor}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
