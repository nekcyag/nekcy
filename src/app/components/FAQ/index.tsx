"use client";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle, MessageCircle, Sparkles, Lightbulb, Zap } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
  icon?: React.ReactNode;
}

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      question: "Como funciona o processo de desenvolvimento?",
      answer: "Nosso processo é dividido em 4 etapas: Discovery, Design, Desenvolvimento e Deploy. Trabalhamos de forma ágil e transparente, com reuniões semanais de acompanhamento e entregas incrementais.",
      icon: <Zap className="w-5 h-5 text-amber-500" />
    },
    {
      question: "Qual é o prazo médio para desenvolvimento de um site?",
      answer: "O prazo varia de acordo com a complexidade do projeto. Em média, um site institucional leva de 4 a 6 semanas, enquanto um e-commerce pode levar de 8 a 12 semanas.",
      icon: <Lightbulb className="w-5 h-5 text-blue-500" />
    },
    {
      question: "Vocês oferecem suporte após o lançamento?",
      answer: "Sim! Oferecemos 30 dias de suporte gratuito após o lançamento e planos de manutenção mensal para garantir que seu site continue funcionando perfeitamente.",
      icon: <MessageCircle className="w-5 h-5 text-green-500" />
    },
    {
      question: "Quais tecnologias vocês utilizam?",
      answer: "Utilizamos as tecnologias mais modernas do mercado, incluindo React, Next.js, TypeScript e Tailwind CSS. Nossa stack é escolhida para garantir performance, segurança e escalabilidade.",
      icon: <Sparkles className="w-5 h-5 text-purple-500" />
    },
    {
      question: "Como funciona o pagamento?",
      answer: "Trabalhamos com um modelo de pagamento em 2 parcelas: 50% no início do projeto, onde será feito o primeiro pagamento, e 50% na entrega do projeto.",
      icon: <HelpCircle className="w-5 h-5 text-rose-500" />
    }
  ];

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-slate-50/50 to-white/30 overflow-hidden backdrop-blur-2xl">
      {/* Efeitos de iluminação melhorados */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Círculos de luz principais */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute top-0 -right-40 w-[500px] h-[500px] bg-gradient-to-br from-blue-300/20 to-purple-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, -45, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-gradient-to-br from-amber-200/20 to-rose-300/20 rounded-full blur-3xl"
        />

        {/* Efeitos de luz adicionais */}
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-blue-200/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-200/30 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-rose-100/20 rounded-full blur-3xl animate-pulse delay-2000" />
        
        {/* Padrão de pontos */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Enhanced Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 md:mb-24"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1 rounded-full bg-blue-50/80 backdrop-blur-sm text-blue-600 text-sm font-medium mb-4 border border-blue-100/50"
          >
            FAQ
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Encontre respostas para as dúvidas mais comuns sobre nossos serviços e processo de trabalho
          </p>
        </motion.div>

        {/* FAQ Items com melhor legibilidade */}
        <div className="max-w-3xl mx-auto space-y-4 relative">
          {faqs.map((faq, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={index}
              className="relative group"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full relative"
              >
                <div 
                  className={`
                    w-full backdrop-blur-sm rounded-2xl transition-all duration-300
                    bg-white/70 border border-white/50
                    ${openIndex === index 
                      ? 'bg-white/90 shadow-lg' 
                      : 'hover:bg-white/80'}
                  `}
                >
                  <div className="p-6 relative z-10">
                    <div className="flex items-center gap-4">
                      {/* Ícone com melhor contraste */}
                      <div className="flex-shrink-0">
                        {faq.icon}
                      </div>
                      
                      <h3 className="text-lg font-semibold text-gray-800 text-left transition-colors duration-300 group-hover:text-blue-600">
                        {faq.question}
                      </h3>
                      
                      <div className={`
                        ml-auto flex-shrink-0 transition-all duration-300
                        ${openIndex === index ? 'rotate-45 text-blue-600' : 'text-gray-500'}
                      `}>
                        {openIndex === index ? (
                          <Minus className="w-5 h-5" />
                        ) : (
                          <Plus className="w-5 h-5" />
                        )}
                      </div>
                    </div>

                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="mt-4 text-gray-600 leading-relaxed pl-9 pr-4 font-medium">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </button>
            </motion.div>
          ))}
        </div>

        {/* CTA com glass effect mais sutil */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-16 relative"
        >
          <p className="text-gray-600 mb-6">
            Ainda tem dúvidas? Entre em contato conosco
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full 
              bg-gradient-to-r from-blue-600/90 to-blue-700/90 backdrop-blur-sm
              text-white font-medium 
              hover:from-blue-600 hover:to-blue-700
              transition-all duration-300 
              shadow-md shadow-blue-500/10 
              hover:shadow-lg hover:shadow-blue-500/20 
              hover:-translate-y-0.5
              border border-white/20"
          >
            Falar com um especialista
            <MessageCircle className="w-5 h-5 ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection; 