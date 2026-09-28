export default function Logo({
  className = "",
}: {
  className?: string;
}) {
  return (
    <span
      className={`relative flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-[#0a0a0a] to-[#2d2d2d] shadow-[0_4px_12px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.1)] ring-1 ring-white/25 ${className}`}
      role="img"
      aria-label="Medapati Rama Reddy — MR monogram"
    >
      <span className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.12),transparent_60%)]" />
      <span className="relative z-10 bg-gradient-to-b from-white via-white to-white/70 bg-clip-text text-[11px] font-bold tracking-[0.08em] text-transparent drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
        MR
      </span>
    </span>
  );
}
