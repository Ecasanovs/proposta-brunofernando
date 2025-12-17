import { motion } from "framer-motion";
import { Calendar, MapPin, Trophy } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const TeamCard = ({ name, period, location, achievements, delay }: { name: string; period: string; location: string; achievements: string[]; delay: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="group relative bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-all duration-300 hover:border-jordan-red/50"
    >
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <Trophy size={64} strokeWidth={1.5} />
      </div>
      
      <div className="relative z-10">
        <h3 className="font-display text-3xl text-white uppercase mb-2 group-hover:text-jordan-red transition-colors">
          {name}
        </h3>
        
        <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-6 font-body uppercase tracking-wider">
          <div className="flex items-center gap-2">
            <Calendar size={14} className="text-jordan-red" />
            {period}
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={14} className="text-jordan-red" />
            {location}
          </div>
        </div>

        <div className="space-y-2">
          {achievements.map((achievement, index) => (
            <div key={index} className="flex items-start gap-3 text-gray-300 text-sm">
              <span className="w-1.5 h-1.5 bg-jordan-red mt-1.5 rounded-full flex-shrink-0"></span>
              <span>{achievement}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function Teams() {
  const { t } = useLanguage();
  
  const teams = [
    {
      name: t.teams.kansasState.name,
      period: t.teams.kansasState.period,
      location: t.teams.kansasState.location,
      achievements: t.teams.kansasState.achievements
    },
    {
      name: t.teams.southFlorida.name,
      period: t.teams.southFlorida.period,
      location: t.teams.southFlorida.location,
      achievements: t.teams.southFlorida.achievements
    },
    {
      name: t.teams.maryland.name,
      period: t.teams.maryland.period,
      location: t.teams.maryland.location,
      achievements: t.teams.maryland.achievements
    },
    {
      name: t.teams.angola.name,
      period: t.teams.angola.period,
      location: t.teams.angola.location,
      achievements: t.teams.angola.achievements
    },
    {
      name: t.teams.southBay.name,
      period: t.teams.southBay.period,
      location: t.teams.southBay.location,
      achievements: t.teams.southBay.achievements
    },
    {
      name: t.teams.nevezis.name,
      period: t.teams.nevezis.period,
      location: t.teams.nevezis.location,
      achievements: t.teams.nevezis.achievements
    }
  ];

  return (
    <section id="teams" className="bg-black py-24 relative border-t border-white/5">
      <div className="container">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-5xl md:text-7xl text-white uppercase mb-6"
          >
            {t.teams.title} <span className="text-jordan-red">{t.teams.titleHighlight}</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl font-body"
          >
            {t.teams.description}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {teams.map((team, index) => (
            <TeamCard 
              key={index}
              name={team.name}
              period={team.period}
              location={team.location}
              achievements={team.achievements}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
