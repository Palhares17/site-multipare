import { TitleSections } from '../ui/titleSections';

const text = [
  {
    p: 'Exibição de promoções (Liquidações, datas festivas)',
  },
  {
    p: 'Campanhas institucionais',
  },
  {
    p: 'Exibição de propagandas',
  },
  {
    p: 'Fidelização com a cobrança proporcional ao tempo de uso da vaga',
  },
  {
    p: 'Administração de todas as vagas em "real time & on line"',
  },
  {
    p: 'Permite a sinergia dos sistemas entre o estacionamento e o comércio vizinhos (pagamento ou cortesia via intranet)',
  },
  {
    p: 'Auditação da ocupação e transparência na cobrança dos pagamentos',
  },
  {
    p: 'Não estará refém de moedas ou papel moeda',
  },
  {
    p: 'Permite o acesso on line do Locatário ao seu percentual de movimentação financeira do imóvel alugado ao Locador',
  },
  {
    p: 'Não existe interferência humana devido ao controle eletrônico e WEB (prevenção de fraudes)',
  },
  {
    p: 'Ferramenta de gestão e controle (ocupação e recebimentos) para o empresário em real time.',
  },
];

function EParePage() {
  return (
    <main>
      <section className="flex flex-col gap-4 justify-center my-12 md:my-24 md:w-[680px mx-auto">
        <img
          src="src/assets/epare.png"
          alt="logo e-pare"
          className="h-12 w-36 m-auto"
        />
        <p className="text-xl">
          O sistema e-pare. está sendo desenvolvido para atender as empresas
          de estacionamento (Shopping Center, Supermercados, estacionamento
          particulares) através de uma rede composta de detectores de veículos
          estacionados e administrados por terminais instalados na entrada do
          estabelecimento - equipamento Terminal TORRE - TT ou Termiinal MESA –
          TM que poderão atender a totalidade das vagas do estabelecimento.
        </p>
      </section>
      <section>
        <TitleSections title="O Sistema permite:" />

        <div className="flex gap-4 flex-wrap md:justify-center">
          {text.map((item, index) => (
            <p
              key={index}
              className="px-6 py-4 h-full bg-gray-100	rounded-lg md:max-w-56 shadow"
            >
              {item.p}
            </p>
          ))}
        </div>
      </section>
    </main>
  );
}

export default EParePage;
