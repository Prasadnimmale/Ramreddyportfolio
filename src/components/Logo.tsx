export default function Logo({
  className = "",
}: {
  className?: string;
}) {
  return (
    <span
      className={`flex items-center justify-center rounded-full font-bold leading-none tracking-tight ${className}`}
      role="img"
      aria-label="Medapati Rama Reddy — MR monogram"
    >
      MR
    </span>
  );
}