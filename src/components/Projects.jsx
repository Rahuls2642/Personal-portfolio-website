import React from "react";
import geminiIMG from '../assets/image.png'
import Portfolio from '../assets/Portfolio.png'
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaCss3Alt ,FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";



const projects = [
  {
    id: "p1",
    title: "Gemini Clone",
    tagline: "Featured Project",
    description:
      "A powerful, interactive web application simulating the core conversational and generative capabilities of the Gemini model. Engage in real-time chat, generate creative content (like stories, poems, or scripts), perform complex code generation tasks, and get grounded, up-to-date answers by leveraging integrated web search.",
    image: geminiIMG, 
    imageAlt: "project template",
    liveUrl: "https://verdant-mochi-207a94.netlify.app",
    repoUrl: "https://github.com/Rahuls2642/Gemini-clone-2",
    tech: ["React", "Node.js","CSS"],
  },
  {
    id: "p2",
    title: "Personal Portfolio",
    tagline: "Featured Project",
    description:
      "A responsive and accessible website built to showcase my work as a web developer. Designed with a clean layout and smooth interactions using React, TypeScript, and Tailwind CSS.",
    image: Portfolio,
    imageAlt: "Another project mockup",
    liveUrl: "#",
    repoUrl: "#",
    tech: ["React", "Tailwind","Node.js"],
  },
];


const techIcons = {
  React: <SiReact className="text-2xl" />,
  "Next.js": <SiNextdotjs className="text-2xl" />,
  JavaScript: <SiJavascript className="text-2xl" />,
  TypeScript: <SiTypescript className="text-2xl" />,
  "Node.js": <SiNodedotjs className="text-2xl" />,
  MongoDB: <SiMongodb className="text-2xl" />,
  Tailwind: <SiTailwindcss className="text-2xl" />,
  CSS:<FaCss3Alt className="text-2xl" /> 
};

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section
      id="projects"
      ref={ref}
      className="relative bg-[#0b001a] text-white py-24 px-6 overflow-hidden"
    >
   
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -left-24 w-[700px] h-[700px] rounded-full bg-purple-700/10 blur-3xl" />
        <div className="absolute -bottom-40 right-20 w-[520px] h-[520px] rounded-full bg-purple-600/10 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-100 mb-12">
          Selected Projects
        </h2>

        <div className="flex flex-col gap-20">
          {projects.map((p, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.article
                key={p.id}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.08 * idx, ease: "easeOut" }}
                className="w-full"
                aria-labelledby={`proj-${p.id}-title`}
              >
                <div
                  className={`grid grid-cols-1 md:grid-cols-12 gap-6 items-center ${
                    isEven ? "md:grid-flow-col" : "md:grid-flow-col-dense"
                  }`}
                >
                
                  <div
                    className={`md:col-span-6 ${
                      isEven ? "md:order-1" : "md:order-2"
                    } flex justify-center md:justify-start`}
                  >
                    <div className="w-full md:max-w-md relative">
                      <div className="text-sm text-purple-300 font-medium mb-3">
                        {p.tagline}
                      </div>

                      <h3
                        id={`proj-${p.id}-title`}
                        className="text-2xl sm:text-3xl font-bold text-gray-100 mb-4"
                      >
                        {p.title}
                      </h3>

                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {p.description}
                      </p>

                      <div className="flex items-center gap-3">
                        <a
                          href={p.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md"
                        >
                          <FaExternalLinkAlt className="text-sm" />
                          Live
                        </a>

                        <a
                          href={p.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 border border-purple-600 text-purple-200 px-4 py-2 rounded-full text-sm font-medium hover:bg-purple-700 hover:text-white transition-colors"
                        >
                          <FaGithub className="text-sm" />
                          GitHub
                        </a>
                      </div>

          
                      <div className="mt-6 flex flex-wrap items-center gap-3">
                        {p.tech.map((t) => (
                          <div
                            key={t}
                            className="flex items-center gap-2 bg-white/3 px-3 py-1 rounded-full text-xs text-gray-100"
                          >
                            <span className="flex items-center justify-center w-5 h-5">
                              {techIcons[t] ?? <span className="text-xs">•</span>}
                            </span>
                            <span className="text-xs text-gray-200">{t}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  
                    <div
                      aria-hidden
                      className={`absolute -inset-3 rounded-2xl blur-[60px] ${
                        isEven ? "left-0" : "right-0"
                      }`}
                      style={{
                        background:
                          "linear-gradient(90deg, rgba(124,58,237,0.14) 0%, rgba(79,70,229,0.08) 60%)",
                        zIndex: -10,
                      }}
                    />
                  </div>

                  <div
                    className={`md:col-span-6 ${
                      isEven ? "md:order-2" : "md:order-1"
                    } flex justify-center md:justify-end`}
                  >
                    <div className="relative w-full md:max-w-2xl">
                      <div className="rounded-xl overflow-hidden shadow-2xl border border-purple-900/20">
                        <img
                          src={p.image}
                          alt={p.imageAlt}
                          className="w-full h-auto object-cover block"
                          style={{ minHeight: 220 }}
                        />
                      </div>

                     
                      <div
                        aria-hidden
                        className="absolute -inset-2 rounded-xl"
                        style={{
                          boxShadow: "0 40px 80px rgba(124,58,237,0.14)",
                          borderRadius: 14,
                          zIndex: -20,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
