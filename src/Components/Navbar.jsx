import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  const [menu, setMenu] = useState(false);
  const [resolucion, setResolucion] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1400,
  );

  const handleMenu = () => setMenu(!menu);

  const handleResize = () => setResolucion(window.innerWidth);

  const handleBtnFlotante = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleEnlace = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offsetPosition = targetElement.offsetTop - 100;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const enlaces = [
    { id: "Main", label: t("navbar.home") },
    { id: "SobreMi", label: t("navbar.about") },
    { id: "Porfolio", label: t("navbar.portfolio") },
    { id: "Skills", label: t("navbar.skills") },
    { id: "Educacion", label: t("navbar.education") },
    { id: "Contacto", label: t("navbar.contact") },
  ];

  const toggleLanguage = () => {
    const newLang = i18n.language === "es" ? "en" : "es";
    i18n.changeLanguage(newLang);
  };

  return (
    <>
      {resolucion < 1400 ? (
        <>
          <nav className="fixed top-0 left-0 w-full z-50 bg-zinc-950/70 backdrop-blur-md border-b border-zinc-900/80 px-6 py-4 flex items-center justify-between transition-all duration-300">
            <h1 className="text-zinc-100 font-black tracking-wider text-xl uppercase">
              San<span className="text-sky-400">.</span>Dev
            </h1>
            <button
              onClick={handleMenu}
              className="text-zinc-400 hover:text-sky-400 p-1 transition-colors focus:outline-none"
              aria-label="Abrir menú"
            >
              <i
                className={`fa ${menu ? "fa-times" : "fa-bars"} text-2xl transition-transform duration-200`}
              ></i>
            </button>
          </nav>

          {/* Menú Desplegable Móvil */}
          {menu && (
            <div className="fixed inset-x-0 top-[61px] z-40 bg-zinc-950/95 backdrop-blur-lg border-b border-zinc-900 px-6 py-8 animate-fadeIn">
              <ul className="flex flex-col gap-5">
                {enlaces.map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="block uppercase tracking-wide font-medium text-zinc-400 hover:text-sky-400 text-base transition-colors duration-200 py-1"
                      onClick={(e) => handleEnlace(e, link.id)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              {/* Botón global para cambiar el idioma */}
              <button
                onClick={toggleLanguage}
                className="mt-8 px-4 py-2 bg-zinc-800 text-white rounded-xl text-sm font-semibold hover:bg-zinc-700 transition-all border border-zinc-700"
              >
                {i18n.language === "es" ? "🇺🇸 EN" : "🇦🇷 ES"}
              </button>
            </div>
          )}
        </>
      ) : (
        <nav className="fixed top-0 left-0 w-full z-50 bg-zinc-950/70 backdrop-blur-md border-b border-zinc-900/50 px-16 py-5 flex items-center justify-between">
          <h1 className="text-zinc-100 font-black tracking-wider text-xl uppercase">
            San<span className="text-sky-400">.</span>Dev
          </h1>

          <ul className="flex items-center gap-8">
            {enlaces.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="uppercase tracking-widest font-semibold text-xs text-zinc-400 hover:text-sky-400 transition-colors duration-200 relative group py-2"
                  onClick={(e) => handleEnlace(e, link.id)}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-sky-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Botón global para cambiar el idioma */}
          <button
            onClick={toggleLanguage}
            className="px-4 py-2 bg-zinc-800 text-white rounded-xl text-sm font-semibold hover:bg-zinc-700 transition-all border border-zinc-700"
          >
            {i18n.language === "es" ? "🇺🇸 EN" : "🇦🇷 ES"}
          </button>
        </nav>
      )}

      <button
        className="fixed bottom-6 right-6 z-50 w-12 h-12 flex items-center justify-center bg-zinc-800/60 border border-zinc-700/50 text-zinc-300 rounded-xl backdrop-blur-md hover:bg-zinc-800 hover:text-sky-400 hover:border-sky-500/30 shadow-xl active:scale-90 transition-all duration-200"
        onClick={handleBtnFlotante}
        aria-label="Ir arriba"
      >
        <i className="fa fa-arrow-up text-base"></i>
      </button>
    </>
  );
};

export default Navbar;
