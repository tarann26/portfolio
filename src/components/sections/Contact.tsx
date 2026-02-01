"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { SectionHeader } from "../ui/SectionHeader";
import { TerminalWindow } from "../ui/TerminalWindow";
import { Mail, Github, Linkedin, FileDown, Check } from "lucide-react";

interface ContactLink {
  label: string;
  value: string;
  href: string;
  icon: React.ReactNode;
  copyable?: boolean;
}

const links: ContactLink[] = [
  {
    label: "email",
    value: "tsa43@case.edu",
    href: "mailto:tsa43@case.edu",
    icon: <Mail size={16} />,
    copyable: true,
  },
  {
    label: "github",
    value: "github.com/tarann26",
    href: "https://github.com/tarann26",
    icon: <Github size={16} />,
  },
  {
    label: "linkedin",
    value: "linkedin.com/in/taranveer-anand",
    href: "https://linkedin.com/in/taranveer-anand",
    icon: <Linkedin size={16} />,
  },
];

function ContactLink({ link }: { link: ContactLink }) {
  const [copied, setCopied] = useState(false);

  const handleClick = async (e: React.MouseEvent) => {
    if (link.copyable) {
      e.preventDefault();
      await navigator.clipboard.writeText(link.value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <motion.a
      href={link.href}
      target={link.href.startsWith("mailto") ? undefined : "_blank"}
      rel="noopener noreferrer"
      onClick={handleClick}
      whileHover={{ x: 4 }}
      className="flex items-center gap-4 py-2 group cursor-pointer"
    >
      <span className="text-accent-cyan">&gt;</span>
      <span className="text-text-secondary w-20">{link.label}</span>
      <span className="text-text-primary group-hover:text-accent-cyan transition-colors flex items-center gap-2">
        {link.icon}
        {link.value}
      </span>
      {link.copyable && copied && (
        <motion.span
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-green-500 flex items-center gap-1 text-sm"
        >
          <Check size={14} />
          copied!
        </motion.span>
      )}
    </motion.a>
  );
}

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionHeader title="CONTACT" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <TerminalWindow title="> echo $CONTACT_INFO">
            <div className="space-y-6">
              <p className="text-text-secondary">
                Want to work together, hire me, or casually argue about something
                illogical?
              </p>

              <div className="space-y-1">
                {links.map((link) => (
                  <ContactLink key={link.label} link={link} />
                ))}
              </div>

              {/* Resume download */}
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 mt-4 px-4 py-2 border border-accent-cyan text-accent-cyan rounded hover:bg-accent-cyan/10 transition-colors font-mono text-sm"
              >
                <FileDown size={16} />
                [download resume.pdf]
              </motion.a>
            </div>
          </TerminalWindow>
        </motion.div>

        {/* Footer info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-center font-mono text-sm text-text-secondary"
        >
          <p>// based in cleveland, oh</p>
          <p>
            // <span className="text-green-500">●</span> open to opportunities
            starting may 2026
          </p>
        </motion.div>
      </div>
    </section>
  );
}
