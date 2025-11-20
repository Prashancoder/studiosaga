import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import About2 from "@/extracomponents/about2";
import About3 from "@/extracomponents/About3";
import BlogsCarousel from "@/components/BlogsCarousel";


const videoSources = ["/images/1.mp4", "/images/2.mp4"];

const OurSaga = () => {
  const [currentVideo, setCurrentVideo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videoSources.length);
    }, 5000); // slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
   

      {/* ================== HERO BANNER WITH VIDEO SLIDES ================== */}
      <div className="relative w-full h-[100vh] overflow-hidden">
        {videoSources.map((src, index) => (
          <video
            key={index}
            src={src}
            autoPlay
            loop
            muted
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 
              ${index === currentVideo ? "opacity-100" : "opacity-0"}`}
          />
        ))}

        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-extralight tracking-wide uppercase">
            Our Saga
          </h1>
        </div>
      </div>


         <About2 />
         <About3 />
         <BlogsCarousel />



      {/* ================== MAIN CONTENT ================== */}
      <main className="pt-24 pb-24">
        <div className="container mx-auto px-6 max-w-6xl">

          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-light tracking-wide">
                Inspired by Artistry, Objects
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed">
                At StudiaSaga, we believe that every space tells a story...
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                We draw inspiration from art, nature...
              </p>
            </div>
            <div className="bg-luxury-beige h-96 rounded-lg"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div className="bg-luxury-beige h-96 rounded-lg md:order-1"></div>
            <div className="space-y-6 md:order-2">
              <h2 className="text-2xl md:text-3xl font-light tracking-wide">
                Our Philosophy
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed">
                We believe in creating spaces...
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                Our process-driven approach ensures seamless execution...
              </p>
            </div>
          </div>

          <div className="text-center space-y-8 py-16">
            <h2 className="text-3xl md:text-4xl font-extralight tracking-wide uppercase">
              What Drives Us
            </h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-12">
              <div className="space-y-4">
                <h3 className="text-xl font-light tracking-wide">Innovation</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Pushing boundaries while respecting timeless design principles.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-light tracking-wide">Sustainability</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Conscious choices for spaces that are beautiful and responsible.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-light tracking-wide">Excellence</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Uncompromising quality in every detail, every project.
                </p>
              </div>
            </div>

          </div>
        </div>
      </main>

      
      <Footer />
    </div>
  );
};

export default OurSaga;
