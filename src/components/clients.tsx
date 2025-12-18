import React from "react";

// ----------------------
// 1. Types
// ----------------------
export interface Client {
  id: number;
  name: string;
  logoUrl: string;
  link: string;
}

// ----------------------
// 2. Client Data
// ----------------------
export const clientLogos: Client[] = [
  { id: 1, name: 'DLF', link: '#', logoUrl: 'https://placehold.co/200x80/white/374151?text=DLF' },
  { id: 2, name: 'PIONEER URBAN', link: '#', logoUrl: 'https://placehold.co/200x80/white/374151?text=PIONEER+URBAN' },
  { id: 3, name: 'HYATT REGENCY', link: '#', logoUrl: 'https://placehold.co/200x80/white/4338CA?text=HYATT' },
  { id: 4, name: 'Vatika', link: '#', logoUrl: 'https://placehold.co/200x80/white/059669?text=Vatika' },
  { id: 5, name: 'OKAYA', link: '#', logoUrl: 'https://placehold.co/200x80/white/374151?text=OKAYA' },
  { id: 6, name: 'ips DAY-CARE', link: '#', logoUrl: 'https://placehold.co/200x80/white/9333EA?text=ipsaa' },
  { id: 7, name: 'WHITELAND', link: '#', logoUrl: 'https://placehold.co/200x80/white/374151?text=WHITELAND' },
  { id: 8, name: 'GOOD EARTH INFRA', link: '#', logoUrl: 'https://placehold.co/200x80/white/374151?text=GOOD+EARTH' },
  { id: 9, name: 'OWLED', link: '#', logoUrl: 'https://placehold.co/200x80/white/374151?text=OWLED' },
  { id: 10, name: 'Propzila', link: '#', logoUrl: 'https://placehold.co/200x80/white/F97316?text=Propzilla' },
];

// ----------------------
// 3. Logo Card Component
// ----------------------
const ClientLogoCard: React.FC<Client> = ({ name, logoUrl, link }) => {
  return (
    <a
      href={link}
      aria-label={`View ${name}`}
      className="
        group 
        flex items-center justify-center 
        aspect-[16/9] md:aspect-[3/2]
        bg-white 
        rounded-[20px] 
        shadow-[0_4px_20px_rgba(0,0,0,0.04)]
        hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]
        transition-all 
        duration-300 
        ease-in-out
        p-6 md:p-8"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={logoUrl}
        alt={`${name} Logo`}
        className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
        onError={(e) => {
          e.currentTarget.src = `https://placehold.co/200x80/FFFFFF/4B5563?text=${name}`;
        }}
      />
    </a>
  );
};

// ----------------------
// 4. Main Component
// ----------------------
const ClientSection: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#F9F8F3]">
      <div className="max-w-7xl mx-auto">

        {/* Heading Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-normal text-[#444444] tracking-tight mb-4">
            Our Clients
          </h2>
          <p className="text-[#888888] text-base md:text-lg max-w-2xl mx-auto font-light">
            Trusted by the best in real estate & global enterprises.
          </p>

          {/* Gold Divider Line */}
          <div className="mt-6 h-[3px] w-20 mx-auto bg-[#C5A059]"></div>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-8">
          {clientLogos.map((client) => (
            <ClientLogoCard key={client.id} {...client} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientSection;