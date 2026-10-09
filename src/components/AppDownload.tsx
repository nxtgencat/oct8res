import { Check, Play, Plus } from "lucide-react";
import { appPoints } from "../data/content";
import { Eyebrow } from "./shared";

export default function AppDownload() {
  return (
    <section className="bg-[#f3274c]">
      <div className="mx-auto grid max-w-[1330px] items-center gap-10 px-5 py-14 lg:grid-cols-2">
        <div className="text-white">
          <Eyebrow><span className="text-white/85">Best App For Foods Ordering</span></Eyebrow>
          <h2 className="t-display mt-3 text-[40px] leading-[1.12] md:text-[50px]">
            Manage Your Restaurant<br />Anytime! Anywhere!
          </h2>
          <ul className="mt-6 space-y-3 text-[18px]">
            {appPoints.map((p) => (
              <li key={p} className="flex items-center gap-3">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-[#ffd40d] text-[#212121]"><Check size={14} /></span>
                {p}
              </li>
            ))}
          </ul>
          <div className="mt-7 flex flex-wrap gap-4">
            <span className="flex items-center gap-2 t-display rounded-xl bg-black px-6 py-3 text-[18px]">
              <Play size={18} className="fill-white" /> Google Play
            </span>
            <span className="flex items-center gap-2 t-display rounded-xl bg-black px-6 py-3 text-[18px]">
              <Plus size={18} /> App Store
            </span>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[480px]">
          <img src="/images/app-grap.png" alt="" className="absolute -left-6 top-6 w-[130px]" />
          <img src="/images/app-phone.png" alt="App" className="mx-auto h-[440px] object-contain" />
          <img src="/images/app-food1.png" alt="" className="absolute -right-4 top-10 w-[150px] rounded-2xl" />
          <img src="/images/app-food2.png" alt="" className="absolute -right-8 bottom-10 w-[160px] rounded-2xl" />
        </div>
      </div>
    </section>
  );
}
