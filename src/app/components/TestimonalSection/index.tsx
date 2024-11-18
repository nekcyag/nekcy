import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { Card } from "@/components/ui/card";
import InfiniteText from '../InfiniteText';

interface Depoimento {
  nome: string;
  empresa: string;
  texto: string;
  avaliacao?: number;
  imagem?: string;
}

interface TestimonialCardProps {
  depoimento: Depoimento;
  index: number;
}

const CardDepoimento: React.FC<TestimonialCardProps> = ({ depoimento, index }) => {
  const avaliacao = depoimento.avaliacao || 5;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card className="bg-white/80 backdrop-blur-sm p-8 relative border border-blue-100 hover:border-blue-200 transition-all h-full hover:shadow-xl group">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Ícone de citação com estilo melhorado */}
        <div className="absolute -top-4 -left-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-2.5 shadow-lg group-hover:scale-110 transition-transform duration-300">
          <Quote size={18} className="text-white" />
        </div>

        <div className="flex gap-1 mb-6">
          {[...Array(avaliacao)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 + 0.5 }}
            >
              <Star
                size={18}
                className="fill-blue-500 text-blue-500"
              />
            </motion.div>
          ))}
        </div>

        {/* Texto do depoimento com tipografia melhorada */}
        <p className="text-gray-700 mb-8 relative text-sm md:text-base leading-relaxed">
          "{depoimento.texto}"
        </p>

        {/* Informações do autor com layout melhorado */}
        <div className="flex items-center gap-4 mt-auto">
          {depoimento.imagem ? (
            <motion.img
              src={depoimento.imagem}
              alt={depoimento.nome}
              className="w-12 h-12 rounded-full object-cover shadow-md"
              whileHover={{ scale: 1.1 }}
            />
          ) : (
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-semibold shadow-md"
            >
              {depoimento.nome[0]}
            </motion.div>
          )}
          <div>
            <h4 className="font-semibold text-gray-900">{depoimento.nome}</h4>
            <p className="text-sm text-blue-600 font-medium">{depoimento.empresa}</p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

const SecaoDepoimentos: React.FC = () => {
  const depoimentos: Depoimento[] = [
    {
      nome: "Ivone",
      empresa: "Uniformes Catarina",
      texto: "A Nekcy Agency entregou uma plataforma de e-commerce excepcional que superou nossas expectativas. A atenção aos detalhes e as soluções inovadoras fizeram do nosso projeto um grande sucesso.",
      avaliacao: 5
    },
    {
      nome: "Jamal",
      empresa: "Spooner Transport",
      texto: "A Landing Page da Nekcy Agency é incrível! A equipe foi muito atenciosa e criativa. A Landing Page é exatamente o que eu precisava para meu negócio de Transportes.",
      avaliacao: 5
    },
    {
      nome: "Dra. Emily Brown",
      empresa: "HealthHub",
      texto: "Nosso aplicativo de telemedicina recebeu ótimas avaliações tanto de médicos quanto de pacientes. A experiência do WebCraft Studio em design de UI/UX para saúde tornou possível criar uma plataforma intuitiva.",
      avaliacao: 5
    }
  ];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-white to-blue-50/50">
      <InfiniteText />  

      {/* Animações de fundo melhoradas */}
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
        className="absolute top-40 -right-20 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"
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
        className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-br from-blue-100/20 to-teal-100/20 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 relative">
        {/* Cabeçalho da seção melhorado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 md:mb-24"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1 rounded-full bg-blue-50 text-blue-600 font-medium mb-6"
          >
            Depoimentos
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight"
          >
            O que Nossos Clientes Dizem
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Não apenas tome nossa palavra. Veja o que alguns de nossos clientes satisfeitos 
            têm a dizer sobre sua experiência trabalhando conosco.
          </motion.p>
        </motion.div>

        {/* Grade de depoimentos melhorada */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative z-10 max-w-6xl mx-auto">
          {depoimentos.map((depoimento, index) => (
            <CardDepoimento
              key={index}
              depoimento={depoimento}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecaoDepoimentos;
