const Main = () => {
  return (
    <>
      <section className=" w-full max-w-6xl mx-auto my-16 mt-64 px-5" id="Main">
        {/* Contenedor del texto animado / Consola */}
        <div className="">
          <span
            id="text"
            className="text-4xl md:text-6xl font-black tracking-tight text-white block min-h-[60px]"
          ></span>
        </div>

        {/* Textos de Bienvenida */}
        <div className="mt-8 ">
          <h3 className="text-white font-medium text-lg md:text-xl uppercase tracking-wider">
            Bienvenido a mi Portfolio como desarrollador web
          </h3>

          <h3 className="text-white mt-4 text-base md:text-lg font-normal">
            Si deseas contactarme, puedes hacerlo a través de{" "}
            <span className="text-sky-400 font-semibold hover:text-sky-300 transition-colors block sm:inline mt-1 sm:mt-0">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=padillasantiago51@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer underline decoration-sky-400/30 hover:decoration-sky-300 underline-offset-4"
              >
                padillasantiago51@gmail.com
              </a>
            </span>
          </h3>
        </div>

        {/* Botón de Llamado a la Acción (CTA) */}
        <div className="mt-10  flex flex-wrap items-center gap-6">
          <a href="#Porfolio" className="inline-block">
            <button className="text-zinc-950 bg-zinc-100 font-bold tracking-wide text-sm px-8 py-4 rounded-xl hover:bg-zinc-300 active:scale-95 transition-all duration-200 uppercase shadow-lg shadow-black/20">
              Ver Proyectos
            </button>
          </a>

          {/* Redes Sociales Flotantes */}
          <ul className="flex items-center gap-4 text-sky-600">
            <li>
              <a
                href="https://www.linkedin.com/in/santiago-padilla-800173235/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-11 h-11 bg-zinc-800/40 border border-zinc-800/80 rounded-xl hover:bg-zinc-800 hover:text-sky-400 hover:border-zinc-700 transition-all duration-200 active:scale-90"
                title="LinkedIn"
              >
                <i className="fab fa-linkedin-in text-lg"></i>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/SantyPadilla51"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-11 h-11 bg-zinc-800/40 border border-zinc-800/80 rounded-xl hover:bg-zinc-800 hover:text-sky-400 hover:border-zinc-700 transition-all duration-200 active:scale-90"
                title="GitHub"
              >
                <i className="fab fa-github text-lg"></i>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Main;
