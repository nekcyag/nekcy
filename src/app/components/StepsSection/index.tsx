import { motion } from 'framer-motion';
import { 
  Rocket, 
  MessageSquare, 
  LineChart, 
  Stars, 
  Cloud, 
  Sparkles, 
  CircleDot,
  Zap,
  Compass,
  Heart,
  Sun
} from 'lucide-react';

const ComoFuncionaSection = () => {
  const steps = [
    {
      number: "1",
      title: "Agende uma call",
      description: "Vamos conversar para alinhar suas necessidades e como podemos te ajudar.",
      icon: <Rocket className="w-8 h-8 text-blue-500 absolute -left-16 top-1/2 transform -translate-y-1/2 opacity-20" />
    },
    {
      number: "2",
      title: "Vamos nos comunicar",
      description: "Conversaremos diariamente e enviaremos atualizações ao decorrer do projeto.",
      icon: <MessageSquare className="w-8 h-8 text-blue-500 absolute -left-16 top-1/2 transform -translate-y-1/2 opacity-20" />
    },
    {
      number: "3",
      title: "Revise e melhore",
      description: "Agora é sem dor de cabeça! Enviaremos atualizações e você poderá nos dizer o que pensa!",
      icon: <LineChart className="w-8 h-8 text-blue-500 absolute -left-16 top-1/2 transform -translate-y-1/2 opacity-20" />
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-white to-blue-50 overflow-hidden relative">
      {/* Ícones decorativos - Adicionados mais com posições diferentes */}
      <Stars className="w-8 h-8 text-blue-200 absolute top-20 right-[15%] opacity-30" />
      <Cloud className="w-10 h-10 text-blue-200 absolute bottom-20 left-[10%] opacity-30" />
      <Sparkles className="w-6 h-6 text-blue-300 absolute top-40 left-[20%] opacity-30" />
      <CircleDot className="w-8 h-8 text-blue-200 absolute bottom-40 right-[25%] opacity-30" />
      <Zap className="w-6 h-6 text-blue-300 absolute top-28 left-[35%] opacity-30" />
      <Compass className="w-8 h-8 text-blue-200 absolute bottom-32 left-[45%] opacity-30" />
      <Heart className="w-6 h-6 text-blue-300 absolute top-48 right-[30%] opacity-30" />
      <Sun className="w-10 h-10 text-blue-200 absolute top-24 right-[40%] opacity-30" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-blue-500 text-lg italic mb-3"
          >
            Como funciona?
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold text-gray-800"
          >
            Faça seu produto crescer hoje
          </motion.h2>
        </div>

        <div className="relative flex flex-col md:flex-row justify-between items-start max-w-6xl mx-auto mt-20">
          {/* Linha ondulada de conexão - Largura estendida e curva ajustada */}
          <div className="hidden md:block absolute top-16 left-0 w-full">
            <svg className="w-full" height="50" viewBox="0 0 800 50" preserveAspectRatio="none">
              <path
                d="M 50 25 C 150 10, 250 40, 400 25 C 550 10, 650 40, 750 25"
                fill="none"
                stroke="#93C5FD"
                strokeWidth="2"
                strokeDasharray="5,5"
                className="path-animation"
              />
            </svg>
          </div>

          {/* Etapas permanecem as mesmas, mas o contêiner foi ajustado */}
          <div className="flex flex-col md:flex-row justify-between w-full gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex-1 relative text-center px-4 mb-12 md:mb-0 hover:transform hover:scale-105 transition-all duration-300"
              >
                {step.icon}
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-3xl text-white font-bold mx-auto mb-6 shadow-lg transform transition-transform hover:scale-110 hover:rotate-3">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 hover:text-blue-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 max-w-xs mx-auto leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComoFuncionaSection;
