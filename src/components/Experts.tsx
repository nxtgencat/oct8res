import { Facebook, Instagram, Twitter } from "lucide-react";
import { experts } from "../data/content";
import { SectionTitle } from "./shared";

export default function Experts() {
  return (
    <section className="mx-auto max-w-[1330px] px-5 py-20 text-center">
      <SectionTitle>Meet Our Experts</SectionTitle>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {experts.map((c) => (
          <article key={c.name} className="rounded-[28px] border border-black/5 bg-white p-6">
            <img src={c.img} alt={c.name} className="mx-auto h-[380px] w-full rounded-[20px] object-cover object-top" loading="lazy" />
            <span className="relative mx-auto -mt-5 block w-fit t-display rounded-full bg-[#f3274c] px-5 py-1.5 text-[18px] text-white">
              {c.role}
            </span>
            <h3 className="t-display mt-4 text-[35px]">{c.name}</h3>
            <div className="mt-3 flex justify-center gap-3 text-[#616161]">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <span key={i} className="grid h-9 w-9 place-items-center rounded-full bg-[#f5f8fd]"><Icon size={15} /></span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
