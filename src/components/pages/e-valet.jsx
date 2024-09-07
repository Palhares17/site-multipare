import { TitleSections } from '../ui/titleSections';
import EvaletLogo from '../../assets/e-valet.svg';

const text = [
  {
    p: 'Registro dos dados do veículo e cliente',
  },
  {
    p: 'Registro de horário e data de entrada e saída da vaga',
  },
  {
    p: 'Administração e controle do fluxo de veículos',
  },
  {
    p: 'Envio dos horários e local estacionado via sms para o Cliente',
  },
  {
    p: 'Publicidade institucional',
  },
  {
    p: 'Mensura exatamente o tempo de ocupação de vagas',
  },
  {
    p: 'Exibição de publicidades',
  },
  {
    p: 'Mensura exatamente o tempo de ocupação de vagas',
  },
  {
    p: 'Exibição de promoções - liquidações, datas festivas',
  },
  {
    p: 'Auditação (ocupações e pagamentos)',
  },
  {
    p: 'Registros informatizados e eletrônicos',
  },
];

function EvaletPage() {
  return (
    <main>
      <section className="flex flex-col gap-4 justify-center my-12 md:my-24 md:w-[680px] mx-auto">
        <img src={EvaletLogo} alt="logo e-valet" className="h-12" />
        <p className="text-xl">
          O equipamento e-VALET - Terminal ATENDIMENTO - TA, consiste de um
          móvel conectado a internet e dotado de uma TELA LCD/LED para exibição
          de publicidades e de apoio a atividade administrativa de receber os
          dados do cliente.
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

export default EvaletPage;
