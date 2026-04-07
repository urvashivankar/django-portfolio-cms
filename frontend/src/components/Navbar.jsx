import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <motion.nav 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, type: "spring", bounce: 0.3, delay: 0.1 }}
            className={`fixed w-full z-[999] transition-all duration-500 flex justify-center ${isScrolled ? 'top-4 pointer-events-none' : 'top-0 py-6 pointer-events-auto'}`}
        >
            {/* Desktop Navbar - Floating Pill */}
            <div className={`hidden lg:flex items-center gap-4 px-3 py-2 pointer-events-auto transition-all duration-500 rounded-full ${isScrolled ? 'bg-[#020617]/80 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]' : 'bg-transparent'}`}>
                <a href="#" className="flex items-center group mr-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center font-black text-white text-sm shadow-[0_0_15px_rgba(168,85,247,0.5)] group-hover:scale-110 transition-transform duration-300">
                        UV
                    </div>
                </a>

                <div className="flex items-center relative" onMouseLeave={() => setHoveredIndex(null)}>
                    {navLinks.map((link, index) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onMouseEnter={() => setHoveredIndex(index)}
                            className="relative px-5 py-2.5 text-xs font-bold uppercase tracking-[0.15em] text-slate-300 hover:text-white transition-colors z-10"
                        >
                            {hoveredIndex === index && (
                                <motion.div
                                    layoutId="nav-pill"
                                    className="absolute inset-0 bg-white/10 rounded-full -z-10"
                                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                />
                            )}
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>

            {/* Mobile Header */}
            <div className={`lg:hidden w-full px-6 flex justify-between items-center pointer-events-auto transition-all duration-500 ${isScrolled ? 'py-4 bg-[#020617]/90 backdrop-blur-xl border-b border-white/10 shadow-lg' : 'py-2'}`}>
                <a href="#" className="flex items-center group">
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center font-black text-white text-xs shadow-[0_0_15px_rgba(168,85,247,0.5)] group-hover:scale-110 transition-transform duration-300">
                        UV
                    </div>
                </a>

                <button onClick={() => setIsMenuOpen(true)} className="text-white p-2.5 glass rounded-full hover:bg-white/5 transition-colors">
                    <Menu size={20} />
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                        animate={{ opacity: 1, backdropFilter: 'blur(20px)' }}
                        exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                        className="fixed inset-0 top-0 left-0 w-full h-screen bg-[#020617]/95 z-[1000] lg:hidden flex flex-col pointer-events-auto"
                    >
                        <div className="flex justify-between items-center p-6 border-b border-white/5">
                            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center font-black text-white text-xs">
                                UV
                            </div>
                            <button onClick={() => setIsMenuOpen(false)} className="text-white p-2.5 glass rounded-full hover:bg-white/10 transition-colors bg-white/5">
                                <X size={20} />
                            </button>
                        </div>

                        <div className="flex flex-col h-full justify-center px-10 gap-8">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ delay: i * 0.1, type: "spring", stiffness: 200, damping: 20 }}
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-4xl font-black font-grotesk text-slate-500 hover:text-white flex justify-between items-center group transition-colors"
                                >
                                    <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500 transition-all duration-300">
                                        {link.name}
                                    </span> 
                                    <ArrowUpRight size={28} className="text-slate-700 group-hover:text-cyan-400 transition-all transform group-hover:-translate-y-1 group-hover:translate-x-1 duration-300" />
                                </motion.a>
                            ))}
                        </div>
                        
                        <motion.div 
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
                            className="mt-auto p-8 text-center text-[10px] tracking-widest text-slate-600 uppercase font-black"
                        >
                            Urvashi Vankar • Portfolio
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
