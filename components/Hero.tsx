"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Github, Twitter, Linkedin, Send, ArrowDown } from "lucide-react";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/Spagero763",
    label: "GitHub",
  },
  {
    icon: Twitter,
    href: "https://x.com/Spagero71",
    label: "Twitter",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/afolabi-ayomide-emmanuel-bba6b9367/",
    label: "LinkedIn",
  },
  {
    icon: Send,
    href: "https://t.me/Spagerobaseeth",
    label: "Telegram",
  },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#020617]">
        {/* Dot grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(148,163,184,0.09) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        {/* Gradient orbs */}
        <div className="absolute top-0 right-1/4 w-[700px] h-[700px] rounded-full opacity-[0.07] blur-3xl bg-blue-500 pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full opacity-[0.05] blur-3xl bg-cyan-400 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
        {/* Left — text */}
        <div>
          {/* Available badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available for work
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-none tracking-tight mb-4"
          >
            <span className="text-white">Afolabi</span>
            <br />
            <span className="text-white">Ayomide</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Emmanuel
            </span>
          </motion.h1>

          {/* Typewriter role */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.4 }}
            className="font-mono text-base lg:text-lg text-slate-400 mb-5 h-7"
          >
            <TypeAnimation
              sequence={[
                "Smart Contract Engineer",
                2600,
                "Blockchain Developer",
                2600,
                "Smart Contract Auditor",
                2600,
                "EVM & Starknet Builder",
                2600,
              ]}
              wrapper="span"
              cursor
              repeat={Infinity}
            />
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="text-slate-400 text-base max-w-lg leading-relaxed mb-8"
          >
            Building secure, production-ready smart contracts across EVM chains
            and Starknet — with deep focus on security, gas efficiency, and
            real-world usability.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.5 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-[1.02]"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-white/[0.05] hover:bg-white/[0.09] border border-white/10 hover:border-white/20 text-white text-sm font-semibold rounded-lg transition-all duration-200"
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="flex items-center gap-3"
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/[0.05] hover:bg-blue-500/20 border border-white/10 hover:border-blue-500/30 text-slate-400 hover:text-blue-400 transition-all duration-200"
              >
                <Icon size={15} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right — profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.35, duration: 0.7, ease: "easeOut" }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Outer glow */}
            <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 opacity-10 blur-2xl" />
            {/* Ring */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 opacity-50 blur-sm" />

            {/* Photo */}
            <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-[#020617]">
              <Image
                src="/avatar.jpg"
                alt="Afolabi Ayomide Emmanuel"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Floating stat — projects */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-10 bg-[#0f172a] border border-white/10 rounded-xl px-4 py-3 shadow-2xl backdrop-blur-sm"
            >
              <div className="text-2xl font-bold text-white leading-none">6+</div>
              <div className="text-xs text-slate-500 mt-0.5">Live Projects</div>
            </motion.div>

            {/* Floating stat — chains */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -top-4 -right-10 bg-[#0f172a] border border-white/10 rounded-xl px-4 py-3 shadow-2xl backdrop-blur-sm"
            >
              <div className="text-2xl font-bold text-white leading-none">5</div>
              <div className="text-xs text-slate-500 mt-0.5">Chains</div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 hover:text-slate-400 transition-colors"
      >
        <span className="text-[10px] tracking-widest uppercase font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.a>
    </section>
  );
}
