// src/pages/Blog.tsx
import { Card, CardContent } from "@/components/ui/card";

const Blog = () => {
  return (
    <div className="pt-16 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Blog & Resources</h1>

        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold mb-6">Navigating Tariff Turmoil: Strategic Global Sourcing for a New Era</h2>
            
            <p className="text-gray-600 mb-8">
              In today's rapidly evolving global trade landscape, businesses face unprecedented challenges. Climate-induced disruptions, regional conflicts, inflationary pressures, and shifting protectionist policies are reshaping supply chains and altering the dynamics of international commerce. As tariff regimes fluctuate and new trade alliances emerge, companies must adapt swiftly to maintain competitiveness and ensure sustainable growth.
            </p>

            <h3 className="text-2xl font-bold mb-4">The Imperative of Strategic Global Sourcing</h3>
            <p className="text-gray-600 mb-4">
              To thrive amid these complexities, businesses are turning to strategic global sourcing as a cornerstone of resilience and agility. Here's why this approach is more critical than ever:
            </p>

            <ul className="list-disc pl-6 mb-8 space-y-4">
              <li>
                <span className="font-bold">Resilience and Risk Mitigation:</span> Diversifying supply chains reduces dependency on single markets or suppliers. Experienced global sourcing partners help identify alternative sources, manage geopolitical risks, and ensure continuity amid shifting trade landscapes.
              </li>
              <li>
                <span className="font-bold">Cost Optimization and Margin Protection:</span> With tariffs and trade agreements in flux, continuous reassessment of cost structures is essential. Expert sourcing partners provide market intelligence, tariff analysis, and supplier benchmarking to maintain profitability.
              </li>
              <li>
                <span className="font-bold">Local Expertise and Compliance:</span> Navigating diverse regulations and compliance standards requires on-the-ground knowledge. Regional teams manage documentation, inspections, and ensure adherence to local and international standards.
              </li>
              <li>
                <span className="font-bold">Agility and Market Access:</span> As new trade blocs form, businesses must pivot quickly. Trusted sourcing partners offer the flexibility to enter emerging markets, source from new suppliers, and respond to dynamic demand shifts.
              </li>
              <li>
                <span className="font-bold">Sustainability and Transparency:</span> Rising environmental, social, and governance (ESG) standards necessitate transparent supply chains. Partners with robust quality assurance and audit capabilities help meet these expectations and protect brand integrity.
              </li>
            </ul>

            <h3 className="text-2xl font-bold mb-4">Leveraging Strategic Sourcing Partnerships</h3>
            <p className="text-gray-600 mb-4">
              In this transformed trade environment, companies benefit from sourcing partners offering comprehensive services:
            </p>

            <ol className="list-decimal pl-6 mb-8 space-y-4">
              <li>
                <span className="font-semibold">Strategic Sourcing Consultancy:</span> Providing guidance to navigate complex sourcing landscapes, open new markets, reduce costs, and achieve sustainability goals.
              </li>
              <li>
                <span className="font-semibold">Quality & Compliance Services:</span> Offering on-the-ground quality assurance, from sample development to final inspections, ensuring compliance with regulatory standards.
              </li>
              <li>
                <span className="font-semibold">Sourcing & Procurement Management:</span> Managing vendor relationships, negotiations, and supplier performance through local teams, overcoming time zone and language barriers.
              </li>
              <li>
                <span className="font-semibold">Buying Office Model:</span> Delivering dedicated teams without employment risks, allowing companies to maintain control while minimizing overhead and compliance concerns.
              </li>
            </ol>

            <h3 className="text-2xl font-bold mb-4">Conclusion</h3>
            <p className="text-gray-600">
              As global trade continues to evolve, businesses must embrace strategic global sourcing to navigate tariff turmoil and build resilient, agile supply chains. Partnering with experienced sourcing companies equips businesses to adapt to new challenges, seize emerging opportunities, and drive sustainable growth in a complex international marketplace.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Blog;