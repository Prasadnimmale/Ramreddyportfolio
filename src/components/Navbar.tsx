"use client";

import { useEffect, useState } from "react";
import Logo from "@/components/Logo";
import { siteData } from "@/lib/data";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-black transition-all duration-500 ${
        isScrolled
          ? "border-b border-white/10 shadow-[0_1px_20px_rgba(0,0,0,0.25)]"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <a
          href="#home"
          className="group flex items-center gap-3"
          onClick={handleLinkClick}
          aria-label="Home"
        >
          <span className="transition-transform duration-300 group-hover:scale-105">
            <Logo className="h-10 w-10" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-[15px] font-semibold tracking-tight text-white">
              {siteData.lawyer.name}
            </span>
            <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.30em] text-white/50">
              {siteData.lawyer.title}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {siteData.navigation.map((item) => {
            const isContact = item.href === "#contact";
            return isContact ? (
              <a
                key={item.href}
                href={item.href}
                className="inline-flex items-center gap-2 border border-white bg-white px-5 py-2 text-[13px] font-medium tracking-wide text-black transition-colors duration-300 hover:bg-black hover:text-white"
              >
                {item.label}
              </a>
            ) : (
              <a
                key={item.href}
                href={item.href}
                className="group relative py-2 text-[13px] font-medium tracking-wide text-white/70 transition-colors duration-300 hover:text-white"
              >
                {item.label}
                <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-white transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center border border-white/30 text-white transition-colors duration-300 hover:border-white lg:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          <div className="flex w-5 flex-col items-center gap-[5px]">
            <span
              className={`h-px bg-white transition-all duration-300 ${isOpen ? "w-5 translate-y-[6px] rotate-45" : "w-5"}`}
            />
            <span
              className={`h-px bg-white transition-all duration-300 ${isOpen ? "w-5 opacity-0" : "w-5"}`}
            />
            <span
              className={`h-px bg-white transition-all duration-300 ${isOpen ? "w-5 -translate-y-[6px] -rotate-45" : "w-5"}`}
            />
          </div>
        </button>
      </div>

      <div
        className={`fixed inset-x-0 top-20 bottom-0 z-40 bg-white transition-all duration-300 lg:hidden ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav
          className="flex h-full flex-col justify-between px-6 pb-10 pt-8"
          aria-label="Mobile"
        >
          <div className="flex flex-col">
            {siteData.navigation.map((item) => {
              const isContact = item.href === "#contact";
              return isContact ? (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleLinkClick}
                  className="mt-4 inline-flex items-center justify-center gap-2 border border-black bg-black py-3 text-center text-lg font-medium tracking-tight text-white transition-colors duration-300 hover:bg-white hover:text-black"
                >
                  {item.label}
                </a>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleLinkClick}
                  className="flex items-center justify-between border-b border-light-grey py-4 pl-4 text-lg font-medium tracking-tight text-black transition-all duration-300 hover:bg-off-white hover:pl-6 active:bg-off-white"
                >
                  {item.label}
                  <span className="text-xs text-grey">↗</span>
                </a>
              );
            })}
          </div>
          <div className="flex flex-col gap-2 text-sm text-grey">
            <span>{siteData.office.phone}</span>
            {siteData.office.email && (
              <span>{siteData.office.email}</span>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}