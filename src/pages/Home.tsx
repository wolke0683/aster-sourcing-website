// src/pages/Home.tsx
import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/Services";

const Home = () => {
  return (
    <div>
      <Hero />
      <ServicesSection />
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Get in Touch
          </h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Home;