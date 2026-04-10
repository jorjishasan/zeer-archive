import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Testimonial } from "@/components/Testimonial";

function App() {
  return (
    <div className="relative w-full bg-background min-h-screen text-foreground antialiased selection:bg-foreground selection:text-background flex flex-col">
      <Navbar />
      <Hero />
      <Testimonial />
    </div>
  );
}

export default App;
