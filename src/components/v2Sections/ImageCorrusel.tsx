"use client";
import { useState } from "react";

interface Service {
  id: string;
  title: string;
  primaryImage: string;
  secondaryImage: string;
}

interface ServicesSectionProps {
  description?: string;
  header1?: string;
  header2?: string;
  data?: Service[];
}

const ServicesSection: React.FC<ServicesSectionProps> = ({
  header1 = "Where we excel-and",
  header2 = "help you succeed",
  description = "Our products are supplied to numerous 4- and 5-star Hotels, Restaurants, Cafes, Bars, Banquets and Catering services.",
  data,
}) => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const services: Service[] = data ?? [
    {
      id: "hotels",
      title: "Hotels",
      primaryImage:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      secondaryImage:
        "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "restaurants",
      title: "Restaurants",
      primaryImage:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      secondaryImage:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "catering",
      title: "Catering",
      primaryImage:
        "https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      secondaryImage:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "gifting",
      title: "Gifting",
      primaryImage:
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      secondaryImage:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  const handleCardHover = (cardId: string): void => {
    setHoveredCard(cardId);
  };

  const handleCardLeave = (): void => {
    setHoveredCard(null);
  };

  return (
    <section className="py-20  bg-amber-50 ">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="image_corrousel_heading mb-2">
            {header1}
            <br />
            {header2}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`relative h-[400px]  overflow-hidden cursor-pointer shadow-lg transition-all duration-300 ease-out `}
              onMouseEnter={() => handleCardHover(service.id)}
              onMouseLeave={handleCardLeave}
            >
              {/* Primary Image */}
              <div
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-in-out ${
                  hoveredCard === service.id ? "opacity-0" : "opacity-100"
                }`}
                style={{ backgroundImage: `url(${service.primaryImage})` }}
              />

              {/* Secondary Image */}
              <div
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-in-out ${
                  hoveredCard === service.id ? "opacity-100" : "opacity-0"
                }`}
                style={{ backgroundImage: `url(${service.secondaryImage})` }}
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/40 to-black/60" />

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <h5
                  className={` text-white  `}
                >
                  {service.title}
                </h5>

                <button
                  className={`
                    image_corrousel_transparent_button
                    ${hoveredCard === service.id ? "opacity-100" : "opacity-90"}
                  `}
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
