'use client'
import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Eye, ArrowRight } from 'lucide-react';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  tags: string[];
  description: string;
  image: string;
  stats: {
    [key: string]: string;
  };
}

interface PortfolioItemProps {
  item: PortfolioItem;
}

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState('all');
  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: "E-Commerce",
      category: "web",
      tags: ["Next.js", "Node.js", "PostgreSQL"],
      description: "A e-commerce for a startup, with a modern and clean design.",
      image: "/catarina.png",
      stats: { clients: "300+", uptime: "99.9%" }
    },
    {
      id: 2,
      title: "Contact Page",
      category: "web",
      tags: ["React", "TypeScript", "Styled Components"],
      description: "A contact page for a startup, with a modern and clean design.",
      image: "/spooner.png",
      stats: { users: "100+", modules: "15+", satisfaction: "100%" }
    },
    // {
    //   id: 3,
    //   title: "Design System",
    //   category: "design",
    //   tags: ["Figma", "UI/UX", "Design Tokens"],
    //   description: "Sistema de design escalável com componentes reutilizáveis e documentação completa.",
    //   image: "/projects/design.jpg",
    //   stats: { components: "200+", brands: "5+", downloads: "50K+" }
    // },
    // {
    //   id: 4,
    //   title: "Landing Page SaaS",
    //   category: "design",
    //   tags: ["Web Design", "Animation", "Branding"],
    //   description: "Design moderno e conversível para produto SaaS com animações personalizadas.",
    //   image: "/projects/saas.jpg",
    //   stats: { conversion: "15%", engagement: "85%", bounce: "20%" }
    // },
  ];

  const categories = ['all', 'web', 'design'];

  const filteredItems = portfolioItems.filter(item => 
    activeFilter === 'all' ? true : item.category === activeFilter
  );

  return (
    <section id="portfolio" className="relative py-32 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      {/* Background decorations - improved */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-100/40 rounded-full mix-blend-multiply blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-violet-100/40 rounded-full mix-blend-multiply blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-50/30 rounded-full mix-blend-multiply blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header - improved */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-blue-50 text-blue-600 font-medium mb-6">
            Nosso Portfólio
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Projetos em Destaque
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg leading-relaxed">
            Conheça alguns dos nossos trabalhos mais recentes e descubra como ajudamos empresas a transformarem sua presença digital
          </p>
        </motion.div>

        {/* Filter buttons - improved */}
        <div className="flex justify-center gap-3 mb-16">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeFilter === category 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25 ring-2 ring-blue-600/50 ring-offset-2' 
                : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 hover:shadow-md border border-gray-200'
              }`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {category === 'all' ? 'Todos' : category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </div>

        {/* Portfolio grid - ajustado o gap */}
        <motion.div 
          layout
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <PortfolioItem key={item.id} item={item} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function PortfolioItem({ item }: PortfolioItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.9 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 border border-gray-100"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          initial={false}
        >
          <div className="absolute inset-0 p-6 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <motion.h3 
              className="text-2xl font-bold text-white mb-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {item.title}
            </motion.h3>
            
            <p className="text-gray-200 text-sm mb-4 leading-relaxed opacity-90 line-clamp-2">
              {item.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {item.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="text-xs font-medium text-white/90 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>

            <motion.div 
              className="flex items-center gap-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}