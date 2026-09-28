import {
  FileText,
  Scale,
  Users,
  Heart,
  ShieldCheck,
  Landmark,
  Gavel,
  ClipboardList,
  Info,
  ScrollText,
  Unlock,
  Banknote,
  Baby,
  Building2,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import { practiceAreas } from "@/lib/data";

const iconMap = {
  FileText,
  Scale,
  Users,
  Heart,
  ShieldCheck,
  Landmark,
  Gavel,
  ClipboardList,
  Info,
  ScrollText,
  Unlock,
  Banknote,
  Baby,
  Building2,
} as const;

export default function PracticeAreas() {
  return (
    <section
      id="practice-areas"
      className="relative overflow-hidden bg-white py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(black_1px,transparent_1px),linear-gradient(90deg,black_1px,transparent_1px)] [background-size:80px_80px]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="mb-16">
            <span className="mb-6 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.35em] text-grey">
              <span className="h-px w-10 bg-black" />
              Practice Areas
            </span>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Legal Services
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-grey sm:text-lg">
              Comprehensive legal support across civil, family, and
              administrative matters with focused, diligent representation.
              From drafting and registration of documents to litigation,
              divorce and matrimonial proceedings, child custody, consumer
              disputes, property matters, bail applications, cheque bounce
              cases, RTI petitions and wills — every enquiry is handled with
              care and confidentiality, guided by clear and practical legal
              counsel at every stage.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-x-6 gap-y-0 sm:grid-cols-2 sm:gap-x-8">
          {practiceAreas.map((area, index) => {
            const Icon = iconMap[area.icon as keyof typeof iconMap];
            return (
              <Reveal key={area.title} delay={(index % 3) + 1}>
                <div
                  className={`group flex items-center justify-between gap-3 border-b border-light-grey py-5 transition-all duration-500 hover:border-black ${
                    index % 2 === 1 ? "sm:border-l sm:pl-8" : ""
                  }`}
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <span className="w-8 shrink-0 text-[11px] font-medium tabular-nums text-light-grey transition-colors duration-500 group-hover:text-black">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <Icon
                      className="h-5 w-5 shrink-0 text-black"
                      strokeWidth={1.25}
                    />
                    <h3 className="text-base font-semibold tracking-tight sm:text-lg">
                      {area.title}
                    </h3>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={3}>
          <a
            href="#contact"
            className="group mt-10 inline-flex items-center gap-2 bg-black px-8 py-3.5 text-sm font-medium tracking-wide text-white shadow-[6px_6px_0_0_rgba(0,0,0,0.15)] transition-all duration-300 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[3px_3px_0_0_rgba(0,0,0,0.15)]"
          >
            Have a legal matter? Get in touch
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}