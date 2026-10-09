import { ShoppingBag } from "lucide-react";
import { navLinks } from "../data/content";

export default function SiteHeader() {
  return (
    <header className="bg-white">
      <div className="mx-auto flex h-[92px] max-w-[1330px] items-center justify-between gap-6 px-5">
        <img src="/images/logo.png" alt="TesteNest" className="h-[54px]" />
        <nav className="t-eyebrow hidden items-center gap-8 text-[18px] font-medium text-[#212121] lg:flex">
          {navLinks.map((l, i) => (
            <a key={l} href="#top" className={i === 0 ? "text-[#f3274c]" : "hover:text-[#f3274c]"}>
              {l}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <span className="relative grid h-11 w-11 place-items-center rounded-full bg-[#f5f8fd]">
            <ShoppingBag size={19} />
            <span className="t-eyebrow absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-[#f3274c] text-[12px] text-white">
              2
            </span>
          </span>
          <a href="#reserve" className="t-eyebrow rounded-full bg-[#ffd40d] px-7 py-3 text-[17px] font-semibold text-[#212121]">
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
}
