export default function CareersCTA() {
  const roles = [
    { title: "Game Developer", desc: "Work on immersive Unity projects and bring ideas to life." },
    { title: "Product Marketer", desc: "Drive growth with creative campaigns and storytelling." },
    { title: "Game Artist", desc: "Design visuals and UI that define the game experience." },
  ];

  return (
    <section id="careers" className="relative py-20 overflow-hidden">
     
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-tr from-orange-500 via-pink-500 to-violet-600 opacity-20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-gradient-to-tr from-violet-600 via-pink-500 to-orange-500 opacity-20 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold">
            🚀 <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">Join MES Technology</span>
          </h2>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto text-lg leading-relaxed">
            We’re always looking for creative engineers, designers, and artists who love to build and ship amazing experiences.
          </p>
        </div>

        
        <div className="grid lg:grid-cols-12 gap-10">
        
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-24 rounded-3xl border border-orange-200/60 bg-white/70 backdrop-blur-md p-8 shadow-lg">
              <h3 className="text-2xl font-bold">
                Why <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">Work With Us</span>
              </h3>
              <ul className="mt-6 space-y-4 text-gray-700">
                <li className="flex gap-3">
                  <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-gradient-to-r from-orange-500 to-violet-600" />
                  Meaningful, shipped-to-users projects
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-gradient-to-r from-orange-500 to-violet-600" />
                  Creative freedom & ownership
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-gradient-to-r from-orange-500 to-violet-600" />
                  Collaborative, kind teammates
                </li>
              </ul>

              <a
                href="/apply"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block rounded-full bg-gradient-to-r from-orange-500 to-violet-600 px-6 py-3 font-semibold text-white hover:opacity-90 transition"
              >
                View All Openings
              </a>

              <p className="mt-4 text-sm text-gray-500">
                Don’t see your role? Send a speculative application — we love meeting great people.
              </p>
            </div>
          </aside>

         
          <div className="lg:col-span-8">
            <div className="relative">
              
              <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-orange-500 via-pink-500 to-violet-600 opacity-50" />

              <div className="space-y-8">
                {roles.map((role, i) => (
                  <div key={i} className="group relative pl-12">
                   
                    <div className="absolute left-0 top-7 grid h-10 w-10 place-items-center">
                      <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-gradient-to-r from-orange-500 to-violet-600">
                      
                        <span className="absolute inset-0 rounded-full ring-4 ring-pink-500/10 group-hover:ring-pink-500/20 transition" />
                      </span>
                    </div>

                 
                    <div
                      className={[
                        "rounded-2xl border p-6 shadow-lg transition-all duration-300",
                        "bg-white/80 backdrop-blur-md hover:shadow-2xl hover:-translate-y-0.5",
                        i % 2 === 0 ? "border-gray-200" : "border-orange-200/70 bg-gradient-to-br from-white via-gray-50 to-gray-100",
                      ].join(" ")}
                    >
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <h4 className="text-xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
                            {role.title}
                          </h4>
                          <p className="mt-1 text-gray-600">{role.desc}</p>
                        </div>

                        <div className="flex gap-3">
                          <a
                            href="/apply"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block rounded-full bg-gradient-to-r from-orange-500 to-violet-600 px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition"
                          >
                            Apply Now
                          </a>
                          <a
                            href={`/roles/${role.title.toLowerCase().replace(/\s+/g, "-")}`}
                            className="inline-block rounded-full border border-orange-200/70 px-5 py-2.5 text-sm font-semibold text-gray-700 hover:bg-white transition"
                          >
                            Details
                          </a>
                        </div>
                      </div>

                      {/* subtle bottom accent line */}
                      <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-pink-500/30 to-transparent" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
