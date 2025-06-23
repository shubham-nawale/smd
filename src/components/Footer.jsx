import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-gray-800 text-white py-4 text-center text-sm">
      {t('footerText')}
    </footer>
  );
};

export default Footer;
