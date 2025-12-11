import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Star } from 'lucide-react';

const packages = [
  {
    name: "Essential Refresh",
    tagline: "Perfect for single room makeovers",
    price: "From $2,500", // Optional: Add pricing if needed
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80", // Cozy Bedroom
    isPopular: false,
    features: [
      "Initial Concept Moodboard",
      "Curated Furniture List",
      "Paint & Color Consultation",
      "1 Revision Round"
    ]
  },
  {
    name: "Signature Living",
    tagline: "Full home transformation",
    price: "From $8,000",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=800&q=80", // Luxury Living Room
    isPopular: true,
    features: [
      "3D Spatial Rendering",
      "Full Project Management",
      "Custom Millwork Design",
      "Sourcing & Procurement",
      "Unlimited Revisions"
    ]
  },
  {
    name: "Estate Curated",
    tagline: "Architectural & detailed elegance",
    price: "Custom Quote",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=80", // Grand Kitchen/Hall
    isPopular: false,
    features: [
      "Architectural Consulting",
      "Bespoke Furniture Design",
      "Art & Decor Curation",
      "White-Glove Installation",
      "Post-Project Concierge"
    ]
  }
];

const PremiumServices = () => {
  return (
    <section className="py-32 bg-[#F9F8F6] text-stone-900">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Header Section */}
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
          >
            <span className="text-[#BFA181] text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
              Curated Services
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-6">
              Tailored Interiors <span className="italic text-stone-400">for You.</span>
            </h2>
            <p className="text-stone-500 font-light text-lg">
              Choose the level of curation that fits your lifestyle. From simple refreshes to grand architectural overhauls.
            </p>
          </motion.div>
        </div>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-10 items-center">
          {packages.map((pkg, idx) => (
            <ServiceCard key={idx} pkg={pkg} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
};

// Extracted Card Component for cleaner code
const ServiceCard = ({ pkg, index }) => {
  const isDark = pkg.isPopular;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className={`
        group relative flex flex-col h-full rounded-none overflow-hidden transition-all duration-500
        ${isDark 
          ? 'bg-stone-900 text-white shadow-2xl scale-105 z-10 lg:-mt-4 lg:-mb-4' 
          : 'bg-white text-stone-900 border border-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-2'}
      `}
    >
      {/* Top Image Area */}
      <div className="h-64 overflow-hidden relative">
        <div className={`absolute inset-0 z-10 ${isDark ? 'bg-black/20' : 'bg-transparent'}`} />
        <motion.img 
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.8 }}
          src={pkg.image} 
          alt={pkg.name} 
          className="w-full h-full object-cover transition-transform duration-700"
        />
        
        {/* Popular Tag */}
        {pkg.isPopular && (
          <div className="absolute top-4 right-4 z-20 bg-[#BFA181] text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest shadow-md flex items-center gap-1">
            <Star size={10} fill="currentColor" /> Most Popular
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="p-8 flex flex-col flex-1">
        <h3 className={`font-serif text-3xl mb-2 ${isDark ? 'text-white' : 'text-stone-900'}`}>
          {pkg.name}
        </h3>
        <p className={`text-xs uppercase tracking-widest mb-6 font-medium ${isDark ? 'text-stone-400' : 'text-[#BFA181]'}`}>
          {pkg.tagline}
        </p>

        {/* Price (Optional) */}
        {/* <div className="mb-8 pb-8 border-b border-stone-100/10">
           <span className="text-2xl font-serif italic">{pkg.price}</span>
        </div> */}

        {/* Features List - Styled like a Spec Sheet */}
        <div className="space-y-0 mb-10 flex-1">
          {pkg.features.map((feat, fIdx) => (
            <div 
              key={fIdx} 
              className={`
                flex items-center gap-4 py-4 border-b border-dashed 
                ${isDark ? 'border-stone-700' : 'border-stone-100'}
              `}
            >
              <div className={`
                w-1.5 h-1.5 rounded-full shrink-0
                ${isDark ? 'bg-[#BFA181]' : 'bg-stone-300'}
              `} />
              <span className={`text-sm font-light ${isDark ? 'text-stone-300' : 'text-stone-600'}`}>
                {feat}
              </span>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <button className={`
          w-full py-4 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 border
          flex items-center justify-center gap-2 group-hover:gap-4
          ${isDark 
            ? 'bg-[#BFA181] border-[#BFA181] text-white hover:bg-white hover:text-stone-900 hover:border-white' 
            : 'bg-transparent border-stone-200 text-stone-900 hover:bg-stone-900 hover:text-white hover:border-stone-900'}
        `}>
          View Details <ArrowRight size={14} />
        </button>
      </div>
    </motion.div>
  );
};

export default  PremiumServices ;