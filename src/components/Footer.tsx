import { Github, Linkedin, Twitter, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
  const socialLinks = [
    { 
      icon: <Github className="w-5 h-5" />, 
      href: 'https://github.com/muhammadidreeskhan', 
      label: 'GitHub',
      color: 'hover:text-[#2da44e]'
    },
    { 
      icon: <Linkedin className="w-5 h-5" />, 
      href: 'https://linkedin.com/in/muhammad-idrees-khan-796558117/', 
      label: 'LinkedIn',
      color: 'hover:text-[#0a66c2]'
    },
    { 
      icon: <Twitter className="w-5 h-5" />, 
      href: 'https://x.com/happyikhan', 
      label: 'Twitter',
      color: 'hover:text-[#1da1f2]'
    },
  ];

  const quickLinks = [
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <footer className="relative mt-20">
      {/* Enhanced background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-purple-500/5 pointer-events-none" />
      
      {/* Content */}
      <div className="relative border-t border-sky-400/10 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            {/* Branding Section */}
            <div className="md:col-span-5 space-y-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-purple-500 to-amber-500 inline-flex items-center gap-2">
                  IDREES<span className="text-purple-500 animate-pulse">.</span>
                </h3>
                <p className="text-muted-foreground/80 text-lg leading-relaxed">
                  Crafting exceptional digital experiences with modern web technologies.
                </p>
              </motion.div>

              <div className="space-y-4">
                <motion.div 
                  className="flex items-center gap-3 text-muted-foreground/80 hover:text-purple-500 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-2 rounded-lg bg-gradient-to-r from-sky-400/5 via-purple-500/5 to-amber-500/5 text-purple-500">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span>Karachi, Pakistan</span>
                </motion.div>

                <motion.a 
                  href="mailto:contactmuhammadidrees@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground/80 hover:text-purple-500 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-2 rounded-lg bg-gradient-to-r from-sky-400/5 via-purple-500/5 to-amber-500/5 text-purple-500">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span>contactmuhammadidrees@gmail.com</span>
                </motion.a>
              </div>
            </div>

            {/* Quick Links Section */}
            <div className="md:col-span-3 space-y-8">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">
                  Quick Links
                </h4>
                <div className="h-1 w-12 bg-gradient-to-r from-sky-400 via-purple-500 to-amber-500 rounded-full" />
              </div>
              
              <nav className="grid gap-3">
                {quickLinks.map((link) => (
                  <motion.div
                    key={link.label}
                    whileHover={{ x: 5 }}
                  >
                    <Link
                      to={link.href}
                      className="text-muted-foreground/80 hover:text-purple-500 transition-colors flex items-center gap-3 group"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-purple-500/40 group-hover:bg-purple-500 transition-colors" />
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>

            {/* Social Links Section */}
            <div className="md:col-span-4 space-y-8">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">
                  Connect With Me
                </h4>
                <div className="h-1 w-12 bg-gradient-to-r from-sky-400 via-purple-500 to-amber-500 rounded-full" />
              </div>

              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-lg bg-gradient-to-r from-sky-400/5 via-purple-500/5 to-amber-500/5 ${social.color} transition-all hover:scale-110 hover:shadow-[0_0_15px_rgba(168,85,247,0.2)]`}
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <motion.div 
            className="mt-16 pt-8 border-t border-sky-400/5 text-center text-muted-foreground/60"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <p>© {new Date().getFullYear()} Muhammad Idrees. All rights reserved.</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
