import { useState, useEffect, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code, ExternalLink } from "lucide-react";
import { ModeToggle } from "@/components/theme/mode-toggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = useMemo(() => [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ], []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4"
    >
      <nav 
        className={`mx-auto max-w-7xl transition-all duration-500 ${
          scrolled 
            ? "bg-background/80 shadow-lg backdrop-blur-xl border-primary/20" 
            : "bg-transparent border-transparent"
        } rounded-2xl border`}
      >
        <div className="px-6 py-3">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="relative group"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex items-center gap-2">
                <div className="bg-gradient-to-r from-primary to-secondary p-2 rounded-lg">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                  Idrees
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              <div className="mr-4 flex items-center space-x-1">
                {navigation.map((link) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="transform-gpu px-1"
                  >
                    <Link
                      to={link.href}
                      className={`relative font-medium transition-all px-4 py-2 rounded-lg overflow-hidden group ${
                        location.pathname === link.href
                          ? "text-white"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {location.pathname === link.href && (
                        <motion.div 
                          layoutId="nav-pill"
                          className="absolute inset-0 bg-gradient-to-r from-primary to-secondary -z-10"
                          transition={{ type: "spring", duration: 0.5 }}
                        />
                      )}
                      <span className="relative z-10">{link.name}</span>
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="pl-3">
                <ModeToggle />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <ModeToggle />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 hover:bg-primary/10 rounded-lg transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: 10, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-3 mx-auto max-w-7xl md:hidden overflow-hidden"
          >
            <div className="bg-background/95 backdrop-blur-xl rounded-2xl border border-primary/20 shadow-lg overflow-hidden">
              <div className="flex flex-col py-2">
                {navigation.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                  >
                    <Link
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`relative px-6 py-3 flex items-center text-base font-medium transition-all ${
                        location.pathname === link.href
                          ? "text-primary bg-primary/10"
                          : "text-muted-foreground hover:text-foreground hover:bg-primary/5"
                      }`}
                    >
                      {location.pathname === link.href && (
                        <motion.div
                          layoutId="mobile-indicator"
                          className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-secondary"
                        />
                      )}
                      <span>{link.name}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;