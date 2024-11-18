import { useState, useEffect, useRef } from 'react'; 
import { motion, useAnimation, useInView, useScroll, useSpring } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Code, Zap, ArrowRight, LucideIcon } from 'lucide-react';

interface Servico {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  accent: string;
}

interface ServiceCardProps extends Servico {
  index: number;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

export default function SecaoServicos() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);

  const servicos: Servico[] = [
    {
      icon: Globe,
      title: "Design de Sites",
      description: "Crie sites impressionantes e responsivos que não só ficam ótimos, mas também proporcionam uma experiência de usuário excepcional.",
      features: ["Design UI/UX", "Layouts Responsivos", "Integração de Marca", "Otimização de Conversão"],
      accent: "from-blue-400 to-blue-600"
    },
    {
      icon: Code,
      title: "Desenvolvimento Web",
      description: "Construa aplicações web robustas e escaláveis utilizando tecnologias de ponta.",
      features: ["Soluções Personalizadas", "E-commerce", "Integração de CMS", "Desenvolvimento de APIs"],
      accent: "from-violet-400 to-violet-600"
    },
    {
      icon: Zap,
      title: "Otimização de Performance",
      description: "Acelere sua presença digital com nossas técnicas avançadas de otimização.",
      features: ["Otimização de Velocidade", "Melhoria de SEO", "Core Web Vitals", "Configuração de Analytics"],
      accent: "from-emerald-400 to-emerald-600"
    }
  ];

  return (
    <section id="services" className="relative py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Barra de progresso */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left z-50"
        style={{ scaleX }}
      />

      <div className="container mx-auto px-4 sm:px-6">
        {/* Elementos decorativos - melhorados para dispositivos móveis */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 md:-top-40 md:-right-40 w-60 md:w-80 h-60 md:h-80 bg-blue-100 rounded-full opacity-20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 md:-bottom-40 md:-left-40 w-60 md:w-80 h-60 md:h-80 bg-violet-100 rounded-full opacity-20 blur-3xl" />
        </div>

        {/* Cabeçalho - espaçamento melhorado para dispositivos móveis */}
        <motion.div 
          className="relative text-center mb-12 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-blue-50 text-blue-600 font-medium mb-6">
            Nossa Expertise
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Serviços que Impulsionam<br className="hidden md:block" /> seu Crescimento
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-base md:text-lg leading-relaxed">
            Transforme sua presença digital com nosso conjunto abrangente de serviços web
          </p>
        </motion.div>

        {/* Grade de Serviços - layout responsivo melhorado */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {servicos.map((servico, index) => (
            <CardServico 
              key={index}
              index={index}
              {...servico}
              isHovered={hoveredIndex === index}
              onHover={() => setHoveredIndex(index)}
              onLeave={() => setHoveredIndex(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CardServico({ icon: Icon, title, description, features, accent, index, isHovered, onHover, onLeave }: ServiceCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      onHoverStart={onHover}
      onHoverEnd={onLeave}
      className="relative group"
    >
      <Card className="relative overflow-hidden h-full bg-white/50 backdrop-blur-sm border-transparent hover:border-gray-200 transition-all duration-300">
        <CardContent className="p-6 md:p-8">
          {/* Gradiente de fundo */}
          <motion.div 
            className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${accent}`}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Ícone - tamanho melhorado */}
          <motion.div
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.3 }}
            className="mb-6"
          >
            <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${accent} p-3 md:p-4 text-white shadow-lg`}>
              <Icon className="w-full h-full" />
            </div>
          </motion.div>

          {/* Conteúdo - tipografia melhorada */}
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">{title}</h3>
          <p className="text-gray-600 text-sm md:text-base mb-6">{description}</p>

          {/* Características - animação e espaçamento melhorados */}
          <motion.ul 
            className="space-y-2 md:space-y-3 min-h-[100px]"
            animate={{ opacity: isHovered ? 1 : 0.7 }}
            transition={{ duration: 0.3 }}
          >
            {features.map((feature, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isHovered ? 1 : 0.7, x: isHovered ? 0 : -20 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="flex items-center text-sm md:text-base text-gray-600"
              >
                <ArrowRight className="w-4 h-4 mr-2 text-blue-600 flex-shrink-0" />
                <span>{feature}</span>
              </motion.li>
            ))}
          </motion.ul>

          {/* Botão "Saiba Mais" - design responsivo melhorado */}
          <motion.div
            className="mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0.7 }}
            transition={{ duration: 0.3 }}
          >
            <Button 
              variant="outline" 
              className="w-full md:w-auto group-hover:bg-blue-600 group-hover:text-white transition-colors"
            >
              Saiba Mais
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
