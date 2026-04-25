import { motion } from "framer-motion";
import { Code, Gamepad2, Cpu, MonitorSmartphone, Palette, Shield, ChevronRight } from "lucide-react";

export default function Services() {
  const items = [
    { 
      icon: <Gamepad2 />, 
      title: "Game Development", 
      desc: "Hyper-casual, hybrid, mobile games with engaging design & monetization." 
    },
    { 
      icon: <MonitorSmartphone />, 
      title: "App Development", 
      desc: "Cross-platform apps, APIs, dashboards & seamless deployments." 
    },
    { 
      icon: <Code />, 
      title: "Custom Software", 
      desc: "Business automation, SaaS platforms & enterprise integrations." 
    },
    { 
      icon: <Palette />, 
      title: "UI/UX Design", 
      desc: "Pixel-perfect interfaces, user flows & creative branding assets." 
    },
    { 
      icon: <Cpu />, 
      title: "AI & Backend", 
      desc: "AI models, cloud infra, analytics & real-time personalization." 
    },
    { 
      icon: <Shield />, 
      title: "QA & Support", 
      desc: "Automated testing, bug fixing & reliable maintenance." 
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold my-4">Our <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent uppercase tracking-wider">Services</span></h2>
            <p className="mt-2 text-gray-600">
              From concept to launch — we build digital solutions that scale.
            </p>
          </div>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
          >
            Talk to an expert <ChevronRight size={16} />
          </a>
        </div>

        <div className="mt-10 grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6">
          {items.map((it) => (
            <motion.div
              key={it.title}
              whileHover={{ y: -6, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 250, damping: 15 }}
              className="rounded-3xl border bg-white p-6 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="mb-4 inline-flex rounded-2xl bg-gradient-to-r from-orange-500 to-pink-600 p-3 text-white">
                {it.icon}
              </div>
              <h3 className="text-lg font-bold">{it.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

