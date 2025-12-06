import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import HeroCarousel from "@/components/HeroCarousel";      




const StylePalette = () => {
  return (
    <div className="min-h-screen">
      <Header />
     <HeroCarousel />

      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-extralight tracking-wide mb-8 uppercase">
              Industrial Design
            </h1>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              Raw materials meet refined design. Bold, textured spaces with character that celebrate honest materiality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-luxury-brown/20 h-96 rounded-lg"></div>
            <div className="bg-luxury-beige h-96 rounded-lg"></div>
          </div>

          <div className="max-w-3xl mx-auto space-y-8 mb-16">
            <div>
              <h2 className="text-2xl font-light tracking-wide mb-4">Philosophy</h2>
              <p className="text-muted-foreground font-light leading-relaxed">
                Industrial design embraces the beauty of raw, unfinished materials. Inspired by warehouses, factories, and urban lofts, this style celebrates exposed structural elements, weathered textures, and honest materiality. It's about creating spaces with soul and character.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-light tracking-wide mb-4">Key Elements</h2>
              <ul className="space-y-3 text-muted-foreground font-light">
                <li className="flex items-start gap-3">
                  <span className="text-luxury-gold mt-1">•</span>
                  <span>Exposed brick, concrete, and metal elements</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-luxury-gold mt-1">•</span>
                  <span>Open floor plans with high ceilings</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-luxury-gold mt-1">•</span>
                  <span>Reclaimed wood and weathered finishes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-luxury-gold mt-1">•</span>
                  <span>Vintage and repurposed furniture pieces</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-luxury-gold mt-1">•</span>
                  <span>Edison bulbs and statement lighting fixtures</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-luxury-gold mt-1">•</span>
                  <span>Neutral color palette with warm metallic accents</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-light tracking-wide mb-4">Perfect For</h2>
              <p className="text-muted-foreground font-light leading-relaxed">
                Urban lofts, creative workspaces, restaurants, and cafes. Ideal for those who appreciate authenticity, character, and spaces with a story. This style works beautifully in converted industrial buildings but can be adapted to any space seeking an edgy, sophisticated aesthetic.
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

export default StylePalette ;
