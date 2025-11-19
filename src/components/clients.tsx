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
      className="group p-6 flex items-center justify-center h-32 md:h-40 bg-white rounded-lg transition duration-300 ease-in-out hover:scale-[1.03] hover:shadow-lg"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={logoUrl}
        alt={`${name} Logo`}
        className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
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
    <section className="py-16 px-6 bg-[#F6F5F1] md:px-10 bg-gray-50">
      <div className="max-w-7xl  mx-auto">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
            Our Clients
          </h2>
          <p className="text-lg text-gray-500 mt-1">
            Trusted by the best in the industry.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {clientLogos.map((client) => (
            <ClientLogoCard key={client.id} {...client} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ClientSection;
