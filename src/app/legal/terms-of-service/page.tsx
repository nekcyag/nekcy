"use client";

import Link from 'next/link';
import { 
  Code2, 
  Paintbrush, 
  Settings, 
  Shield, 
  ChevronLeft,
  FileDown 
} from 'lucide-react';

export default function TermosDeServico() {
  const handleDownload = () => {
    const pdfUrl = '/termos-de-servico.pdf';
    
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.setAttribute('download', 'termos-de-servico.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative max-w-4xl mx-auto px-4 py-8">
      {/* Ícones decorativos */}
      <div className="hidden lg:block absolute -left-24 top-20 text-blue-100 opacity-20">
        <Code2 size={80} strokeWidth={1} />
      </div>
      <div className="hidden lg:block absolute -right-24 top-40 text-blue-100 opacity-20">
        <Paintbrush size={80} strokeWidth={1} />
      </div>
      <div className="hidden lg:block absolute -left-24 bottom-40 text-blue-100 opacity-20">
        <Settings size={80} strokeWidth={1} />
      </div>
      <div className="hidden lg:block absolute -right-24 bottom-20 text-blue-100 opacity-20">
        <Shield size={80} strokeWidth={1} />
      </div>

      <div className="mb-8">
        <Link href="/" className="text-blue-500 hover:text-blue-600 flex items-center gap-2">
          <ChevronLeft size={20} /> Voltar
        </Link>
      </div>

      <h1 className="text-4xl font-bold text-blue-500 mb-6">
        Termos e Condições da Agência Nekcy
      </h1>
      
      <p className="text-gray-600 mb-6">
        Última atualização: 20 de novembro de 2024
      </p>

      <button
        onClick={handleDownload}
        className="mb-8 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
      >
        <FileDown size={20} /> Baixar Termos de Serviço (PDF)
      </button>

      <div className="prose max-w-none">
        <p className="mb-4">
          Estes Termos de Serviço regem a relação entre a Agência Nekcy ("Agência", "nós", "nos") e nossos clientes ("Cliente", "você") para serviços de desenvolvimento e design de websites. Ao contratar nossos serviços, você concorda com estes termos.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-500">1. Serviços Oferecidos</h2>
        <p className="mb-2">1.1. A Agência oferece serviços profissionais de desenvolvimento, design e manutenção de websites.</p>
        <p className="mb-2">1.2. Os serviços incluem, mas não se limitam a: desenvolvimento de websites personalizados, design de UI/UX, design responsivo, soluções de e-commerce e manutenção de websites.</p>
        <p className="mb-4">1.3. Os prazos do projeto serão estabelecidos na proposta do projeto, geralmente variando de 4 a 12 semanas, dependendo do escopo.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-500">2. Processo do Projeto</h2>
        <p className="mb-2">2.1. Consulta inicial e coleta de requisitos</p>
        <p className="mb-2">2.2. Envio de proposta e orçamento</p>
        <p className="mb-2">2.3. Processo de aprovação do design</p>
        <p className="mb-4">2.4. Fase de desenvolvimento e testes</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-500">3. Termos de Pagamento</h2>
        <p className="mb-2">3.1. Um depósito de 50% é necessário para iniciar o trabalho</p>
        <p className="mb-2">3.2. O pagamento restante é devido após a conclusão do projeto</p>
        <p className="mb-4">3.3. Funcionalidades ou revisões adicionais além do escopo serão orçadas separadamente</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-500">4. Propriedade Intelectual</h2>
        <p className="mb-2">4.1. Após o pagamento total, o Cliente recebe a propriedade total do website final</p>
        <p className="mb-4">4.2. A Agência mantém o direito de exibir o trabalho em seu portfólio</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-500">5. Responsabilidades do Cliente</h2>
        <p className="mb-2">5.1. Fornecer conteúdo e materiais necessários de forma oportuna</p>
        <p className="mb-4">5.2. Revisar e fornecer feedback dentro dos prazos acordados</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-500">6. Cancelamento do Projeto</h2>
        <p className="mb-4">6.1. Taxas de cancelamento podem ser aplicadas com base no trabalho já realizado</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-500">7. Manutenção e Suporte</h2>
        <p className="mb-4">7.1. Pacotes de suporte pós-lançamento estão disponíveis separadamente</p>

        <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-100">
          <p className="font-semibold text-blue-600 mb-2">
            Informações de Contato
          </p>
          <p className="mb-2">
            E-mail: nekcyagency@gmail.com<br />
            {/* Telefone: (555) 123-4567<br /> */}
            Horário de funcionamento: Segunda - Sexta, 9:00 AM - 8:00 PM (Horário de Brasília)
          </p>
        </div>
        
        <p className="mt-8 text-sm text-gray-600">
          Para dúvidas ou questões sobre estes Termos de Serviço, entre em contato com nosso departamento jurídico pelo e-mail juridico@nekcy-agencia.com.br
        </p>
      </div>
    </div>
  );
}
