"use client";

import { MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const WhatsAppCTA = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "+5511974022204"; 
  const message = "Hello! I'd like to know more about your services.";

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-20 right-0 bg-white shadow-2xl rounded-lg p-4 w-72 mb-2"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <MessageCircle className="text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Chat with us</h3>
                  <p className="text-sm text-gray-500">We typically reply instantly</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-green-500 hover:bg-green-600 text-white rounded-lg py-3 px-4 flex items-center justify-center gap-2 transition-colors"
            >
              <MessageCircle size={20} />
              Start Chat
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg relative group"
      >
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-pulse" />
        <MessageCircle size={24} />
        
        {/* Ripple effect */}
        <div className="absolute inset-0 rounded-full bg-green-500 opacity-30 group-hover:animate-ping" />
      </motion.button>
    </div>
  );
};