import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const images = [
    "/hero.jpeg",
    "/hero1.jpeg",
    "/hero2.jpeg",
    "/hero3.jpeg",
    "/hero4.jpeg",
    "/hero5.jpeg",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative overflow-hidden h-screen flex items-center">
    
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-gradient-to-r from-orange-500 to-pink-500 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-gradient-to-r from-pink-500 to-violet-600 rounded-full blur-3xl opacity-30"></div>

      <div className="relative z-10 min-h-[80vh] max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center lg:min-h-[120vh]">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center lg:text-left"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-xs font-medium text-gray-600 shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-orange-500 to-violet-600" />
            Pakistan-based Gaming & Software Studio
          </span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-4 md:mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight"
          >
            Building{" "}
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
              addictive games
            </span>{" "}
            & high-impact apps.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-3 md:mt-5 text-sm text-gray-600 max-w-xl mx-auto lg:mx-0 md:text-lg"
          >
            MES Technology crafts mobile games, custom software, and beautiful
            experiences. From concept to live-ops-we ship fast, iterate faster.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-1 md:gap-2 rounded-2xl bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 px-4 py-2 md:px-6 md:py-3 font-semibold text-white shadow-lg hover:scale-105 transition"
            >
              Get a quote <ArrowRight size={18} />
            </a>
            <a
              href="#games"
              className="inline-flex items-center gap-1 md:gap-2 rounded-2xl border px-4 py-2 md:px-6 md:py-3 font-semibold hover:bg-gray-50 transition"
            >
              See our work
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 grid grid-cols-3 gap-4 text-center">
            {[
              { label: "Projects", value: "65+" },
              { label: "Downloads", value: "2M+" },
              { label: "Clients", value: "40+" },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl border p-4">
                <div className="text-2xl font-extrabold">{s.value}</div>
                <div className="text-xs text-gray-500">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

      
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:flex justify-center"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border w-[90%] h-[80vh]">
            <motion.img
              key={current}
              src={images[current]}
              alt="MES Showcase"
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
