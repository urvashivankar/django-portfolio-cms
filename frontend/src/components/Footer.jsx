import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8 }}
      className="relative border-t border-white/10 bg-gradient-to-b from-transparent to-[#020617] pt-16 pb-8 overflow-hidden"
    >
      {/* Noise Background */}
      <div 
        className="absolute inset-0 z-0 opacity-20 mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />
      
      {/* Stars/Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[150px] bg-purple-500/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-12 items-center text-center md:text-left">
          
          {/* Left: Name + Tagline */}
          <div className="flex flex-col items-center md:items-start space-y-3">
            <h3 className="text-2xl font-bold font-grotesk text-white">
              Urvashi<span className="text-cyan-400">.</span>
            </h3>
            <p className="text-gray-400 text-sm max-w-xs font-light">
              Crafting premium digital experiences through scalable code and modern design.
            </p>
          </div>

          {/* Center: Navigation Links */}
          <div className="flex justify-center flex-wrap gap-6 text-sm font-medium">
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="relative text-gray-400 hover:text-white transition-colors duration-300 group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyan-400 transition-all duration-300 group-hover:w-full shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
              </a>
            ))}
          </div>

          {/* Right: Social Icons */}
          <div className="flex justify-center md:justify-end gap-5">
            {[
              { icon: Github, href: 'https://github.com/urvashivankar', color: 'hover:text-white hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.4)]' },
              { icon: Linkedin, href: 'https://linkedin.com/in/urvashi-vankar', color: 'hover:text-[#0A66C2] hover:border-[#0A66C2] hover:shadow-[0_0_15px_rgba(10,102,194,0.4)]' },
              { icon: Mail, href: 'mailto:urvashi0vankar@gmail.com', color: 'hover:text-purple-400 hover:border-purple-400 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)]' }
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.15, y: -2 }}
                className={`p-2.5 rounded-full bg-white/5 border border-white/10 text-gray-400 transition-all duration-300 hover:bg-white/10 ${social.color}`}
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom line text */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-light">
          <p>© {new Date().getFullYear()} Urvashi Vankar. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built with 
            <span className="text-cyan-400 font-medium">React</span> & 
            <span className="text-purple-400 font-medium">Framer Motion</span>
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
