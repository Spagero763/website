"use client";

import { motion } from "framer-motion";
import { Mail, Github, Twitter, Send, Linkedin, ArrowUpRight } from "lucide-react";

const links = [
  {
    icon: Mail,
    label: "Email",
    value: "afolabispagero71@gmail.com",
    href: "mailto:afolabispagero71@gmail.com",
    iconColor: "text-blue-400",
    cardClass:
      "bg-blue-500/[0.06] hover:bg-blue-500/[0.12] border-blue-500/20 hover:border-blue-500/40",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Spagero763",
    href: "https://github.com/Spagero763",
    iconColor: "text-slate-300",
    cardClass:
      "bg-white/[0.04] hover:bg-white/[0.08] border-white/10 hover:border-white/20",
  },
  {
    icon: Twitter,
    label: "Twitter / X",
    value: "@Spagero71",
    href: "https://x.com/Spagero71",
    iconColor: "text-slate-300",
    cardClass:
      "bg-white/[0.04] hover:bg-white/[0.08] border-white/10 hover:border-white/20",
  },
  {
    icon: Send,
    label: "Telegram",
    value: "@Spagerobaseeth",
    href: "https://t.me/Spagerobaseeth",
    iconColor: "text-cyan-400",
    cardClass:
      "bg-cyan-500/[0.06] hover:bg-cyan-500/[0.12] border-cyan-500/20 hover:border-cyan-500/40",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "afolabi-ayomide-emmanuel",
    href: "https://www.linkedin.com/in/afolabi-ayomide-emmanuel-bba6b9367/",
    iconColor: "text-blue-400",
    cardClass:
      "bg-blue-500/[0.06] hover:bg-blue-500/[0.12] border-blue-500/20 hover:border-blue-500/40",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#020617]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="font-mono text-blue-400 text-sm mb-3 tracking-wider">
              // contact
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Let&apos;s work together
            </h2>
            <p className="text-slate-400 max-w-md mx-auto text-sm leading-relaxed">
              Open to smart contract audits, blockchain consulting, and building together.
              Reach out through any of the channels below.
            </p>
          </motion.div>

          {/* Contact cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {links.map(({ icon: Icon, label, value, href, iconColor, cardClass }, i) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`group flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 ${cardClass}`}
              >
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-lg bg-white/[0.06] ${iconColor} flex-shrink-0`}
                >
                  <Icon size={17} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-0.5">
                    {label}
                  </div>
                  <div className="text-sm text-white font-medium truncate">{value}</div>
                </div>
                <ArrowUpRight
                  size={13}
                  className="text-slate-600 group-hover:text-slate-300 transition-colors flex-shrink-0"
                />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
