function Footer() {
  return (
    <footer className="bg-gray-100 mt-12">
      <section className="p-6 lg:w-[1024px] mx-auto flex flex-col gap-4 items-center md:justify-between md:flex-row">
        <div className="flex items-center gap-2">
          <img src="src/assets/multipare.png" alt="logo multipare" />
          <span> Telefone (37) 3237-1042</span>
        </div>

        <span>Todos os direitos reservados para MULTIPARE LTDA.</span>
      </section>
    </footer>
  );
}

export { Footer };
