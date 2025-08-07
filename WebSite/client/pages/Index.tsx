import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Achievements from "../components/Achievements";
import Testimonials from "../components/Testimonials";
import Clients from "../components/Clients";
import Blog from "../components/Blog";
import Contact from "../components/Contact";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Achievements />
      <Testimonials />
      <Clients />
      <Blog />
      <Contact />
    </div>
  );
}
