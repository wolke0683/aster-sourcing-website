// src/pages/CaseStudies.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CaseStudies = () => {
  const cases = [
    {
      title: "Electronics Manufacturing Optimization",
      client: "Tech Solutions Inc.",
      challenge: "Needed to reduce manufacturing costs while maintaining quality",
      solution: "Identified and vetted new suppliers, implemented quality control processes",
      result: "30% cost reduction and improved product quality",
    },
    {
      title: "Supply Chain Transformation",
      client: "Global Retail Co.",
      challenge: "Complex supply chain with multiple inefficiencies",
      solution: "Streamlined supplier network and implemented tracking systems",
      result: "Reduced lead times by 40% and improved inventory management",
    },
    {
      title: "Quality Control Enhancement",
      client: "Premium Goods Ltd.",
      challenge: "High defect rates in product manufacturing",
      solution: "Implemented comprehensive quality control protocols",
      result: "Reduced defect rates by 75% and improved customer satisfaction",
    },
  ];

  return (
    <div className="pt-16 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Case Studies</h1>

        <div className="grid grid-cols-1 gap-8">
          {cases.map((case_, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-2xl">{case_.title}</CardTitle>
                <p className="text-sm text-gray-500">Client: {case_.client}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold">Challenge</h3>
                    <p className="text-gray-600">{case_.challenge}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Solution</h3>
                    <p className="text-gray-600">{case_.solution}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Result</h3>
                    <p className="text-gray-600">{case_.result}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;