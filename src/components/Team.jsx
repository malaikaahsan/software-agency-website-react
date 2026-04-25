import { motion } from "framer-motion";

const team = [
  { name: "Shahid Mehmood", role: "Chief Executive Officer", img: "Shahid.jpg" },
  { name: "Ahmad Raza", role: "CO-Founder, VP Growth", img: "Ahmad.jpg" },
  { name: "Malaika Ahsan", role: "HR Manager", img: "Malaika.jpg" },
];

export default function Team() {
  return (
    <section id="team" className="relative bg-gray-50 py-20">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-100 via-pink-100 to-violet-100 opacity-40 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       
        <div className="text-center">
          <h2 className="text-4xl font-extrabold tracking-tight">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent uppercase tracking-wider">
              Team
            </span>
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            A tight, senior crew that owns outcomes.
          </p>
        </div>

      
        <div className="mt-16 grid gap-10 sm:grid-cols-1 md:grid-cols-3">
          {team.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="group relative bg-white/60 backdrop-blur-xl p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all"
            >
             
              <div className="flex justify-center">
                <div className="p-[3px] rounded-full bg-gradient-to-tr from-orange-500 via-pink-500 to-violet-600">
                  <img
                    src={m.img}
                    alt={m.name}
                    className="h-48 w-48 rounded-full object-cover border-4 border-white shadow-md"
                  />
                </div>
              </div>

             
              <div className="mt-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:via-pink-500 group-hover:to-violet-600 transition">
                  {m.name}
                </h3>
                <p className="text-sm text-gray-500">{m.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
