const Portfolio = () => {
  return (
    <>
      <div id="Porfolio" className="m-3">
        <h1 className="mt-52 mb-20 uppercase text-white font-bold text-5xl">
          Portfolio
        </h1>

        <div className="lg:grid lg:grid-cols-3 gap-4">
          <section>
            <div className="bg-black p-4 text-white h-full">
              <h2 className="text-lg text-center bg-white text-black bg-opacity-90 mb-4">
                Tienda Hardware
              </h2>
              <img
                className="p-2 h-[250px] object-contain"
                src="/img/tienda-hardware.png"
                width="750"
                height="300"
                alt="Tienda-Hardware"
              />
              <div className="mt-2 p-2">
                <p className="bg-slate-800 p-2">
                  Una pagina web enfocada en el diseño para una tienda de
                  hadware online
                </p>
                <div className="flex flex-col mt-4">
                  <a
                    href="https://tienda-hardware.vercel.app/"
                    target="_blank"
                    className="hover:underline mt-5"
                  >
                    Visitar sitio web
                  </a>
                  <a
                    href="https://github.com/SantyPadilla51/TIENDA-HARDWARE"
                    target="_blank"
                    className="hover:underline mt-5"
                  >
                    Ver codigo GitHub
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-8 lg:mt-0 ">
            <div className="bg-black p-4 text-white h-full">
              <h2 className="text-lg text-center bg-white text-black bg-opacity-90 mb-4">
                Doc Panel
              </h2>
              <img
                className="p-2 h-[250px] object-contain"
                src="/img/ADM-CLINICA.png"
                width="750"
                height="200"
                alt="ADM_CLINICA"
              />
              <div className="mt-2 p-2">
                <p className="bg-slate-800 p-2">
                  Un programa para poder llevar el control de los estudios
                  clinicos de tus pacientes
                </p>
                <div className="flex flex-col mt-4">
                  <a
                    href="https://adm-clinica-frontend.vercel.app/"
                    target="_blank"
                    className="hover:underline mt-5"
                  >
                    Visitar sitio web
                  </a>
                  <a
                    href="https://github.com/SantyPadilla51/ADM-CLINICA-FRONTEND"
                    target="_blank"
                    className="hover:underline mt-5"
                  >
                    Ver codigo en GitHub
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-8 lg:mt-0 ">
            <div className="bg-black p-4 text-white h-full">
              <h2 className="text-lg text-center bg-white text-black bg-opacity-90 mb-4">
                Buscador de Gifs
              </h2>
              <img
                className="p-2 h-[250px] object-contain"
                src="/img/Buscador-Gifs.png"
                width="750"
                height="200"
                alt="Buscador-Gifs"
              />
              <div className="mt-2 p-2">
                <p className="bg-slate-800 p-2">
                  Un software desarrollado para buscar cualquier gif de la web
                  de forma rapida y sencilla
                </p>
                <div className="flex flex-col mt-4">
                  <a
                    href="https://buscador-de-gifs-7rjrsri5s-santypadilla51s-projects.vercel.app/"
                    target="_blank"
                    className="hover:underline mt-5"
                  >
                    Visitar sitio web
                  </a>
                  <a
                    href="https://github.com/SantyPadilla51/BUSCADOR_DE_GIFS"
                    target="_blank"
                    className="hover:underline mt-5"
                  >
                    Ver codigo en GitHub
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
