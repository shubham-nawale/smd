import Slider from 'react-slick';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import WhatsappButton from '../components/WhatsAppButton';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Gallery from '../components/GalleryItem';

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
      {/* Hero Section with slider */}
      <Hero />
      <Services/>
      <Gallery/>
      <Contact />
      <WhatsappButton />
    </div>
  );
};

export default Home;
