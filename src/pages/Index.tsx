
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Work />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-gray-500 font-inter">
              © 2024 Neha Ayyagari. Crafted with care and attention to detail.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
