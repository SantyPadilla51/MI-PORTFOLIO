const Contacto = () => {
  return (
    <>
      <div id="Contacto" className="w-full max-w-6xl mx-auto my-16 mt-64 px-5">
        {/* Título de la sección */}
        <h2 className="text-zinc-100 uppercase font-black tracking-wider text-4xl md:text-5xl border-b border-white pb-4">
          Contactame
        </h2>

        {/* Lista de canales de contacto */}
        <ul className="mt-8 flex flex-col gap-4 w-full mx-auto lg:w-4/5">
          {/* Email */}
          <li className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-zinc-800/40 border border-zinc-800/80 px-5 py-4 rounded-xl hover:bg-zinc-800 hover:border-zinc-700 transition-all duration-200 group">
            <div className="flex items-center gap-3 text-zinc-300">
              <i className="fa fa-envelope text-xl text-white group-hover:scale-110 transition-transform"></i>
              <h4 className="font-semibold text-base tracking-wide">Email</h4>
            </div>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=padillasantiago51@gmail.com"
              className="text-white font-medium text-sm sm:text-base transition-colors break-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              padillasantiago51@gmail.com
            </a>
          </li>

          {/* LinkedIn */}
          <li className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-zinc-800/40 border border-zinc-800/80 px-5 py-4 rounded-xl hover:bg-zinc-800 hover:border-zinc-700 transition-all duration-200 group">
            <div className="flex items-center gap-3 text-zinc-300">
              <i className="fab fa-linkedin text-xl text-white group-hover:scale-110 transition-transform"></i>
              <h4 className="font-semibold text-base tracking-wide">
                LinkedIn
              </h4>
            </div>
            <a
              href="https://www.linkedin.com/in/santiago-padilla-800173235/"
              className="text-white font-medium text-sm sm:text-base  transition-colors truncate max-w-xs sm:max-w-md lg:max-w-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              santiago-padilla-800173235
            </a>
          </li>

          {/* WhatsApp */}
          <li className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-zinc-800/40 border border-zinc-800/80 px-5 py-4 rounded-xl hover:bg-zinc-800 hover:border-zinc-700 transition-all duration-200 group">
            <div className="flex items-center gap-3 text-zinc-300">
              <i className="fab fa-whatsapp text-xl text-white group-hover:scale-110 transition-transform"></i>
              <h4 className="font-semibold text-base tracking-wide">
                WhatsApp
              </h4>
            </div>
            <a
              href="https://wa.me/1125388295"
              className="text-white font-medium text-sm sm:text-base transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              +54 1125388295
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Contacto;
