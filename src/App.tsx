import "./App.css"; 
import {Hero} from "./components/Hero";
import Navbar from "./components/navbar";
import {Combo} from "./components/combo";
import Pedidos from "./components/pedidos";
import AvailableOn from "./components/availableon";
import Location from "./components/location";
import Testimonials from "./components/testmonials";
import KingsSection from "./components/reyes";
import FAQSection from "./components/faq";
import ParallaxSection from "./components/parallax";
import Menu from "./components/menu";


function App() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <section className="h-screen w-full bg-white flex items-center justify-center text-black text-4xl font-bold">
        <Hero />
      </section>
      <section className="h-screen w-full bg-white flex items-center justify-center text-black text-4xl font-bold">
        <Combo />
      </section>
      <section >
        <Menu />
      </section>
      <section className="h-screen w-full bg-white flex items-center justify-center text-black text-4xl font-bold">
        Cupones
      </section>
      <section className="h-screen w-full bg-white flex items-center justify-center text-black text-4xl font-bold">
        <Pedidos />
      </section>
      <section className="h-screen w-full bg-white flex items-center justify-center text-black text-4xl font-bold">
        <AvailableOn />
      </section>
      <section className="h-screen w-full bg-white flex items-center justify-center text-black text-4xl font-bold">
        <Location />
      </section>
      <section className="h-screen w-full bg-white flex items-center justify-center text-black text-4xl font-bold">
      <Testimonials />
      </section>
      <section className="h-screen w-full bg-white flex items-center justify-center text-black text-4xl font-bold">
      <KingsSection />
      </section>
      <section className="">
      <ParallaxSection />
      </section>
      <section className="h-screen w-full bg-white flex items-center justify-center text-black text-4xl font-bold">
        <FAQSection />
      </section>
      
      <footer>
      </footer>
    </div>
  );
}

export default App;