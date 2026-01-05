import Hero from "@/components/Hero";
import ValueProps from "@/components/ValueProps";
import FeaturePreviews from "@/components/FeaturePreviews";
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
        <FeaturePreviews />
        <WaitlistForm />
        <Footer />
      </div>
    </main>
  );
}
