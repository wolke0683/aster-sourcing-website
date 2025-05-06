import { Card, CardContent } from "@/components/ui/card";

const CaseStudies = () => {
  const cases = [
    {
      title: "Supply Chain Transformation",
      challenge: "A global consumer goods company struggled with complex supply chain operations across multiple regions. They faced challenges in order management, lead times, and shipping costs optimization.",
      solution: "We implemented a comprehensive supply chain transformation program that included standardizing processes, consolidating shipments, and establishing clear communication channels with suppliers.",
      result: "Improved order management SOP, reduced lead times by 30%, and cost saving on shipping by consolidating on the shipments."
    },
    {
      title: "Quality Control Enhancement",
      challenge: "A manufacturing company experienced high defect rates in their imported components, leading to production delays and increased costs.",
      solution: "We established a robust quality control system with pre-shipment inspections, supplier quality management programs, and regular audits.",
      result: "Reduced defect rates by 75% and eliminated production delays due to quality issues."
    },
    {
      title: "Supplier Network Optimization",
      challenge: "A retail company needed to diversify their supplier base and reduce dependency on a single region while maintaining product quality and cost efficiency.",
      solution: "We conducted comprehensive supplier assessments across multiple regions, implemented a supplier rating system, and established new partnerships.",
      result: "Successfully diversified supplier base across three regions while maintaining quality standards and achieving 15% cost reduction."
    }
  ];

  return (
    <div className="pt-16 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Case Studies</h1>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((case_study, index) => (
            <Card key={index} className="h-full">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">{case_study.title}</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Challenge:</h3>
                    <p className="text-gray-600">{case_study.challenge}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Solution:</h3>
                    <p className="text-gray-600">{case_study.solution}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Result:</h3>
                    <p className="text-gray-600">{case_study.result}</p>
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