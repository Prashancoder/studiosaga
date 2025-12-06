import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

// Assuming your assets are imported correctly
import serviceKitchen from "@/assets/service-kitchen.jpg";
import serviceWardrobe from "@/assets/service-wardrobe.jpg";
import serviceLiving from "@/assets/service-living.jpg";
import serviceCeiling from "@/assets/service-ceiling.jpg";
import serviceRenovation from "@/assets/service-renovation.jpg";
import serviceOffice from "@/assets/service-office.jpg";
import serviceFurniture from "@/assets/service-furniture.jpg";
import serviceTvUnit from "@/assets/service-tv-unit.jpg";
import serviceKidsRoom from "@/assets/service-kids-room.jpg";
import serviceBathroom from "@/assets/service-bathroom.jpg";

const services = [
  {
    title: "Modular Kitchen",
    description: "Smart, stylish kitchens designed for modern living",
    image: serviceKitchen,
  },
  {
    title: "Modular Wardrobe",
    description: "Custom storage solutions that maximize space elegantly",
    image: serviceWardrobe,
  },
  {
    title: "Living Room Interiors",
    description: "Creating inviting spaces for family and gatherings",
    image: serviceLiving,
  },
  {
    title: "Wall TV Units",
    description: "Elegant entertainment centers with modern aesthetics",
    image: serviceTvUnit,
  },
  {
    title: "False Ceiling & Lighting",
    description: "Designer ceilings with ambient lighting solutions",
    image: serviceCeiling,
  },
  {
    title: "Kids Room Interiors",
    description: "Playful yet elegant spaces for your little ones",
    image: serviceKidsRoom,
  },
  {
    title: "Bathroom Vanity",
    description: "Luxurious vanity units with premium finishes",
    image: serviceBathroom,
  },
  {
    title: "Full Home Renovation",
    description: "Complete transformation of your living space",
    image: serviceRenovation,
  },
  {
    title: "Office Interior Design",
    description: "Professional workspaces that inspire productivity",
    image: serviceOffice,
  },
  {
    title: "Furniture & Custom Units",
    description: "Bespoke furniture crafted to your specifications",
    image: serviceFurniture,
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-2xl bg-gray-900 shadow-lg hover:shadow-2xl transition-all duration-500"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Dark gradient overlay to make white text readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6">
        {/* Title: White by default -> Gold on hover */}
        <h3 className="font-serif text-xl font-semibold mb-2 text-white group-hover:text-[#E6C288] transition-colors duration-300">
          {service.title}
        </h3>
        
        {/* Description: White text */}
        <p className="text-white text-sm leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
          {service.description}
        </p>
      </div>

      {/* Hover Border Effect (Optional: Gold border on hover) */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#E6C288]/40 rounded-2xl transition-colors duration-500" />
    </motion.div>
  );
}

export function Services() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-[#E6C288] text-sm font-medium tracking-[0.2em] uppercase mb-4">
            Our Services
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-6">
            Crafting Beautiful
            <span className="text-[#E6C288]"> Living Experiences</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            From modular kitchens to complete home renovations, we offer comprehensive interior design solutions tailored to your unique lifestyle.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;