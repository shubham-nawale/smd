import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  return (
    <section className="py-12 bg-white px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-semibold text-pink-700 mb-4">{t('aboutTitle')}</h2>
      <p className="max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed">{t('aboutContent')}</p>
    </section>
  );
};

export default About;
