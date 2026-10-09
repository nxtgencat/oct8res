import { reserveFields } from "../data/content";

export default function Reservation() {
  return (
    <section id="reserve" className="mt-16 bg-[#f3274c]">
      <div className="mx-auto grid max-w-[1330px] items-center gap-10 px-5 py-14 lg:grid-cols-[1fr_1.4fr]">
        <div className="text-white">
          <h2 className="t-display text-[50px] leading-tight">Reserve<br />a Table</h2>
          <p className="mt-3 text-[18px] text-white/85">Discover our New Menu!</p>
        </div>
        <form className="grid gap-4 sm:grid-cols-3" onSubmit={(e) => e.preventDefault()}>
          {reserveFields.map((p) => (
            <input key={p} placeholder={p} className="rounded-xl bg-white px-5 py-3.5 text-[16px] font-semibold text-[#212121] outline-none placeholder:text-[#616161]" />
          ))}
          <button className="t-display rounded-xl bg-[#ffd40d] py-3.5 text-[18px] text-[#212121]">Submit</button>
        </form>
      </div>
    </section>
  );
}
