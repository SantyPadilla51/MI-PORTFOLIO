const SobreMi = () => {
  return (
    <>
      <div id="SobreMi" className="lg:mx-48 my-16 mx-5 mt-64">
        {/* Título de la sección */}
        <h2 className="text-zinc-100 uppercase font-black tracking-wider text-4xl md:text-5xl border-b border-white pb-4">
          Sobre Mi
        </h2>

        {/* Descripción Profesional */}
        <p className="text-white mt-6 text-lg leading-relaxed w-full lg:w-4/5 font-normal">
          ¡Hola! Soy Santiago, Desarrollador de Software enfocado en la creación
          de aplicaciones robustas y soluciones web escalables. Me especializo
          en transformar ideas en productos funcionales mediante el trabajo
          colaborativo y una comunicación técnica clara. Mi enfoque está
          orientado a la excelencia en el código y al éxito compartido de los
          proyectos en los que participo.
        </p>

        {/* Botón de Descarga de CV */}
        <div className="mt-8">
          <a href="/img/CV.pdf" download className="inline-block">
            <button className="flex items-center gap-2 text-zinc-900 bg-zinc-100 font-semibold tracking-wide text-sm px-6 py-3.5 rounded-xl hover:bg-zinc-200 active:scale-95 transition-all duration-200 uppercase shadow-lg shadow-black/20">
              <svg
                className="w-4 h-4 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 16l-5-5h3V4h4v7h3l-5 5zm9 2H3v2h18v-2z" />
              </svg>
              Descargar mi CV
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default SobreMi;
