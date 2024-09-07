import { TitleSections } from '../ui/titleSections';

const text = [
  {
    p: 'Empresa inovadora de produtos e conceitos no segmento de empresas de estacionamento público, particular e de <strong>serviços de manobristas</strong>– valet, a Multi Pare apresenta o sistema WEB para a administração de empresas de serviços de manobristas, o e-valet.',
  },
  {
    p: 'e-valet foi concebido para possibilitar o registro eletrônico das operações e compartilhamento dos dados com os Clientes via sms.',
  },
  {
    p: 'O <strong>Terminal de Atendimento e-valet</strong> - TA, exibe publicidades e campanha institucional; o atendente registra os dados do veiculo na entrada e saída no sistema que registra o horário e local aonde foi estacionado o veiculo.',
  },
  {
    p: 'Para a empresa prestadora de serviços de manobristas, o beneficio da automatização da operação com o registro de entrada e saída, nome da atendente, do manobrista, horários de movimentações do veiculo do cliente e etc., tudo on line</strong>e <strong>real time</strong>.',
  },
  {
    p: '<strong>e-valet</strong> proporciona para cliente o entretenimento com publicidades e a informação eletrônica dos horários (entrada e saída) e o local exato da vaga aonde foi estacionado o seu veiculo por mensagem de sms.',
  },
  {
    p: '<strong>e-valet</strong> é uma das inovações da linha de produtos MULTI PARE que se seguirão com o lançamento dos demais produtos e-pare voltado para atender as empresas de estacionamento particular e público.',
  },
];

function About() {
  return (
    <section id='about'>
      <TitleSections
        title={'Sobre nós'}
        subtitle={
          'Inovação, Patente e Marcas Brasileiras. Desenvolvimentos tecnológicos e pedidos de patentes depositados.'
        }
      />

      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {text.map((item, index) => (
          <div key={index} className="px-6 py-4 bg-gray-100	rounded-lg hover:scale-105 duration-500">
            <p dangerouslySetInnerHTML={{ __html: item.p }} />
          </div>
        ))}
      </div>
    </section>
  );
}

export { About };
