import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="pt-20 relative min-h-[600px] flex items-center"
      style={{
        backgroundImage: `url('/images/Hero.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-pink-800 mb-4">
            {t("heroTitle")}
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            {t("heroSubtitle")}
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-pink-600 text-white px-8 py-3 rounded-md shadow-lg hover:bg-pink-700 transition-colors text-lg !rounded-button whitespace-nowrap cursor-pointer">
              {t("heroBtnBook")}
            </button>
            <button className="bg-white text-pink-600 border border-pink-600 px-8 py-3 rounded-md shadow-lg hover:bg-pink-50 transition-colors text-lg !rounded-button whitespace-nowrap cursor-pointer">
              {t("heroBtnGallery")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
