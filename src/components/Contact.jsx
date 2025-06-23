import { useTranslation } from 'react-i18next';

const ContactCTA = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-12 bg-gradient-to-br from-yellow-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-pink-700 mb-2">{t('contactTitle')}</h2>
          <p className="text-gray-600 text-sm max-w-xl mx-auto">{t('contactSubtitle')}</p>
        </div>

        {/* 2-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          {/* Contact Info */}
          <div className="bg-white p-6 rounded-lg shadow space-y-4">
            <h3 className="text-xl font-semibold text-pink-800 mb-2">{t('contactInfo')}</h3>

            {/* Address */}
            <div className="flex gap-3 items-start">
              <i className="fas fa-map-marker-alt text-pink-600 mt-1"></i>
              <div>
                <h4 className="font-semibold">{t('address')}</h4>
                <p>{t('addressText')}</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-3 items-start">
              <i className="fas fa-phone-alt text-pink-600 mt-1"></i>
              <div>
                <h4 className="font-semibold">{t('phone')}</h4>
                <p>{t('phone1')}</p>
                <p>{t('phone2')}</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-3 items-start">
              <i className="fas fa-envelope text-pink-600 mt-1"></i>
              <div>
                <h4 className="font-semibold">{t('email')}</h4>
                <p>{t('emailText')}</p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-3 items-start">
              <i className="fas fa-clock text-pink-600 mt-1"></i>
              <div>
                <h4 className="font-semibold">{t('hours')}</h4>
                <p>{t('hours1')}</p>
                <p>{t('hours2')}</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-white p-6 rounded-lg shadow flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-pink-800 mb-2">{t('socialTitle')}</h3>
              <p className="text-gray-600 mb-4">{t('socialSubtitle')}</p>
            </div>
            <div className="flex gap-4">
              {[
                { icon: 'fab fa-facebook-f', link: '#' },
                { icon: 'fab fa-instagram', link: '#' },
                { icon: 'fab fa-youtube', link: '#' },
                { icon: 'fab fa-whatsapp', link: '#' },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.link}
                  className="w-10 h-10 rounded-full bg-pink-600 text-white flex items-center justify-center hover:bg-pink-700 transition"
                >
                  <i className={s.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
