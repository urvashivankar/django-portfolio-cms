import { memo, useRef } from 'react';
import { usePortfolioData } from '../hooks/usePortfolioData';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BarChart2, Brain, Globe, Server, Rocket, ArrowUpRight } from 'lucide-react';

const About = memo(() => {
    const { profile, loading, error } = usePortfolioData();
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Fast Parallax for Header
    const headerY = useTransform(scrollYProgress, [0, 1], [-50, 50]);

    const services = [
        {
            icon: <Brain size={22} />,
            title: "AI Integration",
            text: "Deep Learning Systems",
            subtext: "Architecting intelligent solutions with LLMs, Computer Vision, and automated pipelines.",
            color: "from-purple-500/10 to-blue-500/10",
        },
        {
            icon: <Globe size={22} />,
            title: "Full Stack",
            text: "Modern Web Platforms",
            subtext: "Developing high-performance, responsive applications using React, Next.js, and FastAPI.",
            color: "from-blue-500/10 to-teal-500/10",
        },
        {
            icon: <Server size={22} />,
            title: "Backend",
            text: "Engineered Infrastructure",
            subtext: "Designing robust server architectures, optimized databases, and secure REST/GraphQL APIs.",
            color: "from-indigo-500/10 to-blue-500/10",
        },
        {
            icon: <Rocket size={22} />,
            title: "Strategy",
            text: "Product Leadership",
            subtext: "Combining technical excellence with strategic problem-solving and cross-team collaboration.",
            color: "from-pink-500/10 to-purple-500/10",
        }
    ];

    return (
        <section id="about" ref={sectionRef} className="py-32 relative overflow-hidden bg-slate-950/40">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <div className="mb-20 relative z-10 max-w-2xl">
                    <motion.div
                        style={{ y: headerY }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-px w-8 bg-primary" />
                            <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px]">Namaste • Urvashi Vankar</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-grotesk font-bold text-white tracking-tighter leading-none">
                            Focused on <br /><span className="text-gradient">Core Innovation.</span>
                        </h2>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-4 gap-6 relative z-20">
                    {/* Main Bio Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="md:col-span-4 glass p-10 md:p-14 relative overflow-hidden group rounded-[3rem] border border-white/5 hover:border-white/10 transition-all shadow-2xl"
                    >
                        <div className="relative z-10 max-w-3xl">
                            {loading ? (
                                <div className="animate-pulse space-y-4">
                                    <div className="h-8 bg-white/10 rounded w-3/4"></div>
                                    <div className="h-20 bg-white/10 rounded w-full"></div>
                                </div>
                            ) : (
                                <>
                                    <h3 className="text-xl md:text-2xl font-bold font-grotesk mb-8 text-white tracking-tight leading-relaxed">
                                        I am a <span className="text-secondary font-extrabold">{profile?.title || 'Full Stack AI Developer'}</span> dedicated to engineering high-performance, scalable systems.
                                    </h3>
                                    <div 
                                        className="text-slate-400 text-base md:text-lg leading-relaxed font-inter font-light tracking-wide italic border-l-2 border-primary/20 pl-6 py-2 prose prose-invert max-w-none"
                                        dangerouslySetInnerHTML={{ __html: profile?.bio_html || 'My expertise lies in designing modern web architectures and intelligent backend systems.' }}
                                    />
                                </>
                            )}
                        </div>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
                    </motion.div>

                    {/* What I Do - Bento Grid Sections */}
                    {services.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
                            className="group relative p-8 glass rounded-[2.5rem] border border-white/5 hover:border-primary/30 transition-all duration-500 flex flex-col justify-between overflow-hidden"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                            
                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-white mb-8 group-hover:bg-primary/20 group-hover:border-primary/30 transition-all duration-500">
                                    {item.icon}
                                </div>
                                <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-primary mb-4 opacity-70">{item.title}</p>
                                <h4 className="text-xl font-bold text-white mb-4 tracking-tight leading-tight">
                                    {item.text}
                                </h4>
                                <p className="text-xs text-slate-400 leading-relaxed font-inter font-light">
                                    {item.subtext}
                                </p>
                            </div>

                            <div className="relative z-10 pt-8 mt-auto flex justify-end">
                                <ArrowUpRight size={16} className="text-slate-600 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
});

export default About;
