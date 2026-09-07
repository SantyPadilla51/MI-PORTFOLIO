import { useTranslation } from "react-i18next";

const SobreMi = () => {
  const { t } = useTranslation();

  return (
    <>
      <div id="SobreMi" className="w-full max-w-6xl mx-auto my-16 mt-64 px-5">
        <h2 className="text-zinc-100 uppercase font-black tracking-wider text-4xl md:text-5xl border-b border-white pb-4">
          {t("sobre-mi.title")}
        </h2>

        <p className="text-white mt-6 text-lg leading-relaxed w-full font-normal"></p>
        <p className="text-white mt-6 text-lg leading-relaxed w-full font-normal">
          {t("sobre-mi.descripcion")}
        </p>

        <div className="mt-8">
          <a href="/img/CV.pdf" download className="inline-block">
            <button className="flex items-center gap-2 text-zinc-900 bg-zinc-100 font-semibold tracking-wide text-sm px-6 py-3.5 rounded-xl hover:bg-zinc-200 active:scale-95 transition-all duration-200 uppercase shadow-lg shadow-black/20">
              <svg
                className="w-4 h-4 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 16l-5-5h3V4h4v7h3l-5 5zm9 2H3v2h18v-2z" />
              </svg>
              {t("sobre-mi.btn")}
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default SobreMi;
