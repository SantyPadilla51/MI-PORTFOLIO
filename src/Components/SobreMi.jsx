
const SobreMi = () => {
    return (
        <>
            <div id="SobreMi" className="m-3" >
                <h1 className="text-white uppercase font-bold text-5xl mt-96 ">Sobre Mi</h1>
                <p className="text-white mt-10 w-full lg:w-1/2" >¡Hola! Soy Santiago, tengo 24 años y soy un apasionado desarrollador de software en el mundo web y de aplicaciones.
                    Actualmente cursando la Tecnicatura Superior en Desarrollo de Software.
                    Disfruto trabajando en equipo y creo en la importancia de una comunicación clara y eficaz. Creo que el intercambio de ideas y la colaboración son fundamentales para el éxito de cualquier proyecto.

                </p>
                <p className="text-white mt-6" >
                    Si te interesa saber mas sobre mi podes hablarme por LinkedIn o enviarme un correo: padillasantiago51@gmail.com
                </p>
                <a href="/img/CV-PadillaSantiago.pdf" download>
                    <button className="text-black mt-8 mb-8 bg-white p-4 uppercase rounded hover:bg-slate-400">Descargar mi CV</button>
                </a>
            </div>

        </>
    )
}

export default SobreMi