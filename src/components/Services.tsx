// src/components/Services.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      title: "Product Sourcing",
      description: "Find the right manufacturers for your products with our extensive network.",
      icon: "🔍",
    },
    {
      title: "Quality Control",
      description: "Rigorous quality inspection and control processes to ensure product standards.",
      icon: "✓",
    },
    {
      title: "Supply Chain Management",
      description: "End-to-end supply chain solutions from sourcing to delivery.",
      icon: "🔄",
    },
    {
      title: "Contract Negotiation",
      description: "Expert negotiation of terms, pricing, and agreements with suppliers.",
      icon: "📝",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Comprehensive sourcing solutions tailored to your business needs
          </p>
        </div>

        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-semibold">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;