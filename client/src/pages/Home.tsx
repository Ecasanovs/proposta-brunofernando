import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Statistics from "@/components/Statistics";
import Awards from "@/components/Awards";
import Teams from "@/components/Teams";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-jordan-red selection:text-white">
      <Navigation />
      <main>
        <Hero />
        <Statistics />
        <Awards />
        <Teams />
      </main>
      <Footer />
    </div>
  );
}
