import React from "react";
import Moviecine from "../assets/Moviecine.png";
import geminiIMG from "../assets/image.png";
import Portfolio from "../assets/Portfolio.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaCss3Alt, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiPostman,
  SiExpress,
  SiGithub,
} from "react-icons/si";

const projects = [
  {
    id: "p1",
    title: "Movie cine",
    tagline: "Featured Project",
    description:
      "Moviecine is a full-stack movie web application built with the MERN stack (MongoDB, Express, React, Node.js) that lets users explore movies, manage a personalized watchlist, mark watched movies, and write reviews — all in a clean, cinematic interface. It connects with the TMDb API to fetch live movie data and stores all user-related actions (watchlist, watched, reviews) in MongoDB.",
    image: Moviecine,
    imageAlt: "Movie cine project preview",
    liveUrl: "https://movie-cine-frontend-jp1t.onrender.com/",
    repoUrl: "https://github.com/Rahuls2642/Movie-cine",
    tech: ["React", "Tailwind", "Node.js", "MongoDB", "Express", "Postman", "Github"],
  },
  {
    id: "p2",
    title: "Gemini Clone",
    tagline: "Featured Project",
    description:
      "An interactive web application that simulates the Gemini model’s core features — real-time chat, creative text generation, and live web-integrated answers.",
    image: geminiIMG,
    imageAlt: "Gemini clone project preview",
    liveUrl: "https://verdant-mochi-207a94.netlify.app",
    repoUrl: "https://github.com/Rahuls2642/Gemini-clone-2",
    tech: ["React", "Node.js", "CSS"],
  },
  {
    id: "p3",
    title: "Personal Portfolio",
    tagline: "Featured Project",
    description:
      "A responsive and accessible portfolio site designed to highlight my work and technical skills, built with React, TypeScript, and Tailwind CSS.",
    image: Portfolio,
    imageAlt: "Portfolio project preview",
    liveUrl: "https://bejewelled-crostata-952167.netlify.app/",
    repoUrl: "https://github.com/Rahuls2642/Personal-portfolio-website",
    tech: ["React", "Tailwind", "Node.js"],
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
  Postman: <SiPostman className="text-2xl" />,
  Express: <SiExpress className="text-2xl" />,
  Github: <SiGithub className="text-2xl" />,
  CSS: <FaCss3Alt className="text-2xl" />,
};

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section
      id="projects"
      ref={ref}
      className="relative bg-[#0b001a] text-white py-24 px-6 overflow-hidden"
    >
      {/* --- Background Layers --- */}
      <div className="absolute inset-0 -z-10">
        {/* Base neutral dark layer to prevent purple tint */}
        <div className="absolute inset-0 bg-[#0b001a]" />

        {/* Soft purple glow with proper blending */}
        <div className="absolute inset-0 pointer-events-none mix-blend-soft-light opacity-60 isolate">
          <div className="absolute -top-60 -left-40 w-[700px] h-[700px] rounded-full bg-purple-900/15 blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[800px] h-[800px] rounded-full bg-purple-700/10 blur-[150px]" />
        </div>
      </div>

      {/* --- Content --- */}
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
                className="w-full will-change-transform"
                aria-labelledby={`proj-${p.id}-title`}
              >
                <div
                  className={`grid grid-cols-1 md:grid-cols-12 gap-6 items-center ${
                    isEven ? "md:grid-flow-col" : "md:grid-flow-col-dense"
                  }`}
                >
                  {/* --- Text Section --- */}
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
                            className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full text-xs text-gray-100"
                          >
                            <span className="flex items-center justify-center w-5 h-5">
                              {techIcons[t] ?? <span className="text-xs">•</span>}
                            </span>
                            <span className="text-xs text-gray-200">{t}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* --- Image Section --- */}
                  <div
                    className={`md:col-span-6 ${
                      isEven ? "md:order-2" : "md:order-1"
                    } flex justify-center md:justify-end`}
                  >
                    <div className="relative w-full md:max-w-2xl">
                      <div className="rounded-xl overflow-hidden shadow-2xl border border-purple-900/20 bg-[#0b001a]">
                        <img
                          src={p.image}
                          alt={p.imageAlt}
                          loading="lazy"
                          decoding="async"
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
