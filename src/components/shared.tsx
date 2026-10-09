import { Star } from "lucide-react";

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="t-display text-[18px] uppercase tracking-[0.18em] text-[#f3274c]">
      {children}
    </p>
  );
}

export function Stars() {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={14} className="fill-[#ffc222] text-[#ffc222]" />
      ))}
    </div>
  );
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="t-display text-[44px] leading-[1.1] md:text-[60px]">{children}</h2>;
}
