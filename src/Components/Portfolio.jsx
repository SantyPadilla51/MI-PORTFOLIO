const Portfolio = () => {
  return (
    <>
      <div id="Porfolio" className="w-full max-w-6xl mx-auto my-16 mt-64 px-5">
        <h2 className="text-zinc-100 uppercase font-black tracking-wider text-4xl md:text-5xl border-b border-white pb-4 mb-10">
          Portfolio
        </h2>

        <div className="flex flex-col gap-4 ">
          <div className="flex flex-col md:flex-row mt-8 gap-6 max-w-6xl w-full bg-zinc-900 border border-zinc-800 rounded-2xl p-5 text-white shadow-xl">
            {/* Mitad Izquierda: Imagen */}
            <div className="w-full md:w-2/5 h-48 md:h-auto min-h-[160px] overflow-hidden rounded-xl bg-zinc-800 flex-shrink-0">
              <img
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                src="/img/inmobiliaria.png"
                alt="INMOBILIARIA"
              />
            </div>

            {/* Mitad Derecha: Contenido, Stack y Botones */}
            <div className="flex flex-col justify-between flex-grow">
              <div>
                <h2 className="text-xl font-bold tracking-wide text-zinc-100 mb-2">
                  Inmobiliaria Argenta
                </h2>
                <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                  Sistema de gestión inmobiliaria con arquitectura orientada a
                  componentes, implementando operaciones CRUD completas,
                  filtrado dinámico en tiempo real y persistencia en base de
                  datos SQL.
                </p>

                {/* Apartado de Stack (Tecnologías) */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs font-semibold tracking-wide text-zinc-300 bg-blue-600/30 border border-blue-700 px-2.5 py-1 rounded-md shadow-sm">
                    React
                  </span>
                  <span className="text-xs font-semibold tracking-wide text-zinc-300 bg-blue-700/60 border border-blue-600 px-2.5 py-1 rounded-md shadow-sm">
                    Typescript
                  </span>
                  <span className="text-xs font-semibold tracking-wide text-zinc-300 bg-sky-500/40 border border-sky-700 px-2.5 py-1 rounded-md shadow-sm">
                    Tailwind
                  </span>
                  <span className="text-xs font-semibold tracking-wide text-zinc-300 bg-green-700/40 border border-green-700 px-2.5 py-1 rounded-md shadow-sm">
                    Node.js
                  </span>
                  <span className="text-xs font-semibold tracking-wide text-zinc-300 bg-green-800/40 border border-green-800 px-2.5 py-1 rounded-md shadow-sm">
                    Supabase
                  </span>
                  <span className="text-xs font-semibold tracking-wide text-zinc-300 bg-zinc-700/40 border border-zinc-700 px-2.5 py-1 rounded-md shadow-sm">
                    Vercel
                  </span>
                </div>
              </div>

              {/* Botones uno al lado del otro */}
              <section className="flex flex-col sm:flex-row gap-2 mt-2">
                <a
                  href="https://inmobiliaria-argenta-frontend.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 flex-1 bg-white text-black text-sm font-semibold py-2 px-3 rounded-lg hover:bg-zinc-200 active:scale-[0.98] transition-all duration-200"
                >
                  <span>Visitar sitio</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                    className="size-4"
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
                  className="flex items-center justify-center gap-2 flex-1 bg-zinc-800 text-zinc-300 text-sm font-medium py-2 px-3 rounded-lg border border-zinc-700 hover:bg-zinc-700 hover:text-white active:scale-[0.98] transition-all duration-200"
                >
                  <span>GitHub</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
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

          <div className="flex flex-col md:flex-row mt-8 gap-6 max-w-6xl w-full bg-zinc-900 border border-zinc-800 rounded-2xl p-5 text-white shadow-xl">
            {/* Mitad Izquierda: Imagen */}
            <div className="w-full md:w-2/5 h-48 md:h-full min-h-[160px] overflow-hidden rounded-md bg-zinc-800 flex-shrink-0">
              <img
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                src="/img/DocPanel.png"
                alt="DOC_PANEL"
              />
            </div>

            {/* Mitad Derecha: Contenido y Botones */}
            <div className="flex flex-col justify-between flex-grow">
              <div>
                <h2 className="text-xl font-bold tracking-wide text-zinc-100 mb-2">
                  DOC PANEL
                </h2>
                <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                  Un programa para poder llevar el control de los estudios
                  clinicos de tus pacientes, agendar turnos, generar reportes y
                  guardar imagenes de estudios. Implementa el uso de Postgres
                  para su DB, Bucket para el almacenamiento de imagenes y una
                  version DEMO.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs font-semibold tracking-wide text-zinc-300 bg-blue-600/30 border border-blue-700 px-2.5 py-1 rounded-md shadow-sm">
                    React
                  </span>
                  <span className="text-xs font-semibold tracking-wide text-zinc-300 bg-sky-500/40 border border-sky-700 px-2.5 py-1 rounded-md shadow-sm">
                    Tailwind
                  </span>
                  <span className="text-xs font-semibold tracking-wide text-zinc-300 bg-blue-700/60 border border-blue-600 px-2.5 py-1 rounded-md shadow-sm">
                    Typescript
                  </span>
                  <span className="text-xs font-semibold tracking-wide text-zinc-300 bg-green-700/40 border border-green-700 px-2.5 py-1 rounded-md shadow-sm">
                    Node.js
                  </span>
                  <span className="text-xs font-semibold tracking-wide text-zinc-300 bg-green-800/40 border border-green-800 px-2.5 py-1 rounded-md shadow-sm">
                    Supabase
                  </span>
                  <span className="text-xs font-semibold tracking-wide text-zinc-300 bg-zinc-700/40 border border-zinc-700 px-2.5 py-1 rounded-md shadow-sm">
                    Vercel
                  </span>
                </div>
              </div>

              {/* Botones uno al lado del otro */}
              <section className="flex flex-col sm:flex-row gap-2 mt-2">
                <a
                  href="https://adm-clinica-frontend.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 flex-1 bg-white text-black text-sm font-semibold py-2 px-3 rounded-lg hover:bg-zinc-200 active:scale-[0.98] transition-all duration-200"
                >
                  <span>Visitar sitio</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                    className="size-4"
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
                  className="flex items-center justify-center gap-2 flex-1 bg-zinc-800 text-zinc-300 text-sm font-medium py-2 px-3 rounded-lg border border-zinc-700 hover:bg-zinc-700 hover:text-white active:scale-[0.98] transition-all duration-200"
                >
                  <span>GitHub</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
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

          <div className="flex flex-col md:flex-row mt-8 gap-6 max-w-6xl w-full bg-zinc-900 border border-zinc-800 rounded-2xl p-5 text-white shadow-xl">
            {/* Mitad Izquierda: Imagen */}
            <div className="w-full md:w-2/5 h-48 md:h-full min-h-[160px] overflow-hidden rounded-md bg-zinc-800 flex-shrink-0">
              <img
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                src="/img/Prueba-Tecnica-Ego.png"
                alt="EGO"
              />
            </div>

            {/* Mitad Derecha: Contenido y Botones */}
            <div className="flex flex-col justify-between flex-grow">
              <div>
                <h2 className="text-xl font-bold tracking-wide text-zinc-100 mb-2">
                  Prueba Tecnica | EGO
                </h2>
                <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                  Prueba Tecnica de Frontend para empresa donde habia que
                  desarrollar una landing, respetenado lo maximo posible el
                  diseño que me habian otorgado
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs font-semibold tracking-wide text-zinc-300 bg-blue-600/30 border border-blue-700 px-2.5 py-1 rounded-md shadow-sm">
                    React
                  </span>
                  <span className="text-xs font-semibold tracking-wide text-zinc-300 bg-sky-500/40 border border-sky-700 px-2.5 py-1 rounded-md shadow-sm">
                    Tailwind
                  </span>

                  <span className="text-xs font-semibold tracking-wide text-zinc-300 bg-zinc-700/40 border border-zinc-700 px-2.5 py-1 rounded-md shadow-sm">
                    Vercel
                  </span>
                </div>
              </div>

              {/* Botones uno al lado del otro */}
              <section className="flex flex-col sm:flex-row gap-2 mt-2">
                <a
                  href="https://prueba-tecnica-ego-uro2.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 flex-1 bg-white text-black text-sm font-semibold py-2 px-3 rounded-lg hover:bg-zinc-200 active:scale-[0.98] transition-all duration-200"
                >
                  <span>Visitar sitio</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                    className="size-4"
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
                  className="flex items-center justify-center gap-2 flex-1 bg-zinc-800 text-zinc-300 text-sm font-medium py-2 px-3 rounded-lg border border-zinc-700 hover:bg-zinc-700 hover:text-white active:scale-[0.98] transition-all duration-200"
                >
                  <span>GitHub</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
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

          <div className="flex flex-col md:flex-row mt-8 gap-6 max-w-6xl w-full bg-zinc-900 border border-zinc-800 rounded-2xl p-5 text-white shadow-xl">
            {/* Mitad Izquierda: Imagen */}
            <div className="w-full md:w-2/5 h-48 md:h-full min-h-[160px] overflow-hidden rounded-xl bg-zinc-800 flex-shrink-0">
              <img
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                src="/img/tienda-hardware.png"
                alt="Tienda_Hardware"
              />
            </div>

            {/* Mitad Derecha: Contenido y Botones */}
            <div className="flex flex-col justify-between flex-grow">
              <div>
                <h2 className="text-xl font-bold tracking-wide text-zinc-100 mb-2">
                  Tienda Hardware
                </h2>
                <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                  Una pagina web sencilla, enfocada en el diseño para una tienda
                  de hadware online. Cuenta con un apartado de carrito
                  totalmente funcional y carrusel de ofertas.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs font-semibold tracking-wide text-zinc-300 bg-orange-600/30 border border-orange-700 px-2.5 py-1 rounded-md shadow-sm">
                    HTML
                  </span>
                  <span className="text-xs font-semibold tracking-wide text-zinc-300 bg-sky-500/40 border border-sky-700 px-2.5 py-1 rounded-md shadow-sm">
                    CSS
                  </span>
                </div>
              </div>

              {/* Botones uno al lado del otro */}
              <section className="flex flex-col sm:flex-row gap-2 mt-2">
                <a
                  href="https://tienda-hardware.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 flex-1 bg-white text-black text-sm font-semibold py-2 px-3 rounded-lg hover:bg-zinc-200 active:scale-[0.98] transition-all duration-200"
                >
                  <span>Visitar sitio</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                    className="size-4"
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
                  className="flex items-center justify-center gap-2 flex-1 bg-zinc-800 text-zinc-300 text-sm font-medium py-2 px-3 rounded-lg border border-zinc-700 hover:bg-zinc-700 hover:text-white active:scale-[0.98] transition-all duration-200"
                >
                  <span>GitHub</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
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

          <div className="flex flex-col md:flex-row mt-8 gap-6 max-w-6xl w-full bg-zinc-900 border border-zinc-800 rounded-2xl p-5 text-white shadow-xl">
            {/* Mitad Izquierda: Imagen */}
            <div className="w-full md:w-2/5 h-48 md:h-full min-h-[160px] overflow-hidden rounded-xl bg-zinc-800 flex-shrink-0">
              <img
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                src="/img/Buscador-Gifs.png"
                alt="Buscador_Gifs"
              />
            </div>

            {/* Mitad Derecha: Contenido y Botones */}
            <div className="flex flex-col justify-between flex-grow">
              <div>
                <h2 className="text-xl font-bold tracking-wide text-zinc-100 mb-2">
                  Buscador de Gifs
                </h2>
                <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                  Un software desarrollado para buscar cualquier gif de la web
                  de forma rapida y sencilla
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-xs font-semibold tracking-wide text-zinc-300 bg-blue-600/30 border border-blue-700 px-2.5 py-1 rounded-md shadow-sm">
                    React
                  </span>
                  <span className="text-xs font-semibold tracking-wide text-zinc-300 bg-sky-500/40 border border-sky-700 px-2.5 py-1 rounded-md shadow-sm">
                    CSS
                  </span>
                </div>
              </div>

              {/* Botones uno al lado del otro */}
              <section className="flex flex-col sm:flex-row gap-2 mt-2">
                <a
                  href="https://buscador-de-gifs-7rjrsri5s-santypadilla51s-projects.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 flex-1 bg-white text-black text-sm font-semibold py-2 px-3 rounded-lg hover:bg-zinc-200 active:scale-[0.98] transition-all duration-200"
                >
                  <span>Visitar sitio</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                    className="size-4"
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
                  className="flex items-center justify-center gap-2 flex-1 bg-zinc-800 text-zinc-300 text-sm font-medium py-2 px-3 rounded-lg border border-zinc-700 hover:bg-zinc-700 hover:text-white active:scale-[0.98] transition-all duration-200"
                >
                  <span>GitHub</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
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
      </div>
    </>
  );
};

export default Portfolio;
