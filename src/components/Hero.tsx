// src/components/Hero.tsx
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-white">
      <div className="overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center py-4 sm:py-6 md:py-8">
          <main className="w-full">
            <div className="max-w-3xl mx-auto space-y-6 text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Your Trusted Partner in</span>
                <span className="block text-primary">Global Sourcing</span>
              </h1>
              <div className="space-y-6">
                <p className="text-base text-gray-500 sm:text-lg sm:max-w-2xl mx-auto md:text-xl">
                  Streamline your supply chain with Aster Sourcing — your gateway to verified manufacturers and high-quality products at competitive prices.
                </p>
                <p className="text-base text-gray-500 sm:text-lg sm:max-w-2xl mx-auto md:text-xl">
                  We specialize in connecting businesses with cost-effective manufacturing hubs across China, Vietnam and other SEA countries. Our multi-industry sourcing services are tailored for fast-moving startups, as well as established retailers and wholesalers, who seek reliable sourcing strategies and quality-assured products from Asia.
                </p>
                <div className="pt-8">
                  <h2 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    More than Sourcing — Your True Partner in Asia
                  </h2>
                </div>
                <p className="text-base text-gray-500 sm:text-lg sm:max-w-2xl mx-auto md:text-xl">
                  At Aster Sourcing, we aim to be more than just a service provider — we strive to be a true partner to our clients. This means going beyond understanding product specifications or quality requirements. We take the time to understand your business as a whole and the key drivers behind your sourcing strategy.
                </p>
                <p className="text-base text-gray-500 sm:text-lg sm:max-w-2xl mx-auto md:text-xl">
                  Context matters. That's why our team works to align closely with your operations, ensuring we're in the best position to meet — and exceed — your sourcing expectations.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <div className="w-full sm:w-[220px]">
                  <Link to="/contact" className="block w-full">
                    <Button size="lg" variant="outline" className="w-full text-primary border-primary hover:bg-primary/10">
                      Start Sourcing Now
                    </Button>
                  </Link>
                </div>
                <div className="w-full sm:w-[220px]">
                  <Link to="/services" className="block w-full">
                    <Button size="lg" variant="outline" className="w-full text-primary border-primary hover:bg-primary/10">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="mt-4 -mx-[calc((100vw-100%)/2)]">
                <div className="relative">
                  <img
                    src="/assets/wideee.png"
                    alt="Sourcing Process"
                    className="w-screen h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] object-cover object-center"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Hero;