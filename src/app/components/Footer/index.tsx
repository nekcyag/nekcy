"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-blue-100/10 bg-gradient-to-b from-transparent to-blue-50/5">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {/* Decorative Divider */}
            <div className="relative py-2 mb-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
              </div>
            </div>
            <h5 className="text-xl font-semibold text-blue-500">Nekcy</h5>
            <p className="text-gray-500 text-sm leading-relaxed">
              Transformando ideias em experiências digitais memoráveis através de design e desenvolvimento web inovador.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            {/* Decorative Divider */}
            <div className="relative py-2 mb-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
              </div>
            </div>
            <h5 className="text-xl font-semibold text-blue-500">Links Rápidos</h5>
            <div className="space-y-3">
              {[
                { text: "Termos de Serviço", href: "/legal/terms-of-service" },
                { text: "Política de Privacidade", href: "/legal/privacy-policy" },
                { text: "Sobre Nós", href: "/about" }
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-gray-500 hover:text-blue-500 transition-colors duration-300 text-sm"
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            {/* Decorative Divider */}
            <div className="relative py-2 mb-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
              </div>
            </div>
            <h5 className="text-xl font-semibold text-blue-500">Contato</h5>
            <div className="space-y-3">
              <a
                href="mailto:contato@nekcy.com"
                className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 transition-colors duration-300 text-sm group"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>contato@nekcy.com</span>
              </a>
              <a
                href="tel:+5511974022204"
                className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 transition-colors duration-300 text-sm group"
              >
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>(11) 97402-2204</span>
              </a>
              
              {/* Social Media */}
              <div className="flex space-x-4 pt-4">
                {[
                  { icon: Github, href: "https://github.com/nekcy" },
                  { icon: Linkedin, href: "https://linkedin.com/company/nekcy" },
                  { icon: Instagram, href: "https://instagram.com/nekcy" }
                ].map((social) => (
                  <motion.a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-blue-50 text-gray-500 hover:text-blue-500 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 pt-8 border-t border-blue-100/20 text-center"
        >
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Nekcy. Todos os direitos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}