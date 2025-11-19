import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import HeroCarousel from "@/components/HeroCarousel";      

const StylePaletteMinimalist = () => {
  return (
    <div className="min-h-screen">
      <Header />
        <HeroCarousel />
      
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-extralight tracking-wide mb-8 uppercase">
              Minimalist Design
            </h1>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              The art of less is more. Clean lines, neutral palettes, and functional beauty create spaces that breathe tranquility.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-luxury-beige h-96 rounded-lg"></div>
            <div className="bg-luxury-cream h-96 rounded-lg"></div>
          </div>

          <div className="max-w-3xl mx-auto space-y-8 mb-16">
            <div>
              <h2 className="text-2xl font-light tracking-wide mb-4">Philosophy</h2>
              <p className="text-muted-foreground font-light leading-relaxed">
                Minimalist design is about reducing elements to their essential quality. We focus on simplicity, clean lines, and a monochromatic palette with color used as accent. The philosophy emphasizes function over form, with every element serving a purpose.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-light tracking-wide mb-4">Key Elements</h2>
              <ul className="space-y-3 text-muted-foreground font-light">
                <li className="flex items-start gap-3">
                  <span className="text-luxury-gold mt-1">•</span>
                  <span>Simple geometric forms and clean lines</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-luxury-gold mt-1">•</span>
                  <span>Neutral color palette with strategic accent colors</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-luxury-gold mt-1">•</span>
                  <span>Quality over quantity in furniture and decor</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-luxury-gold mt-1">•</span>
                  <span>Natural light and open spaces</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-luxury-gold mt-1">•</span>
                  <span>Functional storage solutions to maintain clutter-free spaces</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-light tracking-wide mb-4">Perfect For</h2>
              <p className="text-muted-foreground font-light leading-relaxed">
                Modern homes, urban apartments, and contemporary offices. Ideal for those who appreciate simplicity, clarity, and the beauty of essential design. This style creates calm, organized environments that promote focus and well-being.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button 
              variant="outline" 
              size="lg"
              className="border-foreground text-foreground hover:bg-foreground hover:text-background font-light tracking-wide"
            >
              Start Your Project
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default StylePaletteMinimalist;
