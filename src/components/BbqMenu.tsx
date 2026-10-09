import { useState } from "react";
import { Plus } from "lucide-react";
import { bbqImage, bbqItems, bbqTitle, categories } from "../data/content";

export default function BbqMenu() {
  const [active, setActive] = useState("Dessert");
  return (
    <section className="bg-[#f5f8fd]">
      <div className="mx-auto max-w-[1330px] px-5 py-16">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`flex items-center gap-2 t-display rounded-full px-8 py-3.5 text-[22px] ${
                active === c ? "bg-[#f3274c] text-white" : "bg-white text-[#212121]"
              }`}
            >
              <Plus size={16} />
              {c}
            </button>
          ))}
        </div>
        <div className="mt-12 grid items-center gap-12 lg:grid-cols-2">
          <img src={bbqImage} alt="BBQ" className="mx-auto w-full max-w-[620px] rounded-[28px] object-cover" />
          <div>
            <h3 className="t-display text-[40px]">{bbqTitle}</h3>
            <ul className="mt-6 space-y-6">
              {bbqItems.map((it) => (
                <li key={it.name}>
                  <div className="flex items-baseline gap-3">
                    <p className="t-display text-[22px]">{it.name}</p>
                    <span className="mx-2 flex-1 border-b-2 border-dotted border-[#b5b5b5]" />
                    <p className="t-display text-[22px] text-[#f3274c]">{it.price}</p>
                  </div>
                  <p className="mt-1 text-[16px] text-[#616161]">{it.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
