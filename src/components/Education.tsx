import Reveal from "@/components/Reveal";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(black_1px,transparent_1px),linear-gradient(90deg,black_1px,transparent_1px)] [background-size:80px_80px]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="mb-16">
            <span className="mb-6 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.35em] text-grey">
              <span className="h-px w-10 bg-black" />
              Education &amp; Qualifications
            </span>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Education
            </h2>
          </div>
        </Reveal>

        <div className="border border-light-grey bg-off-white">
          {education.map((entry, index) => (
            <Reveal key={entry.institution} delay={(index % 3) + 1}>
              <div
                className={`group grid grid-cols-1 gap-3 bg-white p-6 transition-colors duration-500 hover:bg-white/0 sm:grid-cols-[80px_minmax(0,1fr)_auto] sm:items-start sm:gap-8 sm:p-8 ${
                  index < education.length - 1 ? "border-b border-light-grey" : ""
                }`}
              >
                <span className="text-3xl font-bold tabular-nums text-light-grey transition-colors duration-500 group-hover:text-black sm:text-4xl">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <h3 className="text-xl font-bold tracking-tight sm:text-2xl">
                    {entry.qualification}
                  </h3>
                  <p className="mt-1.5 text-base font-semibold text-dark-grey">
                    {entry.institution}
                  </p>
                  {(entry.specialization || entry.description) && (
                    <p className="mt-3 text-sm leading-relaxed text-grey">
                      {entry.specialization || entry.description}
                    </p>
                  )}
                </div>

                <div className="flex flex-col items-start gap-2 sm:items-end">
                  <span className="inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.25em] text-grey">
                    <span className="h-px w-6 bg-light-grey" />
                    {entry.period}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}