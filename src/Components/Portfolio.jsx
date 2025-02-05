
const Portfolio = () => {
  return (
    <>
      <div id="Porfolio" className="m-3">
        <h1 className="mt-52 mb-20 uppercase text-white font-bold text-5xl">Portfolio</h1>

        <section>
          <div className="bg-black lg:w-1/4 p-2 text-white">
            <img className="p-2" src="/img/tienda-hardware.png" width="600" height="200" alt="Tienda-Hardware" />
            <div className="mt-2 p-2">
              <p className="bg-slate-800 p-2">Una pagina web enfocada en el diseño para una tienda de hadware online</p>
              <div className="mt-4">
                <a href="https://tienda-hardware.vercel.app/" target="_blank" className="hover:underline mt-5">Visitar sitio web</a>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="bg-black lg:w-1/4 p-2 text-white">
            <img className="p-2" src="/img/ADM-CLINICA.png" width="600" height="200" alt="ADM_CLINICA" />
            <div className="mt-2 p-2">
              <p className="bg-slate-800 p-2">Un softaware desarrollado para llevar el control de los estudios clinicos de tus pacientes</p>
              <div className="mt-4">
                <a href="https://admin-pacientes-ecru.vercel.app/" target="_blank" className="hover:underline mt-5">Visitar sitio web</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Portfolio