// src/components/hero-bg.tsx
export default function HeroBG({
  ratio = "21 / 9",
  className = "",
  children,
}: {
  ratio?: string;          // "16 / 9" | "21 / 9" | "4 / 3" ...
  className?: string;      // ekstra Tailwind sınıfları
  children?: React.ReactNode;
}) {
  return (
    <section
      className={`bg-hero ${className}`}
      style={{ aspectRatio: ratio }}
    >
      {/* İçerik hizalama (isteğe bağlı) */}
      <div className="relative z-10 flex h-full w-full items-center justify-center p-6">
        {children}
      </div>
    </section>
  );
}
