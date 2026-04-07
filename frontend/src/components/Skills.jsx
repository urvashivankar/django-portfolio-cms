import { motion } from 'framer-motion';
import { usePortfolioData } from '../hooks/usePortfolioData';
import { Brain, Database, Globe, Zap, Cpu } from 'lucide-react';

const Skills = () => {
    const { skills: rawSkills, loading, error } = usePortfolioData();

    // Group skills by category
    const groupedSkills = (rawSkills || []).reduce((acc, skill) => {
        if (!acc[skill.category]) {
            acc[skill.category] = [];
        }
        acc[skill.category].push(skill.name);
        return acc;
    }, {});

    const skillCategories = [
        {
            name: "Frontend Development",
            label: "Frontend Development",
            icon: <Globe size={20} />,
            description: "Responsive web applications with seamless AI integration.",
            primary: false
        },
        {
            name: "Backend Development",
            label: "Backend Development",
            icon: <Database size={20} />,
            description: "Scalable server-side logic and high-performance APIs.",
            primary: false
        },
        {
            name: "AI Integration",
            label: "AI Integration",
            icon: <Brain size={20} />,
            description: "Production-ready AI systems with intelligent automation.",
            primary: true
        },
        {
            name: "Deployment & DevOps",
            label: "Deployment & DevOps",
            icon: <Zap size={20} />,
            description: "CI/CD workflows and production deployment pipelines.",
            primary: false
        }
    ];
    return (
        <section id="skills" className="py-24 relative bg-slate-900/20">
            <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center lg:text-left">
                <div className="mb-20 flex flex-col lg:flex-row justify-between items-end gap-10">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3 mb-6"
                        >
                            <div className="h-px w-8 bg-primary" />
                            <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px]">Capabilities</span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-grotesk font-bold text-white tracking-tighter leading-none"
                        >
                            Technical <br /><span className="text-gradient">Infrastructure.</span>
                        </motion.h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="glass px-5 md:px-6 py-3 md:py-4 flex flex-col sm:flex-row items-center sm:items-start lg:items-center gap-3 md:gap-4 text-center sm:text-left mx-auto lg:mx-0 w-full md:w-auto"
                    >
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                            <Cpu size={18} className="animate-pulse" />
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Currently Learning</p>
                            <p className="text-xs text-white font-medium">Django &bull; Advanced AI &bull; System Design</p>
                        </div>
                    </motion.div>
                </div>

                <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-hidden rounded-3xl">
                    {loading ? (
                        <div className="col-span-4 text-center text-slate-500 py-10 animate-pulse font-bold">Initializing systems...</div>
                    ) : (
                        skillCategories.map((cat, index) => {
                            const items = groupedSkills[cat.name] || [];
                            if (items.length === 0) return null;
                            
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.8 }}
                                    whileHover={{ y: -10 }}
                                    className={`glass p-6 md:p-10 flex flex-col group relative rounded-3xl border border-white/5 ${cat.primary ? 'ring-2 ring-primary/30' : ''}`}
                                >
                                    {/* Hover Glow */}
                                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/[0.03] transition-colors duration-500 rounded-3xl md:rounded-none"></div>

                                    <div className="relative z-10 flex flex-col h-full">
                                        <div className="flex justify-between items-start mb-8">
                                            <div className="p-3 w-fit bg-white/5 rounded-xl text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                                {cat.icon}
                                            </div>
                                            {cat.primary && (
                                                <span className="text-[9px] font-black uppercase tracking-[0.2em] px-2 py-1 bg-primary text-white rounded">Focus</span>
                                            )}
                                        </div>

                                        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300 text-left">
                                            {cat.label}
                                        </h3>

                                        <p className="text-slate-400 text-sm mb-8 leading-relaxed font-light text-left">
                                            {cat.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mt-auto justify-start">
                                            {items.map((item) => (
                                                <span
                                                    key={item}
                                                    className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 bg-white/5 border border-white/5 text-slate-400 group-hover:border-primary/20 group-hover:text-primary group-hover:text-slate-200 transition-all cursor-default"
                                                >
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Border accents */}
                                    <div className="absolute bottom-4 right-4 w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity"></div>
                                </motion.div>
                            );
                        })
                    )}
                </div>
            </div>
        </section>
    );
};



export default Skills;
