import Image from "next/image";
import { MapPin } from "lucide-react";
import Reveal from "@/components/Reveal";
import { experience, siteData } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="bg-off-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(300px,0.8fr)] lg:items-start lg:gap-16">
          {/* ── LEFT: heading + records ── */}
          <div>
            <Reveal>
              <div className="mb-16">
                <span className="mb-6 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.35em] text-grey">
                  <span className="h-px w-10 bg-black" />
                  Professional Experience
                </span>
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                  Experience
                </h2>
              </div>
            </Reveal>

            <div className="border border-light-grey bg-white">
              {experience.map((entry, index) => (
                <Reveal
                  key={`${entry.organization}-${index}`}
                  delay={(index % 3) + 1}
                >
                  <div
                    className={`group grid grid-cols-1 gap-3 p-6 transition-colors duration-500 hover:bg-off-white sm:grid-cols-[80px_minmax(0,1fr)_auto] sm:items-start sm:gap-8 sm:p-8 ${
                      index < experience.length - 1
                        ? "border-b border-light-grey"
                        : ""
                    }`}
                  >
                    <span className="text-3xl font-bold tabular-nums text-light-grey transition-colors duration-500 group-hover:text-black sm:text-4xl">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <h3 className="text-xl font-bold tracking-tight sm:text-2xl">
                        {entry.position}
                      </h3>
                      <p className="mt-1.5 text-base font-semibold text-dark-grey">
                        {entry.organization}
                      </p>
                      <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-grey">
                        <span className="inline-flex items-center border border-black px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.18em] text-black">
                          {entry.employment}
                        </span>
                        {entry.location && (
                          <span className="flex items-center gap-2">
                            <MapPin
                              className="h-3.5 w-3.5 shrink-0"
                              strokeWidth={1.5}
                            />
                            {entry.location}
                          </span>
                        )}
                        {entry.workMode && (
                          <span className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-black" />
                            {entry.workMode}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="sm:text-right">
                      <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-grey">
                        <span className="h-px w-6 bg-light-grey" />
                        {entry.period}
                      </span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* ── RIGHT: lawyer photograph (blends into section bg) ── */}
          <Reveal delay={1}>
            <div className="relative mx-auto w-full max-w-[360px] lg:mx-0 lg:max-w-none lg:sticky lg:top-28">
              <div className="relative aspect-[1028/1530] w-full bg-off-white lg:aspect-auto lg:min-h-[760px]">
                <Image
                  src="/images/lawer-sir.png"
                  alt={`${siteData.lawyer.name} — ${siteData.lawyer.title}`}
                  fill
                  sizes="(max-width: 1024px) 80vw, 35vw"
                  className="object-contain object-bottom mix-blend-multiply"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}