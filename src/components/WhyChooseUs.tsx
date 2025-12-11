import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Ruler, Users, Sparkles, ArrowRight } from 'lucide-react';

const features = [
  {
    id: "01",
    title: "Transparent Integrity",
    desc: "Detailed BOQ (Bill of Quantities) provided upfront. No hidden costs, just honest craftsmanship.",
    icon: <ShieldCheck className="w-6 h-6" />
  },
  {
    id: "02",
    title: "Co-Design Experience",
    desc: "We don't just dictate design; we interpret your dreams. Your lifestyle is our blueprint.",
    icon: <Users className="w-6 h-6" />
  },
  {
    id: "03",
    title: "Precision Execution",
    desc: "Design is art, renovation is engineering. We obsess over millimeter-perfect joinery.",
    icon: <Ruler className="w-6 h-6" />
  },
  {
    id: "04",
    title: "Appreciating Assets",
    desc: "Materials selected not just for beauty, but to increase your property's market valuation.",
    icon: <Sparkles className="w-6 h-6" />
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 lg:py-32 bg-[#F4F2ED] text-stone-900 overflow-hidden relative">
      
      {/* Background Watermark Text (Subtle Luxury Touch) */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none opacity-[0.03]">
        <h2 className="text-[120px] md:text-[200px] font-serif leading-none tracking-tighter uppercase text-stone-900">
          Why Us
        </h2>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#BFA181] text-xs font-bold tracking-[0.3em] uppercase block mb-3">
              The Standard
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-stone-900">
              Why Choose <span className="italic font-light text-stone-500">Studia Saga?</span>
            </h2>
          </motion.div>
        </div>

        {/* The Centerpiece Layout */}
        <div className="grid lg:grid-cols-3 gap-12 items-center">

          {/* --- Left Column (Points 1 & 2) --- */}
          <div className="space-y-16 lg:text-right order-2 lg:order-1">
            {features.slice(0, 2).map((item, idx) => (
              <FeatureItem key={idx} item={item} align="right" delay={idx * 0.2} />
            ))}
          </div>

          {/* --- Center Column (The Arch Image) --- */}
          <div className="relative order-1 lg:order-2 h-[500px] lg:h-[600px] w-full">
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} // Custom cubic-bezier for smooth elegance
              className="absolute inset-x-0 bottom-0 bg-stone-300 rounded-t-[200px] overflow-hidden border-4 border-white shadow-2xl mx-auto w-full max-w-md"
            >
<img 
  src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=800&q=80" 
  alt="Luxury Interior Arch"
  className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-[2s]"
/>
              
              {/* Floating Badge on Image */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-lg text-center min-w-[200px]">
                 <p className="text-xs font-bold uppercase tracking-widest text-[#BFA181]">Excellence Guaranteed</p>
              </div>
            </motion.div>
          </div>

          {/* --- Right Column (Points 3 & 4) --- */}
          <div className="space-y-16 lg:text-left order-3">
            {features.slice(2, 4).map((item, idx) => (
              <FeatureItem key={idx} item={item} align="left" delay={0.4 + (idx * 0.2)} />
            ))}
          </div>

        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-stone-900 text-white overflow-hidden transition-all hover:bg-[#BFA181]">
            <span className="relative z-10 text-sm font-bold uppercase tracking-widest">Start Your Project</span>
            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};

// Sub-component for individual points to keep code clean
const FeatureItem = ({ item, align, delay }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: align === 'right' ? 30 : -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: delay }}
      className={`group flex flex-col ${align === 'right' ? 'lg:items-end' : 'lg:items-start'} items-center gap-4`}
    >
      <div className="flex items-center gap-4">
        {align === 'left' && (
          <span className="text-4xl font-serif text-[#BFA181]/30 font-bold group-hover:text-[#BFA181] transition-colors">
            {item.id}
          </span>
        )}
        
        <div className="w-12 h-12 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-900 shadow-sm group-hover:scale-110 transition-transform duration-300">
          {item.icon}
        </div>

        {align === 'right' && (
          <span className="text-4xl font-serif text-[#BFA181]/30 font-bold group-hover:text-[#BFA181] transition-colors">
            {item.id}
          </span>
        )}
      </div>

      <div className={`space-y-2 ${align === 'right' ? 'lg:text-right' : 'lg:text-left'} text-center`}>
        <h3 className="text-xl font-serif text-stone-900">{item.title}</h3>
        <p className="text-sm text-stone-500 font-light leading-relaxed max-w-xs mx-auto lg:mx-0">
          {item.desc}
        </p>
      </div>
    </motion.div>
  );
};

export default WhyChooseUs;