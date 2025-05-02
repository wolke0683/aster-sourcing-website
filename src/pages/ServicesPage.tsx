// src/pages/ServicesPage.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesPage = () => {
  const services = [
    {
      title: "Product Sourcing",
      description: "We help you find the perfect manufacturers and suppliers for your products, ensuring quality and competitive pricing.",
      features: [
        "Supplier verification",
        "Sample management",
        "Price negotiation",
        "Product development support",
      ],
    },
    {
      title: "Quality Control",
      description: "Our comprehensive quality control services ensure your products meet all specifications and standards.",
      features: [
        "Pre-production inspection",
        "During production inspection",
        "Final quality check",
        "Laboratory testing",
      ],
    },
    {
      title: "Supply Chain Management",
      description: "End-to-end supply chain solutions to optimize your sourcing operations.",
      features: [
        "Logistics coordination",
        "Inventory management",
        "Order tracking",
        "Documentation handling",
      ],
    },
  ];

  return (
    <div className="pt-16 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>

        <div className="space-y-12">
          {services.map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <svg
                        className="h-5 w-5 text-primary mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;