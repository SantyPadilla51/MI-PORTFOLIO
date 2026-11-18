import { useTranslation } from "react-i18next";
import { ProjectCard } from "./ProjectCard";

const Portfolio = () => {
  const { t } = useTranslation();

  const imagesPalitaComputo = [
    "/img/palita.png",
    "/img/palita-2.png",
    "/img/palita-3.png",
    "/img/palita-4.png",
    "/img/palita-5.png",
  ];

  const imagesAdminInmo = [
    "/img/admin-inmobiliaria.png",
    "/img/admin-inmobiliaria-2.png",
    "/img/admin-inmobiliaria-3.png",
    "/img/admin-inmobiliaria-4.png",
    "/img/admin-inmobiliaria-5.png",
    "/img/admin-inmobiliaria-6.png",
  ];

  const imagesInmo = [
    "/img/inmobiliaria.png",
    "/img/inmobiliaria-2.png",
    "/img/inmobiliaria-3.png",
    "/img/inmobiliaria-4.png",
    "/img/inmobiliaria-5.png",
  ];

  const imagesDocPanel = [
    "/img/doc-panel.png",
    "/img/doc-panel-2.png",
    "/img/doc-panel-3.png",
    "/img/doc-panel-4.png",
    "/img/doc-panel-5.png",
  ];

  return (
    <>
      <div id="Porfolio" className="w-full max-w-6xl mx-auto my-16 mt-64 px-5">
        <h2 className="text-zinc-100 uppercase font-black tracking-wider text-4xl md:text-5xl border-b border-white pb-4 mb-10">
          Portfolio
        </h2>

        <div className="flex flex-col gap-4 ">
          <ProjectCard
            title={t("skills.projects.project5.title")}
            description={t("skills.projects.project5.description")}
            images={imagesPalitaComputo}
            demoUrl="https://palitacomputoclient.vercel.app/"
            githubUrl="https://github.com/SantyPadilla51/palita_computo_client"
            demoLabel={t("skills.web-btn")}
            githubLabel={t("skills.github-btn")}
            stack={[
              { name: "React", className: "bg-blue-600/30 border-blue-700" },
              {
                name: "Typescript",
                className: "bg-blue-700/60 border-blue-600",
              },
              { name: "Tailwind", className: "bg-sky-500/40 border-sky-700" },
              {
                name: "Node.js",
                className: "bg-green-700/40 border-green-700",
              },
            ]}
          />

          <ProjectCard
            title={t("skills.projects.project1.title")}
            description={t("skills.projects.project1.description")}
            images={imagesAdminInmo}
            demoUrl="https://admin-inmobiliaria-alpha.vercel.app/"
            githubUrl="https://github.com/SantyPadilla51/admin_inmobiliaria"
            demoLabel={t("skills.web-btn")}
            githubLabel={t("skills.github-btn")}
            stack={[
              { name: "React", className: "bg-blue-600/30 border-blue-700" },
              {
                name: "Typescript",
                className: "bg-blue-700/60 border-blue-600",
              },
              { name: "Tailwind", className: "bg-sky-500/40 border-sky-700" },
              {
                name: "Node.js",
                className: "bg-green-700/40 border-green-700",
              },
              {
                name: "Tanstack Query",
                className: "bg-red-700/40 border-red-700",
              },
              {
                name: "Supabase",
                className: "bg-green-800/40 border-green-800",
              },
              {
                name: "Redis",
                className: "bg-red-700/40 border-red-700",
              },
              {
                name: "Stripe",
                className: "bg-indigo-600/40 border-indigo-700",
              },
              {
                name: "Vercel",
                className: "bg-zinc-700/40 border-zinc-700",
              },
            ]}
          />

          <ProjectCard
            title={t("skills.projects.project2.title")}
            description={t("skills.projects.project2.description")}
            images={imagesInmo}
            demoUrl="https://inmobiliaria-argenta-frontend.vercel.app/"
            githubUrl="https://github.com/SantyPadilla51/Inmobiliaria-Argenta-Frontend"
            demoLabel={t("skills.web-btn")}
            githubLabel={t("skills.github-btn")}
            stack={[
              { name: "React", className: "bg-blue-600/30 border-blue-700" },
              {
                name: "Typescript",
                className: "bg-blue-700/60 border-blue-600",
              },
              { name: "Tailwind", className: "bg-sky-500/40 border-sky-700" },
              {
                name: "Node.js",
                className: "bg-green-700/40 border-green-700",
              },

              {
                name: "Supabase",
                className: "bg-green-800/40 border-green-800",
              },

              {
                name: "Vercel",
                className: "bg-zinc-700/40 border-zinc-700",
              },
            ]}
          />

          <ProjectCard
            title={t("skills.projects.project3.title")}
            description={t("skills.projects.project3.description")}
            images={imagesDocPanel}
            demoUrl="https://adm-clinica-frontend.vercel.app/"
            githubUrl="https://github.com/SantyPadilla51/ADM-CLINICA-FRONTEND"
            demoLabel={t("skills.web-btn")}
            githubLabel={t("skills.github-btn")}
            stack={[
              { name: "React", className: "bg-blue-600/30 border-blue-700" },
              {
                name: "Typescript",
                className: "bg-blue-700/60 border-blue-600",
              },
              { name: "Tailwind", className: "bg-sky-500/40 border-sky-700" },
              {
                name: "Node.js",
                className: "bg-green-700/40 border-green-700",
              },

              {
                name: "Supabase",
                className: "bg-green-800/40 border-green-800",
              },

              {
                name: "Vercel",
                className: "bg-zinc-700/40 border-zinc-700",
              },
            ]}
          />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
