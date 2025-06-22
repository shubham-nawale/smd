import React from 'react';
import { useTranslation } from 'react-i18next';

const Offers = () => {
  const { t } = useTranslation();
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">{t('offers')}</h2>
      <p>{t('offersIntro')}</p>
      {/* Placeholder for future ads/offers */}
    </div>
  );
};

export default Offers;