import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import HeroCarousel2 from "@/components/HeroCarousel2";

const stylesData = [
  {
    id: 1,
    title: "Scandinavian Minimalism",
    image: "/src/assets/ourr/8.jpg",
    tagline: "Serenity in Simplicity",
    philosophy: "Rooted in the Nordic regions, this style emphasizes clean lines, utility, and simple furnishings that are functional, beautiful, and cozy. It blends textures and soft hues to make modern decor feel warm and inviting.",
    elements: [
      "Light, muted colors (whites, creams, pale grays)",
      "Heavy use of natural wood accents",
      "Clutter-free spaces with hidden storage",
      "Maximizing natural light",
      "Cozy textiles (wool, sheepskin, linen)"
    ]
  },
  {
    id: 2,
    title: "Bohemian Chic",
    image: "/src/assets/ourr/11.jpg",
    tagline: "Curated Chaos & Artistic Freedom",
    philosophy: "Boho chic implies a lifestyle that is unconventional and artistic. It is a 'more is more' approach that layers colors, patterns, and textures. It tells a story of travel, art, and a relaxed spirit.",
    elements: [
      "Mix of vintage and modern furniture",
      "Global-inspired textiles (rugs, throws, pillows)",
      "Abundance of indoor plants",
      "Warm, earthy tones mixed with jewel colors",
      "Low-level seating and comfortable vibes"
    ]
  },
  {
    id: 3,
    title: "Urban Industrial",
    image: "/src/assets/ourr/2.jpg",
    tagline: "Raw, Refined & Edgy",
    philosophy: "Inspired by the lofty look of warehouses and factories, this style celebrates raw materials. It's about displaying the building materials that many try to conceal, creating a look that is unfinished yet sophisticated.",
    elements: [
      "Exposed brick, beams, and ductwork",
      "Concrete floors and metal finishes",
      "Vintage industrial lighting (Edison bulbs)",
      "Neutral color palette (grays, blacks, browns)",
      "Open floor plans with high ceilings"
    ]
  },
  {
    id: 4,
    title: "Warm Contemporary",
    image: "/src/assets/ourr/10.jpg", // Update with your actual image path
    tagline: "Soft Textures & Inviting Lines",
    philosophy: "Warm contemporary design balances the sleekness of modern style with the comfort of traditional homes. It focuses on approachable luxury through curved silhouettes and a palette of woods and stones.",
    elements: [
      "Curved furniture silhouettes",
      "Warm wood veneers (Oak, Walnut)",
      "Mixed metal accents in matte finishes",
      "Layered lighting for a soft glow",
      "Plush fabrics like bouclé and velvet"
    ]
  },
  {
    id: 5,
    title: "Modern Minimal Luxe",
    image: "/src/assets/ourr/4.jpg",
    tagline: "Understated Elegance",
    philosophy: "A step above standard minimalism. It uses high-end materials and monochromatic palettes to create a sense of luxury without the clutter. Every piece is sculptural and intentional.",
    elements: [
      "High-quality materials (Marble, Brass, Velvet)",
      "Monochromatic color scheme",
      "Sharp, clean architectural lines",
      "Statement art pieces",
      "Sophisticated and ambient lighting"
    ]
  },
  {
    id: 6,
    title: "Nature-Modern (Biophilic)",
    image: "/src/assets/our/6.jpeg",
    tagline: "Bringing the Outdoors In",
    philosophy: "Design that connects the occupant to the natural environment. It uses direct nature, indirect nature, and space and place conditions to reduce stress and improve well-being.",
    elements: [
      "Living walls and large indoor plants",
      "Natural stone and untreated wood",
      "Large windows for view and light",
      "Organic shapes and flowing lines",
      "Water features and natural ventilation"
    ]
  },
  {
    id: 7,
    title: "Mid-Century Modern",
    image: "/src/assets/ourr/1.jpg",
    tagline: "Retro Nostalgia meets Function",
    philosophy: "Throwback to the design style of the mid-1900s—primarily the 1950s and 60s. It supports the idea that form follows function, featuring organic curves and geometric lines.",
    elements: [
      "Furniture with tapered legs",
      "Warm wood tones (Teak, Walnut)",
      "Bold accent colors (Mustard, Olive, Orange)",
      "Clean lines with organic curves",
      "Statement lighting fixtures"
    ]
  },
  // {
  //   id: 8,
  //   title: "Japandi",
  //   image: "/src/assets/ourr/10.jpg", // Update with your actual image path
  //   tagline: "East Meets West",
  //   philosophy: "The perfect blend of Japanese artistic aesthetic and Scandinavian functionality. It focuses on the 'Wabi-sabi' principle of finding beauty in imperfection and the warmth of a cozy home.",
  //   elements: [
  //     "Low-profile furniture",
  //     "Contrast of light woods and black metal",
  //     "Handcrafted ceramics and decor",
  //     "Uncluttered, intentional layouts",
  //     "Soft, neutral color palettes with bamboo accents"
  //   ]
  // },
  // {
  //   id: 9,
  //   title: "Art Deco Revival",
  //   image: "/src/assets/ourr/12.jpg", // Update with your actual image path
  //   tagline: "Glamour, Geometry & Opulence",
  //   philosophy: "A modern take on the roaring 20s. This style is characterized by bold geometric patterns, rich colors, and lavish ornamentation, creating a space that feels like a high-end boutique hotel.",
  //   elements: [
  //     "Bold geometric shapes and patterns",
  //     "High-shine finishes (Chrome, Glass, Lacquer)",
  //     "Symmetry and repetitive motifs",
  //     "Jewel-toned accents (Emerald, Sapphire, Gold)",
  //     "Statement-making, tiered lighting"
  //   ]
  // }
];

const StylePalette = () => {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-luxury-gold/30">
      <Header />
      <HeroCarousel2 />
      
      {/* Page Header */}
      <div className="relative pt-32 pb-20 bg-stone-50 dark:bg-stone-950">
        <div className="container mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extralight uppercase tracking-widest mb-6"
          >
            The Style Palette
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl mx-auto"
          >
            Discover the aesthetic that speaks to your soul. From raw industrial lofts to serene scandinavian retreats.
          </motion.p>
        </div>
      </div>

      <main className="pb-24">
        <div className="container mx-auto px-6">
          
          {stylesData.map((style, index) => (
            <div key={style.id} className="mb-32 last:mb-0">
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col gap-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center`}
              >
                
                {/* Image Section */}
                <div className="w-full md:w-1/2">
                  <div className="relative group overflow-hidden rounded-sm shadow-xl aspect-[4/5] md:aspect-[3/4]">
                    <div className="absolute inset-0 bg-stone-200 animate-pulse" /> 
                    <img 
                      src={style.image} 
                      alt={style.title}
                      className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                </div>

                {/* Text Section */}
                <div className="w-full md:w-1/2 md:px-8">
                  <h3 className="text-luxury-gold text-sm tracking-[0.3em] uppercase mb-3 font-semibold">
                    {index + 1 < 10 ? `0${index + 1}` : index + 1} — {style.tagline}
                  </h3>
                  <h2 className="text-4xl md:text-5xl font-light mb-8 uppercase tracking-wide">
                    {style.title}
                  </h2>
                  
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xl font-light mb-3 border-b border-stone-200 pb-2 inline-block">Philosophy</h4>
                      <p className="text-muted-foreground leading-relaxed font-light">
                        {style.philosophy}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-light mb-3 border-b border-stone-200 pb-2 inline-block">Key Elements</h4>
                      <ul className="grid grid-cols-1 gap-2">
                        {style.elements.map((element, i) => (
                          <li key={i} className="flex items-center gap-3 text-muted-foreground font-light text-sm md:text-base">
                            <span className="h-px w-4 bg-luxury-gold/50"></span>
                            {element}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-10">
                    <Button 
                      variant="outline" 
                      className="rounded-none border-foreground/50 hover:bg-foreground hover:text-background uppercase tracking-widest text-xs py-6 px-8 transition-all duration-300"
                    >
                      Explore {style.title}
                    </Button>
                  </div>
                </div>

              </motion.div>

              {/* Decorative Divider */}
              {index !== stylesData.length - 1 && (
                <div className="w-full h-px bg-stone-200 mt-24 max-w-md mx-auto" />
              )}
            </div>
          ))}

        </div>

        {/* Bottom CTA */}
        <div className="bg-stone-900 text-stone-50 py-24 mt-20 text-center">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-light mb-6 uppercase">Not sure which style fits you?</h2>
            <p className="text-stone-400 max-w-2xl mx-auto mb-10 font-light">
              Our designers specialize in blending these styles to create something uniquely yours. Book a consultation to find your signature palette.
            </p>
            <Button size="lg" className="bg-white text-stone-900 hover:bg-stone-200 rounded-none px-10 py-6 uppercase tracking-widest">
              Book Consultation
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default StylePalette;