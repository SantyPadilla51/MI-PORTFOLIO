import { useEffect, useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [resolucion, setResolucion] = useState(window.innerWidth);

  const handleMenu = () => {
    setMenu(!menu);
  };

  const handleResize = () => {
    setResolucion(window.innerWidth);
  };

  const handleBtnFlotante = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleEnlace = (e, targetId) => {
    e.preventDefault();

    const targetElement = document.getElementById(targetId);
    console.log(targetId);

    if (targetElement) {
      const offsetPosition = targetElement.offsetTop - 100;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {resolucion < 1400 ? (
        <>
          <nav className="navbar fixed top-0 flex bg-black items-center justify-evenly w-full">
            <h1 className="text-white p-5 font-semibold">Porfolio</h1>
            <p>
              <i
                className="fa fa-bars icon text-white text-2xl"
                onClick={handleMenu}
              ></i>
            </p>
          </nav>
          <button
            className="btnFlotante bg-black text-white"
            onClick={handleBtnFlotante}
          >
            <i className="fa fa-arrow-up"></i>
          </button>
          {menu && (
            <div className="menuDesplegable menuAnimacion absolute">
              <ul>
                <li>
                  <a
                    href="#Main"
                    className="uppercase font-light"
                    onClick={(e) => handleEnlace(e, "Main")}
                  >
                    Santiago Padilla
                  </a>
                </li>
                <li>
                  <a
                    href="#SobreMi"
                    className="uppercase font-light"
                    onClick={(e) => handleEnlace(e, "SobreMi")}
                  >
                    Sobre mi
                  </a>
                </li>
                <li>
                  <a
                    href="#Porfolio"
                    className="uppercase font-light"
                    onClick={(e) => handleEnlace(e, "Porfolio")}
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="#Educacion"
                    className="uppercase font-light"
                    onClick={(e) => handleEnlace(e, "Educacion")}
                  >
                    Educacion
                  </a>
                </li>
                <li>
                  <a
                    href="#Skills"
                    className="uppercase font-light"
                    onClick={(e) => handleEnlace(e, "Skills")}
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#Contacto"
                    className="uppercase font-light"
                    onClick={(e) => handleEnlace(e, "Contacto")}
                  >
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
          )}
        </>
      ) : (
        <nav>
          <div className="enlaces bg-black items-center text-center p-5">
            <ul>
              <li>
                <a
                  href="Main"
                  className="uppercase font-light"
                  onClick={(e) => handleEnlace(e, "Main")}
                >
                  Santiago Padilla
                </a>
              </li>
              <li>
                <a
                  href="SobreMi"
                  className="uppercase font-light"
                  onClick={(e) => handleEnlace(e, "SobreMi")}
                >
                  Sobre mi
                </a>
              </li>
              <li>
                <a
                  href="Porfolio"
                  className="uppercase font-light"
                  onClick={(e) => handleEnlace(e, "Porfolio")}
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="Skills"
                  className="uppercase font-light"
                  onClick={(e) => handleEnlace(e, "Skills")}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="Educacion"
                  className="uppercase font-light"
                  onClick={(e) => handleEnlace(e, "Educacion")}
                >
                  Educacion
                </a>
              </li>
              <li>
                <a
                  href="Contacto"
                  className="uppercase font-light"
                  onClick={(e) => handleEnlace(e, "Contacto")}
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          <button
            className="btnFlotante bg-black text-white"
            onClick={handleBtnFlotante}
          >
            <i className="fa fa-arrow-up"></i>
          </button>
        </nav>
      )}
    </>
  );
};

export default Navbar;
