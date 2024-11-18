import React from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Stars, 
  Users, 
  Zap,
  Rocket,
  Cloud,
  Sparkles,
  CircleDot
} from "lucide-react";

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-white min-h-[85vh] flex items-center py-20 lg:py-0">
      <motion.div 
        className="absolute top-20 left-10 text-blue-100 opacity-50"
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      >
        <Stars size={60} />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-20 right-10 text-blue-100 opacity-50"
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        <Zap size={80} />
      </motion.div>

      <motion.div
        className="absolute top-40 right-[20%] text-blue-200 opacity-30"
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Cloud size={40} />
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-[20%] text-blue-300 opacity-30"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <Sparkles size={30} />
      </motion.div>

      <motion.div
        className="absolute top-1/3 left-[30%] text-blue-200 opacity-20"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <CircleDot size={40} />
      </motion.div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 pt-10 lg:pt-0">
          {/* Conteúdo à esquerda */}
          <motion.div 
            className="flex-1 space-y-6 lg:space-y-8 text-center lg:text-left relative z-20"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            
          >
            {/* Badges de confiança */}
            <motion.div 
              className="flex items-center gap-2 bg-white/50 backdrop-blur-sm p-3 rounded-full w-fit"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center">
                    <Users size={14} className="text-blue-600" />
                  </div>
                ))}
              </div>
              <span className="text-sm text-gray-600">Confiado por empresas</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              <span className="block">Transforme Sua</span>
              <span className="block mt-2 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent pb-2">
                Presença Digital
              </span>
            </h1>

            <p className="text-lg text-gray-600 max-w-xl">
              Criamos experiências digitais imersivas que transformam visitantes em clientes fiéis. 
              Nossa equipe de especialistas combina design impressionante com funcionalidade poderosa para ajudar seu negócio a prosperar online.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                className="relative z-20 w-full sm:w-auto"
              >
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
                  Inicie Sua Jornada
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex -space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <span className="text-sm text-gray-600">Avaliação média 5.0</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Elemento animado à direita - Foguete */}
          <motion.div 
            className="flex-1 relative mt-8 lg:mt-0 z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full aspect-square max-w-[280px] md:max-w-lg mx-auto">
              {/* Efeito de brilho atrás do foguete */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-blue-600/30 rounded-full blur-3xl"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Foguete */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ 
                  y: [-20, 20, -20],
                  rotate: [0, 5, 0, -5, 0]
                }}
                transition={{ 
                  y: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  },
                  rotate: {
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              >
                <div className="relative">
                  <Rocket size={200} className="text-blue-600 transform rotate-45" />
                  
                  {/* Rastro do foguete */}
                  <motion.div
                    className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-tr from-blue-500/40 to-transparent rounded-full blur-xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.4, 0.6, 0.4],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Efeitos de brilho ao redor do foguete */}
                  <motion.div
                    className="absolute -top-4 -right-4"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Sparkles size={24} className="text-yellow-400" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
