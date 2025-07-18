
const Main = () => {
    return (
        <>
            <section className="font-bold m-3 lg:mt-72 lg:ms-8" id="Main">
                <div className='console-container mt-52'>
                    <span id='text' className=" flex-wrap text-5xl text-wrap"></span>
                </div>
                <div className="mt-20 m-3">
                    <h3 className="text-white text-2xl uppercase mt-8">Bienvenido a mi Portfolio como desarrollador web</h3>
                    <h3 className="text-white mt-6">Si deseas contactarme, puedes hacerlo a travez de
                        <span className="text-green-600 ms-3 ">
                            <a href="" className="cursor-pointer">
                                padillasantiago51@gmail.com
                            </a>
                        </span>
                    </h3>
                </div>
                <a href="#Porfolio">
                    <button className="font-light text-black mt-8 mb-8 bg-white p-4 uppercase rounded m-3 hover:bg-slate-400">Ver Proyectos</button>
                </a>

                <div className="m-3">
                    <ul className="text-white iconosRedes mt-6 ">
                        <li>
                            <a href="https://www.linkedin.com/in/santiago-padilla-800173235/" target="_blank"><i class="fab fa-linkedin-in icon"></i></a></li>
                        <li>
                            <a href="https://github.com/SantyPadilla51" target="_blank"><i class="fab fa-github icon" ></i></a></li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Main