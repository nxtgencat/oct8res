import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import Hero from "../components/Hero";
import About from "../components/About";
import BbqMenu from "../components/BbqMenu";
import MenuPromos from "../components/MenuPromos";
import Reservation from "../components/Reservation";
import FeaturedDishes from "../components/FeaturedDishes";
import Testimonials from "../components/Testimonials";
import Experts from "../components/Experts";
import AppDownload from "../components/AppDownload";
import { Gallery, News } from "../components/News";

export default function Home() {
  return (
    <div id="top" className="t-body bg-white text-[#212121]">
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <BbqMenu />
        <MenuPromos />
        <Reservation />
        <FeaturedDishes />
        <Testimonials />
        <Experts />
        <AppDownload />
        <News />
        <Gallery />
      </main>
      <SiteFooter />
    </div>
  );
}
