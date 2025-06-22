import React from 'react';
import { useTranslation } from 'react-i18next';

const AdminPanel = () => {
  const { t } = useTranslation();
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">{t('adminPanel')}</h2>
      <p>{t('adminIntro')}</p>
      {/* Future upload and management functionality */}
    </div>
  );
};

export default AdminPanel;
