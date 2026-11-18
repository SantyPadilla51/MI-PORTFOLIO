import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

type Tech = { name: string; className: string };

type ProjectCardProps = {
  title: string;
  description: string;
  images: string[];
  stack: Tech[];
  demoUrl: string;
  githubUrl: string;
  demoLabel: string;
  githubLabel: string;
};

export function ProjectCard({
  title,
  description,
  images,
  stack,
  demoUrl,
  githubUrl,
  demoLabel,
  githubLabel,
}: ProjectCardProps) {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <>
      <article className="mt-8 w-full max-w-5xl overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 text-white shadow-xl">
        {/* Carousel a todo el ancho */}
        <Carousel opts={{ loop: true }} className="w-full">
          <CarouselContent className="ml-0">
            {images.map((src, i) => (
              <CarouselItem key={src} className="pl-0">
                <button
                  type="button"
                  onClick={() => setSelected(src)}
                  className="group relative block aspect-16/10 w-full cursor-zoom-in overflow-hidden bg-zinc-950 md:aspect-video"
                  aria-label={`Ampliar imagen ${i + 1} de ${title}`}
                >
                  <img
                    src={src}
                    alt={`${title} ${i + 1}`}
                    className="h-full w-full object-fit object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <span className="absolute bottom-3 right-3 rounded-md bg-black/60 px-2 py-1 text-xs text-zinc-200 opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                    Click para ampliar
                  </span>
                </button>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-3 border-zinc-700 bg-zinc-900/80 text-white hover:bg-zinc-800" />
          <CarouselNext className="right-3 border-zinc-700 bg-zinc-900/80 text-white hover:bg-zinc-800" />
        </Carousel>

        {/* Contenido */}
        <div className="flex flex-col gap-5 p-6 md:p-8">
          <div>
            <h2 className="mb-2 text-2xl font-bold tracking-wide text-zinc-100">
              {title}
            </h2>
            <p className="max-w-3xl text-sm leading-relaxed text-zinc-400 md:text-base">
              {description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {stack.map((tech) => (
              <span
                key={tech.name}
                className={`rounded-md border px-2.5 py-1 text-xs font-semibold tracking-wide text-zinc-300 shadow-sm ${tech.className}`}
              >
                {tech.name}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:justify-end">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg border border-zinc-700 bg-zinc-800 px-5 py-2.5 text-sm font-medium text-zinc-300 transition-all duration-200 hover:bg-zinc-700 hover:text-white active:scale-[0.98]"
            >
              <span>{githubLabel}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
              </svg>
            </a>

            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-black transition-all duration-200 hover:bg-zinc-200 active:scale-[0.98]"
            >
              <span>{demoLabel}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </a>
          </div>
        </div>
      </article>

      {/* Visor ampliado */}
      <Dialog
        open={!!selected}
        onOpenChange={(open) => !open && setSelected(null)}
      >
        <DialogContent className="max-w-[95vw] border-zinc-800 bg-zinc-950 p-2 sm:max-w-7xl">
          <DialogTitle className="sr-only">{title}</DialogTitle>
          {selected && (
            <img
              src={selected}
              alt={title}
              className="max-h-[85vh] w-full rounded-lg object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
