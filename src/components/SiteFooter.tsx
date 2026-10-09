import { footerAboutLinks, footerMenuLinks } from "../data/content";

function FootHead({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h4 className="t-display text-[26px] text-[#212121]">{children}</h4>
      <span className="mt-1 block h-[3px] w-10 bg-[#ffd40d]" />
    </div>
  );
}

export default function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-[#f5f8fd]">
      <img src="/images/footer-left.png" alt="" className="pointer-events-none absolute bottom-0 left-0 w-[290px]" />
      <img src="/images/footer-right.png" alt="" className="pointer-events-none absolute bottom-0 right-0 w-[274px]" />
      <div className="relative mx-auto grid max-w-[1300px] gap-10 px-5 pt-[100px] md:grid-cols-[390px_1fr_1fr_1.4fr]">
        <div className="rounded-[24px] bg-[#f3274c] p-10 text-white">
          <img src="/images/logo.png" alt="TesteNest" className="h-[54px] brightness-0 invert" />
          <p className="t-display mt-8 text-[16px] leading-7">
            Tuesday – Saturday: 12:00pm – 23:00pm
            <br />
            Closed on Sunday
          </p>
          <p className="mt-16 text-[13px] font-medium text-white/90">5 star rated on TripAdvisor</p>
        </div>
        <div className="pt-[30px]">
          <FootHead>About</FootHead>
          <ul className="mt-6 space-y-3.5 text-[16px] text-[#212121]">
            {footerAboutLinks.map((l) => (
              <li key={l}>
                <a href="#top" className="hover:text-[#f3274c]"><span className="mr-2 font-bold">&gt;</span>{l}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="pt-[30px]">
          <FootHead>Menu</FootHead>
          <ul className="mt-6 space-y-3.5 text-[16px] text-[#212121]">
            {footerMenuLinks.map((l) => (
              <li key={l}>
                <a href="#top" className="hover:text-[#f3274c]"><span className="mr-2 font-bold">&gt;</span>{l}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="pt-[30px]">
          <FootHead>Newsletter</FootHead>
          <p className="mt-6 text-[16px] text-[#212121]">Get recent news and updates.</p>
          <form className="mt-4 max-w-[360px]" onSubmit={(e) => e.preventDefault()}>
            <input placeholder="Email Address" className="w-full rounded-xl bg-white px-5 py-3.5 text-[16px] outline-none placeholder:text-[#b5b5b5]" />
            <button className="mt-4 rounded-xl border-2 border-white t-display bg-[#f3274c] px-8 py-2.5 text-[16px] text-white shadow-[3px_3px_0_0_#fff]">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="relative mx-auto max-w-[1300px] px-5">
        <div className="mt-14 h-[3px] w-full bg-[#ffd40d]" />
        <div className="flex flex-wrap items-center justify-between gap-4 py-6 text-[16px] text-[#212121]">
          <p><span className="t-fugaz text-[#f3274c]">© 2025 TesteNest</span> | All shawonetc3 Themes</p>
          <div className="flex gap-10">
            <a href="#top" className="hover:text-[#f3274c]">Facebook</a>
            <a href="#top" className="hover:text-[#f3274c]">Instagram</a><a href="#top" className="hover:text-[#f3274c]">Twitter</a><a href="#top" className="hover:text-[#f3274c]">Youtube</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
