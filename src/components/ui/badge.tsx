// components/ui/badge.tsx
export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <div
      className=" [background:var(--badge-bg)] [color:var(--badge-text)]
        inline-flex items-center justify-center rounded-xl px-6 py-2 text-sm font-medium shadow-sm
        transition-colors
      "
      style={{
        background: "var(--badge-bg)",
        color: "var(--badge-text)",
      }}
    >
      {children}
    </div>
  );
}
