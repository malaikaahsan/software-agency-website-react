import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const nav = [
    { label: "Services", href: "#services" },
    { label: "Games", href: "#games" },
    { label: "Why MES", href: "#why" },
    { label: "Team", href: "#team" },
    { label: "Studio", href: "#studio" },
    { label: "Careers", href: "#careers" },
    { label: "Contact", href: "#contact" },
    { label: "Privacy&Terms", href: "/privacy-terms" }, 
  ];

  const handleNavClick = (href) => {
    if (href.startsWith("#")) {
      if (location.pathname === "/") {
        const el = document.querySelector(href);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        window.location.href = "/" + href;
      }
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3">
            <img src="/mes-logo.png" alt="MES Technology" className="h-9 w-auto" />
            <div className="leading-tight">
              <div className="text-lg font-semibold tracking-wide bg-gradient-to-r from-[#FF7A18] via-[#FF4D8D] to-[#6E35FF] bg-clip-text text-transparent">
                MES Technology
              </div>
              <div className="text-xs uppercase tracking-widest text-gray-500">
                Private Limited
              </div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-md font-medium">
            {nav.map((n) =>
              n.href.startsWith("#") ? (
                <button
                  key={n.label}
                  onClick={() => handleNavClick(n.href)}
                  className="text-gray-700 hover:bg-gradient-to-r hover:from-[#FF7A18] hover:via-[#FF4D8D] hover:to-[#6E35FF] hover:bg-clip-text hover:text-transparent transition-colors"
                >
                  {n.label}
                </button>
              ) : (
                <Link
                  key={n.label}
                  to={n.href}
                  className="text-gray-700 hover:bg-gradient-to-r hover:from-[#FF7A18] hover:via-[#FF4D8D] hover:to-[#6E35FF] hover:bg-clip-text hover:text-transparent transition-colors"
                >
                  {n.label}
                </Link>
              )
            )}
          </nav>

          <button
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </header>

    
    
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed h-[90vh] w-[100vw] z-40 bg-white/35 backdrop-blur-md flex flex-col items-start justify-center md:hidden rounded-br-2xl shadow-lg"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 grid gap-2">
              {nav.map((n) =>
                n.href.startsWith("#") ? (
                  <button
                    key={n.label}
                    onClick={() => {
                      handleNavClick(n.href);
                      setOpen(false);
                    }}
                    className="py-2 text-md font-bold text-gray-700 hover:bg-gradient-to-r hover:from-[#FF7A18] hover:via-[#FF4D8D] hover:to-[#6E35FF] hover:bg-clip-text hover:text-transparent transition-colors"
                  >
                    {n.label}
                  </button>
                ) : (
                  <Link
                    key={n.label}
                    to={n.href}
                    onClick={() => setOpen(false)}
                    className="py-2 text-md font-bold text-gray-700 hover:bg-gradient-to-r hover:from-[#FF7A18] hover:via-[#FF4D8D] hover:to-[#6E35FF] hover:bg-clip-text hover:text-transparent transition-colors"
                  >
                    {n.label}
                  </Link>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
