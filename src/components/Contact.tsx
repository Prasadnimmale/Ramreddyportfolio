import Reveal from "@/components/Reveal";
import { siteData } from "@/lib/data";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.23 8.23 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24a8.2 8.2 0 0 1 8.24 8.24c0 4.54-3.7 8.24-8.24 8.24zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.17.24-.64.8-.78.97-.14.16-.29.18-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.6.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.29z" />
    </svg>
  );
}

export default function Contact() {
  const whatsappNumber = `91${siteData.office.phone
    .replace(/[\s-]/g, "")
    .slice(-10)}`;
  const waLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hello, I would like to discuss a legal matter."
  )}`;

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white py-24 text-black sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(black_1px,transparent_1px),linear-gradient(90deg,black_1px,transparent_1px)] [background-size:80px_80px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <Reveal>
              <span className="mb-6 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.35em] text-grey">
                <span className="h-px w-10 bg-black" />
                Contact
              </span>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Let&apos;s Connect
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-grey">
                Chat directly on WhatsApp for quick, confidential guidance on
                any legal matter.
              </p>
            </Reveal>
          </div>

          <Reveal delay={1}>
            <div className="border border-light-grey bg-off-white p-8 sm:p-12">
              <h3 className="text-2xl font-bold tracking-tight text-black">
                Need Legal Consultation?
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-grey">
                Tap the button below to start a WhatsApp chat. Your message is
                received directly.
              </p>

              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 inline-flex w-full items-center justify-center gap-2.5 bg-[#25D366] px-6 py-4 text-sm font-semibold tracking-wide text-black transition-all duration-300 hover:bg-[#1fbd5b] sm:w-auto"
              >
                <WhatsAppIcon className="h-4.5 w-4.5" />
                Chat on WhatsApp
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}