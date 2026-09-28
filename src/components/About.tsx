import Image from "next/image";
import { Check } from "lucide-react";
import Reveal from "@/components/Reveal";
import { siteData } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="bg-off-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <div className="space-y-6 lg:sticky lg:top-28">
              <div className="relative">
                <div className="absolute -left-4 -top-4 h-full w-full border border-black/15" />
                <div className="group relative aspect-[3/4] overflow-hidden bg-dark-grey transition-shadow duration-500 hover:shadow-[0_28px_80px_rgba(0,0,0,0.18)]">
                  <Image
                    src="/images/about.jpg"
                    alt={`Portrait of ${siteData.lawyer.name}`}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col justify-center">
            <Reveal>
              <span className="mb-6 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.35em] text-grey">
                <span className="h-px w-10 bg-black" />
                About the Advocate
              </span>
            </Reveal>

            <Reveal delay={1}>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                {siteData.lawyer.name}
              </h2>
            </Reveal>

            <Reveal delay={2}>
              <p className="mt-8 text-base leading-relaxed text-grey sm:text-lg">
                A dedicated advocate with a strong foundation in law,
                committed to providing clear, strategic, and effective legal
                representation. With extensive experience across civil,
                family, matrimonial, and consumer matters, every client
                receives thorough case preparation and honest counsel.
              </p>
            </Reveal>

            <Reveal delay={3}>
              <p className="mt-6 text-base leading-relaxed text-grey sm:text-lg">
                Holding a Master of Laws with a specialization in Banking,
                Corporate, Finance and Securities Law, I bring both academic
                depth and practical courtroom expertise to every matter
                handled.
              </p>
            </Reveal>

            <Reveal delay={4}>
              <div className="mt-10 grid grid-cols-2 gap-px bg-light-grey">
                <div className="bg-white p-6">
                  <p className="text-3xl font-bold tracking-tight">10+</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-grey">
                    Years of Advocacy
                  </p>
                </div>
                <div className="bg-white p-6">
                  <p className="text-3xl font-bold tracking-tight">3</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-grey">
                    Practice Associations
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={5}>
              <div className="mt-12 border-t border-light-grey pt-8">
                <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-black">
                  Areas of Practice
                </h3>
                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {[
                    "Civil Litigation",
                    "Family & Matrimonial Law",
                    "Drafting & Registration",
                    "Consumer Rights",
                    "Bail Matters",
                    "Property & Wills",
                  ].map((area) => (
                    <div
                      key={area}
                      className="flex items-center gap-3 text-sm text-dark-grey"
                    >
                      <Check className="h-4 w-4 shrink-0 text-black" strokeWidth={2} />
                      {area}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}