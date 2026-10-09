import { ArrowRight, Calendar } from "lucide-react";
import { gallery, news } from "../data/content";
import { SectionTitle } from "./shared";

export function News() {
  return (
    <section className="mx-auto max-w-[1330px] px-5 py-20 text-center">
      <SectionTitle>Recent News</SectionTitle>
      <div className="mt-10 grid gap-6 text-left md:grid-cols-2">
        {news.map((n) => (
          <article key={n.title} className="flex gap-6 rounded-[24px] border border-black/5 bg-white p-5">
            <img src={n.img} alt={n.title} className="h-[220px] w-[200px] shrink-0 rounded-2xl object-cover" loading="lazy" />
            <div className="py-2">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#f5f8fd] t-display px-4 py-1.5 text-[15px] text-[#616161]">
                <Calendar size={13} /> {n.date}
              </span>
              <h3 className="t-display mt-3 text-[30px] leading-snug">{n.title}</h3>
              <p className="t-display mt-3 text-[16px] text-[#616161]">{n.author}</p>
              <span className="mt-4 inline-flex items-center t-display gap-2 text-[16px] text-[#f3274c]">
                Read More <ArrowRight size={15} />
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Gallery() {
  return (
    <section className="mx-auto max-w-[1330px] px-5 pb-20 text-center">
      <p className="t-display text-[50px]">Follow @shawonetc3</p>
      <p className="mt-2 text-[18px] text-[#616161]">Join our community to inspire your desires</p>
      <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
        {gallery.map((src) => (
          <img key={src} src={src} alt="" className="h-56 w-full rounded-2xl object-cover" loading="lazy" />
        ))}
      </div>
    </section>
  );
}
