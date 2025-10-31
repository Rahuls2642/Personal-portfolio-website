import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaReact, FaNodeJs, FaGitAlt, FaDocker } from "react-icons/fa";
import { SiExpress, SiMongodb, SiJavascript, SiTypescript, SiFigma } from "react-icons/si";


const defaultSkills = [
  { id: "react", name: "React", category: "frontend", icon: <FaReact className="text-[#61DBFB]" /> },
  { id: "js", name: "JavaScript", category: "frontend", icon: <SiJavascript className="text-yellow-400" /> },
  { id: "ts", name: "TypeScript", category: "frontend", icon: <SiTypescript className="text-blue-500" /> },
  { id: "express", name: "Express", category: "backend", icon: <SiExpress className="text-[#61DBFB]" /> },
  { id: "node", name: "Node.js", category: "backend", icon: <FaNodeJs className="text-green-500" /> },
  { id: "mongo", name: "MongoDB", category: "backend", icon: <SiMongodb className="text-green-400" /> },
  { id: "git", name: "Git", category: "tool", icon: <FaGitAlt className="text-orange-500" /> },
  { id: "docker", name: "Docker", category: "tool", icon: <FaDocker className="text-blue-400" /> },
  { id: "figma", name: "Figma", category: "tool", icon: <SiFigma className="text-pink-500" /> },
];


const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.28 } },
  exit: { opacity: 0, y: 18, scale: 0.96, transition: { duration: 0.18 } },
};

export default function Skills({ skills = defaultSkills }) {
  const [filter, setFilter] = useState("all");
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  const categories = useMemo(
    () => [
      { id: "all", label: "All" },
      { id: "frontend", label: "Frontend" },
      { id: "backend", label: "Backend" },
      { id: "tool", label: "Tools" },
    ],
    []
  );

  const filtered = useMemo(() => {
    return filter === "all" ? skills : skills.filter((s) => s.category === filter);
  }, [filter, skills]);

  return (
    <section
      id="skills"
      ref={ref}
      className="bg-[#0b001a] text-white py-20 px-6 overflow-hidden"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-6xl mx-auto">
    
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <h3 id="skills-heading" className="text-3xl sm:text-4xl font-semibold text-purple-400 mb-1">
              Skills
            </h3>
            <p className="text-sm text-gray-400 max-w-xl">
              Tools and technologies I use day-to-day. Click a category to filter.
            </p>
          </div>

        
          <div className="flex gap-3 bg-transparent p-1 rounded-full">
            {categories.map((cat) => {
              const active = filter === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button" 
                  onClick={() => setFilter(cat.id)}
                  onMouseDown={(e) => e.preventDefault()} 
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 overflow-hidden
                    ${active ? "text-white" : "text-gray-300 hover:text-white"}`}
                  aria-pressed={active}
                >
                  
                  {active && (
                    <motion.span
                      layoutId="active-pill"
                      className="absolute inset-0 rounded-full bg-purple-600/20 pointer-events-none"
                      transition={{ type: "spring", stiffness: 420, damping: 32 }}
                      style={{ zIndex: 0 }}
                    />
                  )}

                  <span className="relative z-10">{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((s) => (
              <motion.div
                key={s.id}
                layout
                variants={itemVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                whileHover={{ y: -6, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-3 bg-white/5 border border-purple-700/10 rounded-xl px-4 py-3 cursor-default"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#12002a]/70 border border-purple-800/20">
  {typeof s.icon === "string" ? (
    <img src={s.icon} alt={s.name} className="w-9 h-9 object-contain" />
  ) : (
    <span className="text-3xl">{s.icon}</span> 
  )}
</div>


                <div className="text-left">
                  <div className="text-sm font-medium text-gray-100">{s.name}</div>
                  <div className="text-xs text-gray-400">
                    {s.category === "frontend" ? "Frontend" : s.category === "backend" ? "Backend" : "Tool"}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-8 text-sm text-gray-500 text-center">
            No skills in this category yet.
          </motion.p>
        )}
      </div>
    </section>
  );
}
