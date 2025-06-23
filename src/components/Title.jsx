import { useTranslation } from 'react-i18next';

function Title(){
    const { t } = useTranslation();
    return(
        <div >
            <h2 className="text-center text-3xl font-bold text-pink-700 mb-6">
                {t('highlightTitle')}
            </h2>
        </div>
    )
}

export default Title;