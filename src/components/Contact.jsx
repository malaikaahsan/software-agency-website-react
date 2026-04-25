import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[28px] p-[1px] bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 shadow-2xl">
          <div className="rounded-[27px] bg-white overflow-hidden">

            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="hidden md:block">
                <img
                  src="contact.avif"
                  alt="office"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 sm:p-10 flex items-center">
                <div className="space-y-6 max-w-md">
                  <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
                    Let’s build something{" "}
                    <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
                      together
                    </span>
                    .
                  </h2>
                  <p className="text-gray-600">
                    Reach out and we’ll get back to you within 24 hours.
                  </p>
                  <div className="space-y-3 text-sm">
                    <a
                      href="mailto:Shahidlive43@gmail.com"
                      className="group flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-3 shadow-sm transition hover:shadow-md"
                    >
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-r from-orange-500 to-violet-600 text-white">
                        <Mail size={16} />
                      </span>
                      <span className="text-gray-700 group-hover:text-gray-900">
                        Shahidlive43@gmail.com
                      </span>
                    </a>
                    <a
                      href="tel:+923317852704"
                      className="group flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-3 shadow-sm transition hover:shadow-md"
                    >
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-r from-orange-500 to-violet-600 text-white">
                        <Phone size={16} />
                      </span>
                      <span className="text-gray-700 group-hover:text-gray-900">
                        +923317852704
                      </span>
                    </a>
                    <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-3 shadow-sm">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-r from-orange-500 to-violet-600 text-white">
                        <MapPin size={16} />
                      </span>
                      <span className="text-gray-700">Block B Phase 2 PUEHS, Lahore, Pakistan</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500">
                    Prefer email? Send us your brief and budget—attachments welcome.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 border-t border-gray-200">
              <div className="p-8 sm:p-10 flex items-center">
                <div className="w-full space-y-5">
                  <div className="space-y-1">
                    <h3 className="text-xl font-semibold">Send us a message</h3>
                    <p className="text-sm text-gray-500">
                      Tell us about your project and goals.
                    </p>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor= "name" className="text-sm font-medium">Name</label>
                      <input
                        id= "name"
                        type= "text"
                        className="mt-1 w-full rounded-2xl border px-4 py-3 outline-none focus:ring-2 focus:ring-violet-500"
                      />
                    </div>
                    <div>
                      <label htmlFor= "email" className="text-sm font-medium">Email</label>
                      <input
                        id= "email"
                        type= "email"
                        className="mt-1 w-full rounded-2xl border px-4 py-3 outline-none focus:ring-2 focus:ring-violet-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="msg" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="msg"
                      className="mt-1 w-full rounded-2xl border px-4 py-3 outline-none focus:ring-2 focus:ring-violet-500 min-h-[140px] resize-none"
                      placeholder="Briefly describe what you want to build, timeline, and budget range."
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="flex-1 inline-flex justify-center items-center gap-2 rounded-2xl bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 px-6 py-3 font-semibold text-white shadow-lg hover:shadow-xl transition">
                      Send message <ArrowRight size={18} />
                    </button>
                    <span className="hidden sm:inline text-xs text-gray-500">
                      No spam. Ever.
                    </span>
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <img
                  src="contact2.avif"
                  alt="team"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

