import { Play } from "lucide-react";
import { hero } from "../data/content";
import { Stars } from "./shared";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black">
      <img src="/images/hero-bg.png" alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative mx-auto grid max-w-[1330px] items-center gap-10 px-5 py-20 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <h1 className="t-display text-[44px] leading-[1.1] text-white md:text-[60px]">
            {hero.titleA}
            <br />
            {hero.titleB}
          </h1>
          <p className="mt-5 max-w-md text-[20px] leading-8 text-white/70">{hero.sub}</p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <a href="#reserve" className="t-display rounded-full bg-[#f3274c] px-9 py-4 text-[18px] text-white">
              See Our Menus
            </a>
            <span className="t-display flex items-center gap-3 text-[16px] text-white">
              <span className="grid h-14 w-14 place-items-center rounded-full border border-white/40">
                <Play size={20} className="fill-white" />
              </span>
              VIDEO
            </span>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[420px]">
          <img src="/images/badge-star.png" alt="Weekly Special" className="absolute -left-8 -top-8 z-10 w-[110px]" />
          <div className="rounded-[28px] bg-white/95 p-6 text-center shadow-2xl">
            <p className="t-display text-[28px] text-[#f3274c]">{hero.price}</p>
            <p className="t-display text-[22px]">{hero.dish}</p>
            <div className="mt-2 flex justify-center"><Stars /></div>
            <img src={hero.thumb} alt={hero.dish} className="mx-auto mt-4 h-44 w-44 rounded-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
