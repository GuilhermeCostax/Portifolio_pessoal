// Em src/components/Servicos.js

const Servicos = () => {
  return (
    // O conteúdo da seção será adicionado nos próximos passos.
    <section id="servicos" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Título Principal da Seção */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Impulsione seu Negócio com uma Presença Digital Profissional
        </h2>

        {/* Parágrafo Introdutório */}
        <p className="text-lg text-gray-300 max-w-3xl mx-auto text-center mb-12">
          Ajudo pequenas empresas, empreendedores e profissionais liberais a se destacarem no ambiente digital. Sou especializado na criação de Landing Pages e sites institucionais que não apenas impressionam visualmente, mas também são rápidos, eficazes e funcionam perfeitamente em qualquer dispositivo.
        </p>

        {/* Grid de Serviços - Apenas a estrutura inicial */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Coluna 1: O que está incluso */}
          <div>
            <h4 className="text-2xl font-semibold mb-4">O que está incluso no serviço?</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✅</span>
                <span><strong>Design Moderno e Personalizado:</strong> Layout único que reflete a identidade da sua marca.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✅</span>
                <span><strong>100% Responsivo:</strong> Perfeito em celulares, tablets e computadores.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✅</span>
                <span><strong>Otimizado para Máxima Velocidade:</strong> Melhora a experiência do usuário e o SEO.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-2">✅</span>
                <span><strong>Estrutura Otimizada para SEO:</strong> As melhores práticas para ser encontrado no Google.</span>
              </li>
            </ul>
          </div>

          {/* Coluna 2: Meu Diferencial */}
          <div>
            <h4 className="text-2xl font-semibold mb-4">Meu Diferencial: Agilidade e Tecnologia</h4>
            <p className="text-gray-300">
              Utilizo um processo de desenvolvimento moderno, assistido por IA, para acelerar a criação e garantir um design de alta qualidade, entregando seu projeto com uma <strong>agilidade surpreendente</strong> e <strong>custo-benefício superior</strong>.
            </p>
          </div>
        </div>

        {/* CTA Final */}
        <div className="text-center mt-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">Vamos transformar sua ideia em realidade?</h3>
          <a
            href="mailto:guilhermefcostadev@gmail.com"
            className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors duration-300 inline-block mt-4"
          >
            Solicite um Orçamento Gratuito
          </a>
        </div>
      </div>
    </section>
  );
};

export default Servicos;