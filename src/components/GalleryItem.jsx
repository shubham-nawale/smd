import { useTranslation } from 'react-i18next';

const Gallery = () => {
  const { t } = useTranslation();
  const images = [
    '/images/gallery1.jpg',
    '/images/gallery2.jpg',
    '/images/gallery3.jpg',
    '/images/gallery4.jpg'
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Decoration Gallery
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse through our portfolio of beautiful mandap decorations and
              setups from previous events.
            </p>
          </div>
          {/* Gallery Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="px-6 py-2 bg-pink-600 text-white rounded-md shadow-md !rounded-button whitespace-nowrap cursor-pointer">
              All Designs
            </button>
            <button className="px-6 py-2 bg-white text-gray-700 border border-gray-300 rounded-md shadow-md hover:bg-gray-50 !rounded-button whitespace-nowrap cursor-pointer">
              Traditional Mandaps
            </button>
            <button className="px-6 py-2 bg-white text-gray-700 border border-gray-300 rounded-md shadow-md hover:bg-gray-50 !rounded-button whitespace-nowrap cursor-pointer">
              Modern Designs
            </button>
            <button className="px-6 py-2 bg-white text-gray-700 border border-gray-300 rounded-md shadow-md hover:bg-gray-50 !rounded-button whitespace-nowrap cursor-pointer">
              Lighting Setups
            </button>
            <button className="px-6 py-2 bg-white text-gray-700 border border-gray-300 rounded-md shadow-md hover:bg-gray-50 !rounded-button whitespace-nowrap cursor-pointer">
              Venue Decorations
            </button>
          </div>
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Gallery Item 1 */}
            <div className="rounded-lg overflow-hidden shadow-lg cursor-pointer">
              <img
                src="https://readdy.ai/api/search-image?query=Traditional%20Indian%20wedding%20mandap%20with%20red%20and%20gold%20silk%20drapes%2C%20ornate%20pillars%20decorated%20with%20marigolds%20and%20roses%2C%20intricate%20wooden%20carvings%2C%20and%20traditional%20brass%20lamps.%20The%20mandap%20has%20a%20beautiful%20ceiling%20with%20hanging%20flower%20strings%20and%20kaliras%20against%20a%20neutral%20background&width=600&height=400&seq=gallery1&orientation=landscape"
                alt="Traditional Mandap"
                className="w-full h-64 object-cover object-top"
              />
              <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold text-pink-800">
                  Traditional Red & Gold Mandap
                </h3>
                <p className="text-gray-600 text-sm">
                  Traditional design with marigold and rose decorations
                </p>
              </div>
            </div>
            {/* Gallery Item 2 */}
            <div className="rounded-lg overflow-hidden shadow-lg cursor-pointer">
              <img
                src="https://readdy.ai/api/search-image?query=Modern%20minimalist%20wedding%20mandap%20with%20white%20and%20pastel%20pink%20flowers%2C%20transparent%20acrylic%20pillars%2C%20geometric%20design%20elements%2C%20and%20subtle%20fairy%20lights.%20The%20mandap%20features%20clean%20lines%2C%20contemporary%20styling%2C%20and%20an%20airy%2C%20elegant%20aesthetic%20against%20a%20neutral%20background&width=600&height=400&seq=gallery2&orientation=landscape"
                alt="Modern Mandap"
                className="w-full h-64 object-cover object-top"
              />
              <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold text-pink-800">
                  Contemporary White Mandap
                </h3>
                <p className="text-gray-600 text-sm">
                  Modern design with pastel floral arrangements
                </p>
              </div>
            </div>
            {/* Gallery Item 3 */}
            <div className="rounded-lg overflow-hidden shadow-lg cursor-pointer">
              <img
                src="https://readdy.ai/api/search-image?query=Luxurious%20wedding%20venue%20with%20elaborate%20ceiling%20lighting%20installation%20featuring%20crystal%20chandeliers%2C%20string%20lights%2C%20and%20LED%20accent%20lighting.%20The%20venue%20has%20a%20magical%20ambiance%20with%20warm%20golden%20lights%20illuminating%20elegant%20decor%20elements%20against%20a%20neutral%20background&width=600&height=400&seq=gallery3&orientation=landscape"
                alt="Lighting Setup"
                className="w-full h-64 object-cover object-top"
              />
              <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold text-pink-800">
                  Elegant Lighting Design
                </h3>
                <p className="text-gray-600 text-sm">
                  Crystal chandeliers and string light installation
                </p>
              </div>
            </div>
            {/* Gallery Item 4 */}
            <div className="rounded-lg overflow-hidden shadow-lg cursor-pointer">
              <img
                src="https://readdy.ai/api/search-image?query=Outdoor%20garden%20wedding%20mandap%20with%20natural%20greenery%2C%20white%20orchids%2C%20and%20soft%20pink%20roses.%20The%20mandap%20is%20set%20against%20a%20scenic%20backdrop%20with%20flowing%20white%20drapes%2C%20wooden%20elements%2C%20and%20subtle%20fairy%20lights%20creating%20a%20romantic%20atmosphere%20against%20a%20neutral%20background&width=600&height=400&seq=gallery4&orientation=landscape"
                alt="Garden Mandap"
                className="w-full h-64 object-cover object-top"
              />
              <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold text-pink-800">
                  Garden Mandap Setup
                </h3>
                <p className="text-gray-600 text-sm">
                  Outdoor setting with natural greenery and flowers
                </p>
              </div>
            </div>
            {/* Gallery Item 5 */}
            <div className="rounded-lg overflow-hidden shadow-lg cursor-pointer">
              <img
                src="https://readdy.ai/api/search-image?query=Royal%20purple%20and%20gold%20wedding%20mandap%20with%20lavish%20fabric%20draping%2C%20ornate%20gold%20pillars%2C%20and%20rich%20purple%20orchids%20and%20roses.%20The%20mandap%20features%20intricate%20gold%20embellishments%2C%20hanging%20crystal%20elements%2C%20and%20sophisticated%20lighting%20against%20a%20neutral%20background&width=600&height=400&seq=gallery5&orientation=landscape"
                alt="Royal Mandap"
                className="w-full h-64 object-cover object-top"
              />
              <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold text-pink-800">
                  Royal Purple Mandap
                </h3>
                <p className="text-gray-600 text-sm">
                  Luxurious design with gold accents and purple flowers
                </p>
              </div>
            </div>
            {/* Gallery Item 6 */}
            <div className="rounded-lg overflow-hidden shadow-lg cursor-pointer">
              <img
                src="https://readdy.ai/api/search-image?query=Complete%20wedding%20venue%20decoration%20with%20coordinated%20mandap%2C%20stage%2C%20aisle%2C%20and%20guest%20seating%20areas.%20The%20venue%20features%20cohesive%20color%20scheme%2C%20floral%20arrangements%2C%20fabric%20draping%2C%20and%20lighting%20that%20transforms%20the%20entire%20space%20into%20an%20elegant%20wedding%20setting%20against%20a%20neutral%20background&width=600&height=400&seq=gallery6&orientation=landscape"
                alt="Complete Venue"
                className="w-full h-64 object-cover object-top"
              />
              <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold text-pink-800">
                  Complete Venue Transformation
                </h3>
                <p className="text-gray-600 text-sm">
                  Coordinated decoration for the entire wedding venue
                </p>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <a
              href="https://readdy.ai/home/70839f30-9114-487e-be63-786ecc016e49/2a5a7b6d-11a3-42ca-91b2-46cfabe94e19"
              data-readdy="true"
            >
              <button className="px-8 py-3 bg-pink-600 text-white rounded-md shadow-md hover:bg-pink-700 transition-colors !rounded-button whitespace-nowrap cursor-pointer">
                View All Gallery
              </button>
            </a>
          </div>
        </div>
      </section>
     
  );
};

export default Gallery;
