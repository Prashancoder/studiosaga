import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroCarousel from "@/components/HeroCarousel";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import StudiasagaDisplay from "@/components/StudiasagaDisplay";
import MediaSection from '@/components/MediaSection';
// import InstagramPost from "@/components/InstagramPost;
import ClientSection from "@/components/clients";
import WhyChooseUs from "@/components/WhyChooseUs";
import ChalkTVSection from '@/components/ChalkTVSection'; 


const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <HeroCarousel />











        {/* uppercase */}

        {/* About Section */}
{/* About Section */}
<section className="py-24 bg-[#E9E7DE] px-6">
          {/* Online Font Link yahi add kiya hai */}
          <style>
            {`@import url('https://fonts.googleapis.com/css2?family=Monsieur+La+Doulaise&family=Mrs+Saint+Delafield&display=swap');`}
          </style>

          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="mb-8 leading-relaxed">    
              {/* StudiaSaga - Font changed to Monsieur La Doulaise */}
              <span 
                className="text-5xl md:text-6xl text-foreground mr-3" 
                style={{ 
                  fontFamily: "'Monsieur La Doulaise', cursive",
                  lineHeight: '1',
                  display: 'inline-block'
                }}
              >
                StudiaSaga
              </span>
              
              {/* Rest of the text - Small and clean */}
              <span className="text-base md:text-lg font-light tracking-wide text-muted-foreground">
                is an Interior Design Firm that Believes in
                <br />
                Thoughtfully Designing Impactful Spaces.
              </span>
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


        <section className="py-24 bg-[#E9E7DE] px-6">
  {/* Online Font Link yahi add kiya hai - Meie Script added */}
  <style>
    {`@import url('https://fonts.googleapis.com/css2?family=Meie+Script&display=swap');`}
  </style>

  <div className="container mx-auto max-w-4xl text-center">
    <h2 className="mb-8 leading-relaxed">    
      {/* StudiaSaga - Font changed to Meie Script */}
      <span 
        className="text-5xl md:text-6xl text-foreground mr-3" 
        style={{ 
          fontFamily: "'Meie Script', cursive",
          lineHeight: '1.2',
          display: 'inline-block'
        }}
      >
        StudiaSaga
      </span>
      
      {/* Rest of the text - Small and clean */}
      <span className="text-base md:text-lg font-light tracking-wide text-muted-foreground">
        is an Interior Design Firm that Believes in
        <br />
        Thoughtfully Designing Impactful Spaces.
      </span>
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













<section className="py-24 bg-[#E9E7DE] px-6">
  {/* Import curvy fonts that look like Autography */}
  <style>
    {`@import url('https://fonts.googleapis.com/css2?family=Birthstone+Bounce&family=Herr+Von+Muellerhoff&family=Ms+Madi&display=swap');`}
  </style>

  <div className="container mx-auto max-w-4xl text-center">
    <h2 className="mb-8 leading-relaxed">    
      {/* StudiaSaga - Curvy Signature Style */}
      <span 
        className="text-2xl md:text-4xl text-foreground mr-3" 
        style={{ 
          fontFamily: "'Birthstone Bounce', cursive", 
          fontWeight: '400',
          display: 'inline-block',
          transform: 'rotate(-2px)' // Thoda sa tilt signature look ke liye
        }}
      >
        StudiaSaga
      </span>
      
      {/* Rest of the text */}
      <span className="text-base md:text-lg font-light tracking-wide text-muted-foreground">
        is an Interior Design Firm that Believes in
        <br />
        Thoughtfully Designing Impactful Spaces.
      </span>
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









<section className="py-24 bg-[#E9E7DE] px-6">
  {/* Import these 3 fonts to check which one you like best */}
  <style>
    {`@import url('https://fonts.googleapis.com/css2?family=Meow+Script&family=Ms+Madi&family=League+Script&display=swap');`}
  </style>

  <div className="container mx-auto max-w-4xl text-center">
    <h2 className="mb-8 leading-relaxed">    
      {/* StudiaSaga - Autography Style */}
      <span 
        className="text-5xl md:text-4xl text-foreground mr-3" 
        style={{ 
          // Option 1: 'Meow Script' (Sabse zyada match karta hai)
          // Option 2: 'Ms Madi' (Thoda zyada signature look)
          // Option 3: 'League Script' (Very clean and thin)
          fontFamily: "'Meow Script', cursive", 
          fontWeight: '400',
          display: 'inline-block',
          letterSpacing: '-1px' 
        }}
      >
        StudiaSaga
      </span>
      
      {/* Rest of the text */}
      <span className="text-base md:text-lg font-light tracking-wide text-muted-foreground">
        is an Interior Design Firm that Believes in
        <br />
        Thoughtfully Designing Impactful Spaces.
      </span>
    </h2>
    
    <div className="space-y-6 text-muted-foreground font-light leading-relaxed">
      <p>
        We are dedicated to crafting bespoke solutions that harmonize functionality with aesthetic appeal. With a keen eye for detail, our interior design studio creates unique and memorable spaces for residential and commercial projects, across India.
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

















        
        
        {/* <MediaSection /> */}
        <WhyChooseUs/>
        <ClientSection />
        {/* <ChalkTVSection /> */}


      
        {/* Services Preview */}
        {/* <section className="py-24 bg-luxury-beige">
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
        </section> */}



      </main>
    <StudiasagaDisplay/>
    {/* <InstagramPost /> */}



    <a
  href="https://wa.me/7217806549?text=Hi%20There!"
  target="_blank"
  rel="noopener noreferrer"
  className="
    fixed
    bottom-20
    right-6
    z-[999]
    flex
    h-14
    w-14
    items-center
    justify-center
    rounded-full
    bg-green-500
    shadow-lg
    transition-all
    duration-300
    hover:scale-110
    hover:bg-green-600
  "
>
  <img
    src="https://trickuweb.com/whatsapp.png"
    alt="WhatsApp"
    className="h-8 w-8"
  />
</a>

  
    
    
    
    
      <Footer />
    </div>
  );
};

export default Index;



