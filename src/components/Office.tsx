import Image from "next/image";
import { Clock, MapPin, type LucideIcon } from "lucide-react";
import Reveal from "@/components/Reveal";
import { siteData } from "@/lib/data";

function InfoSection({
  icon: Icon,
  title,
  delay,
  children,
}: {
  icon: LucideIcon;
  title: string;
  delay: number;
  children: React.ReactNode;
}) {
  return (
    <Reveal delay={delay}>
      <div>
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center text-[black]">
            <Icon className="h-5 w-5" strokeWidth={1.5} />
          </span>
          <h3 className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[black]">
            {title}
          </h3>
        </div>
        <div className="ml-[2.25rem] mt-4 border-t border-[black]/25" />
        <div className="ml-[2.25rem] mt-5 space-y-3">{children}</div>
      </div>
    </Reveal>
  );
}

const label =
  "text-[10px] font-medium uppercase tracking-[0.22em] text-[black]/70";

export default function Office() {
  return (
    <section
      id="office"
      className="font-google-sans relative overflow-hidden bg-white py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_10%_15%,rgba(0,0,0,0.03),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_90%_90%,rgba(0,0,0,0.02),transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="mb-14">
            <span className="mb-6 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.35em] text-[black]">
              <span className="h-px w-10 bg-[black]/70" />
              Office &amp; Contact
            </span>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Office &amp; Contact
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-dark-grey">
              Visit the office or get in touch for professional legal assistance.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start lg:gap-x-[50px] lg:gap-y-0">

          {/* ── LEFT: image (no Reveal — always visible) ── */}
          <div className="flex flex-col">
            <div className="group relative overflow-hidden rounded-2xl border border-[black]/40 shadow-[0_20px_60px_rgba(0,0,0,0.14)] transition-shadow duration-500 hover:shadow-[0_28px_80px_rgba(0,0,0,0.22)]">
              <div className="relative w-full overflow-hidden lg:min-h-[900px]">
                <Image
                  src="/images/office-1.jpeg"
                  alt={`${siteData.office.name} — office chambers`}
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>
            </div>
          </div>

          {/* ── RIGHT: info sections ── */}
          <div className="flex flex-col justify-center space-y-10 pt-2 lg:pt-0">
            <InfoSection icon={MapPin} title="Address & Directions" delay={1}>
              <dl className="divide-y divide-[black]/10 overflow-hidden rounded-2xl border border-[black]/15 bg-off-white">
                <div className="p-4 sm:p-5">
                  <dt className={label}>Office Location</dt>
                  <dd className="mt-1.5 leading-relaxed text-dark-grey">
                    {siteData.office.address}
                  </dd>
                </div>
                <div className="p-4 sm:p-5">
                  <dt className={label}>Landmarks</dt>
                  <dd className="mt-1.5 leading-relaxed text-dark-grey">
                    {siteData.office.landmarks}
                  </dd>
                </div>
                <div className="p-4 sm:p-5">
                  <dt className={label}>Area</dt>
                  <dd className="mt-1.5 leading-relaxed text-dark-grey">
                    {siteData.office.city}
                  </dd>
                </div>
              </dl>
            </InfoSection>

            <InfoSection icon={Clock} title="Working Hours" delay={2}>
              <dl className="divide-y divide-[black]/10 overflow-hidden rounded-2xl border border-[black]/15 bg-off-white">
                <div className="flex items-center justify-between gap-4 p-4 sm:p-5">
                  <dt className="font-medium text-dark-grey">
                    Monday – Saturday
                  </dt>
                  <dd className="shrink-0 font-semibold text-[black]">
                    {siteData.office.hours.week}
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-4 p-4 sm:p-5">
                  <dt className="font-medium text-dark-grey">Sunday</dt>
                  <dd className="shrink-0 font-semibold text-[black]">
                    {siteData.office.hours.sunday}
                  </dd>
                </div>
              </dl>
              <div className="mt-4 overflow-hidden rounded-2xl border border-[black]/15">
                <iframe
                  title="Office Location — Google Maps"
                  src="https://www.google.com/maps?q=D+No+23-7-7%2F1,+Duggiralavari+Street,+Kakinada+Bazaar,+Kakinada+533001,+Andhra+Pradesh,+India&output=embed"
                  className="h-56 w-full sm:h-64"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </InfoSection>
          </div>
        </div>
      </div>
    </section>
  );
}