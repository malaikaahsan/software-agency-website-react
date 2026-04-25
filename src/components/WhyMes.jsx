import {Users,Briefcase,Shield} from "lucide-react"

export default function WhyMes() {
  const perks = [
    { icon: <Users />, title: "Partner mindset", desc: "We co‑design roadmaps and share KPIs." },
    { icon: <Briefcase />, title: "Senior‑led teams", desc: "Direct access to leads who ship." },
    { icon: <Shield />, title: "Quality & privacy", desc: "Secure repos, CI, rigorous QA." },
  ];

  return (
    <section id="why" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">Why choose <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent uppercase tracking-wide">MES Technology</span>?</h2>
            <p className="mt-4 text-gray-600 max-w-lg">We combine gameplay instincts with product discipline. Every sprint ties to measurable outcomes: retention, LTV, and speed to market.</p>

            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              {perks.map(p => (
                <div key={p.title} className="rounded-2xl border bg-white p-5">
                  <div className="mb-3 inline-flex rounded-xl bg-gradient-to-r from-orange-500 to-violet-600/90 p-2 text-white">{p.icon}</div>
                  <div className="font-semibold">{p.title}</div>
                  <div className="text-sm text-gray-600">{p.desc}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-orange-200/40 to-violet-200/40 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border bg-white p-6 shadow-xl">
              <img src="./whymes.avif" className="rounded-xl h-[20vh] sm:h-[70vh] w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}