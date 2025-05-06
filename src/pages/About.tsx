// src/pages/About.tsx
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="pt-16 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8">About Aster Sourcing</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded with a vision to revolutionize global sourcing, <b>Aster Sourcing</b> set out to bridge the gaps created by language, culture, and time zones. We are a young, energetic and diversified team. Since 2020, we've been helping businesses streamline their supply chains and build strong, lasting relationships with trusted manufacturers across Asia.
            </p>
            <p className="text-gray-600 mb-4">
              Combining deep industry expertise with smart technology, we deliver tailored sourcing solutions that go beyond transactions — empowering our clients to grow with confidence.
            </p>
          </div>
          <div>
            <div className="rounded-lg overflow-hidden shadow-lg h-[300px]">
              <img
                src="/assets/about-sourcing.png"
                alt="Our Sourcing Story"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mb-8 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-2">Quality</h3>
              <p className="text-gray-600">
                We maintain the highest standards in every aspect of our operations.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-2">Integrity</h3>
              <p className="text-gray-600">
                We operate with complete transparency and ethical business practices.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">
                We constantly evolve to provide cutting-edge sourcing solutions.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="pt-6 text-center">
              <p className="text-gray-600 text-lg leading-relaxed">
                No company is too big or too small for our services. Whether we're collaborating with household names or partnering with grassroots start-ups and neighborhood businesses, the sense of purpose and satisfaction we experience remains the same. We want to be part of your success
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;