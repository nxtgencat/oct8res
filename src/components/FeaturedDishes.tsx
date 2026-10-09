import { ShoppingBag } from "lucide-react";
import { dishes } from "../data/content";
import { SectionTitle, Stars } from "./shared";

export default function FeaturedDishes() {
  return (
    <section className="mx-auto max-w-[1330px] px-5 py-20 text-center">
      <SectionTitle>Featured Dishes</SectionTitle>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {dishes.map((d) => (
          <article key={d.name} className="relative rounded-[28px] border border-black/5 bg-white p-6 shadow-[0_18px_45px_-20px_rgba(0,0,0,0.25)]">
            <span className="absolute left-6 top-6 rounded-full bg-[#f3274c] px-4 py-1.5 t-display text-[18px] tracking-wider text-white">
              SALE
            </span>
            <img src={d.img} alt={d.name} className="mx-auto h-48 w-48 rounded-full object-cover" loading="lazy" />
            <div className="mt-4 flex justify-center"><Stars /></div>
            <h3 className="t-display mt-3 text-[20px]">{d.name}</h3>
            <p className="mt-2 flex items-center justify-center gap-3">
              <span className="t-display text-[18px] text-[#b5b5b5] line-through">{d.old}</span>
              <span className="t-display text-[28px] text-[#f3274c]">{d.price}</span>
              <span className="grid h-10 w-10 place-items-center rounded-full bg-[#ffd40d]">
                <ShoppingBag size={17} />
              </span>
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
