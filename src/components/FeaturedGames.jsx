import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function FeaturedGames() {
  const games = [
    { 
      title: "Deer Hunting", 
      tags: ["Hunting", "Shooter"], 
      img: "./deer_hunting.webp", 
      link: "https://play.google.com/store/apps/details?id=com.lgs.deer.hunting.wild.hunter.deer.animal.shooting" 
    },
    { 
      title: "Scary Horror", 
      tags: ["Horror", "Survival"], 
      img: "/scary.webp", 
      link: "https://play.google.com/store/apps/details?id=com.ls.adventure.scary.horror.mention.escape" 
    },
    { 
      title: "Shark Attack", 
      tags: ["Shark", "Adventure"], 
      img: "./shark.webp", 
      link: "https://play.google.com/store/apps/details?id=com.lgs.HungrySharkAttack.Underwaterworld.SeaAdvanture" 
    },
    { 
      title: "Coach Bus", 
      tags: ["Bus", "Simulator"], 
      img: "./bus.webp", 
      link: "https://play.google.com/store/apps/details?id=com.epic.citypassenger.coachbus.simulatorbus.driving3d.offline.bus.games" 
    },
    { 
      title: "Fps Commando", 
      tags: ["Shooter", "Action"], 
      img: "./commando.webp", 
      link: "https://play.google.com/store/apps/details?id=com.lgs.fps.commando.gun.shooting.games" 
    },
    { 
      title: "Highway Driving", 
      tags: ["Offroad", "Driving"], 
      img: "./driving.webp", 
      link: "https://play.google.com/store/apps/details?id=com.epic.offroad.suvjeep.driving.games.PradoCarGames.SimulatorGames" 
    },
  ];

  return (
    <section id="games" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Featured <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent uppercase tracking-wider">Games & Apps</span>
            </h2>
            <p className="mt-2 text-gray-600">A glimpse of what we ship. More on request.</p>
          </div>
          <a 
            href="#contact" 
            className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
          >
            Request full portfolio <ChevronRight size={16} />
          </a>
        </div>

        <div className="mt-10 grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-[5vw]">
          {games.map((g) => (
            <motion.a 
              key={g.title} 
              href={g.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              whileHover={{ y: -6 }} 
              className="group overflow-hidden rounded-3xl border bg-white shadow-sm"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={g.img} 
                  alt={g.title} 
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" 
                />
              </div>
              <div className="p-4">
                <div className="flex flex-wrap gap-2 text-[10px]">
                  {g.tags.map(t => (
                    <span key={t} className="rounded-full bg-gray-100 px-2 py-1 text-gray-600">{t}</span>
                  ))}
                </div>
                <h3 className="mt-2 font-semibold">{g.title}</h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

