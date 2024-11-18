"use client";
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { MessageSquare, Rocket, Target, Zap } from 'lucide-react';
import { useRef, useEffect } from 'react';

const Steps = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Ajuste mais suave para a linha de progresso
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0, 1], {
    clamp: false
  });

  const steps = [
    {
      icon: MessageSquare,
      title: "Consulta Inicial",
      description: "Agende uma chamada para discutir sua visão e objetivos. Vamos analisar suas necessidades e delinear a estratégia perfeita.",
      gradient: "from-blue-500 to-cyan-400",
      lightGradient: "from-blue-500/10 to-cyan-400/10",
      dotColor: "bg-blue-500"
    },
    {
      icon: Target,
      title: "Planejamento Estratégico",
      description: "Nossa equipe desenvolve um roteiro personalizado alinhado aos seus objetivos de negócios e público-alvo.",
      gradient: "from-purple-500 to-pink-500",
      lightGradient: "from-purple-500/10 to-pink-500/10",
      dotColor: "bg-purple-500"
    },
    {
      icon: Zap,
      title: "Execução Ágil",
      description: "Entrega rápida com nosso fluxo de trabalho eficiente, mantendo você atualizado durante todo o processo.",
      gradient: "from-amber-500 to-orange-500",
      lightGradient: "from-amber-500/10 to-orange-500/10",
      dotColor: "bg-amber-500"
    },
    {
      icon: Rocket,
      title: "Lançamento & Crescimento",
      description: "Sua solução entra no ar com nosso suporte contínuo para garantir o máximo impacto e sucesso.",
      gradient: "from-green-500 to-emerald-500",
      lightGradient: "from-green-500/10 to-emerald-500/10",
      dotColor: "bg-green-500"
    }
  ];

  const StepCard = ({ step, index }: { step: any; index: number }) => {
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { 
      once: true,
      margin: "-100px 0px" 
    });

    return (
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ 
          duration: 0.8,
          delay: index * 0.2,
          ease: [0.21, 0.45, 0.27, 0.9]
        }}
        className={`flex items-center gap-12 ${
          index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
        }`}
      >
        {/* Content Card */}
        <motion.div 
          className="flex-1 group"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", bounce: 0.4 }}
        >
          <div className={`relative p-8 rounded-2xl bg-white 
            shadow-[0_0_50px_-12px_rgba(0,0,0,0.12)] 
            border border-gray-100
            hover:shadow-[0_0_50px_-6px_rgba(0,0,0,0.15)]
            transition-all duration-300`}>
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.lightGradient}
            opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${step.gradient}
                p-3 shadow-lg mb-6 group-hover:shadow-2xl transition-shadow duration-300`}
            >
              <step.icon className="w-full h-full text-white" />
            </motion.div>

            <div className="relative">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          </div>
        </motion.div>

        {/* Timeline Point */}
        <motion.div 
          className="hidden lg:block relative"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ delay: index * 0.3, duration: 0.5 }}
        >
          <motion.div 
            className={`w-6 h-6 rounded-full bg-gradient-to-r ${step.gradient}
            shadow-lg relative z-10`}
            whileHover={{ scale: 1.2 }}
          >
            <div className={`absolute inset-0 -z-10 rounded-full bg-gradient-to-r ${step.gradient}
            animate-ping opacity-20`} />
          </motion.div>
        </motion.div>

        <div className="flex-1 hidden lg:block" />
      </motion.div>
    );
  };

  return (
    <div className="bg-white py-32 relative overflow-hidden" ref={containerRef}>
      {/* Padrões de fundo - Novo layout em camadas */}
      <div className="absolute inset-0">
        {/* Padrão de grid principal */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        {/* Padrão de grid secundário para profundidade */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:80px_80px]" />
        
        {/* Gradientes sutis */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/50 to-white" />
        
        {/* Efeitos de luz */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Cabeçalho com novo estilo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24 relative"
        >
          <motion.span 
            className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 font-medium mb-2 
                       px-4 py-1 rounded-full bg-blue-50/50 border border-blue-100/50"
            whileHover={{ scale: 1.05 }}
          >
            Nossa Expertise
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Como <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Funciona</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Nosso processo otimizado garante a entrega eficiente de soluções de alta qualidade adaptadas às suas necessidades
          </p>
          
          {/* Linhas decorativas */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-24 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        </motion.div>

        <div className="relative">
          {/* Linha de Progresso */}
          <div 
            ref={progressRef}
            className="absolute left-[50%] top-0 bottom-0 w-[2px] bg-gradient-to-b from-gray-200 to-gray-100 hidden lg:block"
          >
            <motion.div
              className="absolute top-0 bottom-0 w-full bg-gradient-to-b from-blue-500 to-cyan-500"
              style={{ scaleY: scaleProgress, transformOrigin: 'top' }}
            />
          </div>

          <div className="space-y-32">
            {steps.map((step, index) => (
              <StepCard key={index} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
