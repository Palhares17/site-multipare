import { NavLink } from 'react-router-dom';
import { TitleSections } from '../ui/titleSections';

function Products() {
  return (
    <section className="my-8" id="products">
      <TitleSections title={'Produtos'} />

      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="px-6 py-4 bg-gray-100	rounded-lg flex flex-col gap-2 items-start">
          <img src="src/assets/epare.png" alt="logo e-pare" />
          <p>
            O sistema e-Pare está sendo desenvolvido para atenderem
            concessionárias ou empresas/órgãos públicos de gerenciamento de
            estacionamento rotativo nas vias, através de uma rede composta de
            detectores de veículos estacionados e administrados por terminais
            instalados na calçada - equipamento Terminal TORRE - TT que poderão
            atender de atender de 40 a 160 vagas nas vias.
          </p>

          <NavLink to="/e-pare">
            <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-600/90 hover:scale-105 duration-500 rounded-lg font-bold text-zinc-100">
              SAIBA MAIS
            </button>
          </NavLink>
        </div>

        <div className="px-6 py-4 bg-gray-100	rounded-lg flex flex-col gap-2 items-start">
          <img src="src/assets/e-valet.svg" alt="logo e-pare" />
          <p>
            O sistema e-Valet está sendo desenvolvido para atender as empresas
            de estacionamento (Shopping Center, Supermercados, estacionamento
            particulares) através de uma rede composta de detectores de veículos
            estacionados e administrados por terminais instalados na entrada do
            estabelecimento - equipamento Terminal TORRE - TT ou Termiinal MESA
            – TM que poderão atender a totalidade das vagas do estabelecimento.
          </p>

          <NavLink to="/e-valet">
            <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-600/90 hover:scale-105 duration-500 rounded-lg font-bold text-zinc-100">
              SAIBA MAIS
            </button>
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export { Products };
