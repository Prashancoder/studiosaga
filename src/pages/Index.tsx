import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroCarousel from "@/components/HeroCarousel";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import StudiasagaDisplay from "@/components/StudiasagaDisplay";
import MediaSection from '@/components/MediaSection';
// import InstagramPost from "@/components/InstagramPost;
import ClientSection from "@/components/clients";


const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <HeroCarousel />

        {/* About Section */}
<section className="py-24 bg-[#E9E7DE] px-6">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-5xl font-extralight tracking-wide mb-8 uppercase">
              StudiaSaga is an Interior Design Firm that Believes in
              <br />
              Thoughtfully Designing Impactful Spaces.
            </h2>
            
            <div className="space-y-6 text-muted-foreground font-light leading-relaxed">
              <p>
                We are dedicated to crafting bespoke solutions that harmonize functionality with aesthetic appeal. With a keen eye for detail, our interior design studio creates unique and memorable spaces for residential and commercial projects, across India.
              </p>
              
              <p>
                StudiaSaga is an interior design firm that believes in thoughtfully designing impactful spaces.
              </p>
              
              <p>
                Our team of experts ensure a seamless experience for our clients through our process-driven design approach, elevating spaces.
              </p>
            </div>

            <Button 
              variant="outline" 
              className="mt-12 border-foreground text-foreground hover:bg-foreground hover:text-background font-light tracking-wide group"
            >
              Know More
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </section>
        
        <MediaSection />
        <ClientSection />

      
        {/* Services Preview */}
        <section className="py-24 bg-luxury-beige">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-extralight tracking-wide text-center mb-16 uppercase">
              Our Services
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background p-8 rounded-lg hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-light tracking-wide mb-4">Minimalist</h3>
                <p className="text-muted-foreground font-light leading-relaxed mb-6">
                  Clean lines, neutral palettes, and functional beauty. Experience the art of less is more.
                </p>
                <Button variant="link" className="p-0 h-auto font-light text-luxury-brown">
                  Explore →
                </Button>
              </div>

              <div className="bg-background p-8 rounded-lg hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-light tracking-wide mb-4">Industrial</h3>
                <p className="text-muted-foreground font-light leading-relaxed mb-6">
                  Raw materials meet refined design. Bold, textured spaces with character.
                </p>
                <Button variant="link" className="p-0 h-auto font-light text-luxury-brown">
                  Explore →
                </Button>
              </div>

              <div className="bg-background p-8 rounded-lg hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-light tracking-wide mb-4">Interior Kits</h3>
                <p className="text-muted-foreground font-light leading-relaxed mb-6">
                  Complete design solutions for every home size. From Base to Premium tiers.
                </p>
                <Button variant="link" className="p-0 h-auto font-light text-luxury-brown">
                  Explore →
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    <StudiasagaDisplay/>
    {/* <InstagramPost /> */}
    
    
      <Footer />
    </div>
  );
};

export default Index;



