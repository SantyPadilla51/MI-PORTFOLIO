import { useTranslation } from "react-i18next";

export const Educacion = () => {
  const { t } = useTranslation();

  return (
    <>
      <div id="Educacion" className="w-full max-w-6xl mx-auto my-16 mt-64 px-5">
        <h2 className="text-zinc-100 uppercase font-black tracking-wider text-4xl md:text-5xl border-b border-white pb-4 mb-10">
          {t("educacion.title")}
        </h2>

        <ul className="lg:grid lg:grid-cols-3 text-white mt-14 gap-8">
          <li className="mb-16">
            <h2> {t("educacion.education-1")} </h2>
            <button className="text-black bg-white mt-2 p-3 hover:bg-slate-400">
              {t("educacion.education-1-status")}
            </button>
          </li>
          <li className="mb-16">
            <h2> {t("educacion.education-2")} </h2>
            <img
              src="/img/certificado-typescript.jpg"
              alt=""
              width="400"
              height="200"
              className="mt-4"
            />
          </li>
          <li className="mb-16">
            <h2> {t("educacion.education-3")} </h2>
            <img
              src="/img/certificado-udemy-js.jpg"
              alt=""
              width="400"
              height="200"
              className="mt-4"
            />
          </li>
          <li className="mb-10">
            <h2> {t("educacion.education-4")} </h2>
            <img
              src="/img/Certificado-Coder-House.png"
              alt=""
              width="400"
              height="200"
              className="mt-4"
            />
          </li>
        </ul>
      </div>
    </>
  );
};
