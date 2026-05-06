const SobreMi = () => {
  return (
    <>
      <div id="SobreMi" className="m-3">
        <h1 className="text-white uppercase font-bold text-5xl mt-96 ">
          About Me
        </h1>
        <p className="text-white mt-10 w-full lg:w-1/2">
          ¡Hola! Soy Santiago, Desarrollador de Software enfocado en la creación
          de aplicaciones robustas y soluciones web escalables. Me especializo
          en transformar ideas en productos funcionales mediante el trabajo
          colaborativo y una comunicación técnica clara. Mi enfoque está
          orientado a la excelencia en el código y al éxito compartido de los
          proyectos en los que participo.
        </p>

        <a href="/img/CV.pdf" download>
          <button className="text-black mt-8 mb-8 bg-white p-4 uppercase hover:bg-black hover:text-white">
            Descargar mi CV
          </button>
        </a>
      </div>
    </>
  );
};

export default SobreMi;
