// src/components/Hero.tsx
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-white">
      <div className="overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center min-h-screen py-16 sm:py-20 md:py-24 lg:py-28">
          <main className="w-full py-8">
            <div className="max-w-3xl mx-auto space-y-10 text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Your Trusted Partner in</span>
                <span className="block text-primary">Global Sourcing</span>
              </h1>
              <p className="text-base text-gray-500 sm:text-lg sm:max-w-2xl mx-auto md:text-xl">
                Streamline your supply chain with Aster Sourcing. We connect you
                with verified manufacturers and ensure quality products at
                competitive prices.
              </p>
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
              <div className="mt-16 -mx-[calc((100vw-100%)/2)]">
                <div className="relative">
                  <img
                    src="/assets/wideee.png"
                    alt="Sourcing Process"
                    className="w-screen h-[400px] md:h-[450px] lg:h-[500px] xl:h-[550px] object-cover object-center"
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