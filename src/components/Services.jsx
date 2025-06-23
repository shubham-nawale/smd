import { useTranslation } from 'react-i18next';

const services = [
  { title: "मंडप सजावट", img: "/images/service-mandap.jpg" },
  { title: "साऊंड व लाईट्स", img: "/images/service-sound.jpg" },
  { title: "फोटो व व्हिडीओ", img: "/images/service-photo.jpg" },
  { title: "गाद्या, खुर्च्या", img: "/images/service-chairs.jpg" }
];

const Services = () => {
  const { t } = useTranslation();
  return (
    <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Premium Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive decoration solutions to make your wedding
              ceremony truly memorable.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Mandap Decoration */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Traditional%20Indian%20wedding%20mandap%20with%20red%20and%20gold%20decorations%2C%20intricate%20floral%20arrangements%20with%20roses%20and%20marigolds%2C%20elegant%20draping%2C%20and%20soft%20ambient%20lighting.%20The%20mandap%20has%20ornate%20pillars%20and%20a%20beautifully%20decorated%20ceiling%20with%20hanging%20flower%20strings%20against%20a%20neutral%20background&width=600&height=400&seq=service1&orientation=landscape"
                  alt="Mandap Decoration"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-pink-800 mb-2">
                  Mandap Decoration
                </h3>
                <p className="text-gray-600 mb-4">
                  Exquisite mandap designs customized to match your wedding
                  theme and cultural preferences.
                </p>
                <a
                  href="#"
                  className="text-pink-600 font-medium hover:text-pink-700 transition-colors cursor-pointer"
                >
                  Learn More <i className="fas fa-arrow-right ml-1"></i>
                </a>
              </div>
            </div>
            {/* Light Decoration */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Elegant%20wedding%20venue%20lighting%20with%20string%20lights%2C%20chandeliers%2C%20and%20soft%20ambient%20illumination%20creating%20a%20romantic%20atmosphere.%20The%20scene%20features%20warm%20golden%20lights%2C%20subtle%20spotlighting%2C%20and%20decorative%20light%20patterns%20against%20dark%20surroundings%2C%20highlighting%20architectural%20elements%20against%20a%20neutral%20background&width=600&height=400&seq=service2&orientation=landscape"
                  alt="Light Decoration"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-pink-800 mb-2">
                  Light Decoration
                </h3>
                <p className="text-gray-600 mb-4">
                  Create the perfect ambiance with our premium lighting
                  solutions for indoor and outdoor venues.
                </p>
                <a
                  href="#"
                  className="text-pink-600 font-medium hover:text-pink-700 transition-colors cursor-pointer"
                >
                  Learn More <i className="fas fa-arrow-right ml-1"></i>
                </a>
              </div>
            </div>
            {/* Sound System */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Professional%20wedding%20sound%20system%20setup%20with%20speakers%2C%20mixing%20console%2C%20microphones%2C%20and%20DJ%20equipment%20arranged%20elegantly%20at%20a%20wedding%20venue.%20The%20equipment%20is%20modern%20and%20sleek%2C%20with%20subtle%20lighting%20highlighting%20the%20professional%20audio%20gear%20against%20a%20neutral%20background&width=600&height=400&seq=service3&orientation=landscape"
                  alt="Sound System"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-pink-800 mb-2">
                  Sound System Setup
                </h3>
                <p className="text-gray-600 mb-4">
                  High-quality audio equipment for crystal clear sound during
                  ceremonies and celebrations.
                </p>
                <a
                  href="#"
                  className="text-pink-600 font-medium hover:text-pink-700 transition-colors cursor-pointer"
                >
                  Learn More <i className="fas fa-arrow-right ml-1"></i>
                </a>
              </div>
            </div>
            {/* Stage Decoration */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Luxurious%20wedding%20stage%20decoration%20with%20elegant%20floral%20arrangements%2C%20draped%20fabrics%20in%20cream%20and%20gold%2C%20ornate%20furniture%2C%20and%20soft%20ambient%20lighting.%20The%20stage%20features%20a%20beautiful%20backdrop%20with%20intricate%20designs%2C%20plush%20seating%2C%20and%20decorative%20elements%20against%20a%20neutral%20background&width=600&height=400&seq=service4&orientation=landscape"
                  alt="Stage Decoration"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-pink-800 mb-2">
                  Stage Decoration
                </h3>
                <p className="text-gray-600 mb-4">
                  Stunning stage setups for receptions and ceremonies that
                  create perfect photo opportunities.
                </p>
                <a
                  href="#"
                  className="text-pink-600 font-medium hover:text-pink-700 transition-colors cursor-pointer"
                >
                  Learn More <i className="fas fa-arrow-right ml-1"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
  );
};

export default Services;
