import { useTranslation } from 'react-i18next';

function Contact(){
    const { t } = useTranslation();
    return(
        <div>
        <section className="py-12 bg-pink-50 text-center text-gray-800">
            <h2 className="text-2xl font-bold mb-2">{t('contactUs')}</h2>
            <p className="text-lg mb-1">📞 9822784263 | 9284069932 | 9172234826</p>
            <p className="text-lg">📍 {t('addressLine')}</p>
        </section>
        </div>
    )
}

export default Contact;