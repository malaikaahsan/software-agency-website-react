import { Routes, Route } from "react-router-dom";

import SiteHeader from "./components/SiteHeader";
import Hero from "./components/Hero";
import Services from "./components/Services";
import FeaturedGames from "./components/FeaturedGames";
import WhyMes from "./components/WhyMes";
import Team from "./components/Team";
import Studio from "./components/Studio";
import CareersCTA from "./components/CareersCTA";
import Contact from "./components/Contact";
import SiteFooter from "./components/SiteFooter";

import Privacy from "./pages/privacy";


function Home() {
  return (
    <>
      <main>
        <Hero />
        <Services />
        <FeaturedGames />
        <WhyMes />
        <Team />
        <Studio/>
        <CareersCTA />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
       <SiteHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-terms" element={<Privacy />} />
      </Routes>
    </div>
  );
}

