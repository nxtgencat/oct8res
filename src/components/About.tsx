import { about } from "../data/content";
import { Eyebrow } from "./shared";

export default function About() {
  return (
    <section className="mx-auto grid max-w-[1330px] items-center gap-12 px-5 py-20 lg:grid-cols-2">
      <div>
        <Eyebrow>{about.eyebrow}</Eyebrow>
        <h2 className="t-display mt-3 text-[40px] leading-[1.12] md:text-[50px]">
          {about.title[0]}
          <br />
          {about.title[1]}
        </h2>
        <p className="mt-5 max-w-md text-[18px] leading-8 text-[#555]">{about.text}</p>
        <div className="mt-7 flex items-center gap-4">
          <img src="/images/author.png" alt={about.name} className="h-20 w-20 rounded-full object-cover" />
          <div>
            <p className="t-display text-[30px]">{about.name}</p>
            <p className="text-[14px] text-[#616161]">{about.role}</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5">
        {about.cards.map((c) => (
          <figure key={c.label} className="overflow-hidden rounded-[24px]">
            <img src={c.img} alt={c.label} className="h-[420px] w-full object-cover" loading="lazy" />
            <figcaption className="relative mx-3 -mt-12 t-display rounded-2xl bg-[#ffd40d] py-3 text-center text-[30px]">
              {c.label}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
