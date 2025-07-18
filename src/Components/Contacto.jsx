
const Contacto = () => {
  return (
    <>
      <div id="Contacto" className="m-3 mt-72 mb-32">
        <h1 className="text-white text-5xl uppercase font-bold">Contactame</h1>
        <ul className="text-white mt-8">
          <li className="block text-1xl bg-slate-900 p-2 lg:flex lg:gap-10 lg:w-1/2">
            <div className="flex items-center gap-2">
              <i className="fa fa-envelope icon"></i>
              <h4>Email</h4>
            </div>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=padillasantiago51@gmail.com" className="text-amber-400 font-semibold hover:underline" target="_blank">padillasantiago51@gmail.com</a>
          </li>

          <li className="block text-1xl bg-slate-900 p-2 mt-8 lg:flex lg:gap-10 lg:w-1/2">
            <div className="flex items-center gap-2">
              <i className="fab fa-linkedin icon"></i>
              <h4>LinkedIn</h4>
            </div>

            <a href="https://www.linkedin.com/in/santiago-padilla-800173235/" className="text-amber-400 font-semibold hover:underline" target="_blank">https://www.linkedin.com/in/santiago-padilla-800173235/</a>
          </li>

          <li className="block text-1xl bg-slate-900 p-2 mt-8 lg:flex lg:gap-10 lg:w-1/2">
            <div className="flex items-center gap-2">
              <i className="fab fa-whatsapp icon"></i>
              <h4>WhastsApp</h4>
            </div>
            <a href="https://wa.me/1125388295" className="text-amber-400 font-semibold hover:underline" target="_blank">+54 1125388295</a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Contacto