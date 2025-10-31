import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen flex flex-col justify-center items-center bg-[#0b001a] text-white px-6 py-20 text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-3xl"
      >
        <h2 className="text-3xl sm:text-4xl font-semibold text-purple-400 mb-6 tracking-tight">
          About Me
        </h2>

        <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
          I'm <span className="text-purple-400 font-medium">Rahul Singh</span>, a
          Full Stack Developer who loves creating clean, efficient, and
          intuitive web applications. I enjoy solving real problems through
          thoughtful design and solid engineering.
        </p>

        <p className="text-gray-400 mt-5 text-sm sm:text-base leading-relaxed">
          My current toolkit includes{" "}
          <span className="text-purple-400 font-medium">
            React, Node.js, Express, and MongoDB
          </span>. I’m always learning — whether it’s refining performance,
          improving UX, or exploring new technologies that make development
          smoother and smarter.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#contact"
            className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-3 rounded-full shadow-lg shadow-purple-900/30 transition-all duration-300"
          >
            Get in Touch
          </a>
          <a
            href="https://drive.google.com/uc?export=download&id=1R-Q-x3iEAOBvzIpI3isUhxwwnH-U_NCM" // replace with your actual CV file path
            download
            className="border border-purple-500 text-purple-400 hover:bg-purple-600 hover:text-white font-medium px-6 py-3 rounded-full transition-all duration-300"
          >
            Download CV
          </a>
        </div>
      </motion.div>
    </section>
  );
}
