import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroCarousel from "@/components/HeroCarousel";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import StudiaSagaDisplay from "@/components/StudiaSagaDisplay";
import ClientSection from "@/components/clients";
import WhyChooseUs from "@/components/WhyChooseUs";
import ChalkTVSection from '@/components/ChalkTVSection'; 
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <HeroCarousel />

        {/* About Section */}
        <section className="py-24 bg-[#E9E7DE] px-6">
          {/* Import curvy fonts */}
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
                  transform: 'rotate(-2px)' 
                }}
              >
                StudiaSaga
              </span>
              
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
              onClick={() => navigate("/our-saga")}
              className="mt-12 border-foreground text-foreground hover:bg-foreground hover:text-background font-light tracking-wide group"
            >
              Know More
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </section>

        <WhyChooseUs />
        <ClientSection />
        <ChalkTVSection />
      </main>

      <StudiaSagaDisplay />
      <Footer />
    </div>
  );
};

export default Index;