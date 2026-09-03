import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import MenuSection from '@/components/MenuSection';
import CustomCakes from '@/components/CustomCakes';
import Gallery from '@/components/Gallery';
import WhyChooseUs from '@/components/WhyChooseUs';
import Occasions from '@/components/Occasions';
import Testimonials from '@/components/Testimonials';
import InstagramSection from '@/components/InstagramSection';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

function App() {
  return (
    <div className="min-h-screen bg-cream-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <MenuSection />
        <CustomCakes />
        <Gallery />
        <WhyChooseUs />
        <Occasions />
        <Testimonials />
        <InstagramSection />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
