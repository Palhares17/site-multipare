function Intro() {
  return (
    <section className="flex flex-col-reverse items-center justify-center my-12 md:my-24 md:flex-row">
      <div className="text-center md:text-left md:mr-12">
        <p className="text-2xl mb-1 text-gray-800">
          Seu estacionamento é manual,
          <br /> eletrônico ou informatizado?
        </p>
        <h1 className="text-3xl text-gray-950">
          <strong>
            Ele pode ser inteligente com
            <br />a linha de produtos MultiPare
          </strong>
        </h1>
        <button className="mt-6 text-base text-zinc-100 font-bold rounded-lg px-4 py-2 bg-indigo-600 hover:bg-indigo-600/90 hover:scale-105 duration-500  ">
          Vamos Conversar
        </button>
      </div>

      <img
        src="src/assets/estacionamento01.jpg"
        alt="estacionamento ao ar livre"
        className="shadow-xl object-cover h-80 w-full md:w-1/3 mb-8 md:mb-0 rounded-3xl"
      />
    </section>
  );
}

export { Intro };
