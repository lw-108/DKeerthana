import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "../constants/index.js";
import logo from "/assets/heart.png"; // adjust path if needed

const NavLink = ({ href, children, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="relative px-2 py-1 text-sm font-medium text-white/80 hover:text-white transition-colors
               after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px]
               after:bg-gradient-to-r after:from-[#ff8c00] after:to-[#ffd700] after:scale-x-0
               after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
  >
    {children}
  </a>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between py-4">
          {/* LOGO */}
          <div className="flex items-center gap-2">
            <a href="/">
              <img
                src={logo}
                alt="Keerthana Logo"
                className="h-10 w-auto object-contain"
              /></a>
          </div>

          {/* Desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((item) => (
              <NavLink key={item.id} href={item.href}>
                {item.name}
              </NavLink>
            ))}

            <a
              download="dkeerthana.pdf"
              href="/assets/dkeerthana.pdf"
              className="ml-6 px-4 py-2 rounded-full text-sm font-semibold
             bg-white/10 border border-white/20 text-white
             hover:bg-white/20 transition flex items-center gap-2"
            >
              <img src="/assets/download.svg" alt="download-svg" className="w-4 h-4" />
              Download CV
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white text-2xl"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.35 }}
            className="bg-black/60 backdrop-blur-md border-t border-white/10"
          >
            <div className="px-6 py-6 space-y-4">
              {navLinks.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-white text-lg font-semibold"
                >
                  {item.name}
                </a>
              ))}

              <span className="grid grid-cols-1 gap-3">
                {/* Contact Button */}
                <button
                  onClick={() => {
                    setIsOpen(false);
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="group px-6 py-3 rounded-full bg-gradient-to-r from-[#ff8c00] to-[#ffd700] text-black font-bold hover:from-[#ff9500] hover:to-[#ffdf00] transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/30 flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span>Let's Work Together</span>
                </button>

                {/* Download Button */}
                <a
                  download="dkeerthana.pdf"
                  href="/assets/dkeerthana.pdf"
                  className="group px-6 py-3 rounded-full bg-gradient-to-r from-[#ff8c00] to-[#ffd700] text-black font-bold hover:from-[#ff9500] hover:to-[#ffdf00] transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/30 flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Download CV</span>
                </a>
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
