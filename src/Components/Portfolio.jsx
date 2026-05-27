const Portfolio = () => {
  return (
    <>
      <div id="Porfolio" className="mx-5 lg:mx-48 mt-64">
        <h2 className="text-zinc-100 uppercase font-black tracking-wider text-4xl md:text-5xl border-b border-white pb-4 mb-10">
          Portfolio
        </h2>

        <div className="lg:grid lg:grid-cols-3 gap-4 ">
          <div className="flex flex-col mt-8 justify-between max-w-sm h-full bg-zinc-900 border border-zinc-800 rounded-xl p-5 text-white shadow-lg shadow-black/40 backdrop-blur-sm">
            {/* Título principal */}
            <h2 className="text-xl font-bold tracking-wide text-zinc-100 border-b border-zinc-800 pb-3 mb-4">
              Inmobiliaria Argenta
            </h2>

            {/* Contenedor de la Imagen */}
            <div className="w-full h-44 overflow-hidden rounded-lg bg-zinc-800 mb-4">
              <img
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                src="/img/inmobiliaria.png"
                alt="INMOBILIARIA"
              />
            </div>

            {/* Descripción */}
            <div className="flex-grow">
              <p className="text-sm text-zinc-400 leading-relaxed bg-zinc-800/40 border border-zinc-800/50 p-3 rounded-lg">
                Sistema de gestión inmobiliaria con arquitectura orientada a
                componentes, implementando operaciones CRUD completas, filtrado
                dinámico en tiempo real y persistencia en base de datos NoSQL.
              </p>
            </div>

            {/* Botones de Acción */}
            <section className="flex flex-col gap-3 mt-6">
              <a
                href="https://inmobiliaria-argenta-frontend.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full bg-white text-black font-medium px-4 py-2.5 rounded-lg border border-transparent hover:bg-zinc-200 active:scale-[0.98] transition-all duration-200 group"
              >
                <span>Visitar sitio web</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="size-5 transform group-hover:translate-x-0.5 transition-transform"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
              </a>

              <a
                href="https://github.com/SantyPadilla51/Inmobiliaria-Argenta-Frontend"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full bg-zinc-800 text-zinc-200 font-medium px-4 py-2.5 rounded-lg border border-zinc-700 hover:bg-zinc-700 hover:text-white active:scale-[0.98] transition-all duration-200"
              >
                <span>Ver código en GitHub</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icon-tabler-brand-github"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                </svg>
              </a>
            </section>
          </div>

          <div className="flex flex-col mt-8 justify-between max-w-sm h-full bg-zinc-900 border border-zinc-800 rounded-xl p-5 text-white shadow-lg shadow-black/40 backdrop-blur-sm">
            {/* Título principal */}
            <h2 className="text-xl font-bold tracking-wide text-zinc-100 border-b border-zinc-800 pb-3 mb-4">
              Doc Panel
            </h2>

            {/* Contenedor de la Imagen */}
            <div className="w-full h-44 overflow-hidden rounded-lg bg-zinc-800 mb-4">
              <img
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                src="/img/ADM-CLINICA.png"
                alt="Doc-Panel"
              />
            </div>

            {/* Descripción */}
            <div className="flex-grow">
              <p className="text-sm text-zinc-400 leading-relaxed bg-zinc-800/40 border border-zinc-800/50 p-3 rounded-lg">
                Un programa para poder llevar el control de los estudios
                clinicos de tus pacientes
              </p>
            </div>

            {/* Botones de Acción */}
            <section className="flex flex-col gap-3 mt-6">
              <a
                href="https://adm-clinica-frontend.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full bg-white text-black font-medium px-4 py-2.5 rounded-lg border border-transparent hover:bg-zinc-200 active:scale-[0.98] transition-all duration-200 group"
              >
                <span>Visitar sitio web</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="size-5 transform group-hover:translate-x-0.5 transition-transform"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
              </a>

              <a
                href="https://github.com/SantyPadilla51/ADM-CLINICA-FRONTEND"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full bg-zinc-800 text-zinc-200 font-medium px-4 py-2.5 rounded-lg border border-zinc-700 hover:bg-zinc-700 hover:text-white active:scale-[0.98] transition-all duration-200"
              >
                <span>Ver código en GitHub</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icon-tabler-brand-github"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                </svg>
              </a>
            </section>
          </div>

          <div className="flex flex-col mt-8 justify-between max-w-sm h-full bg-zinc-900 border border-zinc-800 rounded-xl p-5 text-white shadow-lg shadow-black/40 backdrop-blur-sm">
            {/* Título principal */}
            <h2 className="text-xl font-bold tracking-wide text-zinc-100 border-b border-zinc-800 pb-3 mb-4">
              Prueba Tecnica | EGO
            </h2>

            {/* Contenedor de la Imagen */}
            <div className="w-full h-44 overflow-hidden rounded-lg bg-zinc-800 mb-4">
              <img
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                src="/img/Prueba-Tecnica-Ego.png"
                alt="Prueba-Tecnica-EGO"
              />
            </div>

            {/* Descripción */}
            <div className="flex-grow">
              <p className="text-sm text-zinc-400 leading-relaxed bg-zinc-800/40 border border-zinc-800/50 p-3 rounded-lg">
                Un programa para poder llevar el control de los estudios
                clinicos de tus pacientes
              </p>
            </div>

            {/* Botones de Acción */}
            <section className="flex flex-col gap-3 mt-6">
              <a
                href="https://prueba-tecnica-ego-uro2.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full bg-white text-black font-medium px-4 py-2.5 rounded-lg border border-transparent hover:bg-zinc-200 active:scale-[0.98] transition-all duration-200 group"
              >
                <span>Visitar sitio web</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="size-5 transform group-hover:translate-x-0.5 transition-transform"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
              </a>

              <a
                href="https://github.com/SantyPadilla51/Prueba-Tecnica-EGO"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full bg-zinc-800 text-zinc-200 font-medium px-4 py-2.5 rounded-lg border border-zinc-700 hover:bg-zinc-700 hover:text-white active:scale-[0.98] transition-all duration-200"
              >
                <span>Ver código en GitHub</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icon-tabler-brand-github"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                </svg>
              </a>
            </section>
          </div>

          <div className="flex flex-col mt-8 justify-between max-w-sm h-full bg-zinc-900 border border-zinc-800 rounded-xl p-5 text-white shadow-lg shadow-black/40 backdrop-blur-sm">
            {/* Título principal */}
            <h2 className="text-xl font-bold tracking-wide text-zinc-100 border-b border-zinc-800 pb-3 mb-4">
              Tienda Hardware
            </h2>

            {/* Contenedor de la Imagen */}
            <div className="w-full h-44 overflow-hidden rounded-lg bg-zinc-800 mb-4">
              <img
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                src="/img/tienda-hardware.png"
                alt="INMOBILIARIA"
              />
            </div>

            {/* Descripción */}
            <div className="flex-grow">
              <p className="text-sm text-zinc-400 leading-relaxed bg-zinc-800/40 border border-zinc-800/50 p-3 rounded-lg">
                Una pagina web enfocada en el diseño para una tienda de hadware
                online
              </p>
            </div>

            {/* Botones de Acción */}
            <section className="flex flex-col gap-3 mt-6">
              <a
                href="https://tienda-hardware.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full bg-white text-black font-medium px-4 py-2.5 rounded-lg border border-transparent hover:bg-zinc-200 active:scale-[0.98] transition-all duration-200 group"
              >
                <span>Visitar sitio web</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="size-5 transform group-hover:translate-x-0.5 transition-transform"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
              </a>

              <a
                href="https://github.com/SantyPadilla51/TIENDA-HARDWARE"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full bg-zinc-800 text-zinc-200 font-medium px-4 py-2.5 rounded-lg border border-zinc-700 hover:bg-zinc-700 hover:text-white active:scale-[0.98] transition-all duration-200"
              >
                <span>Ver código en GitHub</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icon-tabler-brand-github"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                </svg>
              </a>
            </section>
          </div>

          <div className="flex flex-col mt-8 justify-between max-w-sm h-full bg-zinc-900 border border-zinc-800 rounded-xl p-5 text-white shadow-lg shadow-black/40 backdrop-blur-sm">
            {/* Título principal */}
            <h2 className="text-xl font-bold tracking-wide text-zinc-100 border-b border-zinc-800 pb-3 mb-4">
              Buscador de Gifs
            </h2>

            {/* Contenedor de la Imagen */}
            <div className="w-full h-44 overflow-hidden rounded-lg bg-zinc-800 mb-4">
              <img
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                src="/img/Buscador-Gifs.png"
                alt="Buscador de Gifs"
              />
            </div>

            {/* Descripción */}
            <div className="flex-grow">
              <p className="text-sm text-zinc-400 leading-relaxed bg-zinc-800/40 border border-zinc-800/50 p-3 rounded-lg">
                Un software desarrollado para buscar cualquier gif de la web de
                forma rapida y sencilla
              </p>
            </div>

            {/* Botones de Acción */}
            <section className="flex flex-col gap-3 mt-6">
              <a
                href="https://buscador-de-gifs-7rjrsri5s-santypadilla51s-projects.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full bg-white text-black font-medium px-4 py-2.5 rounded-lg border border-transparent hover:bg-zinc-200 active:scale-[0.98] transition-all duration-200 group"
              >
                <span>Visitar sitio web</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="size-5 transform group-hover:translate-x-0.5 transition-transform"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
              </a>

              <a
                href="https://github.com/SantyPadilla51/BUSCADOR_DE_GIFS"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full bg-zinc-800 text-zinc-200 font-medium px-4 py-2.5 rounded-lg border border-zinc-700 hover:bg-zinc-700 hover:text-white active:scale-[0.98] transition-all duration-200"
              >
                <span>Ver código en GitHub</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icon-tabler-brand-github"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                </svg>
              </a>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
