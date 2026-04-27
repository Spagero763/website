"use client";

import { motion } from "framer-motion";
import { MapPin, ExternalLink } from "lucide-react";

type Org = {
  name: string;
  role: string;
  period: string;
  location?: string;
  type: string;
  description: string;
  link?: string;
  current: boolean;
};

const orgs: Org[] = [
  {
    name: "ORYX",
    role: "Student Team Lead",
    period: "Oct 2025 — Present",
    type: "Part-time",
    description:
      "Leading blockchain development for a bounty platform with on-chain reward mechanisms. Responsible for smart contract architecture decisions and coordinating the development team.",
    current: true,
  },
  {
    name: "PAYCRYPT",
    role: "Smart Contract Developer",
    period: "Jul 2025 — Present",
    type: "Part-time",
    description:
      "Building and maintaining smart contracts for an on-chain payment system on Base. Working on transaction execution flows, contract reliability, and the payment infrastructure layer.",
    current: true,
  },
  {
    name: "CYFRIN UPDRAFT",
    role: "Student",
    period: "Jan 2025 — Present",
    type: "Education",
    description:
      "Completing the industry-leading smart contract security curriculum covering Solidity security, auditing techniques, formal verification, advanced Foundry testing, and real-world vulnerability analysis.",
    link: "https://updraft.cyfrin.io",
    current: true,
  },
  {
    name: "WEB3NOVA",
    role: "Blockchain Developer Intern",
    period: "Mar 2025 — Aug 2025",
    location: "Nigeria",
    type: "Internship",
    description:
      "Contributed to blockchain learning pathway development and on-chain application building. Gained hands-on experience with DApp development, smart contract integration, and end-to-end deployment workflows.",
    current: false,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#090e1a]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="font-mono text-blue-400 text-sm mb-3 tracking-wider">
            // experience
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Where I&apos;ve worked
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-[15px] top-3 bottom-3 w-px bg-gradient-to-b from-blue-500/60 via-blue-500/20 to-transparent" />

          <div className="space-y-6">
            {orgs.map((org, i) => (
              <motion.div
                key={org.name + org.role}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-12"
              >
                {/* Dot */}
                <div className="absolute left-0 top-5 w-[30px] flex items-center justify-center">
                  <div
                    className={`w-[11px] h-[11px] rounded-full border-2 transition-all ${
                      org.current
                        ? "bg-blue-500 border-blue-400 shadow-lg shadow-blue-500/60"
                        : "bg-[#0f172a] border-slate-600"
                    }`}
                  />
                </div>

                {/* Card */}
                <div className="bg-[#0f172a] border border-white/[0.06] rounded-2xl p-5 hover:border-white/[0.12] transition-colors duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-white font-semibold text-sm">{org.name}</h3>
                        {org.link && (
                          <a
                            href={org.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${org.name} website`}
                          >
                            <ExternalLink
                              size={11}
                              className="text-slate-500 hover:text-blue-400 transition-colors"
                            />
                          </a>
                        )}
                        {org.current && (
                          <span className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">
                            Current
                          </span>
                        )}
                      </div>
                      <div className="text-blue-400 text-xs font-medium mt-0.5">
                        {org.role}
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="text-slate-500 text-xs">{org.period}</div>
                      <div className="text-slate-600 text-xs">{org.type}</div>
                    </div>
                  </div>

                  {org.location && (
                    <div className="flex items-center gap-1 text-slate-600 text-xs mb-2 mt-1">
                      <MapPin size={9} />
                      {org.location}
                    </div>
                  )}

                  <p className="text-slate-400 text-sm leading-relaxed mt-2">
                    {org.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
