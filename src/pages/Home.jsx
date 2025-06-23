import Slider from 'react-slick';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import WhatsappButton from '../components/WhatsAppButton';
import Contact from '../components/Contact';
const Home = () => {
  const { t } = useTranslation();

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    arrows: false
  };

  return (
    <div className="bg-gradient-to-br from-yellow-50 to-pink-50 min-h-screen font-marathi">
      <Header />

      {/* Hero Section with slider */}
      <section className="relative px-4 py-12 bg-white">
        <h2 className="text-center text-3xl font-bold text-pink-700 mb-6">
          {t('highlightTitle')}
        </h2>
        <div className="max-w-2xl mx-auto rounded overflow-hidden shadow-md">
          <Slider {...sliderSettings}>
            <div>
              <img src="/images/img1.jpg" alt="Slide 1" className="w-full object-cover rounded" />
            </div>
            <div>
              <img src="/images/img2.jpg" alt="Slide 2" className="w-full object-cover rounded" />
            </div>
            <div>
              <img src="/images/img3.jpg" alt="Slide 3" className="w-full object-cover rounded" />
            </div>
            <div>
              <img src="/images/img4.jpg" alt="Slide 4" className="w-full object-cover rounded" />
            </div>
          </Slider>
        </div>
        <div className="text-center mt-6">
          <Link to="/gallery" className="inline-block px-5 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition">
            {t('seeMore')}
          </Link>
        </div>
      </section>
      <Contact />
      <WhatsappButton />
    </div>
  );
};

export default Home;
