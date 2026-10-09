import { Quote } from "lucide-react";
import { testimonial } from "../data/content";
import { Eyebrow, Stars } from "./shared";

export default function Testimonials() {
  return (
    <section className="bg-[#f5f8fd]">
      <div className="mx-auto grid max-w-[1330px] items-center gap-12 px-5 py-20 lg:grid-cols-2">
        <div>
          <Eyebrow>{testimonial.eyebrow}</Eyebrow>
          <h2 className="t-display mt-3 text-[40px] leading-[1.12] md:text-[50px]">
            {testimonial.title[0]}<br />{testimonial.title[1]}
          </h2>
          <div className="relative mt-8 rounded-[24px] bg-white p-8 shadow-sm">
            <Quote size={36} className="fill-[#f3274c] text-[#f3274c]" />
            <p className="mt-4 text-[24px] leading-relaxed text-[#555]">{testimonial.quote}</p>
            <p className="t-display mt-5 text-[26px]">{testimonial.name}</p>
            <div className="mt-2"><Stars /></div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <img src={testimonial.imgs[0]} alt="" className="rounded-[24px] object-cover" loading="lazy" />
          <img src={testimonial.imgs[1]} alt="" className="mt-10 rounded-[24px] object-cover" loading="lazy" />
          <img src={testimonial.imgs[2]} alt="" className="col-span-2 mx-auto w-2/3 rounded-[24px] object-cover" loading="lazy" />
        </div>
      </div>
    </section>
  );
}
