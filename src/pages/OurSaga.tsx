"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import About3 from "@/extracomponents/About3";
import BlogsCarousel from "@/components/BlogsCarousel";
import { motion } from "framer-motion";
import { Check, Star, Heart, Zap, Shield, Layout, Palette, Lamp, Sofa, PenTool } from "lucide-react";

const videoSources = ["/images/1.mp4", "/images/2.mp4"];

// --- DATA FROM YOUR PDF ---
const philosophies = [
  {
    title: "Simplicity & Timelessness",
    desc: "We prioritize clean lines and timeless aesthetics that won't feel dated. This protects your investment by avoiding trendy elements that quickly lose appeal."
  },
  {
    title: "Functionality First",
    desc: "Beautiful spaces must be livable. Every design decision is evaluated for its practical impact on your daily life, ensuring form and function work in harmony."
  },
  {
    title: "Sustainable & Cost-Effective",
    desc: "We source sustainable materials that don't compromise on style. Smart choices reduce long-term costs while supporting ecological wellness."
  },
  {
    title: "Wellbeing & Adaptability",
    desc: "Our designs enhance wellbeing through light optimization and biophilic elements. We create flexible spaces that evolve with your lifestyle."
  }
];


// --- REPLACE YOUR OLD EXPERTISE ARRAY WITH THIS ---
// --- UPDATE THIS EXPERTISE ARRAY AGAIN ---
const expertise2 = [
  { 
    icon: Layout, 
    title: "Space Planning", 
    desc: "Strategic layout optimization to maximize flow and functionality.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
  },
  { 
    icon: Palette, 
    title: "Color Consultation", 
    desc: "Expert guidance on color schemes that enhance mood and space.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop"
  },
  { 
    icon: Sofa, 
    title: "Furniture Selection", 
    desc: "Curated sourcing balancing aesthetics, comfort, and cost.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop"
  },
  { 
    icon: Lamp, 
    title: "Lighting Design", 
    desc: "Layered lighting strategies for perfect ambiance and utility.",
    // NEW LINK FOR LIGHTING
    image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=1935&auto=format&fit=crop" 
  },
  { 
    icon: Star, 
    title: "Decor Styling", 
    desc: "The finishing touches that bring personality to your space.",
    // NEW LINK FOR DECOR
    image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=2080&auto=format&fit=crop"
  },
  { 
    icon: PenTool, 
    title: "Project Management", 
    desc: "Seamless execution from initial concept to final installation.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
  },
];

const expertise = [
  { icon: Layout, title: "Space Planning", desc: "Strategic layout optimization to maximize flow." },
  { icon: Palette, title: "Color Consultation", desc: "Expert guidance on schemes that enhance mood." },
  { icon: Sofa, title: "Furniture Selection", desc: "Curated sourcing balancing aesthetics and cost." },
  { icon: Lamp, title: "Lighting Design", desc: "Layered lighting strategies for ambiance." },
  { icon: Star, title: "Decor Styling", desc: "Finishing touches that bring personality." },
  { icon: PenTool, title: "Project Management", desc: "Seamless execution from concept to install." },
];

const packages = [
  {
    name: "Starter Package",
    tagline: "For DIY Enthusiasts",
    features: [
      "Initial consultation & style assessment",
      "Custom concept board",
      "Shopping guidance & vendor contacts",
      "Color palette recommendations"
    ]
  },
  {
    name: "Signature Package",
    tagline: "Complete Transformation",
    isPopular: true,
    features: [
      "Everything in Starter Package",
      "3D visualizations of space",
      "Furniture selection & procurement",
      "Installation support & styling"
    ]
  },
  {
    name: "Premium Package",
    tagline: "Turnkey Experience",
    features: [
      "End-to-end design & build management",
      "Contractor coordination",
      "Custom millwork design",
      "White-glove styling & post-support"
    ]
  }
];

const OurSaga = () => {
  const [currentVideo, setCurrentVideo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videoSources.length);
    }, 5000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />


      {/* ================== HERO BANNER ================== */}
      <div className="relative w-full h-[80vh] md:h-[100vh] overflow-hidden">
        {videoSources.map((src, index) => (
          <video
            key={index}
            src={src}
            autoPlay
            loop
            muted
            playsInline
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 
              ${index === currentVideo ? "opacity-100" : "opacity-0"}`}
          />
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-white font-serif text-5xl md:text-7xl lg:text-8xl mb-4"
          >
            Our Saga
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/90 text-sm md:text-xl font-light tracking-[0.2em] uppercase"
          >
            Smart Interiors, Smart Prices
          </motion.p>
        </div>
      </div>

      <main>
        {/* ================== STORY SECTION ================== */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">Who We Are</span>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground leading-tight">
                  Inspired by Artistry, <br /> Driven by <span className="italic text-muted-foreground">Budget</span>
                </h2>
                <div className="space-y-4 text-muted-foreground text-lg font-light leading-relaxed">
                  <p>
                    Studia Saga was founded with a singular passion: to transform ordinary spaces into personalized sanctuaries that don't require overspending. We saw too many people compromise on their dream interiors due to budget constraints, and we knew there had to be a better way.
                  </p>
                  <p>
                    We believe that great design should be accessible to everyone. By blending creativity, functionality, and affordability, we prove that exceptional interiors are within reach for all budgets.
                  </p>
                </div>
              </div>




              
              {/* Image Placeholder - Replace url with your image */}
{/* REPLACE YOUR EXISTING IMAGE DIV WITH THIS BLOCK */}
{/* REPLACE YOUR EXISTING IMAGE DIV WITH THIS BLOCK */}
<div className="relative h-[500px] w-full pl-6 pb-6 mt-6 mr-6">
   {/* The Offset Background Layer (Primary Color Accent) */}
   <div className="absolute inset-0 w-full h-full bg-primary/10 rounded-2xl transform -translate-x-6 translate-y-6 -z-10"></div>
   
   {/* Main Image Card on top */}
   <div className="relative h-full w-full bg-white rounded-xl overflow-hidden shadow-2xl border-[3px] border-white z-10">
      <img 
        src="https://images.pexels.com/photos/2067638/pexels-photo-2067638.jpeg" 
        alt="Interior Story" 
        className="object-cover w-full h-full" 
      />
       {/* Subtle inner border overlay for definition */}
      <div className="absolute inset-0 border border-black/10 rounded-xl pointer-events-none"></div>
   </div>
</div>







            </div>
          </div>
        </section>


                    <About3 />





        {/* ================== CORE VALUES (Mission/Vision) ================== */}
{/* ================== CORE VALUES (FULL COLOR) ================== */}
        <section className="py-32 bg-stone-100">
          <div className="container mx-auto px-6 max-w-7xl">
            
            <div className="text-center mb-20">
               <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">The Foundation</span>
               <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mt-4">Built on Principles</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 items-start">
              
              {/* Card 1: MISSION */}
              <div className="group relative h-[450px] w-full overflow-hidden rounded-xl cursor-default shadow-lg">
                
                {/* Background Image (Full Color) */}
                <div className="absolute inset-0 w-full h-full">
                   <img 
                     src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=2000&auto=format&fit=crop" 
                     alt="Mission" 
                     className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" 
                   />
                </div>

                {/* Dark Overlay (For text readability) */}
                <div className="absolute inset-0 bg-black/60 transition-opacity duration-500 group-hover:bg-black/40"></div>

                {/* Content */}
                <div className="relative z-10 h-full p-10 flex flex-col justify-between">
                  <div>
                    <div className="w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center mb-6 text-white group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                      <Zap className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-3xl text-white mb-2">Our Mission</h3>
                    <div className="w-12 h-[1px] bg-white/50 group-hover:w-24 group-hover:bg-primary transition-all duration-500"></div>
                  </div>

                  <p className="text-white/90 font-light leading-relaxed translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    To craft interiors that authentically reflect your lifestyle, inspire daily comfort, and maximize the value of every dollar invested.
                  </p>
                </div>
              </div>

              {/* Card 2: VISION (Center Offset) */}
              <div className="group relative h-[450px] w-full overflow-hidden rounded-xl cursor-default shadow-2xl md:-mt-12 z-10 ring-4 ring-white">
                
                {/* Background Image (Full Color) */}
                <div className="absolute inset-0 w-full h-full">
                   <img 
                     src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" 
                     alt="Vision" 
                     className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" 
                   />
                </div>

                <div className="absolute inset-0 bg-black/60 transition-opacity duration-500 group-hover:bg-black/30"></div>

                <div className="relative z-10 h-full p-10 flex flex-col justify-between">
                  <div>
                    <div className="w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center mb-6 text-white group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                      <Star className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-3xl text-white mb-2">Our Vision</h3>
                    <div className="w-12 h-[1px] bg-white/50 group-hover:w-24 group-hover:bg-primary transition-all duration-500"></div>
                  </div>

                  <p className="text-white/95 font-light leading-relaxed translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    To be the trusted partner for budget-conscious design, proving that financial constraints can inspire rather than limit creative excellence.
                  </p>
                </div>
              </div>

              {/* Card 3: VALUES */}
              <div className="group relative h-[450px] w-full overflow-hidden rounded-xl cursor-default shadow-lg">
                
                {/* Background Image (Full Color) */}
                <div className="absolute inset-0 w-full h-full">
                   <img 
                     src="https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=2000&auto=format&fit=crop" 
                     alt="Values" 
                     className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" 
                   />
                </div>

                <div className="absolute inset-0 bg-black/60 transition-opacity duration-500 group-hover:bg-black/40"></div>

                <div className="relative z-10 h-full p-10 flex flex-col justify-between">
                  <div>
                    <div className="w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center mb-6 text-white group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                      <Shield className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-3xl text-white mb-2">Our Values</h3>
                    <div className="w-12 h-[1px] bg-white/50 group-hover:w-24 group-hover:bg-primary transition-all duration-500"></div>
                  </div>

                  <p className="text-white/90 font-light leading-relaxed translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    Transparency, collaboration, and integrity guide every project. We build lasting relationships through honest communication.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>





        {/* ================== EXPERTISE GRID ================== */}
        {/* <section className="py-24">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-5xl mb-4">Our Expertise</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Comprehensive design solutions tailored to your unique needs.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {expertise.map((item, idx) => (
                <div key={idx} className="flex gap-4 p-6 hover:bg-secondary/10 rounded-lg transition-colors">
                  <div className="w-12 h-12 shrink-0 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}


      {/* ================== EXPERTISE SECTION (EDITORIAL STYLE) ================== */}
        <section className="py-32 bg-[#FDFCFB] overflow-hidden"> {/* Using a very subtle off-white background */}
          <div className="container mx-auto px-6 max-w-7xl space-y-32"> {/* Increased spacing between rows */}
            
            {/* Section Header */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-24"
            >
               {/* A subtle decorative line */}
              <div className="w-16 h-[1px] bg-primary mx-auto mb-6"></div>
              <h2 className="font-serif text-5xl md:text-6xl text-stone-900 mb-6">
                The Art of <span className="italic text-stone-600">Execution</span>
              </h2>
              <p className="text-stone-600 max-w-xl mx-auto text-lg font-light leading-relaxed">
                Our expertise lies not just in vision, but in the precise orchestration of every detail that brings that vision to life.
              </p>
            </motion.div>

            {/* Editorial Rows */}
            {expertise2.map((item, idx) => {
              // Logic to alternate left/right alignment
              const isEven = idx % 2 === 0;
              
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}
                >
                  
                  {/* TEXT BLOCK */}
                  <div className="flex-1 relative">
                    {/* Giant Background Number for style */}
                    <span className="absolute -top-20 -left-12 text-[12rem] font-serif text-stone-100/80 select-none -z-10 leading-none">
                      0{idx + 1}
                    </span>

                    <div className="relative z-10">
                      {/* Icon & Subtitle */}
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 bg-primary/10 text-primary rounded-full">
                          <item.icon className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-bold tracking-[0.25em] uppercase text-primary">
                          Service &mdash; 0{idx + 1}
                        </span>
                      </div>

                      {/* Main Title */}
                      <h3 className="font-serif text-4xl md:text-5xl text-stone-900 mb-6 leading-tight">
                        {item.title}
                      </h3>

                      {/* Decorative short line */}
                      <div className="w-12 h-[2px] bg-stone-200 mb-6"></div>

                      {/* Description */}
                      <p className="text-stone-600 text-lg leading-relaxed font-light max-w-md">
                        {item.desc}
                        <br className="hidden lg:block"/> {/* Force line break for aesthetic */}
                        We ensure every detail aligns with your lifestyle, creating spaces that are both beautiful and deeply functional.
                      </p>
                    </div>
                  </div>

                  {/* IMAGE BLOCK */}
                  <div className="flex-1 w-full">
                    {/* Image Frame with Offset Border Effect */}
                    <div className="relative h-[400px] lg:h-[550px] w-full group">
                      {/* The Border outline (offset) */}
                      <div className={`absolute inset-0 border-2 border-primary/30 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2 rounded-sm z-0
                         ${isEven ? 'translate-x-4 translate-y-4' : '-translate-x-4 translate-y-4'}`}></div>
                      
                      {/* The Main Image */}
                      <div className="relative h-full w-full overflow-hidden rounded-sm shadow-xl z-10 bg-white p-2 border border-stone-100">
                         <img 
                           src={item.image} 
                           alt={item.title} 
                           className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                         />
                      </div>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </section>









        {/* ================== PHILOSOPHY SECTION ================== */}
{/* ================== PHILOSOPHY SECTION (REDESIGNED) ================== */}
        <section className="py-24 bg-[#F9F8F6] text-stone-900">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Side: Sticky Intro */}
              <div className="lg:col-span-5 lg:sticky lg:top-32">
                <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase block mb-6">
                  Our Approach
                </span>
                <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-[1.1] text-stone-900">
                  We Design for <br />
                  <span className="italic text-stone-500">Living Well.</span>
                </h2>
                <p className="text-stone-600 text-lg font-light leading-relaxed mb-10">
                  We don't just decorate; we solve problems. We combine cutting-edge design trends with practical execution methods, ensuring beautiful, livable spaces that stand the test of time.
                </p>

                {/* Stat / Key Points blocks */}
                <div className="flex flex-col sm:flex-row gap-8 border-t border-stone-200 pt-8">
                   <div>
                      <h4 className="text-3xl font-serif mb-1">10+</h4>
                      <p className="text-xs font-bold uppercase tracking-wider text-stone-500">Years of Expertise</p>
                   </div>
                   <div>
                      <h4 className="text-3xl font-serif mb-1">100%</h4>
                      <p className="text-xs font-bold uppercase tracking-wider text-stone-500">Transparency</p>
                   </div>
                </div>
              </div>

              {/* Right Side: Philosophy Grid Cards */}
              <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
                {philosophies.map((phi, idx) => (
                  <div 
                    key={idx} 
                    className="group bg-white p-8 rounded-xl border border-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
                  >
                    {/* Artistic Number */}
                    <span className="block text-6xl font-serif text-stone-100 group-hover:text-primary/20 transition-colors mb-4 leading-none">
                      0{idx + 1}
                    </span>
                    
                    <h3 className="text-xl font-serif mb-3 text-stone-800 group-hover:text-primary transition-colors">
                      {phi.title}
                    </h3>
                    
                    <p className="text-sm text-stone-500 leading-relaxed font-light">
                      {phi.desc}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>





        {/* ================== PACKAGES ================== */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-16">
              <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">Services</span>
              <h2 className="font-serif text-4xl mt-3">Tailored For You</h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {packages.map((pkg, idx) => (
                <div 
                  key={idx} 
                  className={`relative p-8 rounded-xl border ${pkg.isPopular ? 'border-primary shadow-xl scale-105 bg-background z-10' : 'border-border bg-secondary/5'} flex flex-col`}
                >
                  {pkg.isPopular && (
                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                      Most Popular
                    </span>
                  )}
                  <h3 className="font-serif text-2xl mb-1">{pkg.name}</h3>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider mb-6">{pkg.tagline}</p>
                  
                  <div className="space-y-4 mb-8 flex-1">
                    {pkg.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-primary mt-1 shrink-0" />
                        <span className="text-sm text-foreground/80">{feat}</span>
                      </div>
                    ))}
                  </div>

                  <button className={`w-full py-3 rounded-md text-sm font-bold uppercase tracking-wider transition-all
                    ${pkg.isPopular 
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'}`}
                  >
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================== WHY CHOOSE US / CTA ================== */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-6 text-center max-w-3xl">
            <Shield className="w-12 h-12 mx-auto text-primary mb-6" />
            <h2 className="font-serif text-3xl md:text-5xl mb-6">Why Choose Studia Saga?</h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              We offer <strong>Transparent Pricing</strong> with no hidden costs and <strong>Personalized Service</strong> dedicated to your vision. We are focused on long-term value and lasting client relationships.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-foreground text-background font-medium rounded-md hover:opacity-90 transition-opacity">
                Book Free Consultation
              </button>
              <button className="px-8 py-4 bg-transparent border border-foreground text-foreground font-medium rounded-md hover:bg-foreground/5 transition-colors">
                View Our Portfolio
              </button>
            </div>
          </div>
        </section>

        {/* Keep existing component if you wish, or remove if the data above replaces it */}
        {/* <About3 /> */}
        
        <BlogsCarousel />
      </main>

      <Footer />
    </div>
  );
};

export default OurSaga;