import Hero from "@/components/Hero";
import ValueProps from "@/components/ValueProps";
import WaitlistForm from "@/components/WaitlistForm";
import Footer from "@/components/Footer";
import InteractiveBackground from "@/components/InteractiveBackground";

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      <InteractiveBackground />
      <div className="relative z-10">
        <Hero />
        <ValueProps />
        <WaitlistForm />
        <Footer />
      </div>
    </main>
  );
}
