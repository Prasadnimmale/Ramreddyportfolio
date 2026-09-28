import Image from "next/image";
import { siteData } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white pt-20 lg:pt-0"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(black_1px,transparent_1px),linear-gradient(90deg,black_1px,transparent_1px)] [background-size:80px_80px]" />
      <div className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-8 lg:py-0">
        <div className="flex flex-col items-start">
          <span className="mb-6 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.35em] text-grey animate-fade-up">
            <span className="h-px w-10 bg-black" />
            {siteData.lawyer.title}
          </span>

          <h1 className="max-w-xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl animate-fade-up [animation-delay:150ms]">
            {siteData.lawyer.name}
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-grey sm:text-lg animate-fade-up [animation-delay:300ms]">
            {siteData.lawyer.introduction}
          </p>

          <p className="mt-6 max-w-lg border-l-2 border-black pl-5 text-sm leading-relaxed text-dark-grey animate-fade-up [animation-delay:450ms]">
            {siteData.lawyer.statement}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center animate-fade-up [animation-delay:600ms]">
            <a
              href="#contact"
              className="group inline-flex h-13 items-center justify-center gap-2 bg-black px-8 text-sm font-medium tracking-wide text-white shadow-[6px_6px_0_0_rgba(0,0,0,0.15)] transition-all duration-300 hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-dark-grey hover:shadow-[3px_3px_0_0_rgba(0,0,0,0.15)]"
            >
              Let&apos;s Connect
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#practice-areas"
              className="inline-flex h-13 items-center justify-center gap-2 border border-black px-8 text-sm font-medium tracking-wide text-black transition-colors duration-300 hover:bg-black hover:text-white"
            >
              Practice Areas
            </a>
          </div>
        </div>

        <div className="relative animate-fade-up [animation-delay:250ms]">
          <div className="relative mx-auto aspect-[2/3] max-w-[13rem] overflow-hidden bg-[radial-gradient(ellipse_at_center,rgba(17,17,17,0.10)_0%,rgba(255,255,255,0)_70%)] lg:max-w-sm">
            <Image
              src="/images/hero.png"
              alt={`${siteData.lawyer.name} — ${siteData.lawyer.title}`}
              fill
              priority
              sizes="(max-width: 640px) 80vw, (max-width: 1024px) 42vw, 40vw"
              className="object-contain object-center animate-kenburns"
            />
          </div>
        </div>
      </div>
    </section>
  );
}