import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, ArrowRight, Check, Calendar, Sparkles, Stars, Zap, Heart } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import axios from 'axios';

const GetInTouchSection = () => {
  const services = [
    {
      title: "Landing Pages e Websites",
      description: "Tudo o que fazemos é criar websites com alta taxa de conversão que se ajustam à sua marca e falam diretamente com seu cliente final!",
      features: [
        "Design personalizado para sua marca",
        "Desenvolvimento personalizado para seu usuário",
        "1-3 semanas para o lançamento",
      ],
      buttonText: "Agende uma call gratuita",
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      title: "E-commerce",
      description: "A coisa mais importante para seu E-commerce é ser intuitivo e fácil de usar. Seu usuário precisa navegar sem esforço pelo seu aplicativo.",
      features: [
        "Design fácil e intuitivo",
        "Desenvolvimento rápido, seguro e confiável",
        "Design + desenvolvimento tudo incluído",
      ],
      buttonText: "Agende uma call gratuita",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  const ContactForm = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
    });
    const [status, setStatus] = useState({
      loading: false,
      message: ''
    });
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setStatus({ loading: true, message: '' });
  
      try {
        // Log para debug
        console.log('Enviando requisição para:', '/api/sendEmail');
        console.log('Dados do formulário:', formData);
  
        const response = await axios.post('/api/sendEmail', formData, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        console.log('Resposta:', response.data);
  
        setStatus({
          loading: false,
          message: 'Mensagem enviada com sucesso!'
        });
        setFormData({ name: '', email: '', message: '' });
      } catch (error: any) {
        console.error('Erro detalhado:', error.response || error);
        
        setStatus({
          loading: false,
          message: `Erro ao enviar mensagem: ${error.response?.data?.error || error.message || 'Tente novamente.'}`
        });
      }
    };
  
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-2xl shadow-lg"
      >
        <h4 className="text-2xl font-bold mb-6 text-gray-800">Fale Conosco</h4>
        <p className="text-gray-600 mb-8">
          Tem um projeto em mente? Quer discutir suas necessidades de desenvolvimento web? Estamos aqui para ajudar!
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input 
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Seu Nome" 
            required
            className="rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500" 
          />
          <Input 
            type="email"
            name="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="Seu Email" 
            required
            className="rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500" 
          />
          <Textarea 
            name="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Sua Mensagem" 
            required
            rows={4} 
            className="rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500" 
          />
          <Button 
            type="submit" 
            disabled={status.loading}
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:opacity-90 text-white rounded-xl py-6 group"
          >
            {status.loading ? 'Enviando...' : 'Enviar Mensagem'}
            <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          {status.message && (
            <p className={`text-center ${
              status.message.includes('sucesso') ? 'text-green-500' : 'text-red-500'
            }`}>
              {status.message}
            </p>
          )}
        </form>
      </motion.div>
    );
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Efeito de Brilho Azul */}
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-blue-400/20 rounded-full blur-2xl" />
      
      {/* Elementos Decorativos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Stars className="absolute top-20 right-[15%] w-8 h-8 text-blue-200 opacity-30 animate-pulse" />
        <Sparkles className="absolute bottom-40 left-[10%] w-6 h-6 text-purple-200 opacity-30 animate-bounce" />
        <Zap className="absolute top-1/2 right-[5%] w-10 h-10 text-yellow-200 opacity-30 animate-pulse" />
        <Heart className="absolute bottom-20 left-[20%] w-8 h-8 text-pink-200 opacity-30 animate-bounce" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 relative">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-blue-500 text-lg font-medium mb-3 inline-flex items-center gap-2"
          >
            <Sparkles className="w-5 h-5" />
            O que esperar
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-4 relative"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800">
              Se você quer
            </span>{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              realizar as coisas
            </span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-gray-200 transition-all duration-300
                        shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <div className={`h-2 w-20 rounded-full bg-gradient-to-r ${service.gradient} mb-6`} />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {service.description}
              </p>
              <div className="space-y-4 mb-8">
                {service.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="flex-shrink-0">
                      <Check className="h-5 w-5 text-green-500" />
                    </div>
                    <p className="text-gray-700">{feature}</p>
                  </motion.div>
                ))}
              </div>
              <Button 
                asChild
                className={`w-full bg-gradient-to-r ${service.gradient} hover:opacity-90 text-white rounded-xl py-6 group`}
              >
                <Link href="https://cal.com/nekcy/15min">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mr-3">
                        <Calendar className="h-4 w-4 text-white" />
                      </div>
                      {service.buttonText}
                    </div>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ContactForm />

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h4 className="text-2xl font-bold mb-6 text-gray-800">Conheça Nossos Desenvolvedores</h4>
              <div className="space-y-4">
                {[ 
                  { name: "Matheus Montovaneli", role: "Dev Frontend", email: "contatodoneli@gmail.com" },
                  { name: "André Nakamatsu", role: "Dev Backend", email: "andrenakarocha@hotmail.com" },
                ].map((dev, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-4 bg-white p-6 rounded-xl border border-gray-100 
                              hover:border-gray-200 transition-all duration-300 shadow-md hover:shadow-lg
                              transform hover:-translate-y-1"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full 
                                  flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {dev.name[0]}
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-800">{dev.name}</h5>
                      <p className="text-gray-600">{dev.role}</p>
                      <a href={`mailto:${dev.email}`} 
                         className="text-blue-500 hover:text-blue-600 transition-colors inline-flex items-center gap-1">
                        Entre em contato
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
              
            </motion.div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default GetInTouchSection;
