"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail, Phone, Sparkles, ArrowRight } from 'lucide-react';
import Link from "next/link";
import InfiniteSlider from './InfiniteSlider';

const CallToAction: React.FC = () => {
  return (
    <section className="relative py-24 bg-[#0B1120] overflow-hidden">
      {/* Enhanced light effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />
      </div>

      {/* Primary grid pattern */}
      <div 
        className="absolute inset-0" 
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'
        }}
      />

      {/* Secondary grid pattern for depth */}
      <div 
        className="absolute inset-0" 
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.025) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.025) 1px, transparent 1px)
          `,
          backgroundSize: '16px 16px',
          maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
            Se você chegou até aqui,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              está na hora de evoluir
            </span>
          </h2>
        </motion.div>

        {/* Sliders com tamanhos consistentes */}
        <div className="relative max-w-5xl mx-auto mb-16">
          <InfiniteSlider direction="left" speed={30}>
            {["Branding", "UI/UX Design", "Development", "Mobile Apps", "Web Design", "SEO", "Marketing"].map((item) => (
              <div
                key={item}
                className="mx-2 py-1.5 px-4 rounded-full bg-white/5 
                border border-white/10 text-white/80 text-sm font-medium 
                whitespace-nowrap hover:bg-white/10 hover:border-white/20 
                transition-all duration-300"
              >
                {item}
              </div>
            ))}
          </InfiniteSlider>
          
          <InfiniteSlider direction="right" speed={25}>
            {["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB", "AWS"].map((item) => (
              <div
                key={item}
                className="mx-2 py-1.5 px-4 rounded-full bg-blue-500/5 
                border border-blue-500/10 text-blue-400 text-sm font-medium 
                whitespace-nowrap hover:bg-blue-500/10 hover:border-blue-500/20 
                transition-all duration-300"
              >
                {item}
              </div>
            ))}
          </InfiniteSlider>
        </div>

        {/* Botão com melhor destaque */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center justify-center px-8 py-4 
            rounded-full bg-blue-600 hover:bg-blue-700 
            text-white font-medium text-lg 
            transition-all duration-300
            shadow-[0_0_20px_rgba(59,130,246,0.3)]
            hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]"
          >
            <span className="relative flex items-center">
                Entre no time
              <Sparkles className="w-5 h-5 ml-2" />
            </span>
          </motion.button>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-white/60 text-sm mb-8"
          >
            Clique
          </motion.p>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-white/10"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="bg-[#0B1120] px-4">
            <Sparkles className="h-6 w-6 text-blue-500/70" />
          </span>
        </div>
      </div>

      {/* Footer Section */}
      <div className="container mx-auto px-4 pt-16 relative max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Legal Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h5 className="text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Legal
            </h5>
            <div className="space-y-4">
              <Link 
                href="/legal/terms-of-service" 
                className="group flex items-center text-white/70 hover:text-white transition-colors duration-300"
              >
                <span className="h-px w-5 bg-blue-500/50 group-hover:w-10 transition-all duration-300 mr-3" />
                Terms of Service
              </Link>
              <Link 
                href="/legal/privacy-policy" 
                className="group flex items-center text-white/70 hover:text-white transition-colors duration-300"
              >
                <span className="h-px w-5 bg-blue-500/50 group-hover:w-10 transition-all duration-300 mr-3" />
                Privacy Policy
              </Link>
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h5 className="text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Contact
            </h5>
            <div className="space-y-4">
              <motion.a 
                href="mailto:nekcyagency@gmail.com" 
                className="group flex items-center text-white/70 hover:text-white transition-all duration-300"
                whileHover={{ x: 5 }}
              >
                <Mail className="w-5 h-5 mr-3 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
                nekcyagency@gmail.com
              </motion.a>
              {/* <motion.a 
                href="tel:+5511974022204" 
                className="group flex items-center text-white/70 hover:text-white transition-all duration-300"
                whileHover={{ x: 5 }}
              >
                <Phone className="w-5 h-5 mr-3 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
                +55 (11) 97402-2204
              </motion.a> */}
            </div>
          </motion.div>

          {/* Social Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-start"
          >
            <h5 className="text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Social
            </h5>
            <div className="flex space-x-4">
              {[
                { icon: Github, href: "https://github.com/anlihub" },
                { icon: Linkedin, href: "https://linkedin.com/company/anlihub" },
                { icon: Instagram, href: "https://instagram.com/anlihub" }
              ].map((social, index) => (
                <motion.a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 rounded-full bg-white/5 border border-white/10 
                    hover:bg-blue-500/10 hover:border-blue-500/20 hover:text-blue-400
                    transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <social.icon className="w-5 h-5 text-white/70 group-hover:text-blue-400 transition-colors duration-300" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 pt-8 border-t border-white/10 text-center"
        >
          <p className="text-white/60 hover:text-white/80 transition-colors duration-300">
            &copy; {new Date().getFullYear()} Nekcy. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;