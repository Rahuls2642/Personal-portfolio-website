import React from "react";
import {motion} from 'framer-motion'
 // ce with your image
import avatar from '../assets/Me.png'
const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-[#0b001a] text-white text-center px-6 overflow-hidden relative">
  {/* Avatar */}
  <motion.div
    className="relative"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2, ease: 'easeOut' }}
  >
    <motion.div
      className="absolute inset-0 blur-3xl bg-purple-500/30 rounded-full w-56 h-56 mx-auto"
      animate={{
        scale: [1, 1.05, 1],
        opacity: [0.6, 0.9, 0.6],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
    <motion.img
      src={avatar}
      alt="Rahul Singh"
      className="relative z-10 w-36 h-36 object-contain mx-auto rounded-full"
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 3.5,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  </motion.div>

  {/* Title */}
  <motion.div
    className="mt-8"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.6, duration: 1.2, ease: 'easeOut' }}
  >
    <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight leading-snug text-gray-100">
      Hi, I’m <span className="text-purple-400 font-bold">Rahul Singh</span>
    </h1>
    <p className="text-gray-400 mt-2 text-base sm:text-lg">
      A Full Stack Developer who loves crafting clean, fast, and user-friendly web apps.
    </p>
  </motion.div>

  {/* Description */}
  <motion.p
    className="max-w-xl text-gray-400 mt-6 leading-relaxed text-sm sm:text-base"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1.2, duration: 1, ease: 'easeOut' }}
  >
    I enjoy turning complex problems into simple, intuitive solutions — building products that look
    good, perform well, and make a real difference.
  </motion.p>

  {/* View My Work Button */}
  <motion.div
    className="mt-8"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1.8, duration: 1, ease: 'easeOut' }}
  >
    <a
      href="#projects"
      className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-3 rounded-full shadow-lg shadow-purple-900/30 transition-all duration-300"
    >
      View My Work
    </a>
  </motion.div>

  {/* Scroll Down Indicator */}
  <div className="absolute bottom-6 flex flex-col items-center space-y-2">
    <p className="text-gray-500 text-sm">Scroll Down</p>
    <div className="w-6 h-10 border-2 border-purple-500 rounded-full flex justify-center items-start p-1">
      <motion.div
        className="w-2 h-2 bg-purple-500 rounded-full"
        animate={{ y: [0, 18, 0], opacity: [1, 0.5, 1] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  </div>
</section>



  );
};

export default HeroSection;
