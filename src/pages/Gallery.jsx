import React from 'react';
import { useTranslation } from 'react-i18next';

const Gallery = () => {
  const { t } = useTranslation();
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">{t('gallery')}</h2>
      <p>{t('galleryIntro')}</p>
      {/* Placeholder for future gallery items */}
    </div>
  );
};

export default Gallery;