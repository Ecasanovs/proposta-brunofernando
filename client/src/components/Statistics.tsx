import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Trophy } from "lucide-react";

const StatItem = ({ value, label, delay, isTrophy = false }: { value: string; label: string; delay: number; isTrophy?: boolean }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay }}
      className="flex flex-col items-center justify-center p-8 border border-white/5 hover:border-jordan-red/50 transition-colors duration-500 bg-white/5 backdrop-blur-sm group"
    >
      {isTrophy ? (
        <div className="mb-4">
          <Trophy className="text-white group-hover:text-jordan-red transition-colors duration-300" size={80} strokeWidth={1.5} />
        </div>
      ) : (
        <h3 className="font-display text-5xl md:text-8xl text-white group-hover:text-jordan-red transition-colors duration-300">
          {value}
        </h3>
      )}
      <p className="text-gray-400 uppercase tracking-[0.2em] text-sm mt-2 text-center">
        {label}
      </p>
    </motion.div>
  );
};

export default function Statistics() {
  const { t } = useLanguage();
  
  return (
    <section id="statistics" className="bg-black py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-jordan-red/5 skew-x-12 transform origin-bottom-left"></div>
      
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 px-4">
          <div>
            <h2 className="font-display text-4xl md:text-6xl text-white uppercase italic">
              {t.statistics.title} <span className="text-jordan-red">{t.statistics.titleHighlight}</span>
            </h2>
            <div className="h-1 w-24 bg-jordan-red mt-4"></div>
          </div>
          <p className="text-gray-400 max-w-md text-right mt-4 md:mt-0 font-body text-sm md:text-base">
            {t.statistics.description}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatItem value={t.statistics.stat1.value} label={t.statistics.stat1.label} delay={0.1} />
          <StatItem value={t.statistics.stat2.value} label={t.statistics.stat2.label} delay={0.2} />
          <StatItem value={t.statistics.stat3.value} label={t.statistics.stat3.label} delay={0.3} />
          <StatItem value="" label={t.statistics.stat4.label} delay={0.4} isTrophy={true} />
        </div>

        <div className="mt-24 flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute -inset-4 border border-jordan-red/30 z-0 translate-x-4 translate-y-4"></div>
            <img 
              src="/bruno/nba_action.png" 
              alt="Bruno Fernando em ação pela Seleção de Angola" 
              className="w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700 relative z-10"
            />
          </div>
          
          <div className="w-full lg:w-1/2 space-y-8">
            <h3 className="font-display text-4xl text-white uppercase">
              "{t.statistics.quote}"
            </h3>
            <p className="text-gray-400 font-body leading-relaxed">
              {t.statistics.bio1}
            </p>
            <p className="text-gray-400 font-body leading-relaxed">
              {t.statistics.bio2}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
