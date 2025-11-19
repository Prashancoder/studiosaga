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
  { id: 1, name: 'DLF', link: '#', logoUrl: 'https://placehold.co/200x80/f7f7f7/374151?text=DLF+%5E' },
  { id: 2, name: 'PIONEER URBAN', link: '#', logoUrl: 'https://placehold.co/200x80/f7f7f7/374151?text=PIONEER%7CURBAN' },
  { id: 3, name: 'HYATT REGENCY', link: '#', logoUrl: 'https://placehold.co/200x80/f7f7f7/4338CA?text=HYATT%7CREGENCY' },
  { id: 4, name: 'Vatika', link: '#', logoUrl: 'https://placehold.co/200x80/f7f7f7/059669?text=Vatika' },
  { id: 5, name: 'OKAYA', link: '#', logoUrl: 'https://placehold.co/200x80/f7f7f7/374151?text=OKAYA' },
  { id: 6, name: 'ips DAY-CARE', link: '#', logoUrl: 'https://placehold.co/200x80/f7f7f7/9333EA?text=ips%7CDAY-CARE' },
  { id: 7, name: 'WHITELAND', link: '#', logoUrl: 'https://placehold.co/200x80/f7f7f7/374151?text=WHITELAND' },
  { id: 8, name: 'GOOD EARTH INFRA', link: '#', logoUrl: 'https://placehold.co/200x80/f7f7f7/374151?text=GOOD%7CEARTH%7CINFRA' },
  { id: 9, name: 'OWLED', link: '#', logoUrl: 'https://placehold.co/200x80/f7f7f7/374151?text=OWLED' },
  { id: 10, name: 'Propzila', link: '#', logoUrl: 'https://placehold.co/200x80/f7f7f7/F97316?text=Propzila' },
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
        p-7 
        flex items-center justify-center 
        h-36 md:h-44 
        bg-white 
        rounded-2xl 
        shadow-[0_2px_10px_rgba(0,0,0,0.06)]
        hover:shadow-[0_6px_20px_rgba(0,0,0,0.12)]
        transition-all 
        duration-500 
        ease-out 
        hover:scale-[1.04]"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={logoUrl}
        alt={`${name} Logo`}
        className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
        onError={(e) => {
          e.currentTarget.src = `https://placehold.co/200x80/E5E7EB/4B5563?text=${name}`;
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
    <section className="py-20 px-6 md:px-10 bg-[#F7F6F2]">
      <div className="max-w-7xl mx-auto">

        {/* Premium Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-gray-900 tracking-wide">
            Our Clients
          </h2>
          <p className="text-lg text-gray-600 mt-3 font-light">
            Trusted by the best in real estate & global enterprises.
          </p>

          {/* Decorative Line */}
          <div className="mt-4 h-1 w-24 mx-auto bg-[#D4AF37] rounded-full shadow-md"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {clientLogos.map((client) => (
            <ClientLogoCard key={client.id} {...client} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientSection;
