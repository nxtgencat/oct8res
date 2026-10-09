import { promos } from "../data/content";
import { SectionTitle } from "./shared";

export default function MenuPromos() {
  return (
    <section className="mx-auto max-w-[1330px] px-5 pt-16 text-center">
      <SectionTitle>Discover Menu</SectionTitle>
      <div className="mt-8 grid gap-6 text-left md:grid-cols-2">
        {promos.map((p) => (
          <article key={p.title} className="relative overflow-hidden rounded-[28px] bg-black">
            <img src={p.img} alt={p.title} className="h-[335px] w-full object-cover opacity-80" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/85 to-transparent p-7">
              <div className="text-white">
                <h3 className="t-display text-[50px]">{p.title}</h3>
                <p className="mt-1 max-w-[240px] text-[18px] text-white/75">{p.text}</p>
              </div>
              <div className="grid h-[92px] w-[92px] shrink-0 place-items-center rounded-full bg-[#ffd40d] text-center">
                <p className="t-display text-[32px] leading-tight">{p.price}<br /><span className="text-[16px]">{p.per}</span></p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
